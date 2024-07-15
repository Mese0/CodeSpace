import { defineConfig } from 'vitepress'

const fileAndStyles: Record<string, string> = {}

export default defineConfig({
  title: "代码空间",
  description: "优秀的代码学习网站",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '介绍', link: '/pages/what-is-codespace' },
      { text: '学习', link: '/learning/how-to-learn' }
    ],

    sidebar: [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '什么是 代码空间？', link: '/pages/what-is-codespace' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: "学习",
        collapsed: true,
        items: [
          {
            text: "如何学习",
            link: "/pages/learning/how-to-learn"
          },
          {
            text: "Java",
            collapsed: true,
            link: "/pages/learning/java/java",
            items: [
              {
                text: '第一章',
                collapsed: true,
                link: '/pages/learning/java/c1/index',
                items: [
                  {
                    text: '第一节',
                    link: '/pages/learning/java/c1/section1'
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        text: '相关项目',
        collapsed: true,
        items: [
          { text: 'GodGame 神游', link: '/pages/projects/godgame' },
          { text: 'MiShark 米鲨', link: '/pages/projects/mishark' },
          { text: 'Mryice', link: '/pages/projects/mryice' },
          { text: 'SharkByte Blog', link: '/pages/projects/sharkbyte-blog' },
        ]
      },
      {
        text: "更新日志",
        link: "/pages/update/log"
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mese0/CodeSpace' },
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '此页'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} MeseO Develop Team - SharkByte`
    },

    vite: {
      ssr: {
        noExternal: ['naive-ui', 'date-fns', 'vueuc']
      }
    },

    postRender(context) {
      const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
      const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
      const style = styleRegex.exec(context.content)?.[1]
      const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
      if (vitepressPath && style) {
        fileAndStyles[vitepressPath] = style
      }
      context.content = context.content.replace(styleRegex, '')
      context.content = context.content.replace(vitepressPathRegex, '')
    },
    transformHtml(code, id) {
      const html = id.split('/').pop()
      if (!html) return
      const style = fileAndStyles[`/${html}`]
      if (style) {
        return code.replace(/<\/head>/, style + '</head>')
      }
    }
  }
})
