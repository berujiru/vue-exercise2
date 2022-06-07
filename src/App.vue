<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Post</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <a-menu-item key="1">
              <file-outlined />
              <!--icon from ant design-->
              <router-link to="/"> Home</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <file-outlined />
              <!--icon from ant design-->
              <router-link to="/about"> About</router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <file-outlined />
              <!--icon from ant design-->
              <router-link :to="{ name: 'postlist' }"> Post</router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view :key="$route.fullPath" />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { FileOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    FileOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(["1"]),
      selectedKeys2: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(["sub1"]),
    };
  },
});
</script>
