<template>
  <v-data-table
    :headers="headers"
    :items="samples"
    :items-per-page="length"
    class="elevation-4"
    dense
  ></v-data-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Table",

  computed: { ...mapState(["samples"]) },

  data: () => ({
    headers: [
      { text: "UTCTIME", value: "UTCTIME" },
      { text: "TZO", value: "TZO" },
      { text: "DSTO", value: "DSTO" },
      { text: "GPSTIME", value: "GPSTIME" },
      { text: "GPSSTATUS", value: "GPSSTATUS" },
      { text: "LAT", value: "LAT" },
      { text: "LATDIR", value: "LATDIR" },
      { text: "LNG", value: "LNG" },
      { text: "LNGDIR", value: "LNGDIR" },
      { text: "GPSSPEED", value: "GPSSPEED" },
      { text: "GPSCOURSE", value: "GPSCOURSE" },
      { text: "DIPSTATE", value: "DIPSTATE" },
      { text: "ACCSTATE", value: "ACCSTATE" }
    ]
  }),

  props: {
    length: Number
  }
};
</script>
