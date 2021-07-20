<!--
 * @Author: liangs
 * @Date: 2021-07-20 11:14:32
 * @LastEditors: liangs
 * @LastEditTime: 2021-07-20 16:07:10
 * @Description: file content
-->
<template>
  <div>
    <el-card shadow="never">
      <ul class="el-menu">
        <li
          class="el-menu-item"
          style="padding-left: 20px;"
          v-for="menu in menus"
          :key="menu.index"
          :index="menu.index"
        >
          <g-link
            :to="menu.path"
            exact
            class="menu-link"
            :class="{ active: menu.path === active }"
          >
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.title }}</span>
          </g-link>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "star",
      menus: [
        {
          index: "star",
          icon: "el-icon-star-off",
          title: "最新动态",
          path: "/",
        },
        {
          index: "social",
          icon: "el-icon-mobile-phone",
          title: "社交圈",
          path: "/social",
        },
        {
          index: "blog",
          icon: "el-icon-edit-outline",
          title: "博客列表",
          path: "/blog",
        },
        {
          index: "project",
          icon: "el-icon-service",
          title: "开源项目",
          path: "/project",
        },
        {
          index: "socument",
          icon: "el-icon-document",
          title: "README.md",
          path: "/",
        },
      ],
    };
  },
  computed: {},

  mounted() {
    let arr = this.$route.path.split("/");
    let path = arr[1] || "star";
    console.log("path===", path);
    this.active = "/" + path;
  },
  methods: {},
};
</script>
<style scoped>
.menu-link {
  display: inline-block;
  width: 100%;
  height: 100%;
}
a {
  color: #303133;
}
.active,
.active i {
  color: #1e6bb8;
}
</style>
