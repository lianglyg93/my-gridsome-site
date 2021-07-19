<!--
 * @Descripttion: 
 * @Author: liangs
 * @Date: 2021-07-18 16:17:22
 * @LastEditors: liangs
 * @LastEditTime: 2021-07-19 23:23:02
-->
<template>
  <Layout>
    <div class="aaa" style="min-height: 600px">
      <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
        <div slot="header">
          <span>{{blog.title}}</span>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{blog.created_at | getDate}}
          <br />
          更新 {{blog.updated_at | getDate}}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
        >
          <pre style="font-family: '微软雅黑'" v-html="getHtmlWrap(blog.description)"></pre>
        </div>
        <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
      </el-card>
      <el-card
        shadow="never"
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
        v-if="!blog.id"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>
<page-query>
query{
 blogs: allStrapiBlog(sortBy: "updated_at", order: DESC) {
    edges{
      node{
        id
        title
        description
        created_at
        updated_at
        published_at
      }
    }
  }
}
</page-query>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    // 最后一次更新的博客
    blog() {
      return this.$page.blogs.edges[0].node;
    },
  },
  methods: {},
};
</script>