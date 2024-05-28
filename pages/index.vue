<template>
  <h1>index</h1>
  <hello-world />
  <NuxtLink to="about">jump to about</NuxtLink>
  <br />
  <NuxtLink to="users-admin/8">jump to users</NuxtLink>
  <br />
  <a-button @click="toAbout">jump to about</a-button>
  <br />
  <NuxtLink
    :to="{ path: '/about', query: { userInfo: JSON.stringify(userInfo) } }"
    >Jump to about with parameters</NuxtLink
  >
  <br />
  <!-- <h1>{{ $myPlugin("World") }}</h1> -->
  <a-button type="primary" @click="info">Display normal message</a-button>
  <h1>counter: {{ myStore.counter }}</h1>
  <h1>counter: {{ myStore.doubleCounter }}</h1>
  <a-button @click="myStore.add()">increment</a-button>
</template>

<script setup lang="ts">

// 引入myStore
import { useMyStore } from "~/store/myStore";
const myStore = useMyStore();

const { $message } = useNuxtApp();

const info = () => {
  $message.info("This is a normal message");
};

const router = useRouter();
const userInfo = ref({
  id: 1,
  username: "xiaoheng",
});

const toAbout = () => {
  router.push({
    path: "/about",
    query: { userInfo: JSON.stringify(userInfo.value) },
  });
};
</script>

<style></style>
