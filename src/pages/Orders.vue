<template>
  <div class="orders">
    <div class="uc-box uc-main-box">
      <div class="uc-content-box order-list-box">
        <div class="box-hd">
          <h1 class="title">我的订单</h1>
          <div class="more clearfix">
            <ul class="filter-list">
              <li class="first active">
                <a data-stat-id="57897755adc8c1e0" href="javascript:void(0);"
                  >全部有效订单</a
                >
              </li>
              <li class=""><a href="javascript:void(0);"> 待支付 </a></li>
              <li class=""><a href="javascript:void(0);"> 待收货 </a></li>
              <li class="">
                <a data-stat-id="1591d5f9a89e8bb6" href="javascript:void(0);"
                  >订单回收站</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="box-bd">
          <div>
            <ul class="order-list">
              <li class="uc-order-item uc-order-item-pay">
                <div class="order-detail">
                  <div class="order-summary">
                    <div class="order-status">等待付款</div>
                  </div>
                  <table class="order-detail-table">
                    <thead>
                      <tr>
                        <th class="col-main">
                          <p class="caption-info">
                            2022年03月11日 16:24
                            <span class="sep">|</span>
                            曾令椿
                            <span class="sep">|</span>
                            订单号：<a
                              href="//www.mi.com/user/orderView?order_id=5220311720505039"
                              >5220311720505039</a
                            ><span class="sep">|</span>
                            在线支付
                          </p>
                        </th>
                        <th class="col-sub">
                          <p class="caption-price">
                            应付金额：
                            <span class="num">3899.00</span>元
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="order-items">
                          <ul class="goods-list">
                            <li>
                              <div
                               
                                class="figure figure-thumb"
                              >
                                <a
                                 
                                  href="//www.mi.com/buy?product_id=1220600015"
                                  target="_blank"
                                  ><img
                                   
                                    src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1644924818.17546007.png?thumb=1&amp;w=160&amp;h=160"
                                    width="80"
                                    height="80"
                                    alt="Redmi K50 电竞版 12GB+256GB 银翼"
                                /></a>
                              </div>
                              <p class="name">
                                <a
                                 
                                  href="//www.mi.com/buy?product_id=1220600015"
                                  target="_blank"
                                  >Redmi K50 电竞版 12GB+256GB 银翼</a
                                >
                              </p>
                              <p class="price">3899元 × 1</p>
                            </li>
                          </ul>
                        </td>
                        <td class="order-actions">
                          <el-button type="primary" class="btn">立即付款</el-button>
                          <el-button class="btn">订单详情</el-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.orders {
  text-align: left;
  .uc-main-box {
    padding: 36px 0;
  }
  a {
    color: #757575;
  }
  .ndash,
  .sep {
    margin: 0 0.25em;
    font-family: sans-serif;
  }
  .uc-box {
    background: #fff;
    .uc-content-box {
      margin: 0 48px;
      .title {
        margin: 0;
        font-size: 50px;
        font-weight: 400;
        line-height: 136px;
        color: #757575;
      }
      .more {
        border-bottom: 0;
      }
      .filter-list {
        float: left;
        margin: 0;
        padding: 18px 0;
        list-style-type: none;
        font-size: 16px;
        line-height: 1.25;
      }
      .box-hd {
        .filter-list {
          li.active,
          li.active a,
          li.tab-active,
          li.tab-active a {
            color: #ff6700;
          }
          li.first {
            padding-left: 0;
            border-left: 0;
          }
          li {
            float: left;
            padding: 0 60px;
            border-left: 1px solid #e0e0e0;
            color: #757575;
            font-size: 36px;
          }
          a {
            color: #757575;
            cursor: pointer;
          }
        }
      }
      .box-bd {
        margin-top: 30px;
        .order-list {
          margin: 0;
          padding: 20px 0;
          list-style-type: none;
          .uc-order-item {
            margin-bottom: 40px;
            border: 1px solid #e0e0e0;
            .order-status {
              font-size: 36px;
            }
          }
          .order-summary {
            padding: 50px 60px 2px;
          }
          .uc-order-item-pay {
            border-color: #ff6700;
            .order-desc,
            .order-status {
              color: #ff6700;
            }
            .order-summary {
              background: #fffaf7;
            }
          }
          .uc-order-item {
            position: relative;
          }
          .order-detail-table {
            width: 100%;
            th {
              background: #fffaf7;
              border-bottom: 1px solid #feccac;
              p {
                margin: 0;
              }
              .sep {
                color: #e0e0e0;
              }
              .num {
                height: 36px;
                margin-right: 10px;
                font-size: 50px;
                font-weight: 200;
                color: #333;
              }
            }
            th.col-main {
              padding-right: 20px;
              font-size: 30px;
            }
            th.col-sub {
              width: 480px;
              padding-left: 20px;
              text-align: right;
              font-size: 30px;
            }
            th {
              height: 56px;
              padding: 0 60px 48px;
              border-bottom: 1px solid #e0e0e0;
              font-weight: 400;
              text-align: left;
              color: #757575;
              vertical-align: bottom;
            }
            td {
              padding: 0 60px;
            }
            .order-actions {
              padding-top: 40px;
              text-align: right;
              vertical-align: top;
              .btn {
                display: block;
                margin: 0 0 20px auto;
                height: 60px;
                width: 220px;
                font-weight: 400;
              }
            }
          }
          .goods-list {
            margin: 0;
            padding: 20px 0;
            list-style-type: none;
            li {
              position: relative;
              height: 88px;
              margin: 20px 0;
              padding: 1.3rem 0.96rem 0.96rem 5.666667rem;
              line-height: 44px;
              color: #333;
              font-size: 30px;
            }
            .figure-thumb {
              position: absolute;
              left: 0;
              top: 0;
              img {
                border: 0;
              }
            }
            .name {
              margin: 0;
              a {
                color: #333;
              }
            }
            .price {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>