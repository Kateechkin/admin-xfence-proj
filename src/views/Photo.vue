<template>
  <div class="home">
    <div class="content">
      <div class="photo">
        <div class="photo__title">
          <h1>Фотографии</h1>
        </div>
        <p class="photo__error">Можно загружать по одной фотографии!</p>
        <div v-if="addfoto === true && this.newProduct.length">
          <div class="photo-item__row" id="foto">
            <div
              class="photo-item__column"
              v-for="(file, index) in this.newProduct"
              :key="index"
            >
              <div class="preview-image">
                <div
                  class="preview-remove"
                  :data-name="file.file.name"
                  @click="removeHandler(index, file.file.name)"
                >
                  X
                </div>
                <div class="preview-block">
                  <img :src="file.src" alt="foto" />
                </div>
                <div class="preview-info">
                  <span>{{ file.file.name }}</span>
                  {{ bytesToSize(file.file.size) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="photo__block">
          <div class="example-2">
            <div class="form-group">
              <form ref="myForm" v-if="!this.newProduct.length">
                <p>Прикрепить изображение:</p>
                <!-- multiple="true" для выбора множества фотографий -->
                <input
                  type="file"
                  id="file"
                  ref="file"
                  accept="image/jpeg,image/png,image/gif"
                  v-on:change="handleFileUpload"
                  class="input-file"
                />
                <label for="file" class="btn btn-tertiary js-labelFile">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="download"
                    class="svg-inline--fa fa-download fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    ></path>
                  </svg>
                  <span class="js-fileName">Загрузить файл</span>
                </label>
              </form>
            </div>
          </div>
          <div class="photo__submit">
            <input type="submit" value="Отправить" v-on:click="submitFile()" />
          </div>
          <div class="photo-submit">
            <PhotoItem
              v-for="(photo, index) in PRODUCTS"
              :key="index"
              v-bind:photo_item="photo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PhotoItem from "@/components/photo-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "foto",
  data() {
    return {
      title: "Фотографии",
      newprod: [],
      // foto: [],
      file: [],
      newProduct: [],
      addfoto: false,
      // src: [],
      // newProduct: {
      //   sss: "",
      //   saa: [],
      // },
    };
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  components: {
    PhotoItem,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
    bytesToSize(bytes) {
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (!bytes) {
        return "0 Byte";
      }
      console.log(bytes);
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
    },
    submitFile() {
      let formData = new FormData();

      // for (var i = 0; i < this.file.length; i++) {
      //   let file = this.file[i];
      //   formData.append("file[" + i + "]", file);
      //   console.log(formData, "formData");
      //   console.log(file, "file");
      // }

      let file = this.file;
      formData.append("file", file[0]);

      axios
        .post(`https://admin.xfence.ru/api/admin/v1/image/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function(response) {
          console.log("SUCCESS!!");
        })
        .catch(function(er) {
          console.log(er, "FAILURE!!");
        });
    },

    removeHandler(index, name) {
      console.log(index);
      console.log(name);
      this.newProduct.splice(index, 1);
      // this.file.splice(index, 1);
      // this.$refs.upload.$refs.fileupload.value = null;
      console.log(this.file);
    },
    handleFileUpload: function(event) {
      this.file = this.$refs.file.files;
      this.addfoto = true;
      console.log(this.file);
      this.file.forEach((file) => {
        if (!file.type.match("image")) {
          return console.log("Не изображение!");
        }
        const reader = new FileReader(); //создали ридер
        reader.onload = (ev) => {
          this.newProduct.push({
            src: ev.target.result,
            file: file,
          });
          // console.log(this.file);
        };

        reader.readAsDataURL(file); //считывание файла(ассинхронное)
      });
    },
  },
  mounted() {
    this.GET_PRODUCTS()
      .then((response) => {
        if (response.data) {
          console.log("Data arrived");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
