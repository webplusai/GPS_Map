<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Header
  },

  data: () => ({}),

  methods: {
    ...mapActions(["fillSamples"])
  },

  created: async function() {
    const urls = [
      "/data/track_2020-04-23T14-25-30.bin",
      "/data/track_2020-04-23T14-30-30.bin",
      "/data/track_2020-04-23T14-51-29.bin",
      "/data/track_2020-04-23T14-46-29.bin",
      "/data/track_2020-04-23T14-41-30.bin",
      "/data/track_2020-04-23T14-36-20.bin"
    ];
    this.fillSamples(urls);
  }
};
</script>
