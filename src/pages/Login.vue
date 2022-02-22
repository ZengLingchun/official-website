<template>
  <div class="login-main">
    <div class="banner"></div>
    <div class="content">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">User</el-tab-pane>
        <el-tab-pane label="注册" name="register">Config</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { ElTabs, ElTabPane } from "element-plus";
export default {
  components: {
    ElTabs,
    ElTabPane,
  },
	data() {
		return {
			activeName: "login"
		}
	}
};
</script>

<style lang="less" scoped>
.login-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .banner {
    width: 750px;
    height: 100%;
    background-image: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg");
    background-size: cover;
    background-position: 50%;
		float: left;
  }
	.content {
		float: left;
	}
}
</style>