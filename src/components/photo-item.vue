<template>
  <div class="photo-submit__column">
    <div class="photo-submit__items">
      <img
        :src="`https://xfence.ru/img/${photo_item.image} `"
        :alt="`${photo_item.name}`"
      />
      <p class="photo-submit__title">{{ photo_item.image }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "photo-item",
  data() {
    return {};
  },
  props: {
    photo_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>