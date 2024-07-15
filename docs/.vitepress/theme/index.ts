// https://vitepress.dev/guide/custom-theme
import { defineComponent, h, inject } from 'vue'
import { setup } from '@css-render/vue3-ssr'
import { type Theme, useRoute } from 'vitepress'
import { NConfigProvider } from 'naive-ui'
import { footNote } from "./util/footnote"
import DefaultTheme from 'vitepress/theme'
import './style.less'
import {useDiscreteApi} from "./util/useDiscreteApi";
import {DialogApi} from "naive-ui";
import {useCodeItemExtra} from "./util/compExtra/codeItemExtra/codeItemExtra";
import {useExtraItemLoader} from "./util/compExtra/ExtraItemLoader";
import {fetchData} from "./util/core/fetchData";


const { Layout } = DefaultTheme

const CssRenderStyle = defineComponent({
  setup () {
    const collect = inject('css-render-collect')
    return {
      //@ts-ignore
      style: collect()
    }
  },
  render () {
    return h('css-render-style', {
      innerHTML: this.style
    })
  }
})

const VitepressPath = defineComponent({
  setup () {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  }
})

const NaiveUIProvider = defineComponent({
  render () {
    return h(
        NConfigProvider,
        { abstract: true, inlineThemeDisabled: true },
        {
          default: () => [
            h(Layout, null, { default: this.$slots.default?.() }),
            //@ts-ignore
            import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null
          ]
        }
    )
  }
})


export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp: ({ app }) => {
    //@ts-ignore
    if (import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
  }
}

// 这个数字只会大不会小，因为没办法确保每次dialog关闭之后都会减小这个 count 也无所谓
let dialogElCount = 0;

window["dialog"] = function () {
  dialogElCount++;
  return useDiscreteApi("dialog")
}

window["message"] = function () {
  return useDiscreteApi("message")
}

window["extraItemLoader"] = function (isDark) {
  useExtraItemLoader(isDark);
}

window["getUpdateLog"] = async function (): Promise<Object> {
  return fetchData("update-log");
}

window["showCard"] = function () {
  /*
  footNote.getCardContents(type, languageType).then((data) => {
    if (!data.status) { // 0
      useDiscreteApi("message").warning(`没有找到关于 ${type} 的相关解释.`);
      return;
    }

    const { en, ch } = data;
    console.log();

    dialogElCount++;
    (useDiscreteApi("dialog") as DialogApi).info({
      title: en[type].title,
      titleClass: `dialog-${dialogElCount}`,
      content: en[type].content
    });

    const dialogEl = document.querySelector(`.n-dialog__title.dialog-${dialogElCount}`) as HTMLElement;
    console.log(dialogEl);
  });
   */
}