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
              <a class="navbar-brand" href="#">CalDOJ.gov.ca</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><router-link v-bind:to="'/'">Home</router-link></li>
                <li><router-link v-bind:to="'/about'">About</router-link></li>
                <li><router-link v-bind:to="'/carousel'">Demo</router-link></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><router-link v-bind:to="'/todo-list'">Todo List</router-link></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
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

#mctoplevel {
  margin: 0;
  padding: 0;
  background: #FFFFFF url(assets/css01.jpg) repeat-x;
}

#mcheader {
    height: 180px;
    margin: 0 auto;
    background: url(assets/css02.gif) no-repeat center;
    background-color: #530100;
}

#mcheader h1 a, #header h2 a {
    text-transform: lowercase;
    color: #FFFFFF;
    text-decoration: none;
}

#mcmenu {
    width: 760px;
    height: 50px;
    margin: 0 auto;
}

#mcmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#mcmenu li {
    display: inline;
}

#mcmenu a {
    display: block;
    float: left;
    padding: 17px 20px 0 20px;
    background: url(assets/css03.gif) no-repeat;
    text-transform: uppercase;
    text-decoration: none;
    font: bold 12px Arial, Helvetica, sans-serif;
    color: #D8D8D8;
}

#mcmenu a:hover {
    color: #FFFFFF;
}

#mcmenu .first a {
    background: none;
}

</style>
