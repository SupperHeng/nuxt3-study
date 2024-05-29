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

  <!-- Pinia -->
  <!-- <h1>{{ $myPlugin("World") }}</h1> -->
  <a-button type="primary" @click="info">Display normal message</a-button>
  <h1>counter: {{ myStore.counter }}</h1>
  <h1>counter: {{ myStore.doubleCounter }}</h1>
  <a-button @click="myStore.add()">increment</a-button>

  <!-- useState -->
  <h2>counter:{{ counter }}</h2>
  <a-button @click="add()">add</a-button>
</template>

<script setup lang="ts">
const {data} = useFetch('/api/user', {server: false})


// Fetch
// const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains', {
//   pick: ['title'],
//   server: false
// })

// 调用userInfoFetch
// const {data: userData} = await userInfoFetch({})
// console.log('userData', userData);

// const param1 = ref('value1')
// const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains', {
//   query: { param1, param2: 'value2' },
//   server: false
// })

// useCookie
// const userInfoCookie = useCookie('userInfo', {maxAge: 60})
// userInfoCookie.value = {
//   uid: 333,
//   username: 'xiaoheng'
// }

const userinfo = useCookie('userInfo')
console.log("userInfo",userinfo.value);


// useState
// const counter =  useState('counter', () => 1)
// counter.value = 7
const counter = useCounter();
counter.value = 17;
const add = () => {
  counter.value++
}

// Pinia
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
