<template>
    <div class="flexbin flexbin-margin" >
        
          
          <div id="image-container" v-for="image in imageItems">
                <img :src="image.urlSmall"/>
        </div>
    
    </div>
</template>

<script type="text/javascript">
  import axios from 'axios';

  export default {
    data() {
      return {
        imageItems: [
        ],
        aspectRatios: [],
      };
    },
    mounted() {
      this.getPictureSet();
    },
    methods: {
      getPictureSet() {
        const self = this;
        axios.get(`${process.env.API_URL}/pictures/search/pictureSetId?set=82`)
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