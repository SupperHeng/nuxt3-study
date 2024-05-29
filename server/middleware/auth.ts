export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'Authorization')
  event.context.auth = { token: token}
})
