<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <p>Вы действительно хотите удалить?</p>
            </slot>
          </div>

          <div class="modal-body">
            <input
              type="button"
              value="да"
              class="button-5"
              @click="deleteClient(order_modal), $emit('close')"
            />
            <input
              type="button"
              value="нет"
              class="button-5"
              @click="$emit('close')"
            />
          </div>

          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    order_modal: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteClient(order_modal) {
      console.log("метод del", order_modal);
      // console.log(this.costumers);
      this.$emit("deleteClient");
    },
  },
};
</script>

<style>
</style>