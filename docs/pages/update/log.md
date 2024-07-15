---
outline: deep
---

<n-breadcrumb>
  <n-breadcrumb-item>
    代码空间
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    杂项
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    更新日志
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
            <n-tag round> 杂项 </n-tag>
        </template>
        <span>分类层级</span>
    </n-popover>
</div>

---

<log />

<script setup lang="ts">
import log from "./log.vue";
import { useData } from 'vitepress';
import { onMounted } from "vue";
import { NTag, NPopover, NBreadcrumb, NBreadcrumbItem } from "naive-ui";

const { isDark } = useData();

onMounted(() => {
    window.extraItemLoader(isDark);
});
</script>