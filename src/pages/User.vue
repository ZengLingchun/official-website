<template>
  <div class="user">
    <div class="container">
      <el-row>
        <el-col :span="5">
          <el-menu default-active="/user/personal" :router="true">
            <span class="personal-center">个人中心</span>
            <el-menu-item index="/user/personal">
              <span>我的个人中心</span>
            </el-menu-item>
            <el-menu-item index="/user/orders">
              <span>我的订单</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <div class="content" style="margin-left: 20px; width: 71.8%;">
          <router-view></router-view>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.user {
  width: 100%;
  background-color: #f5f5f5;
  padding: 50px 0;
  text-align: left;
  .personal-center {
    display: block;
    margin-bottom: 40px;
    padding-left: 80px;
  }
  .el-menu {
    padding: 50px 0;
  }
  .el-menu-item {
    display: block;
    font-size: 30px;
    color: #757575;
    height: 100px;
    line-height: 100px;
    padding: 0;
    padding-left: 80px !important;
    &:hover {
      background: none;
    }
  }
  .content {
    background-color: white;
    padding: 80px;
  }
}
</style>