<template>
  <div class="personal">
    <div class="box-bd">
      <div class="portal-main clearfix">
        <div class="user-card">
          <h2 class="username">2643902308</h2>
          <p class="tip">早上好～</p>
          <img
            src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg"
            alt="2643902308"
            class="avatar"
          />
        </div>
        <div class="user-actions">
          <ul class="action-list">
            <li>账户安全：<span class="level level-2">普通</span></li>
            <li>
              绑定手机：
              <span><span class="tel">182******41</span></span>
            </li>
            <li>
              绑定邮箱：
              <span><span class="tel"></span>未绑定</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="portal-sub">
        <ul class="info-list clearfix">
          <li>
            <h3>待支付的订单：<span class="num">0</span></h3>
            <a href="//www.mi.com/user/orderList#type=7"
              >查看待支付订单<i class="iconfont">&#xe617;</i></a
            ><img src="//s01.mifile.cn/i/user/portal-icon-1.png" alt="" />
          </li>
          <li>
            <h3>待收货的订单：<span class="num">0</span></h3>
            <a href="//www.mi.com/user/orderList#type=8"
              >查看待收货订单<i class="iconfont">&#xe617;</i></a
            ><img src="//s01.mifile.cn/i/user/portal-icon-2.png" alt="" />
          </li>
          <li>
            <h3>待评价商品数：<span class="num">0</span></h3>
            <a href="//www.mi.com/user/comment"
              >查看待评价商品<i class="iconfont">&#xe617;</i></a
            ><img src="//s01.mifile.cn/i/user/portal-icon-3.png" alt="" />
          </li>
          <li>
            <h3>喜欢的商品：<span class="num">0</span></h3>
            <a href="//www.mi.com/user/favorite"
              >查看喜欢的商品<i class="iconfont">&#xe617;</i></a
            ><img src="//s01.mifile.cn/i/user/portal-icon-4.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.personal {
  text-align: left;
  .portal-main {
    padding-top: 50px;
    border-bottom: 1px solid #ccc;
  }
  .user-card {
    position: relative;
    float: left;
    width: 30%;
    height: 280px;
    padding-left: 330px;
    padding-top: 100px;
    .username {
      margin: 0;
      font-size: 40px;
      font-weight: 400;
      color: #616161;
    }
  }
  .tip {
    margin: 0 0 10px;
    color: #b0b0b0;
  }
  .avatar {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4px;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
  .user-actions {
    float: right;
    width: 50%;
    margin-top: 100px;
    font-size: 30px;
    .action-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      color: #757575;
      li {
        position: relative;
        padding: 6px 0;
        line-height: 60px;
        .level-2 {
          color: #ffac13;
        }
      }
    }
  }
  .portal-sub {
    .info-list {
      margin: 0;
      padding: 60px 0 0;
      list-style-type: none;
      color: #757575;
      li {
        position: relative;
        float: left;
        width: 552px;
        height: 130px;
        padding-left: 250px;
        padding-top: 60px;
        margin-left: 28px;
        margin-bottom: 160px;
        h3 {
          margin: 0;
          font-size: 36px;
          font-weight: 400;
          .num {
            color: #ff6700;
          }
        }
        a {
          color: #757575;
          font-size: 30px;
        }
        .iconfont {
          font-size: 37px;
          line-height: 37px;
          vertical-align: -1px;
        }
        img {
          position: absolute;
          left: -10px;
          top: -10px;
        }
      }
    }
  }
}
</style>