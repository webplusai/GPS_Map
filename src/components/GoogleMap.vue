<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="1"
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
      index: 0
    };
  },

  computed: {
    ...mapState(["samples", "done"])
  },

  methods: {
    addMaker(markers) {
      console.log("updating map");
      this.segmentedMarkers.push(markers[this.index]);
      this.index++;
    }
  },

  watch: {
    done: async function() {
      let markers = this.samples.map(sample => {
        return { lat: sample.LAT, lng: sample.LNG };
      });

      setInterval(this.addMaker, 2000, markers);
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
