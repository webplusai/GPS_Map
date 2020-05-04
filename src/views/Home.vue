<template>
  <div class="home">
    <GoogleMap v-bind:height="45" />
    <Table v-bind:length="15" />
  </div>
</template>

<script>
import Table from "@/components/Table";
import GoogleMap from "@/components/GoogleMap";
export default {
  name: "Home",
  components: { GoogleMap, Table }
};
</script>
