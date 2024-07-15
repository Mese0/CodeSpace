---
outline: deep
---

<n-breadcrumb>
  <n-breadcrumb-item>
    代码空间
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    其他项目
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    Mryice
  </n-breadcrumb-item>
</n-breadcrumb>

<script setup lang="ts">
import { useData } from 'vitepress';
import { onMounted } from "vue";
import { NBreadcrumb, NBreadcrumbItem } from "naive-ui";

const { isDark } = useData();

onMounted(() => {
    window.extraItemLoader(isDark);
});
</script>