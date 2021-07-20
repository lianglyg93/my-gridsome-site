<template>
  <Layout>
    <div>
      <h1>{{ post.title }}</h1>
      <div v-html="post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query{
  posts : allBlogPost {
    edges{
      node{
        id
        content
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "postPage",
  metaInfo() {
    return {
      title: "post",
    };
  },
  computed: {
    post() {
      return this.$page.posts.edges[0].node;
    },
  },
};
</script>

<style>
.pager .active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.pager .page-link {
  display: inline;
}
</style>
