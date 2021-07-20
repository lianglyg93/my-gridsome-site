<!--
 * @Author: liangs
 * @Date: 2021-07-20 16:01:57
 * @LastEditors: liangs
 * @LastEditTime: 2021-07-20 16:28:47
 * @Description: file content
-->
<template>
  <Layout>
    <el-card shadow="never" style="min-height: 600px ">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="description">
          <el-input
            type="textarea"
            :autosize="{ minRows: 20, maxRows: 30 }"
            placeholder="请输入内容"
            v-model="ruleForm.description"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <div class="btn-wrap">
            <el-button type="primary" @click="onSubmit('ruleForm')"
              >立即创建</el-button
            >
            <g-link to="/blog" style="margin-left: 30px"
              ><el-button>取消</el-button></g-link
            >
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </Layout>
</template>

<script>
export default {
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.btn-wrap{
  width: max-content;
  margin: 0 auto;
}
</style>
