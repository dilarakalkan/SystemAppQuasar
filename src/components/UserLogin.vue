<template>
  <div>
    <q-page class="row items-center justify-center">
      <q-card class="q-pa-md" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Giriş Yap</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="username" label="Öğrenci Numarası"></q-input>
          <q-input v-model="password" label="Şifre" type="password"></q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Giriş" color="primary" @click="login"></q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(`kullanıcı adı: ${this.username}, şifre: ${this.password}`);
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("https://www.example.com/your-image.jpg"); /* Resim URL'sini buraya ekleyin */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.q-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
