<template>
  <div class="detail">
    <div class="mi-detail">
      <div class="page">
        <div class="page-box">
          <div class="page-info">
            <div class="product-box container">
              <div class="img-left">
                <el-carousel arrow="always" class="carousel">
                  <el-carousel-item v-for="item in swiper" :key="item">
                    <img
                      alt=""
                      class="swiper-lazy swiper-lazy-loaded"
                      :src="item"
                    />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="product-con">
                <h2><img />Redmi K50 电竞版</h2>
                <p class="sale-desc">
                  <font color="#ff4a00"
                    >「3月7日-8日 20:00 K50 冠军版 AMG-F1
                    限量抢购！信用卡分期满减享优惠」</font
                  >骁龙8
                  年度旗舰｜「双VC」强劲散热｜以电竞标准打造｜120W神仙秒充｜OLED
                  柔性直屏｜JBL
                  宽频四单元扬声器｜新一代超宽频X轴马达｜磁动力弹出式肩键2.0｜前后双索尼相机｜红外Pro｜多功能NFC
                </p>
                <p class="company-info">小米自营</p>
                <div class="price-info">
                  <span>3899 元</span>
                </div>

                <div class="line"></div>

                <div class="address-box">
                  <div class="product-address">
                    <i class="iconfont">&#xe62b;</i>
                    <div class="address-con">
                      <div>
                        <div class="address-info">
                          <span>广东</span><span>深圳市</span><span>南山区</span
                          ><span>桃源街道</span>
                        </div>
                        <a href="javascript:void(0);" class="edit">修改</a>
                      </div>
                      <div class="info">
                        <div class="desc">
                          <span>有现货</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buy-option">
                  <div class="buy-box-child">
                    <div class="option-box">
                      <div class="title">选择版本</div>
                      <ul class="clearfix">
                        <li title="12GB+256GB" class="active">
                          <a>12GB+256GB</a>
                        </li>
                        <li title="12GB+128GB" class="">
                          <a>12GB+128GB</a>
                        </li>
                        <li title="8GB+128GB" class="">
                          <a>8GB+128GB</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="buy-box-child">
                    <div class="option-box">
                      <div class="title">选择颜色</div>
                      <ul class="clearfix">
                        <li title="银翼" class="active">
                          <a>银翼</a>
                        </li>
                        <li title="暗影" class="">
                          <a>暗影</a>
                        </li>
                        <li title="冰斩" class="">
                          <a>冰斩</a>
                        </li>
                        <li title="AMG F1 冠军版" class="">
                          <a>AMG F1 冠军版</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div data-v-acfb37e4="" class="selected-list">
                  <ul data-v-acfb37e4="">
                    <li data-v-acfb37e4="">
                      Redmi K50 电竞版 12GB+256GB 银翼<span data-v-acfb37e4=""
                        >3899元</span
                      >
                    </li>
                  </ul>
                  <ul data-v-acfb37e4=""></ul>
                  <ul data-v-acfb37e4=""></ul>
                  <ul data-v-acfb37e4=""></ul>
                  <ul data-v-acfb37e4=""></ul>
                  <div data-v-acfb37e4="" class="total-price">总计：3899元</div>
                </div>
                <div class="btn-box">
                  <div data-v-381dda6a="" class="sale-btn">
                    <a
                      data-v-381dda6a=""
                      data-spm="product_15615.add_cart.1"
                      href="javascript:void(0);"
                      class="btn btn-primary"
                      data-params='""'
                      >加入购物车</a
                    >
                  </div>
                  <div data-v-5d5a0502="" class="favorite-btn">
                    <a
                      data-v-5d5a0502=""
                      data-spm="product_15615.favor.1"
                      class="btn-gray btn-like"
                      data-params='""'
                      ><i data-v-5d5a0502="" class="iconfont default"></i
                      ><i data-v-5d5a0502="" class="iconfont red"
                        ><i data-v-5d5a0502="" class="iconfont redsd"></i></i
                      >喜欢</a
                    >
                  </div>
                </div>
                <div data-v-6d9966ee="" class="after-sale-info">
                  <span data-v-6d9966ee=""
                    ><a
                      data-v-6d9966ee=""
                      href="javascript:void(0);"
                      class="support"
                      ><i data-v-6d9966ee="" class="iconfont"></i
                      ><em data-v-6d9966ee="">小米自营</em></a
                    ></span
                  ><span data-v-6d9966ee=""
                    ><a
                      data-v-6d9966ee=""
                      href="javascript:void(0);"
                      title="由小米发货"
                      class="support"
                      ><i data-v-6d9966ee="" class="iconfont"></i
                      ><em data-v-6d9966ee="">小米发货</em></a
                    ></span
                  ><span data-v-6d9966ee=""
                    ><a
                      data-v-6d9966ee=""
                      href="javascript:void(0);"
                      class="support"
                      ><i data-v-6d9966ee="" class="iconfont"></i
                      ><em data-v-6d9966ee="">7天无理由退货</em></a
                    ></span
                  ><span data-v-6d9966ee=""
                    ><a
                      data-v-6d9966ee=""
                      href="javascript:void(0);"
                      title="由小米发货商品(不含有品),单笔满69元免运费;
由小米有品发货的商品,免运费;
由第三方商家发货的商品，运费以实际结算金额为准;
特殊商品需要单独收取运费,具体以实际结算金额为准;优惠券等不能抵扣运费金额;如需无理由退货,用户将承担该商品的退货物流费用;
使用门店闪送服务，需单独支付10元运费。"
                      class="support"
                      ><i data-v-6d9966ee="" class="iconfont"></i
                      ><em data-v-6d9966ee="">运费说明</em></a
                    ></span
                  ><span data-v-6d9966ee=""
                    ><a data-v-6d9966ee="" class="support"
                      ><i data-v-6d9966ee="" class="iconfont"></i
                      ><em data-v-6d9966ee="">企业信息</em></a
                    ></span
                  ><span data-v-6d9966ee=""
                    ><a
                      data-v-6d9966ee=""
                      href="https://s1.mi.com/m/faq/giving/index.html?project_id=44"
                      target="_blank"
                      class="support"
                      ><i data-v-6d9966ee="" class="iconfont"></i
                      ><em data-v-6d9966ee="">7天价格保护</em></a
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      swiper: [
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1644924818.17546007.png",
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1644895162.50177486.png",
      ],
    };
  },
};
</script>

<style lang="less">
.detail {
  text-align: left;
  ul {
    margin: 0;
    padding: 0;
  }
  .product-box {
    display: flex;
    justify-content: center;
    padding-top: 64px;
    padding-bottom: 24px;
    .img-left {
      flex: 1;
      position: relative;
    }
    .product-con {
      flex: 1;
      margin-left: 20px;
      h2 {
        margin: 10px 0;
        padding: 0;
        font-size: 48px;
        font-weight: 400;
        color: #212121;
      }
      .sale-desc {
        color: #b0b0b0;
        margin: 0;
        padding: 0;
        padding-top: 8px;
        line-height: 1.5;
      }
      .company-info {
        color: #ff6700;
        margin-bottom: 0;
      }
      .price-info {
        display: block;
        font-size: 18px;
        line-height: 1;
        color: #ff6700;
        padding: 12px 0 10px;
        span {
          display: inline-block;
        }
      }
      .address-box {
        margin: 20px 0;
      }
      .product-address {
        padding: 30px 50px;
        position: relative;
        background: #fafafa;
        border: 1px solid #e0e0e0;
        .iconfont {
          position: absolute;
          left: 20px;
          top: 26px;
          font-size: 20px;
          color: #999;
        }
        .address-info,
        .edit {
          display: inline-block;
        }
        span {
          display: inline;
          margin-right: 14px;
        }
        .edit {
          color: #ff6700;
          margin: 0;
        }
        .info {
          color: #b0b0b0;
          span {
            color: #ff6700;
            margin: 0;
          }
        }
      }
      .buy-option {
        .batch-box,
        .buy-box-child,
        .buy-box-mode {
          margin-bottom: 30px;
          position: relative;
        }
        .title {
          font-size: 18px;
        }
        li {
          margin-right: 12px;
          margin-top: 10px;
          line-height: 42px;
          height: 42px;
          position: relative;
          border: 1px solid #e0e0e0;
          list-style: none;
          cursor: pointer;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;
          float: left;
          width: 292px;
          font-size: 16px;
          text-align: center;
        }
        li.active,
        li:hover {
          z-index: 3;
          border-color: #ff6700;
        }
      }
      .selected-list {
        background: #f9f9fa;
        padding: 30px;
        margin-bottom: 30px;
        ul {
          padding: 0;
          margin: 0;
          li:first-child {
            margin-top: 0;
            list-style: none;
            line-height: 30px;
            color: #616161;
            del,
            span {
              float: right;
            }
          }
        }
        .total-price {
          color: #ff6700;
          font-size: 24px;
          padding-top: 20px;
        }
      }
      .btn-box {
        margin: 10px 0 20px 0;
        .sale-btn {
          display: inline-block;
          margin-right: 10px;
          .btn {
            display: inline-block;
            width: 158px;
            height: 38px;
            padding: 0;
            margin: 0;
            border: 1px solid #b0b0b0;
            font-size: 14px;
            line-height: 38px;
            text-align: center;
            color: #b0b0b0;
            cursor: pointer;
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
          }
          .btn {
            width: 298px;
            height: 52px;
            line-height: 52px;
            font-size: 16px;
          }
          .btn-primary {
            background: #ff6700;
            border-color: #ff6700;
            color: #fff;
          }
        }
      }
      .after-sale-info {
        span[data-v-6d9966ee] {
          display: inline-block;
        }
        a[data-v-6d9966ee] {
          display: inline-block;
          margin-right: 15px;
          line-height: 30px;
          margin-bottom: 10px;
          cursor: default;
          white-space: nowrap;
          color: #b0b0b0;
          i[data-v-6d9966ee] {
            font-size: 20px;
            display: inline-block;
            font-style: normal;
            vertical-align: middle;
          }
          em[data-v-6d9966ee] {
            font-style: normal;
            display: inline-block;
            margin-left: 2px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .carousel {
    width: 1000px;
    height: 400px;
  }
}
</style>
