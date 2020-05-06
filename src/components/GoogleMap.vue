<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="17"
      ref="mapRef"
      class="fullmap"
      v-bind:style="{ height: height + 'vh' }"
    >
      <gmap-marker
        v-for="(mark, index) in segmentedMarkers"
        :key="index"
        :position="mark"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 0, lng: 0 },
      currentPlace: null,
      segmentedMarkers: [],
      index: 0,
      mapInterval: ""
    };
  },

  computed: {
    ...mapState(["samples", "done"])
  },

  methods: {
    addMaker(markers) {
      console.log("updating map");
      try {
        this.segmentedMarkers.push(markers[this.index]);
        this.index++;
        this.$refs.mapRef.$mapPromise.then(map => {
          map.panTo(markers[this.index]);
        });
      } catch (error) {
        console.log("finished");
        clearInterval(this.mapInterval);
      }
    }
  },

  watch: {
    done: async function() {
      let markers = this.samples.map(sample => {
        const fixedLat = sample.LATDIR === "N" ? sample.LAT : -sample.LAT;
        const fixedLNG = sample.LATDIR === "E" ? sample.LNG : -sample.LNG;
        return { lat: fixedLat, lng: fixedLNG };
      });

      this.mapInterval = setInterval(this.addMaker, 2000, markers);
    }
  },

  props: {
    height: Number
  }
};
</script>
<style scoped>
.fullmap {
  width: 100vw;
}
</style>
