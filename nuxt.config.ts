// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: 'less' // 配置为less
          })
        ],
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#ea6f5a'
          },
          javascriptEnabled: true,
        }
      }
    },
    ssr: {
      noExternal: ['ant-design-vue']
    }
  }
})
