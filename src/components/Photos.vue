<template>
    <div >
        
<!--
<waterfall :line-gap="200" :watch="sets">
  <!-- each component is wrapped by a waterfall slot 
  <waterfall-slot
    v-for="(item, index) in sets"
    :width="310"
    :height="310"
    :order="index"
    :key="item.name"
  >
    <a :href="'/photos/' + item.url" rel="external" >
      <img :src="item.thumbnail" height="310" width="310"/>
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }} </p>
      <p class="ui-li-aside">{{ item.count }} pics</p>
    </a>
    
  </waterfall-slot>
</waterfall>
-->
    
    </div>
</template>

<script type="text/javascript">
  import axios from 'axios';

  export default {
    data() {
      return {
        sets: [],
      };
    },
    mounted() {
      this.getSets();
    },
    methods: {
      getSets() {
        const self = this;
        axios.get(`${process.env.API_URL}/pictureSets?sort=sequence&size=300`)
        .then((response) => {
          self.sets = response.data.content;
        });
      },
    },
  };

</script>

<style type="text/css">
  

</style>