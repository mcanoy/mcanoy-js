<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <h1></h1><h1></h1>
        <h1>{{ setDetails.name }}<small>{{ setDetails.description }}</small></h1>
        <div class="flexbin flexbin-margin" >
            <a :href="image.urlLarge" v-lightbox v-for="image in imageItems">
              <img :src="image.urlSmall"/>
            </a>
        </div>
      </div>
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
        setDetails: {},
      };
    },
    mounted() {
      this.getPictureSetPictures(this.$route.params.name);
      this.getPictureSetDetails(this.$route.params.name);
    },
    beforeRouteUpdate(to) {
      this.getPictureSetPictures(to.params.name);
      this.getPictureSetDetails(to.params.name);
    },
    methods: {
      getPictureSetDetails(url) {
        const self = this;
        axios.get(`${process.env.API_URL}/pictureSets/search/name?name=${url}&status=1`)
        .then((response) => {
          self.setDetails = response.data;
        });
      },
      getPictureSetPictures(url) {
        const self = this;
        store.close();
        axios.get(`${process.env.API_URL}/pictures/search/name?name=${url}&status=1`)
        .then((response) => {
          self.imageItems = response.data.content;
        });
      },
    },
  };

</script>

<style>

.page-header {
  color: #530100;
}

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