<template>
  <q-page class="row items-center justify-center">
    <q-card class="q-pa-md" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Giriş Yap</div>
        
      </q-card-section>
      <q-card-section>
        <q-input v-model="username" label="Öğrenci Numarası"></q-input>
        <q-input v-model="password" label="Password" type="password"></q-input>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Giriş Yap" color="primary" @click="login"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
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
      this.$router.push('/home');

    },
  },
};
</script>




