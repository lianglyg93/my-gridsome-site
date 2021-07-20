<!--
 * @Author: liangs
 * @Date: 2021-07-20 16:01:57
 * @LastEditors: liangs
 * @LastEditTime: 2021-07-21 01:17:43
 * @Description: file content
-->
<template>
  <Layout>
    <el-card shadow="never" style="min-height: 600px ">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="description">
          <el-input
            type="textarea"
            :autosize="{ minRows: 20, maxRows: 30 }"
            placeholder="请输入内容"
            v-model="ruleForm.description"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <div class="btn-wrap">
            <el-button type="primary" @click="onSubmit('ruleForm')">立即创建</el-button>
            <g-link to="/blog" style="margin-left: 30px">
              <el-button>取消</el-button>
            </g-link>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  name: "blogAddPage",
  metaInfo() {
    return {
      title: "blog",
    };
  },
  data() {
    return {
      ruleForm: {
        name: "",
        description: "",
      },
      rules: {
        name: [{ required: true, message: "请输入标题", trigger: "blur" }],
        description: [
          { required: true, message: "请输入内容", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.ruleForm);
          const { data } = await axios({
            method: "post",
            url: this.GRIDSOME_API_URL + "/blogs",
            data: {
              ...this.ruleForm,
            },
          });
          if (data.id) {
            this.$message({
              message: "添加成功",
              type: "success",
            });
            this.$router.push("/blog");
            return;
          }
          this.$message.error("error submit!!");
        } else {
          this.$message.error("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.btn-wrap {
  width: max-content;
  margin: 0 auto;
}
</style>
