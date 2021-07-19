<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="margin-bottom: 20px">
        <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
        <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
        <el-button
          @click="$share()"
          icon="el-icon-share"
          type="warning"
          style="margin-left: 10px"
          plain
          circle
        ></el-button>
      </el-card>

      <div>
        <el-card
          shadow="hover"
          v-for="edge in $page.projects.edges"
          :key="edge.node.id"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <a
                    style="text-decoration:none;cursor:pointer"
                    @click="goDetails(edge.node.title)"
                  >
                    <i class="el-icon-service"></i>
                    &nbsp;&nbsp; {{edge.node.title}}
                  </a>
                </span>
              </el-col>
              <el-col :span="8">
                <div style="text-align: right;">
                  <!-- @click="goGithub(edge.node.url)" -->
                  <el-button style="padding: 3px 0" type="text" icon="el-icon-back">前往GitHub</el-button>
                  <el-button
                    @click="$share('/user/project/details/'+edge.node.title)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-share"
                  ></el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div
            style="font-size: 0.9rem;line-height: 1.5;color: #606c71;"
          >最近更新 {{edge.node.updated_at | getDate}}</div>
          <div
            style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px"
            v-html="getHtmlWrap(edge.node.description)"
          ></div>
          <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
            <el-row>
              <el-col :span="16" style="padding-top: 5px">
                <el-tooltip
                  effect="dark"
                  :content="'star '+edge.node.stargazersCount"
                  placement="bottom"
                >
                  <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                </el-tooltip>
                {{edge.node.stargazersCount}}
                <el-tooltip
                  effect="dark"
                  :content="'watch '+edge.node.watchersCount"
                  placement="bottom"
                >
                  <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                </el-tooltip>
                {{edge.node.watchersCount}}
                <el-tooltip
                  effect="dark"
                  :content="'fork '+edge.node.forksCount"
                  placement="bottom"
                >
                  <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                </el-tooltip>
                {{edge.node.forksCount}}
              </el-col>
              <el-col :span="8" style="text-align: right;">
                <el-tag size="small" type="danger" v-if="edge.node.license">{{edge.node.license}}</el-tag>
                <el-tag size="small" type="success">{{edge.node.language}}</el-tag>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <div style="text-align: center">
          <Pager class="navigation" :info="$page.projects.pageInfo" />
        </div>
      </div>

      <!-- <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!projects||projects.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
            </font>
      </el-card>-->
    </div>
  </Layout>
</template>
<page-query>
query($page: Int){
    projects : allStrapiProject(perPage: 2, page: $page) @paginate {
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        description
        updated_at
        stargazersCount
        watchersCount
        forksCount
        license
        language
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
      projects: [],
    };
  },
  computed: {},
  mounted() {
    // this.list()
  },
  methods: {
    search() {
      console.log("search");
    },
    // goDetails(name) {
    //     this.$router.push("/user/project/details/" + name)
    // },
    // goGithub(url) {
    //     window.open(url)
    // }
  },
};
</script>