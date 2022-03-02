<template>
  <div class="cart">
    <div class="container" style="height: 100%">
      <el-table :data="goods" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="商品名称" width="400">
          <template #default="scope">
            <div class="goods-info">
              <img width="80" height="80" :src="scope.row.name.image" />
              <span class="text">{{ scope.row.name.info }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="单价" width="200">
          <template #default="scope">
            <span class="price">{{ scope.row.price }}元</span>
          </template>
        </el-table-column>
        <el-table-column label="数量">
          <template #default="scope">
            <el-input-number v-model="scope.row.num" />
          </template>
        </el-table-column>
        <el-table-column label="小计" width="200">
          <template #default="scope">
            <span class="price" style="color: #ff6700"
              >{{ scope.row.price * scope.row.num }}元</span
            >
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <span
              class="iconfont"
              style="cursor: pointer"
              @click="deleteItem(scope.row.id)"
              >&#xe646;</span
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="cart-bar clearfix container">
        <div class="section-left">
          <a href="//www.mi.com" class="back-shopping">继续购物</a
          ><span class="cart-total"> 已选择 <i>0</i> 件</span>
        </div>
        <span class="total-price">合计：<em>0</em>元 <el-button :disabled="true" type="primary"  class="btn">去结算</el-button></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      goods: [
        {
          name: {
            image:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/149a55c7db655a57bce72528466c6bbc.png?thumb=1&w=160&h=160&f=webp&q=90",
            info: "Xiaomi 12 12GB+256GB 黑色",
          },
          price: 4399,
          num: 1,
        },
      ],
    };
  },

};
</script>

<style lang="less">
.cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .el-table {
    thead {
      height: 150px;
    }
    th.el-table__cell > .cell {
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      vertical-align: middle;
      width: 100%;
      height: 70px;
      line-height: 70px;
      font-size: 30px;
      font-weight: none;
      color: #424242;
      text-align: center;
    }
    .goods-info {
      display: flex;
      justify-items: center;
      align-items: center;
      width: 100%;
      margin-left: 100px;
      font-size: 36px;
      font-weight: 500;
      color: #424242;
      .text {
        display: inline-block;
        margin-left: 60px;
      }
    }
    .price {
      display: inline-block;
      font-size: 36px;
      font-weight: 500;
      color: #424242;
      height: 80px;
      line-height: 80px;
    }
    .cell {
      text-align: center;
    }
    tr {
      padding: 40px 0;
      box-sizing: border-box;
    }
    .el-input-number {
      position: relative;
      display: inline-block;
      width: 8rem;
      line-height: 0.8rem;
      height: 80px;
    }
    .el-input-number__decrease,
    .el-input-number__increase {
      top: 0.026667rem;
      bottom: 0.026667rem;
      width: 0.853333rem;
      background: none;
      font-size: 30px;
      font-weight: 900;
    }
    .el-input-number__decrease {
      left: 20px;
      border-radius: 0;
      border-right: 0;
    }
    .el-input-number__increase {
      right: 20px;
      border-radius: 0;
      border-left: 0;
    }
    .el-input__inner {
      font-size: 36px;
      font-weight: 500;
      height: 0.853333rem;
      line-height: 0.853333rem;
      width: 100%;
      height: 80px;
    }
    .el-icon {
      font-size: 30px;
      font-weight: 400;
    }
    .el-checkbox__inner {
      width: 40px;
      height: 40px;
    }
    .el-checkbox__inner::after {
      box-sizing: content-box;
      content: "";
      border: 0.1rem solid var(--el-checkbox-checked-icon-color);
      border-left: 0;
      border-top: 0;
      height: 0.686667rem;
      left: 0.406667rem;
      position: absolute;
      top: 0.026667rem;
      transform: rotate(45deg) scaleY(0);
      width: 0.08rem;
      transition: transform 0.15s ease-in 50ms;
      transform-origin: center;
    }
  }

  .cart-bar-fixed {
    position: fixed;
    left: 25.7%;
    margin-left: -613px;
    bottom: 0;
    z-index: 20;
    background-color: #fafafa;
    -webkit-box-shadow: 0 -3px 6px rgb(0 0 0 / 10%);
    box-shadow: 0 -3px 6px rgb(0 0 0 / 10%);
  }

  .cart-bar {
    height: 160px;
    line-height: 160px;
    text-align: right;
    background-color: #fff;
    margin-top: 20px;
    .section-left {
      float: left;
    }
    a {
      color: #757575;
      text-decoration: none;
    }
    .back-shopping {
      line-height: 100px;
      margin-left: 70px;
    }
    .cart-total {
      margin-left: 40px;
      padding-left: 39px;
      border-left: 1px solid #eee;
      color: #757575;
    }
    .total-price {
      padding-left: 13px;
      color: #ff6700;
      em {
        font-style: normal;
        font-size: 60px;
      }
    }
    .btn {
      width: 400px;
      height: 160px;
      line-height: 160px;
      font-size: 37.5px;
      margin-left: 50px;
      vertical-align: top;
    }
  }
}
</style>

