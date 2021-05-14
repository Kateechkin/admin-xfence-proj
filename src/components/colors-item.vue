<template>
  <tbody>
    <tr>
      <td><span>HEX</span>{{ colors_item.color }}</td>
      <td class="colors__block-mini">
        <div
          class="colors__color"
          :style="{ backgroundColor: colors_item.color }"
        ></div>
      </td>
      <td class="figure__td">
        <router-link :to="`/colors/${colors_item.id}`" class="figure__editing"
          ><img src="../assets/img/editing.png" alt=""
        /></router-link>
        <button id="show-modal" class="figure__close" @click="showModal = true">
          <img
            src="../assets/img/delete.png"
            id="show-modal"
            @click="showModal = true"
            alt=""
          />
        </button>
      </td>
      <div class="figure-editor-mini">
        <router-link :to="`/colors/${colors_item.id}`" class="figure__editing"
          >Изменить</router-link
        >
        <button id="show-modal" class="figure__close" @click="showModal = true">
          Удалить
        </button>
      </div>
      <modalClient
        v-if="showModal"
        @close="showModal = false"
        v-bind:order_modal="colors_item"
        @deleteClient="deleteClient(colors_item)"
      >
      </modalClient>
    </tr>
  </tbody>
</template>

<script>
import modalClient from "@/components/modal/modal-client.vue";
export default {
  name: "colors-item",
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    colors_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    modalClient,
  },
  methods: {
    deleteClient(colors_item) {
      console.log("метод del table", colors_item);
      this.$emit("deleteClient");
    },
  },
};
</script>

<style></style>
