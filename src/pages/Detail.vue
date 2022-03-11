<template>
  <div class="detail">
    <div class="mi-detail">
      <div class="page">
        <div class="page-box">
          <div class="page-info">
            <div class="product-box container">
              <div class="img-left">
                <el-carousel arrow="always" :autoplay="false" class="carousel">
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
                <div class="selected-list">
                  <ul>
                    <li>Redmi K50 电竞版 12GB+256GB 银翼<span>3899元</span></li>
                  </ul>
                  <div class="total-price">总计：3899元</div>
                </div>
                <div class="btn-box">
                  <div class="sale-btn">
                    <a
                      data-spm="product_15615.add_cart.1"
                      href="javascript:void(0);"
                      class="btn btn-primary"
                      data-params='""'
                      >加入购物车</a
                    >
                  </div>
                </div>
                <div class="after-sale-info">
                  <span
                    ><a href="javascript:void(0);" class="support"
                      ><i class="iconfont">&#xe8e3;</i><em>小米自营</em></a
                    ></span
                  ><span
                    ><a
                      ><i class="iconfont">&#xe8e3;</i><em>小米发货</em></a
                    ></span
                  ><span
                    ><a href="javascript:void(0);" class="support"
                      ><i class="iconfont">&#xe8e3;</i><em>7天无理由退货</em></a
                    ></span
                  ><span
                    ><a class="support"
                      ><i class="iconfont">&#xe8e3;</i><em>运费说明</em></a
                    ></span
                  ><span
                    ><a class="support"
                      ><i class="iconfont">&#xe8e3;</i><em>企业信息</em></a
                    ></span
                  ><span
                    ><a
                      href="https://s1.mi.com/m/faq/giving/index.html?project_id=44"
                      target="_blank"
                      class="support"
                      ><i class="iconfont">&#xe8e3;</i><em>7天价格保护</em></a
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
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1644895162.50177486.png"
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
        margin: 10px 0 20px;
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
        font-size: 32px;
      }
      .company-info {
        color: #ff6700;
        margin: 20px 0;
        font-size: 28px;
      }
      .price-info {
        display: block;
        font-size: 40px;
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
        padding: 70px 120px;
        position: relative;
        background: #fafafa;
        border: 1px solid #e0e0e0;
        .iconfont {
          position: absolute;
          left: 40px;
          top: 74px;
          font-size: 36px;
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
          line-height: 110px;
          height: 110px;
          position: relative;
          border: 1px solid #e0e0e0;
          list-style: none;
          cursor: pointer;
          -webkit-transition: all 0.2s ease;
          transition: all 0.2s ease;
          float: left;
          width: 18.391rem;
          font-size: 32px;
          text-align: center;
        }
        li:nth-child(2n) {
          margin-right: 0;
        }
        li.active,
        li:hover {
          z-index: 3;
          border-color: #ff6700;
          color: #ff6700;
        }
      }
      .selected-list {
        background: #f9f9fa;
        padding: 60px;
        margin-bottom: 50px;
        ul {
          padding: 0;
          margin: 0;
          li {
            list-style: none;
            line-height: 30px;
            color: #616161;
            font-size: 26px;
          }
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
          font-size: 50px;
          padding-top: 80px;
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
            width: 700px;
            height: 120px;
            line-height: 120px;
            font-size: 38px;
            font-weight: 400;
          }
          .btn-primary {
            background: #ff6700;
            border-color: #ff6700;
            color: #fff;
          }
        }
      }
      .after-sale-info {
        span {
          display: inline-block;
        }
        a {
          display: inline-block;
          margin-right: 15px;
          line-height: 30px;
          margin-bottom: 10px;
          cursor: default;
          white-space: nowrap;
          color: #b0b0b0;
          i {
            font-size: 36px;
            display: inline-block;
            font-style: normal;
            vertical-align: middle;
          }
          em {
            font-style: normal;
            display: inline-block;
            margin-left: 10px;
            vertical-align: middle;
            font-size: 30px;
          }
        }
      }
    }
  }
  .carousel {
    width: 1200px;
    height: 1200px;
    margin: 0 auto;
    .el-carousel__button {
      width: 80px;
      height: 5px;
      background-color: #b2d4b6;
    }
  }
  .el-carousel__container {
    position: relative;
    height: 1200px;
    .el-carousel__arrow {
      background-color: rgba(0, 0, 0, 0);
      height: 140px;
      width: 80px;
    }
    .el-icon {
      height: 140px;
      width: 80px;
      line-height: 140px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      fill: currentColor;
      color: #cdbcbc;
      font-size: 60px;
    }
    img {
      width: 1200px;
      height: 1200px;
    }
  }
}
</style>
