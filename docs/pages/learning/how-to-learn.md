---
outline: deep
---

<n-breadcrumb>
  <n-breadcrumb-item>
    代码空间
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    学习
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    如何学习
  </n-breadcrumb-item>
</n-breadcrumb>

:::warning :wave:更新信息
最后更新时间：2024-7-15
最后修改者：SharkByte
:::

<div class="cs-top-item">
    <n-popover trigger="hover">
        <template #trigger>
            <n-tag round type="info"> MeseO DT </n-tag>
        </template>
        <span>制作者</span>
    </n-popover>
    <n-popover trigger="hover">
        <template #trigger>
            <n-tag round> 学习 </n-tag>
        </template>
        <span>分类层级</span>
    </n-popover>
</div>

---

<script setup lang="ts">
import { NNumberAnimation, NButton, NBreadcrumb, NBreadcrumbItem, NTag, NPopover } from "naive-ui";
import { onMounted } from "vue";
import { useData } from "vitepress";

onMounted(() => {
    window.extraItemLoader(useData().isDark);
});
</script>