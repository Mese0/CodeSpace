---
outline: deep
---

<n-breadcrumb>
  <n-breadcrumb-item>
    代码空间
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    介绍
  </n-breadcrumb-item>
  <n-breadcrumb-item>
    什么是 代码空间
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
            <n-tag round> 介绍 </n-tag>
        </template>
        <span>分类层级</span>
    </n-popover>
</div>

---

# 代码空间

> “代码空间” 是由**喵森开发组**创建的一款编程学习网站，上面包含了最多、最新的编程学习内容，强大、活跃的共享社区以及拥有喵森开发组的强力支持。它由喵森开发组成员`SharkByte`一手负责。
> 
> “代码空间” 最突出的特点便是：**全功能免费使用、无收费、无限制使用**。一切通过 “代码空间” 获取的收益均用于服务器维护、升级。

::: details 我们的苦衷
由于 “代码空间” 的页面完全使用 markdown 编写的，所以在拓展功能的时候则需要付出跟多心血，所以希望各位能喜欢并且支持 “代码空间”。

并且因为 “代码空间” 是由 `MeseO Develop Team` 赞助开创，基本没有什么收入来源，支出过多、收入几乎为零，所以希望各位能够多多宣传、打赏支持我们。
:::

## 我们的特色
> 下面是 **代码空间** 的功能与内容：

### 强大的教学资源
> 到目前为止，代码空间一共收录了 **<n-number-animation :from="0" :to="5" :duration="5000"/>** 篇文章，**<n-number-animation :from="0" :to="2" :duration="5000"/>** 个教学视频。
> 
> 共有 **<n-number-animation :from="0" :to="8" :duration="5000"/>** 位学员参与学习当中，**<n-number-animation :from="0" :to="1" :duration="5000"/>** 位认为受益匪浅。
> 
> 共有 **<n-number-animation :from="0" :to="3" :duration="5000"/>** 道大厂真题存储在其中，**<n-number-animation :from="0" :to="6" :duration="5000"/>** 道经典笔面试题被收录。

### 云代码编辑器
> 可以在网站上直接运行代码!

:::tip :arrow_forward:运行代码
将鼠标移入**代码块**中，会下拉出更多操作，点击 "Run Code" 可以直接运行代码获得结果!
:::

::: code-group
```Java:line-numbers {3} [Java]
public class HelloCodeSpace {
    public static void main(String[] args) {
        System.out.println("Hello Code Space!");
    }
}
```

```python:line-numbers {1} [Python]
print("Hello Code Space!")
```

```cpp:line-numbers {4} [C++]
#include <stdio.h>

int main() {
    printf("Hello Code Space!");
    return 0;
}
```

```javascript:line-numbers {1} [JavaScript]
console.log("Hello Code Space!");
```

```kotlin:line-numbers {2} [Kotlin]
fun main() {
    println("Hello, World!")
}
```
:::

```result
Hello Code Space!
```

## 技术栈
> **代码空间** 由 VitePress + TypeScript 提供服务支持！

### 页面
<div class="cs-tech-stack-flex"><img src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg" width="24"/> <a target="_blank" href="https://www.naiveui.com/zh-CN/os-theme">Naive UI</a></div>
<div class="cs-tech-stack-flex"><img src="https://vitepress.dev/vitepress-logo-mini.svg" width="24"> <a target="_blank" href="https://vitepress.dev/zh/">VitePress</a></div>

### 其他
<div class="cs-tech-stack-flex"><a target="_blank" href="https://markdown.com.cn/">Markdown</a></div>

<n-button strong secondary round type="primary" id="cs-code-run-code-button">
  Run Code
</n-button>

<n-button tertiary id="cs-code-share-code">
    Share
</n-button>

<!--这坨代码真是狗屎-->

<script setup lang="ts">
import { NNumberAnimation, NButton, NBreadcrumb, NBreadcrumbItem, NTag, NPopover } from "naive-ui";
import { onMounted } from "vue";
import { useData } from "vitepress";

onMounted(() => {
    window.extraItemLoader(useData().isDark);
});
</script>

<style>
.cs-tech-stack-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
}

.cs-tech-stack-flex a {
  margin-top: 5px;
  margin-left: 10px;
}
</style>