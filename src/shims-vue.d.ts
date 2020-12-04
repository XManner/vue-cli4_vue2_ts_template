// 主要用于 TypeScript 识别.vue 文件，Ts 默认并不支持导入 vue 文件
declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}