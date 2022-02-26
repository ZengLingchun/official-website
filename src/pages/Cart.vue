<template>
  <div class="cart">
    <div class="container">
      <el-table :data="goods" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="商品名称" width="400">
          <template #default="scope">
            <div class="goods-info">
              <img width="80" height="80" :src="scope.row.name.image" />
              <span>{{ scope.row.name.info }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="单价" width="200">
          <template #default="scope">
            <span>{{ scope.row.price }}元</span>
          </template>
        </el-table-column>
        <el-table-column label="数量">
          <template #default="scope">
            <el-input-number v-model="scope.row.num" />
          </template>
        </el-table-column>
        <el-table-column label="小计" width="200">
          <template #default="scope">
            <span>{{ scope.row.price * scope.row.num }}元</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-icon><close /></el-icon>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ElTable, ElTableColumn, ElInputNumber, ElIcon } from "element-plus";

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

  components: {
    ElTable,
    ElTableColumn,
    ElInputNumber,
    ElIcon,
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
    }
    .cell {
      text-align: center;
    }
  }
}
</style>

