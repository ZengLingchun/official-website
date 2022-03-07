<template>
  <div class="order">
    <div class="container">
      <div class="checkout-wrap">
        <div class="loading" style="display: none">
          <div class="loader"></div>
        </div>
        <div class="checkout-main" style="">
          <div class="checkout-detail">
            <div class="detail-section address-detail">
              <div class="address-header">
                <span class="header-title">收货地址</span>
              </div>

              <div
                class="address-list show-less-list"
                address-tip-info="[object Object]"
                style=""
              >
                <div class="address-item active">
                  <div class="address-info">
                    <div class="name">
                      曾令椿<span style="color: rgb(176, 176, 176)">11</span>
                    </div>
                    <div class="tel">182****3241</div>
                    <div class="address-con">
                      <span>广东</span><span>深圳市</span><span>南山区</span
                      ><span>桃源街道</span><span class="info">800栋9</span>
                    </div>
                    <div class="address-action show-action">
                      <span>修改</span>
                    </div>
                  </div>
                  <div class="address-info-solt" style=""></div>
                </div>
                <div class="address-item">
                  <div class="add-desc">
                    <i class="iconfont iconfont-plus"></i
                    ><span>添加新地址</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="detail-section">
              <div class="detail-header">商品及优惠券</div>
              <div class="goods-list">
                <div class="good-item">
                  <div class="item-desc good-img">
                    <img
                      src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1640679184.41875597.png?thumb=1&amp;w=60&amp;h=60"
                    />
                  </div>
                  <div class="item-desc good-name">
                    <a
                      href="//www.mi.com/buy?product_id=1215000053"
                      target="_blank"
                      ><span>Xiaomi 12 12GB+256GB 黑色</span></a
                    >
                  </div>
                  <div class="item-desc price-box">
                    <div class="item-desc good-price">4399元 x 1</div>
                    <div class="item-desc good-status"></div>
                    <div class="item-desc good-total">4399元</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="detail-section footer-detail clearfix">
              <div class="footer-address">
                <div class="selecter-address">
                  <div class="address-name">曾令椿 182****3241</div>
                  <div class="address-desc">
                    <span>广东 深圳市 南山区 800栋9</span><a> 修改</a>
                  </div>
                </div>
              </div>
              <div class="handle-action">
                <div class="operating-button">
                  <a
                    data-log_code="bid=3515489.8&amp;bpm=25.83.3513216.1&amp;next=26.82"
                    href="javascript:void(0);"
                    class="btn btn-primary"
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','bid=3515489.8&amp;bpm=25.83.3513216.1&amp;next=26.82','javascript:void(0);','&quot;&quot;']);"
                    >立即下单</a
                  ><a href="javascript:void(0);" class="btn btn-return"
                    >返回购物车</a
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

<style lang="less">
.order {
  background: #f5f5f5;
  text-align: left;
  padding: 80px 0 120px;
  .container {
    margin: 0 auto;
    background: #fff;
  }
  .checkout-detail {
    position: relative;
    padding: 100px 0 0;
    .detail-section {
      position: relative;
      padding: 0 48px;
      .detail-header {
        color: #333;
        font-size: 36px;
        line-height: 80px;
      }
    }
    .address-detail .address-header {
      margin: 0 0 40px;
      .header-title {
        color: #333;
        font-size: 36px;
        line-height: 40px;
      }
    }
    .footer-detail {
      padding: 40px 96px;
      border-top: 2px solid #f5f5f5;
      .footer-address {
        float: left;
        font-size: 32px;
        .selecter-address {
          line-height: 50px;
          color: #424242;
          a {
            color: #ff6700;
            cursor: pointer;
          }
        }
      }
      .handle-action {
        float: right;
        .btn {
          display: inline-block;
          width: 400px;
          height: 100px;
          padding: 0;
          margin: 0;
          border: 1px solid #b0b0b0;
          font-size: 30px;
          line-height: 100px;
          text-align: center;
          color: #b0b0b0;
          cursor: pointer;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
        }
        .btn {
          float: right;
          margin-left: 60px;
          vertical-align: top;
        }
        .btn-primary {
          background: #ff6700;
          border-color: #ff6700;
          color: #fff;
        }
      }
    }
  }
  .address-list {
    .address-item.active,
    .address-item.active:hover {
      border-color: #ff6700;
    }
    .address-action,
    .address-info,
    .telephone {
      line-height: 50px;
      color: #757575;
    }
    .address-item {
      display: inline-block;
      width: 536px;
      height: 400px;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      position: relative;
      margin-right: 34px;
      margin-bottom: 40px;
      vertical-align: top;
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }
    .address-info {
      padding: 30px 48px 0;
    }
    .name {
      font-size: 36px;
      color: #333;
      line-height: 60px;
      margin-bottom: 20px;
      span {
        float: right;
        font-size: 28px;
        color: rgb(176, 176, 176);
      }
    }
    .tel {
      font-size: 20px;
    }
    .address-con {
      span {
        display: inline-block;
        margin-right: 3px;
        word-wrap: break-word;
        font-size: 20px;
        color: #757575;
      }
      .info {
        width: 100%;
      }
    }
    .show-action.address-action {
      opacity: 1;
    }
    .address-action {
      text-align: right;
      position: absolute;
      right: 48px;
      bottom: 20px;
      opacity: 0;
      span {
        color: #ff6700;
        margin-left: 20px;
      }
    }
  }
  .goods-list {
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
    .good-item {
      position: relative;
      padding: 30px 0;
      .item-desc {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 1;
        color: #424242;
        vertical-align: middle;
      }
      .good-img {
        width: 60px;
        height: 60px;
        margin: 0 20px 0 0;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .good-name {
        width: 1300px;
        a {
          color: #424242;
        }
        .good-price {
          width: 300px;
          text-align: center;
        }
      }
      .good-total {
        width: 380px;
        text-align: right;
        color: #ff6701;
      }
      .good-status {
        width: 600px;
        text-align: center;
      }
    }
  }
}
</style>