<template>
  <div id="root">
   <!-- <google-map :center="center" :zoom="7" style="width: 100%; height: 500px">
      <google-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></google-marker>
    </google-map> -->

    <gmap-map style="width: 100%; height: 100%; position: absolute; left:0; top:0"
        :center="{lat: 34.090698, lng: -118.38600}"
        :zoom="12">
      <gmap-cluster>
        <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" :content="infoContent" @closeclick="infoWinOpen=false"></gmap-info-window>

        <gmap-marker v-for="(m,i) in markers" :key="m.id" :label="firstLetter(m)" :position="{lat: m.latitude, lng: m.longitude}" :clickable="true" :draggable="false" @click="toggleInfoWindow(m,i)" :icon="getIcon(m)"></gmap-marker>
      </gmap-cluster>
    </gmap-map>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        infoContent: 'blah',
        infoWinOpen: false,
        infoWindowPos: {
          lat: 34.090698,
          lng: -118.38600,
        },
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35,
          },
          content: 'ffffff',
        },
        center: {
          lat: 40.7570262523253,
          lng: -73.9853024482727,
        },
        markers: [],
      };
    },
    mounted() {
      const self = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          self.infoWindowPos = { lat, lng };
        });
      }
      this.getPlaces();
    },
    methods: {
      firstLetter(marker) {
        return marker.rating === 1 ? '' : marker.name.substring(0, 1);
      },
      getIcon(marker) {
        return marker.rating === 1 ? '/static/images/black_star.png' : '';
      },
      getPlaces() {
        const self = this;
        axios.get(`${process.env.API_URL}/places?sort=id,desc&size=500`)
        .then((response) => {
          self.markers = response.data.content;
        });
      },
      toggleInfoWindow(marker, idx) {
        const self = this;
        self.infoWindowPos = { lat: marker.latitude, lng: marker.longitude };
        const placeName = marker.url === '' ? marker.name : `<a href='${marker.url}' target='_blank'>${marker.name}</a>`;
        const placeIcon = marker.icon === '' ? '' : `<p><img src='${marker.icon}' style='float:left;padding:3px'/><p>`;
        self.infoContent = `<p>${placeName}</p>${placeIcon}<p>${marker.description}</p>`;
        self.infoOptions.content = self.infoContent;

        // check if its the same marker that was selected if yes toggle
        if (self.currentMidx === idx) {
          self.infoWinOpen = !self.infoWinOpen;
        } else {
          // if different marker set infowindow to open and reset current marker index
          self.infoWinOpen = true;
          self.currentMidx = idx;
        }
      },
    },
  };

</script>