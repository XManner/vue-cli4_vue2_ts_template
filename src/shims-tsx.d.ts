// 允许.tsx 结尾的文件，在 Vue 项目中编写 jsx 代码
import Vue, { VNode } from "vue"

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
