<script setup lang="ts">
import { NCollapse, NCollapseItem, NResult, NButton } from "naive-ui";
import { ref } from "vue";

type resultType = {
  update: [
    {
      "A": [][],
      "F": [][],
      "D": [][],
      "UpdateTime": string,
      "Version": string
    }[]
  ]
}

let loaded = ref(false);
let result: resultType | null = null;

window["getUpdateLog"]().then((_result) => {
  result = _result;
  loaded.value = true;
});

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function calculateDateDifference(targetDateStr: string) {
  const currentTime = new Date();
  const targetTime = new Date(targetDateStr);

  const timeDiff = (currentTime.getTime() - targetTime.getTime()) / 1000;

  const diffDays = parseInt(String(timeDiff / 86400));
  return `${diffDays}天前`
}

function backToHome() {
  location.pathname = '/';
}
</script>

<template>
  <div class="log-container">
    <n-collapse arrow-placement="right" v-if="loaded">
      <n-collapse-item v-for="(item, key) in result.update" :key="key" :name="key">
        <template #header>
          <h6>V{{ item.Version }}</h6>
        </template>
        <div class="update">
          <span class="addItems update-item" v-for="(add_item, key) in item.A" :key="key">
            🎉新增 > {{ add_item[0] }}
            <span class="author">{{ add_item[1] }}</span>
          </span>
          <span class="fixItem update-item" v-for="(fix_item, key) in item.F" :key="key">
            🔨修复 > {{ fix_item[0] }}
            <span class="author">{{ fix_item[1] }}</span>
          </span>
          <span class="delItems update-item" v-for="(del_item, key) in item.D" :key="key">
            🗑️删除 > {{ del_item[0] }}
            <span class="author">{{ del_item[1] }}</span>
          </span>
        </div>
        <template #header-extra>
          <span>{{ calculateDateDifference(item.UpdateTime) }}</span>
        </template>
      </n-collapse-item>
    </n-collapse>
    <n-result v-else status="404" title="你要不再等等？" description="主要是现在还在网络传输" size="huge">
      <template #footer>
        <n-button @click="backToHome">我等不了一点!</n-button>
      </template>
    </n-result>
  </div>
</template>

<style scoped>
.n-collapse.__collapse {
  padding: 20px;
  border-radius: 5px;
  background-color: var(--vp-custom-block-details-bg) !important;
  border-color: var(--vp-custom-block-details-border) !important;
  color: var(--vp-custom-block-details-text) !important;

  .n-collapse-item:not(:last-child)::after {
    content: '';
    position: absolute;
    margin-top: 15px;
    width: 96%;
    height: 1px;
    background: var(--vp-c-divider);
    border-radius: 1px;
  }

  .n-collapse-item__header-main span {
    color: var(--vp-custom-block-details-text) !important;
  }

  .update {
    gap: 5px;
    display: flex;
    flex-direction: column;

    .update-item {
      font-size: 18px;
      display: flex;
      justify-content: space-between;
    }

    .author {
      user-select: none;
      font-size: 14px;
      color: var(--vp-c-brand-2);
    }
  }
}
</style>