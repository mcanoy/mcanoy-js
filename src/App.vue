<template>
  <div id="app">
    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">McAnoy.com</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li v-bind:class="{ active: activeClass === '/' }"><router-link v-bind:to="'/'" >Home</router-link></li>
                <li v-bind:class="{ active: activeClass === '/places' }"><router-link v-bind:to="'/places'">Places</router-link></li>
                <li v-bind:class="{ active: activeClass === '/photos' }"><router-link v-bind:to="'/photos'">Photos</router-link></li>
                <li><a href="http://mcanoy.github.io">Tech Things</a></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>


    <nav>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeClass: '/',
    };
  },
  watch: {
    $route(to) {
      const self = this;
      if (to.path.startsWith('/photos')) {
        self.activeClass = '/photos';
      } else {
        self.activeClass = to.path;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  padding-bottom: 40px;
  color: #5a5a5a;
}

/* CUSTOMIZE THE NAVBAR
-------------------------------------------------- */

/* Special class on .container surrounding .navbar, used for positioning it into place. */
.navbar-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
}

/* Flip around the padding for proper display in narrow viewports */
.navbar-wrapper > .container {
  padding-right: 0;
  padding-left: 0;
}
.navbar-wrapper .navbar {
  padding-right: 15px;
  padding-left: 15px;
}
.navbar-wrapper .navbar .container {
  width: auto;
}



/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 768px) {
  /* Navbar positioning foo */
  .navbar-wrapper {
    margin-top: 20px;
  }
  .navbar-wrapper .container {
    padding-right: 15px;
    padding-left: 15px;
  }
  .navbar-wrapper .navbar {
    padding-right: 0;
    padding-left: 0;
  }

  /* The navbar becomes detached from the top, so we round the corners */
  .navbar-wrapper .navbar {
    border-radius: 4px;
  }

}

</style>
