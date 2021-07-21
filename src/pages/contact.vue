<template>
  <Layout>
    <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
      <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
        <el-tab-pane :label="'粉丝 '+fans.length" name="followers" style="padding: 5px">
          <div v-if="fans.length">
            <el-row style="min-height: 200px; ">
              <el-col :span="8" v-for="fanInfo in fans" :key="fanInfo.id" style="padding: 10px">
                <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                  <i class="el-icon-star-off"></i>&emsp;
                  <g-link
                    :to="`/contact/avatar/${fanInfo.id}`"
                    style=" text-decoration:none;cursor:pointer"
                  >{{fanInfo.name}}</g-link>
                  <br />
                  <i class="el-icon-message"></i>&emsp;
                  <a
                    :href="fanInfo.html"
                    target="_blank"
                    style=" text-decoration:none;cursor:pointer"
                  >TA的主页</a>
                  <br />
                  <img :src="fanInfo.img.url" style="width: 100%;border-radius:5px;margin-top: 5px" />
                </el-card>
              </el-col>
            </el-row>
            <!-- <div style="text-align: center;margin-top: 10px">
              <el-pagination
                @current-change="onSelect"
                background
                layout="prev, pager, next"
                :current-page.sync="followers.query.page"
                :page-size="followers.query.pageSize"
                :total="followers.query.pageNumber*followers.query.pageSize"
              ></el-pagination>
            </div>-->
          </div>
          <div
            style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
            v-else
          >
            <font style="font-size: 30px;color:#dddddd ">
              <b>(￢_￢) 没有一个粉丝</b>
            </font>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="'关注 '+follows.length" name="following" style="padding: 5px">
          <div v-if="follows.length">
            <el-row style="min-height: 200px; ">
              <el-col
                :span="8"
                v-for="followInfo in follows"
                :key="followInfo.id"
                style="padding: 10px"
              >
                <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                  <i class="el-icon-star-off"></i>&emsp;
                  <g-link
                    :to="`/contact/avatar/${followInfo.id}`"
                    style=" text-decoration:none;cursor:pointer"
                  >{{followInfo.name}}</g-link>
                  <br />
                  <i class="el-icon-message"></i>&emsp;
                  <a
                    :href="followInfo.html"
                    target="_blank"
                    style=" text-decoration:none;cursor:pointer"
                  >TA的主页</a>
                  <br />
                  <img :src="followInfo.img.url" style="width: 100%;border-radius:5px;margin-top: 5px" />
                </el-card>
              </el-col>
            </el-row>
            <!-- <div style="text-align: center;margin-top: 10px">
              <el-pagination
                @current-change="onSelect"
                background
                layout="prev, pager, next"
                :current-page.sync="following.query.page"
                :page-size="following.query.pageSize"
                :total="following.query.pageNumber*following.query.pageSize"
              ></el-pagination>
            </div>-->
          </div>
          <div
            style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
            v-else
          >
            <font style="font-size: 30px;color:#dddddd ">
              <b>(￢_￢) 还没有关注一个人</b>
            </font>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </Layout>
</template>
<page-query>
  query{
  contact: allStrapiContact {
      edges{
        node{
          id
          name
          fans{
            id
            name
            img {
              url
            }
            html
          }
          follows{
            id
            name
            img {
              url
            }
            html
          }
        }
      }
    }
  }
</page-query>
<script>
export default {
  name: "contactPage",
  metaInfo() {
    return {
      title: "contact",
    };
  },
  data() {
    return {
      activeTab: "followers",
    };
  },
  computed: {
    contactInfo() {
      return this.$page.contact.edges[0].node;
    },
    fans() {
      return this.contactInfo.fans || [];
    },
    follows() {
      return this.contactInfo.follows || [];
    },
  },
  mounted() {
    this.onSelect();
  },
  methods: {
    onSelect() {
      console.log(this.activeTab);
    },
  },
};
</script>