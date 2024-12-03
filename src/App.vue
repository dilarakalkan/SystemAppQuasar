<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <!-- QPageContainer'ın quasardan dolayı olması gerekmektedir. -->
      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "App",
};
</script>
