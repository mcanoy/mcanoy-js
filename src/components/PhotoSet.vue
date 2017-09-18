<template>
  <div>
    <div class="flexbin flexbin-margin" >
            <a :href="image.urlLarge" v-lightbox v-for="image in imageItems">
              <img :src="image.urlSmall"/>
            </a>
    </div>
    <lightbox></lightbox>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  import Lightbox from './lightbox/Lightbox';
  import store from './lightbox/LightboxStore';

  export default {
    components: {
      Lightbox,
    },
    data() {
      return {
        imageItems: [],
        aspectRatios: [],
      };
    },
    mounted() {
      this.getPictureSet(this.$route.params.name);
    },
    beforeRouteUpdate(to) {
      this.getPictureSet(to.params.name);
    },
    methods: {
      getPictureSet(url) {
        const self = this;
        store.close();
        axios.get(`${process.env.API_URL}/pictures/search/name?name=${url}`)
        .then((response) => {
          self.imageItems = response.data.content;
          self.aspectRatios = [self.imageItems.length];
          for (let i = 0; i < self.imageItems.length; i += 1) {
            self.aspectRatios[i] = self.imageItems[i].ratio;
          }
        });
      },
    },
  };

</script>

<style>
.flexbin {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  margin: -2.5px;
}
.flexbin:after {
  content: '';
  flex-grow: 999999999;
  min-width: 180px;
  height: 0;
}
.flexbin > * {
  position: relative;
  display: block;
  height: 180px;
  margin: 2.5px;
  flex-grow: 1;
}
.flexbin > * > img {
  height: 180px;
  object-fit: cover;
  max-width: 100%;
  min-width: 100%;
  vertical-align: bottom;
}
.flexbin.flexbin-margin {
  margin: 2.5px;
}
@media (max-width: 980px) {
  .flexbin {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    margin: -2.5px;
  }
  .flexbin:after {
    content: '';
    flex-grow: 999999999;
    min-width: 150px;
    height: 0;
  }
  .flexbin > * {
    position: relative;
    display: block;
    height: 150px;
    margin: 2.5px;
    flex-grow: 1;
  }
  .flexbin > * > img {
    height: 150px;
    object-fit: cover;
    max-width: 100%;
    min-width: 100%;
    vertical-align: bottom;
  }
  .flexbin.flexbin-margin {
    margin: 2.5px;
  }
}
@media (max-width: 400px) {
  .flexbin {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    margin: -2.5px;
  }
  .flexbin:after {
    content: '';
    flex-grow: 999999999;
    min-width: 100px;
    height: 0;
  }
  .flexbin > * {
    position: relative;
    display: block;
    height: 100px;
    margin: 2.5px;
    flex-grow: 1;
  }
  .flexbin > * > img {
    height: 100px;
    object-fit: cover;
    max-width: 100%;
    min-width: 100%;
    vertical-align: bottom;
  }
  .flexbin.flexbin-margin {
    margin: 2.5px;
  }
}

</style>