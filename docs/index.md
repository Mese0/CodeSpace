---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 代码空间
  text: 基于 VitePress 的极其优秀的代码学习网站
  tagline: 新一代的编程学习基地
  image:
    src: /assets/logo.svg
    alt: CodeSpace
  actions:
    - theme: brand
      text: 什么是 代码空间？
      link: /pages/what-is-codespace.md
    - theme: alt
      text: 学习
      link: /pages/learning/how-to-learn

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { onMounted } from 'vue';
import { useData } from 'vitepress';

onMounted(() => {
    window.extraItemLoader(useData().isDark)
})
</script>