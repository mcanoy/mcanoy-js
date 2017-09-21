<template>


<div class="container outerpadding">
  <div class="row">

    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12" v-for="(set, i) in sets">
      <div class="panel">
      <router-link :to="'/photos/' + setNamePlus(set)" :title="set.description">
        <div class="panel-heading" style="background-color:#530100;color:#fff;"><strong>{{ set.name }} </strong></div>
        <div class="panel-body" style="background-color:#000;color:#fff; box-shadow:0 -12px 13px #530100 inset;">
        
        <div class="boximg">
          <img :src="set.boxThumbnail" class="img-responsive">
          <span class="label label-danger date">{{ formatDate(set.displayDate) }}</span>
          <span class="likebut glyphicon glyphicon-tag"></span>
        </div>
         
        <br>
        <p class="pull-left">{{ maxChars(set.description, 22) }} </p>
     
        <span class="badge pull-right" style="background-color:#530100">{{ set.count }}</span>
      </div>
      </router-link>
     </div>
  </div>
</div>
</div>
    
</template>

<script type="text/javascript">
  import axios from 'axios';
  import moment from 'moment';

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
      formatDate(date) {
        return moment(date).format('MMM Do YY');
      },
      maxChars(text, length) {
        let modString = text;
        const maxLength = length - 2;
        if (!text) {
          modString = 'n/a';
        }
        return modString.length < length ? modString : `${modString.substring(0, maxLength)}...`;

        // const maxLength = length - 2;
        // return text && text.length < length ? text : `${text.substring(0, maxLength)}...`;
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
.outerpadding{
    padding:10% 0%;}
.boximg{
  position:relative;
  overflow:hidden;
  }
  
.boximg img{
    transition:all ease-in 500ms;
    border:1px solid #fff;
  } 
.boximg img:hover{
  transform:scale(1.3,1.3);
  cursor:pointer;
  
  } 
  
.boximg:hover{
  border:1px solid #fff;
  } 
  
.date{
   left: 0;
    position: absolute;
    top: 15px;
  padding:5px;
  background-color:#530100;
  opacity:0;
  transition:all ease-in 300ms;
  
  } 
  
.likebut{
    background: none repeat scroll 0 0 #530100;
    height: 25px;
    padding: 7px;
    position: absolute;
    right: 5px;
    top: 130px;
    width: 25px;
  opacity:0.4;
  transition:all ease-in 300ms;
  }
  
  
.boximg:hover .date{
  opacity:1;
  
  } 
.boximg:hover .likebut{
  opacity:1;
  
}

</style>