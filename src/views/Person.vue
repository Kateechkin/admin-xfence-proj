<template>
  <div class="home">
    <div class="content">
      <div class="person-page">
        <div class="index-page__title">
          <h1>Личный кабинет</h1>
        </div>
        <div class="person">
          <form action="" @submit="newdata">
            <div class="person__email">
              <label for="email">Email</label>
              <input type="text" class="product-add__input" />
            </div>
            <div class="person__pass">
              <label for="password">Старые пароль</label>
              <input type="password" class="product-add__input" />
            </div>
            <div class="person__pass">
              <label for="password">Новый пароль</label>
              <input type="password" class="product-add__input" />
            </div>
            <input type="submit" class="button-add" value="Изменить" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "person",
  data() {
    return {
      title: "Личный кабинет",
    };
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
};
</script>

<style>
</style>