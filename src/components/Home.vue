<template>
    <div>
        

      <!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide" :src="contentList[0].thumbnail" alt="First slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>{{ contentList[0].name }}</h1>
              <p>{{ contentList[0].description }}</p>
              <p><router-link :to="'/photos/' + setNamePlus(contentList[0])" role="button" class="btn btn-lg btn-primary">View Gallery</router-link></p>
            </div>
          </div>
        </div>
        <div class="item">

          <img class="second-slide" :src="contentList[1].thumbnail" alt="Second slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>{{ contentList[1].name }}</h1>
              <p>{{ contentList[1].description }}</p>
              <p><router-link :to="'/photos/' + setNamePlus(contentList[1])" role="button" class="btn btn-lg btn-primary">View Gallery</router-link></p>
            </div>
          </div>
        </div>
        <div class="item">
          <img class="third-slide" :src="contentList[2].thumbnail" alt="Third slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>{{ contentList[2].name }}</h1>
              <p>{{ contentList[2].description }}</p>
              <p><router-link :to="'/photos/' + setNamePlus(contentList[2])" role="button" class="btn btn-lg btn-primary">View Gallery</router-link></p>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div><!-- /.carousel -->


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">

          <img class="img-circle" :src="'https://maps.googleapis.com/maps/api/staticmap?zoom=11&size=140x140&markers=color:blue%7Clabel:' + firstLetter(placesList[0].name) + '%7C' + placesList[0].latitude + ',' + placesList[0].longitude + '&key=' + api_key" width="140" height="140">
          <h2>{{ placesList[0].name }}</h2>
          <p>{{ placesList[0].description }}</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="img-circle" :src="'https://maps.googleapis.com/maps/api/staticmap?zoom=11&size=140x140&markers=color:blue%7Clabel:' + firstLetter(placesList[1].name) + '%7C' + placesList[1].latitude + ',' + placesList[1].longitude + '&key=' + api_key" width="140" height="140">
          <h2>{{ placesList[1].name }}</h2>
          <p>{{ placesList[1].description }}</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img class="img-circle" :src="'https://maps.googleapis.com/maps/api/staticmap?zoom=11&size=140x140&markers=color:blue%7Clabel:' + firstLetter(placesList[2].name) + '%7C' + placesList[2].latitude + ',' + placesList[2].longitude + '&key=' + api_key" width="140" height="140">
          <h2>{{ placesList[2].name }}</h2>
          <p>{{ placesList[2].description }}</p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->


      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">{{ postsList[0].title }} <span class="text-muted"></span></h2>
          <p class="lead">{{ postsList[0].content }} ...</p>
          <p><a class="btn btn-default" href="https://blog.openshift.com/7-habits-highly-effective-devops/" role="button">Read More &raquo;</a></p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" src="https://blog.openshift.com/wp-content/uploads/DevOps-Covey-768x576.png" alt="First slide">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">{{ postsList[1].title }} <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">{{ postsList[1].content }} ...</p>
          <p><a class="btn btn-default" href="#" role="button">Read More &raquo;</a></p>
        </div>
        <div class="col-md-5 col-md-pull-7">
          <img class="featurette-image img-responsive center-block" src="https://kubernetes.io/images/favicon.png" alt="First slide">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">{{ postsList[2].title }} <span class="text-muted"></span></h2>
          <p class="lead">{{ postsList[2].content }} ...</p>
          <p><a class="btn btn-default" href="#" role="button">Read More &raquo;</a></p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive center-block" :src="contentList[0].thumbnail" alt="First slide">
        </div>
      </div>

      <hr class="featurette-divider">

      <!-- /END THE FEATURETTES -->

    </div><!-- /.container -->
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        contentList: [{ name: '', thumbnail: '', description: '' }, { name: '', thumbnail: '', description: '' }, { name: '', thumbnail: '', description: '' }],
        placesList: [{ name: '', description: '', latitude: '', longitude: '' }, { name: '', description: '', latitude: '', longitude: '' }, { name: '', description: '', latitude: '', longitude: '' }],
        postsList: [{ title: '', content: '', url: '' }, { title: '', content: '', url: '' }, { title: '', content: '', url: '' }],
        api_key: `${process.env.MAP_KEY}`,
      };
    },
    mounted() {
      this.getSets();
      this.getPlaces();
      this.getBlogPosts();
    },
    methods: {
      firstLetter(input) {
        return input.substring(0, 1);
      },
      setNamePlus(input) {
        return input.name.replace(/ /g, '+');
      },
      getSets() {
        const self = this;
        axios.get(`${process.env.API_URL}/pictureSets?sort=id,desc&size=3`)
        .then((response) => {
          self.contentList = response.data.content;
        });
      },
      getPlaces() {
        const self = this;
        axios.get(`${process.env.API_URL}/places?sort=id,desc&size=3`)
        .then((response) => {
          self.placesList = response.data.content;
        });
      },
      getBlogPosts() {
        const self = this;
        axios.get(`${process.env.API_URL}/blogs`)
        .then((response) => {
          self.postsList = response.data;
        });
      },
    },
  };
</script>

<style>



/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  height: 500px;
  margin-bottom: 60px;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  z-index: 10;
}

.carousel-thumb {
  float: left;
}

/* Declare heights because of positioning of img element */
.carousel .item {
  height: 500px;
  background-color: #777;
}
.carousel-inner > .item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 500px;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 20px;
  text-align: center;
}
.marketing h2 {
  font-weight: normal;
}
.marketing .col-lg-4 p {
  margin-right: 10px;
  margin-left: 10px;
}


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 80px 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -1px;
}


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 768px) {

  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 20px;
    font-size: 21px;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 992px) {
  .featurette-heading {
    margin-top: 120px;
  }
}
</style>