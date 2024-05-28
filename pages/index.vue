<template>
  <h1>index</h1>
  <hello-world />
  <NuxtLink to="about">jump to about</NuxtLink>
  <br />
  <NuxtLink to="users-admin/8">jump to users</NuxtLink>
  <br />
  <a-button type="primary" @click="toAbout">jump to about</a-button>
  <br />
  <NuxtLink :to="{path: '/about',query: { userInfo: JSON.stringify(userInfo) } }">Jump to about with parameters</NuxtLink>
  
</template>

<script setup lang='ts'>
const router = useRouter()
const userInfo = ref({
  id: 1,
  username: 'xiaoheng'
})


const toAbout = () => {
  router.push({
    path: '/about',
    query: { userInfo: JSON.stringify(userInfo.value) }
  })
}

</script>

<style></style>