<template>
  <div @click.stop>
    <img v-if="!loading" :src="image" class="lightbox__image" :style="style">
    <div v-if="loading" class="lightbox__loading">
      <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      image: String,
    },
    data() {
      return {
        loading: true,
        src: false,
        style: {},
      };
    },
    methods: {
      resizeImage(image) {
        let width = image.width;
        let height = image.height;

        if (width > window.innerWidth || height > window.innerHeight) {
          const ratio = width / height;
          const windowRatio = window.innerWidth / window.innerHeight;
          if (ratio > windowRatio) {
            width = window.innerWidth;
            height = width / ratio;
          } else {
            height = window.innerHeight;
            width = height * ratio;
          }
        }

        this.style = {
          width: `${width}px`,
          height: `${height}px`,
          top: `${((window.innerHeight - height) * 0.5)}px`,
          left: `${((window.innerWidth - width) * 0.5)}px`,
        };
      },
    },
    mounted() {
      const image = new window.Image();

      image.onload = () => {
        this.loading = false;
        this.src = this.image;
        this.resizeImage(image);
      };
      image.src = this.image;

      this.resizeEvent = () => {
        this.resizeImage(image);
      };

      window.addEventListener('resize', this.resizeEvent);
    },
    destroyed() {
      window.removeEventListener('resize', this.resizeEvent);
    },

  };
</script>