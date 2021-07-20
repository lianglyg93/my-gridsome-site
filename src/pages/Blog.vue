<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="margin-bottom: 20px">
        <g-link to="/blog-add" style="float: right;">
          <el-button
            type="primary"
            icon="el-icon-edit"
            >写博文</el-button
          >
        </g-link>
      </el-card>
      <div>
        <el-card
          shadow="hover"
          v-for="edge in $page.blogs.edges"
          :key="edge.node.id"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <g-link
                    :to="`blog/detail/${edge.node.id}`"
                    style="text-decoration:none;cursor:pointer"
                  >
                    <i class="el-icon-edit-outline"></i>
                    &nbsp;&nbsp; {{ edge.node.title }}
                  </g-link>
                </span>
              </el-col>
              <el-col :span="8">
                <div style="text-align: right;">
                  <!-- @click="editBlog(index)" -->
                  <el-button
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-edit"
                  ></el-button>

                  <!-- @click="deleteBlog(index)" -->
                  <el-button
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-delete"
                  ></el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
            最近更新 {{ edge.node.updated_at | getDate }}
          </div>
          <div
            style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px"
            v-html="getHtmlWrap(edge.node.description)"
          ></div>
        </el-card>
        <div style="text-align: center">
          <!-- 分页 -->
          <Pager class="navigation" :info="$page.blogs.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int){
    blogs : allStrapiBlog(perPage: 3, page: $page) @paginate {
    pageInfo{
      totalPages
      currentPage
    }
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
import { Pager } from "gridsome";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      searchKey: "",
    };
  },
};
</script>
