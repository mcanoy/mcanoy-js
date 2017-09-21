<template>
    <div >
      <div class="container">
        <ul class="list-unstyled set-list-thumbs row">
          <li class="col-lg-3 col-md-3 col-sm-4 col-xs-12" v-for="(set, i) in sets">
            <router-link :to="'/photos/' + setNamePlus(set)" :title="set.description">
              <img :src="set.thumbnail + '_m.jpg'" :alt="set.name" class="img-responsive" height="310px" />
              <h2>{{ set.name }}</h2>
              <span class="duration">{{ set.count}} pics</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>  
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
      setNamePlus(input) {
        return input.name.replace(/ /g, '+');
      },
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
  .carousel .item {
  height: 300px;
}

.set-list-thumbs{}
.set-list-thumbs > li{
    margin-bottom:12px;
}
.set-list-thumbs > li:last-child{}
.set-list-thumbs > li > a{
  display:block;
  position:relative;
  background-color: #530100;
  color: #fff;
  padding: 8px;
  border-radius:3px;
    transition:all 500ms ease-in-out;
    border-radius:4px
}
.set-list-thumbs > li > a:hover{
  box-shadow:0 2px 5px rgba(0,0,0,.3);
  text-decoration:none
}
.set-list-thumbs h2{
  bottom: 0;
  font-size: 14px;
  height: 15px;
  margin: 8px 0 0;
}
.set-list-thumbs .glyphicon-play-circle{
    font-size: 60px;
    opacity: 0.6;
    position: absolute;
    right: 39%;
    top: 31%;
    text-shadow: 0 1px 3px rgba(0,0,0,.5);
    transition:all 500ms ease-in-out;
}
.set-list-thumbs > li > a:hover .glyphicon-play-circle{
  color:#fff;
  opacity:1;
  text-shadow:0 1px 3px rgba(0,0,0,.8);
}
.set-list-thumbs .duration{
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  left: 12px;
  line-height: 13px;
  padding: 2px 3px 1px;
  position: absolute;
  top: 12px;
    transition:all 500ms ease;
}
.set-list-thumbs > li > a:hover .duration{
  background-color:#000;
}
@media (min-width:320px) and (max-width: 480px) { 
  .set-list-thumbs .glyphicon-play-circle{
    font-size: 35px;
    right: 36%;
    top: 27%;
  }
  .set-list-thumbs h2{
    bottom: 0;
    font-size: 12px;
    height: 22px;
    margin: 8px 0 0;
  }
}

</style>