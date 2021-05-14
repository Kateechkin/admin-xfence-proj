<template>
  <!-- app -->
  <!-- modal -->
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <modal v-if="showModal" @close="showModal = false">
    <h3 class="header">custom header</h3>
  </modal>
  <div class="modal" v-if="showModal">
    <button class="close" @click="showModal = false">x</button>
    <h3>Title</h3>
    <p>Description</p>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: ["show"],
  data: {
    showModal: false,
  },
};
</script>

<style>
</style>