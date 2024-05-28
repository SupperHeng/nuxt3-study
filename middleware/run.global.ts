export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`router ${to.path}`);
})
