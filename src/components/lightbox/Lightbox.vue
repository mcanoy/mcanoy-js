<template>
  <div>
    <div class="lightbox" v-if="image" @click="close">
      <transition :name="transition">
        <lightbox-image :image="image" :key="image"></lightbox-image>
      </transition>
      <div class="lightbox__close" @click="close"><i class="fa fa-close fa-3x"></i></div>
      <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"><i class="fa fa-arrow-right fa-3x"></i></div>
      <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"><i class="fa fa-arrow-left fa-3x"></i></div>
    </div>
  </div>
</template>

<script>
  import './LightboxDirective';
  import store from './LightboxStore';

  export default {
    data() {
      return {
        state: store.state,
        direction: 'next',
      };
    },
    methods: {
      close() {
        store.close();
      },
      next() {
        this.direction = 'next';
        store.next();
      },
      prev() {
        this.direction = 'prev';
        store.prev();
      },
    },
    computed: {
      image() {
        if (this.state.index) {
          return this.state.images[this.state.index];
        }

        return false;
      },
      transition() {
        return `lightbox-${this.direction}`;
      },
    },
  };
</script>

<style type="text/css" src="./lightbox.css"></style>