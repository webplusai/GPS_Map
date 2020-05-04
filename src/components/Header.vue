<template>
  <div id="header">
    <v-toolbar dense class="white--text" color="secondary">
      <v-btn
        to="/"
        class="headline font-weight-light white--text text-capitalize"
        tile
        style="height: 100%"
        color="secondary"
        depressed
        >CameraMatics</v-btn
      >

      <!-- <v-tabs slider-color="accent" slider-size="3" optional grow>
        <v-tab class="white--text title font-weight-light" to="/map">Map</v-tab>
        <v-tab class="white--text title font-weight-light" to="/table"
          >Table</v-tab
        >
      </v-tabs> -->
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {},
  data() {
    return {};
  }
};
</script>
