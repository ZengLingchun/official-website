<template>
  <div class="appContent">
    <div class="header">
      <div id="J_topbarBannerWrapper"></div>
      <div class="site-topbar">
        <div class="container">
          <div id="J_miniCartTrigger" class="topbar-cart">
            <router-link to="/cart" class="cart-mini">
              <em class="iconfont">&#xe61a;</em>
              <em class="iconfont-cart-full hide"></em>购物车<span
                class="cart-mini-num J_cartNum"
                >（{{ 0 }}）</span
              >
            </router-link>
            <div
              id="J_miniCartMenu"
              class="cart-menu hide"
              style="height: auto"
            >
              <div class="menu-content">
                <div class="loading"><div class="loader"></div></div>
                <ul id="J_miniCartList" class="cart-list hide">
                  <li>
                    <div class="cart-item clearfix first">
                      <a
                        class="thumb"
                        href="//www.mi.com/buy?product_id=1215000053"
                        ><img
                          alt=""
                          src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1640679184.41875597.png?width=60&amp;height=60" /></a
                      ><a
                        class="name"
                        href="//www.mi.com/buy?product_id=1215000053"
                        >Xiaomi 12 12GB+256GB 黑色</a
                      ><span class="price">4399元 × 1</span
                      ><a
                        class="btn-del J_delItem"
                        href="javascript: void(0);"
                        data-gid="2215000076_0_buy"
                        data-isbigtap="false"
                        ><em class="iconfont-close"></em
                      ></a>
                    </div>
                  </li>
                </ul>
                <div id="J_miniCartListTotal" class="cart-total clearfix hide">
                  <span class="total"
                    >共 <em>1</em> 件商品<span class="price"
                      ><em>4399</em>元</span
                    ></span
                  >
                  <a
                    href="//www.mi.com/buy/cart"
                    class="btn btn-primary btn-cart"
                    >去购物车结算</a
                  >
                </div>
                <div class="msg msg-error hide"></div>
                <div class="msg msg-empty hide">
                  购物车中还没有商品，赶紧选购吧！
                </div>
              </div>
            </div>
          </div>
          <div id="J_siteUserInfo" class="topbar-info">
            <router-link class="link" to="/login">登录</router-link>
            <span class="sep">|</span>
            <a class="link">注册</a>
            <span class="sep">|</span>
            <span class="message">
              <a class="J_needAgreement"
                >消息通知<i class="J_miMessageTotal"></i
              ></a>
            </span>
          </div>
        </div>
      </div>
      <div class="site-header">
        <div class="container">
          <div class="header-logo">
            <a href="//www.mi.com/index.html" title="小米官网" class="logo ir"
              >小米官网</a
            >
          </div>
          <div class="header-nav" style="display: none">
            <ul class="nav-list J_navMainList clearfix">
              <li id="J_navCategory" class="nav-category">
                <a href="//www.mi.com/category/list" class="link-category"
                  ><span class="text">全部商品分类</span></a
                >
                <div class="site-category" style="display: block">
                  <ul
                    id="J_categoryList"
                    class="
                      site-category-list
                      clearfix
                      site-category-list-custom
                    "
                  >
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476792.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        手机
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-4">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/mi12pro"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.2"
                              data-spm="cms_10530.3476792.2"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.2','https://www.mi.com/mi12pro','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi12pro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c0553468a73cc445012577d8993dfc9.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 12 Pro</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mi12"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.3"
                              data-spm="cms_10530.3476792.3"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.3','https://www.mi.com/mi12','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi12"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae8f6a46838f737d69290f12fd95de35.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 12</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mi12x"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.4"
                              data-spm="cms_10530.3476792.4"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.4','https://www.mi.com/mi12x','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi12x"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a7002e89afcdc705744bb395ad29ca4.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 12X</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mi11le-5g-ne"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.5"
                              data-spm="cms_10530.3476792.5"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.5','https://www.mi.com/mi11le-5g-ne','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi11le-5g-ne"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ea5e610875460bc0cda0e45f4822ec.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >Xiaomi 11 青春活力版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redminote11pro"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.6"
                              data-spm="cms_10530.3476792.6"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.6','https://www.mi.com/redminote11pro','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredminote11pro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a95d59ec8c9c6ae7061f314eb4901e7c.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Note 11 Pro 系列</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redminote11-4g"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.7"
                              data-spm="cms_10530.3476792.7"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.7','https://www.mi.com/redminote11-4g','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredminote11-4g"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2c570b7cd666114a7d351a1dd10a527.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Note 11 4G</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/redminote11"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.8"
                              data-spm="cms_10530.3476792.8"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.8','https://www.mi.com/redminote11','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredminote11"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca3caca774dc8be0a453c90d1fa58e13.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Note 11 5G</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redmik40"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.9"
                              data-spm="cms_10530.3476792.9"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.9','https://www.mi.com/redmik40','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredmik40"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi K40</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/xiaomicivi"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.10"
                              data-spm="cms_10530.3476792.10"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.10','https://www.mi.com/xiaomicivi','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fxiaomicivi"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f33903e1162959f500360a39896f2306.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi Civi</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mix4"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.11"
                              data-spm="cms_10530.3476792.11"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.11','https://www.mi.com/mix4','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmix4"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa2bae1f43611e80a8e4877719c76bdb.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi MIX 4</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mixfold"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.12"
                              data-spm="cms_10530.3476792.12"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.12','https://www.mi.com/mixfold','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmixfold"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi MIX FOLD</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mi11ultra"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.13"
                              data-spm="cms_10530.3476792.13"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.13','https://www.mi.com/mi11ultra','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi11ultra"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 11 Ultra</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/mi11Pro"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.14"
                              data-spm="cms_10530.3476792.14"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.14','https://www.mi.com/mi11Pro','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi11Pro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 11 Pro</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14798"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.15"
                              data-spm="cms_10530.3476792.15"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.15','https://www.mi.com/buy?product_id=14798','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 11</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mi10s"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.16"
                              data-spm="cms_10530.3476792.16"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.16','https://www.mi.com/mi10s','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi10s"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 10S</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14031"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.17"
                              data-spm="cms_10530.3476792.17"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.17','https://www.mi.com/buy?product_id=14031','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab956ee82c24bdd83d21bc212aad3eb5.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">K40 游戏增强版</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redmik40ultra-k40pro"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.18"
                              data-spm="cms_10530.3476792.18"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.18','https://www.mi.com/redmik40ultra-k40pro','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredmik40ultra-k40pro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">K40 Pro 系列</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14210"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.19"
                              data-spm="cms_10530.3476792.19"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.19','https://www.mi.com/buy?product_id=14210','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/79e2935264bf9247aa7512e330112820.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Note 10 5G</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-4
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14206"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.20"
                              data-spm="cms_10530.3476792.20"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.20','https://www.mi.com/buy?product_id=14206','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Note 10 Pro</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy/detail?product_id=12511"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.21"
                              data-spm="cms_10530.3476792.21"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.21','https://www.mi.com/buy/detail?product_id=12511','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fbuy%252Fdetail%253Fproduct_id=12511"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi 9A</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mi11youth"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.22"
                              data-spm="cms_10530.3476792.22"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.22','https://www.mi.com/mi11youth','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmi11youth"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi 11 青春</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/blackshark4spro"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.23"
                              data-spm="cms_10530.3476792.23"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.23','https://www.mi.com/blackshark4spro','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fblackshark4spro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b45cbcf2bbe244982b2e865fa5077a52.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">黑鲨4S Pro</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/blackshark4s"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.24"
                              data-spm="cms_10530.3476792.24"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.24','https://www.mi.com/blackshark4s','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fblackshark4s"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/958d5b4cf1f6a755b97b797f4cec67ed.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">黑鲨4S</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redminote9-4g"
                              data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.25"
                              data-spm="cms_10530.3476792.25"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476792.25','https://www.mi.com/redminote9-4g','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredminote9-4g"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi Note 9 4G</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476793.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        电视
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-4">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=15101"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.2"
                              data-spm="cms_10530.3476793.2"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.2','https://www.mi.com/buy?product_id=15101','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi X65 2022款</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=15502"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.3"
                              data-spm="cms_10530.3476793.3"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.3','https://www.mi.com/buy?product_id=15502','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/943995e8d1b1a884e123aec25cc1f8b8.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米拍拍4K高清投屏器</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=15100"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.4"
                              data-spm="cms_10530.3476793.4"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.4','https://www.mi.com/buy?product_id=15100','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b656495821144d92bd932d91eedcf659.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi X55 2022款</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14778"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.5"
                              data-spm="cms_10530.3476793.5"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.5','https://www.mi.com/buy?product_id=14778','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50194366cfebbc7c82489d0094c1f944.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米电视6 55” OLED</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14779"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.6"
                              data-spm="cms_10530.3476793.6"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.6','https://www.mi.com/buy?product_id=14779','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50194366cfebbc7c82489d0094c1f944.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米电视6 65” OLED</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14781"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.7"
                              data-spm="cms_10530.3476793.7"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.7','https://www.mi.com/buy?product_id=14781','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b91c9ef670fa1c12eddf23b209f9ff33.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视 大师 77” OLED</span
                              ></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14437"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.8"
                              data-spm="cms_10530.3476793.8"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.8','https://www.mi.com/buy?product_id=14437','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视6 至尊版 55英寸</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14438"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.9"
                              data-spm="cms_10530.3476793.9"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.9','https://www.mi.com/buy?product_id=14438','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视6 至尊版 65英寸</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14439"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.10"
                              data-spm="cms_10530.3476793.10"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.10','https://www.mi.com/buy?product_id=14439','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视6 至尊版 75英寸</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14416"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.11"
                              data-spm="cms_10530.3476793.11"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.11','https://www.mi.com/buy?product_id=14416','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视 ES43 2022款</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14417"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.12"
                              data-spm="cms_10530.3476793.12"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.12','https://www.mi.com/buy?product_id=14417','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视 ES55 2022款</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14418"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.13"
                              data-spm="cms_10530.3476793.13"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.13','https://www.mi.com/buy?product_id=14418','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视 ES65 2022款</span
                              ></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14419"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.14"
                              data-spm="cms_10530.3476793.14"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.14','https://www.mi.com/buy?product_id=14419','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米电视 ES75 2022款</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86Pro"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.15"
                              data-spm="cms_10530.3476793.15"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.15','//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86Pro','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86Pro","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252585%2525A8%2525E9%25259D%2525A2%2525E5%2525B1%25258F%2525E7%252594%2525B5%2525E8%2525A7%252586Pro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d219d8b9c4a74eda4ae6c0222d194cd2.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">金属全面屏电视</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=12049"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.16"
                              data-spm="cms_10530.3476793.16"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.16','https://www.mi.com/buy?product_id=12049','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >大师电视 65英寸 OLED</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=11843"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.17"
                              data-spm="cms_10530.3476793.17"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.17','https://www.mi.com/buy?product_id=11843','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1df560d16cc983b0f34d24fc484bd697.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米电视4A 60英寸</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=12158"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.18"
                              data-spm="cms_10530.3476793.18"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.18','https://www.mi.com/buy?product_id=12158','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi 智能电视 X55</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.19"
                              data-spm="cms_10530.3476793.19"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.19','//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252585%2525A8%2525E9%25259D%2525A2%2525E5%2525B1%25258F%2525E7%252594%2525B5%2525E8%2525A7%252586"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米全面屏电视</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-4
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=11345"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.20"
                              data-spm="cms_10530.3476793.20"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.20','https://www.mi.com/buy?product_id=11345','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce75f4a3fef148b6729061a18f994aa7.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">米家激光投影仪</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redmitv/98/"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.21"
                              data-spm="cms_10530.3476793.21"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.21','https://www.mi.com/redmitv/98/','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredmitv%252F98%252F"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >Redmi 智能电视 MAX 98"</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mitv5/75/"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.22"
                              data-spm="cms_10530.3476793.22"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.22','https://www.mi.com/mitv5/75/','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmitv5%252F75%252F"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米电视5 75英寸</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10764"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.23"
                              data-spm="cms_10530.3476793.23"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.23','https://www.mi.com/buy?product_id=10764','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6797917392e912577135d9eb8ad92f1f.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米电视4A 70英寸</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=8993"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.24"
                              data-spm="cms_10530.3476793.24"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.24','https://www.mi.com/buy?product_id=8993','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cb5791161d8b25897f60385f0ec7ab2.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米电视4S 75英寸</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%BF%80%E5%85%89%E6%8A%95%E5%BD%B1"
                              data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.25"
                              data-spm="cms_10530.3476793.25"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476793.25','//www.mi.com/search?keyword=%E6%BF%80%E5%85%89%E6%8A%95%E5%BD%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%BF%80%E5%85%89%E6%8A%95%E5%BD%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%2525BF%252580%2525E5%252585%252589%2525E6%25258A%252595%2525E5%2525BD%2525B1"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fa264c15d3829e6de4283a552651e22.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">激光投影电视</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476794.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        笔记本 平板
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-4">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000321"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.2"
                              data-spm="cms_10530.3476794.2"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.2','https://www.mi.com/buy?product_id=10000321','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >RedmiBook Pro 14 增强版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000361"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.3"
                              data-spm="cms_10530.3476794.3"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.3','https://www.mi.com/buy?product_id=10000361','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69901cac7084025d81300155e9beb5f2.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米笔记本 Pro 14 锐龙版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000320"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.4"
                              data-spm="cms_10530.3476794.4"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.4','https://www.mi.com/buy?product_id=10000320','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >RedmiBook Pro 15 增强版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mibook/14prox"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.5"
                              data-spm="cms_10530.3476794.5"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.5','https://www.mi.com/mibook/14prox','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmibook%252F14prox"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/903da48ebe975727aeb5ef76186d03cf.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米笔记本 Pro X 14</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redmibook/game-intel"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.6"
                              data-spm="cms_10530.3476794.6"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.6','https://www.mi.com/redmibook/game-intel','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredmibook%252Fgame-intel"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/994d6bcece6aa49d9c6cb709f4d9344a.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >Redmi G 2021 Intel版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redmibook/game-amd"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.7"
                              data-spm="cms_10530.3476794.7"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.7','https://www.mi.com/redmibook/game-amd','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredmibook%252Fgame-amd"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/90bbbedc36c06c931c471d3587425914.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi G 2021 AMD版</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/xiaomipad5"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.8"
                              data-spm="cms_10530.3476794.8"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.8','https://www.mi.com/xiaomipad5','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fxiaomipad5"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8760786dbdaff5162ba9b0c3c61a7ab.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米平板5</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/xiaomipad5pro"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.9"
                              data-spm="cms_10530.3476794.9"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.9','https://www.mi.com/xiaomipad5pro','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fxiaomipad5pro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d63d8ac9dfb64bf7ca84c7d674047f19.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米平板5 Pro</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/xiaomipad5pro5G"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.10"
                              data-spm="cms_10530.3476794.10"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.10','https://www.mi.com/xiaomipad5pro5G','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fxiaomipad5pro5G"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b34e14c8896df008e17e73e5cfdd3e2c.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米平板5 Pro 5G</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000319"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.11"
                              data-spm="cms_10530.3476794.11"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.11','https://www.mi.com/buy?product_id=10000319','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米笔记本 Pro 14 增强版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000318"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.12"
                              data-spm="cms_10530.3476794.12"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.12','https://www.mi.com/buy?product_id=10000318','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米笔记本 Pro 15 增强版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000301"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.13"
                              data-spm="cms_10530.3476794.13"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.13','https://www.mi.com/buy?product_id=10000301','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e69fe4849e3e42bd4394e2be04a5c82.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米笔记本 Pro X 15</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000297"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.14"
                              data-spm="cms_10530.3476794.14"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.14','https://www.mi.com/buy?product_id=10000297','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >RedmiBook Pro 14 锐龙版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000298"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.15"
                              data-spm="cms_10530.3476794.15"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.15','https://www.mi.com/buy?product_id=10000298','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >RedmiBook Pro 15 锐龙版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000299"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.16"
                              data-spm="cms_10530.3476794.16"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.16','https://www.mi.com/buy?product_id=10000299','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >小米笔记本 Pro 15 锐龙版</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000284"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.17"
                              data-spm="cms_10530.3476794.17"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.17','https://www.mi.com/buy?product_id=10000284','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米笔记本Pro 15</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000285"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.18"
                              data-spm="cms_10530.3476794.18"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.18','https://www.mi.com/buy?product_id=10000285','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米笔记本Pro 14</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=10000253"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.19"
                              data-spm="cms_10530.3476794.19"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.19','https://www.mi.com/buy?product_id=10000253','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">RedmiBook Air 13</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-4
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E9%94%AE%E7%9B%98"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.20"
                              data-spm="cms_10530.3476794.20"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.20','//www.mi.com/search?keyword=%E9%94%AE%E7%9B%98','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E9%94%AE%E7%9B%98","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E9%252594%2525AE%2525E7%25259B%252598"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eb7e33b11443f6927e2035eca7c3d9e.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">键鼠套装</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E9%BC%A0%E6%A0%87"
                              data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.21"
                              data-spm="cms_10530.3476794.21"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476794.21','//www.mi.com/search?keyword=%E9%BC%A0%E6%A0%87','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E9%BC%A0%E6%A0%87","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E9%2525BC%2525A0%2525E6%2525A0%252587"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">鼠标</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476795.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        家电
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-4">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.2"
                              data-spm="cms_10530.3476795.2"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.2','//www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252586%2525B0%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">冰箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.3"
                              data-spm="cms_10530.3476795.3"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.3','//www.mi.com/search?keyword=%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525AB%25258B%2525E5%2525BC%25258F%2525E7%2525A9%2525BA%2525E8%2525B0%252583"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">立式空调</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%A3%81%E6%8C%82%E7%A9%BA%E8%B0%83"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.4"
                              data-spm="cms_10530.3476795.4"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.4','//www.mi.com/search?keyword=%E5%A3%81%E6%8C%82%E7%A9%BA%E8%B0%83','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%A3%81%E6%8C%82%E7%A9%BA%E8%B0%83","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525A3%252581%2525E6%25258C%252582%2525E7%2525A9%2525BA%2525E8%2525B0%252583"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">壁挂空调</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.5"
                              data-spm="cms_10530.3476795.5"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.5','//www.mi.com/search?keyword=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%2525BB%25259A%2525E7%2525AD%252592%2525E6%2525B4%252597%2525E8%2525A1%2525A3%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">滚筒洗衣机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=Redmi%E5%85%A8%E8%87%AA%E5%8A%A8%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.6"
                              data-spm="cms_10530.3476795.6"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.6','//www.mi.com/search?keyword=Redmi%E5%85%A8%E8%87%AA%E5%8A%A8%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=Redmi%E5%85%A8%E8%87%AA%E5%8A%A8%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=Redmi%2525E5%252585%2525A8%2525E8%252587%2525AA%2525E5%25258A%2525A8%2525E6%2525B3%2525A2%2525E8%2525BD%2525AE%2525E6%2525B4%252597%2525E8%2525A1%2525A3%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >Redmi全自动波轮洗衣机</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.7"
                              data-spm="cms_10530.3476795.7"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.7','//www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252587%252580%2525E6%2525B0%2525B4%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">净水器</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%BE%AE%E6%B3%A2%E7%82%89"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.8"
                              data-spm="cms_10530.3476795.8"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.8','//www.mi.com/search?keyword=%E5%BE%AE%E6%B3%A2%E7%82%89','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%BE%AE%E6%B3%A2%E7%82%89","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525BE%2525AE%2525E6%2525B3%2525A2%2525E7%252582%252589"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">微波炉</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E7%83%A4%E7%AE%B1"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.9"
                              data-spm="cms_10530.3476795.9"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.9','//www.mi.com/search?keyword=%E7%94%B5%E7%83%A4%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E7%83%A4%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E7%252583%2525A4%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7f39b7ac49227fc59c3f2b2105d25d6.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电烤箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.10"
                              data-spm="cms_10530.3476795.10"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.10','//www.mi.com/search?keyword=%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252589%2525AB%2525E5%25259C%2525B0%2525E6%25259C%2525BA%2525E5%252599%2525A8%2525E4%2525BA%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">扫地机器人</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%90%B8%E5%B0%98%E5%99%A8"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.11"
                              data-spm="cms_10530.3476795.11"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.11','//www.mi.com/search?keyword=%E5%90%B8%E5%B0%98%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%90%B8%E5%B0%98%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252590%2525B8%2525E5%2525B0%252598%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">吸尘器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.12"
                              data-spm="cms_10530.3476795.12"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.12','//www.mi.com/search?keyword=%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525A9%2525BA%2525E6%2525B0%252594%2525E5%252587%252580%2525E5%25258C%252596%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">空气净化器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.13"
                              data-spm="cms_10530.3476795.13"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.13','//www.mi.com/search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E9%2525A5%2525AD%2525E7%252585%2525B2"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电饭煲</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E7%A3%81%E7%82%89"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.14"
                              data-spm="cms_10530.3476795.14"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.14','//www.mi.com/search?keyword=%E7%94%B5%E7%A3%81%E7%82%89','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E7%A3%81%E7%82%89","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E7%2525A3%252581%2525E7%252582%252589"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电磁炉</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E6%B0%B4%E5%A3%B6"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.15"
                              data-spm="cms_10530.3476795.15"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.15','//www.mi.com/search?keyword=%E7%94%B5%E6%B0%B4%E5%A3%B6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E6%B0%B4%E5%A3%B6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E6%2525B0%2525B4%2525E5%2525A3%2525B6"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电水壶</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%BB%A4%E6%B0%B4%E5%A3%B6"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.16"
                              data-spm="cms_10530.3476795.16"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.16','//www.mi.com/search?keyword=%E6%BB%A4%E6%B0%B4%E5%A3%B6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%BB%A4%E6%B0%B4%E5%A3%B6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%2525BB%2525A4%2525E6%2525B0%2525B4%2525E5%2525A3%2525B6"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ffcebcacca008ed2d92a692f7312ef6.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">滤水壶</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.17"
                              data-spm="cms_10530.3476795.17"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.17','//www.mi.com/search?keyword=%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%252590%2525BD%2525E5%25259C%2525B0%2525E9%2525A3%25258E%2525E6%252589%252587"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">落地风扇</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%8A%95%E5%BD%B1%E4%BB%AA"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.18"
                              data-spm="cms_10530.3476795.18"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.18','//www.mi.com/search?keyword=%E6%8A%95%E5%BD%B1%E4%BB%AA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%8A%95%E5%BD%B1%E4%BB%AA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%25258A%252595%2525E5%2525BD%2525B1%2525E4%2525BB%2525AA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">投影仪</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%81%AF%E5%85%B7"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.19"
                              data-spm="cms_10530.3476795.19"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.19','//www.mi.com/search?keyword=%E7%81%AF%E5%85%B7','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%81%AF%E5%85%B7","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252581%2525AF%2525E5%252585%2525B7"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">灯具</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-4
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%8F%92%E7%BA%BF%E6%9D%BF"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.20"
                              data-spm="cms_10530.3476795.20"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.20','//www.mi.com/search?keyword=%E6%8F%92%E7%BA%BF%E6%9D%BF','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%8F%92%E7%BA%BF%E6%9D%BF","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%25258F%252592%2525E7%2525BA%2525BF%2525E6%25259D%2525BF"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">插线板</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%96%B0%E9%A3%8E%E6%9C%BA"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.21"
                              data-spm="cms_10530.3476795.21"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.21','//www.mi.com/search?keyword=%E6%96%B0%E9%A3%8E%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%96%B0%E9%A3%8E%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252596%2525B0%2525E9%2525A3%25258E%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">新风机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E6%9A%96%E5%99%A8"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.22"
                              data-spm="cms_10530.3476795.22"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.22','//www.mi.com/search?keyword=%E7%94%B5%E6%9A%96%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E6%9A%96%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E6%25259A%252596%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电暖器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E5%8E%8B%E5%8A%9B%E9%94%85"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.23"
                              data-spm="cms_10530.3476795.23"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.23','//www.mi.com/search?keyword=%E7%94%B5%E5%8E%8B%E5%8A%9B%E9%94%85','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E5%8E%8B%E5%8A%9B%E9%94%85","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E5%25258E%25258B%2525E5%25258A%25259B%2525E9%252594%252585"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ba8d2a2d383f612575d323ce159bdce3.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电压力锅</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%96%99%E7%90%86%E6%9C%BA"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.24"
                              data-spm="cms_10530.3476795.24"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.24','//www.mi.com/search?keyword=%E6%96%99%E7%90%86%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%96%99%E7%90%86%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252596%252599%2525E7%252590%252586%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">料理机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E7%85%AE%E5%A3%B6"
                              data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.25"
                              data-spm="cms_10530.3476795.25"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476795.25','//www.mi.com/search?keyword=%E7%94%B5%E7%85%AE%E5%A3%B6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E7%85%AE%E5%A3%B6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E7%252585%2525AE%2525E5%2525A3%2525B6"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b7de8a5bc64975df73f5fde5507fc8d1.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电煮壶</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476796.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        出行 穿戴
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-3">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/xiaomiwatchs1"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.2"
                              data-spm="cms_10530.3476796.2"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.2','https://www.mi.com/xiaomiwatchs1','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fxiaomiwatchs1"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f1e9923aac0604cfd8058f862ad26d06.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi Watch S1</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redmiwatch2"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.3"
                              data-spm="cms_10530.3476796.3"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.3','https://www.mi.com/redmiwatch2','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredmiwatch2"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/754c7e065c5b11b4e658bfbc7878b6ba.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi 手表 2</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/xiaomiwatchcolor2"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.4"
                              data-spm="cms_10530.3476796.4"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.4','https://www.mi.com/xiaomiwatchcolor2','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fxiaomiwatchcolor2"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8f0da517177fd03bb14e1f2ef3b448b.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >Xiaomi Watch Color 2</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/shouhuan6/nfc"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.5"
                              data-spm="cms_10530.3476796.5"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.5','https://www.mi.com/shouhuan6/nfc','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fshouhuan6%252Fnfc"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米手环6 NFC版</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/shouhuan6"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.6"
                              data-spm="cms_10530.3476796.6"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.6','https://www.mi.com/shouhuan6','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fshouhuan6"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/baba53e0cfd7bf0958edd84f8c5fcbbb.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米手环6 标准版</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/redmi-watch-mulan"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.7"
                              data-spm="cms_10530.3476796.7"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.7','https://www.mi.com/redmi-watch-mulan','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fredmi-watch-mulan"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi 手表</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/shouhuan5/nfc"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.8"
                              data-spm="cms_10530.3476796.8"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.8','https://www.mi.com/shouhuan5/nfc','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fshouhuan5%252Fnfc"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e8c85f251ed8b5cd54651c4be13bc68.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米手环5NFC</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/shouhuan5"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.9"
                              data-spm="cms_10530.3476796.9"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.9','https://www.mi.com/shouhuan5','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fshouhuan5"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/18f75b53afbe8ce2e858cb5622d60613.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米手环5</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.10"
                              data-spm="cms_10530.3476796.10"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.10','//www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B9%2525B3%2525E8%2525A1%2525A1%2525E8%2525BD%2525A6"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">平衡车</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%87%AA%E8%A1%8C%E8%BD%A6"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.11"
                              data-spm="cms_10530.3476796.11"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.11','//www.mi.com/search?keyword=%E8%87%AA%E8%A1%8C%E8%BD%A6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%87%AA%E8%A1%8C%E8%BD%A6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%252587%2525AA%2525E8%2525A1%25258C%2525E8%2525BD%2525A6"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/749c779fd3789ba94033da8aaa547dcd.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">自行车</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%BB%91%E6%9D%BF%E8%BD%A6"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.12"
                              data-spm="cms_10530.3476796.12"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.12','//www.mi.com/search?keyword=%E6%BB%91%E6%9D%BF%E8%BD%A6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%BB%91%E6%9D%BF%E8%BD%A6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%2525BB%252591%2525E6%25259D%2525BF%2525E8%2525BD%2525A6"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">滑板车</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.13"
                              data-spm="cms_10530.3476796.13"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.13','//www.mi.com/search?keyword=%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%2525BD%2525A6%2525E8%2525BD%2525BD%2525E5%252585%252585%2525E7%252594%2525B5%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/787c807176455f9ae40146af11e98b1e.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">车载充电器</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E8%AE%B0%E5%BD%95%E4%BB%AA"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.14"
                              data-spm="cms_10530.3476796.14"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.14','//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E8%AE%B0%E5%BD%95%E4%BB%AA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E8%AE%B0%E5%BD%95%E4%BB%AA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252599%2525BA%2525E8%252583%2525BD%2525E8%2525AE%2525B0%2525E5%2525BD%252595%2525E4%2525BB%2525AA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">智能记录仪</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%85%85%E6%B0%94%E5%AE%9D"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.15"
                              data-spm="cms_10530.3476796.15"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.15','//www.mi.com/search?keyword=%E5%85%85%E6%B0%94%E5%AE%9D','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%85%85%E6%B0%94%E5%AE%9D","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252585%252585%2525E6%2525B0%252594%2525E5%2525AE%25259D"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4003fd9fe0f81232c5e7c6ce2a9b3b7.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">充气宝</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%9F%B3%E8%8B%B1%E8%A1%A8"
                              data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.16"
                              data-spm="cms_10530.3476796.16"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476796.16','//www.mi.com/search?keyword=%E7%9F%B3%E8%8B%B1%E8%A1%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%9F%B3%E8%8B%B1%E8%A1%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%25259F%2525B3%2525E8%25258B%2525B1%2525E8%2525A1%2525A8"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f941386e72f745b02e8921b6c8055cd6.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">石英表</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476797.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        智能 路由器
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-3">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/cyberdog"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.2"
                              data-spm="cms_10530.3476797.2"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.2','https://www.mi.com/cyberdog','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fcyberdog"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5a536995472fde3a919222adab2778.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">CyberDog</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/mjmike"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.3"
                              data-spm="cms_10530.3476797.3"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.3','https://www.mi.com/mjmike','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fmjmike"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/435f8b56d41de210d1c4598f4f00fa50.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">MIJIA K歌麦克风</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%89%93%E5%8D%B0%E6%9C%BA"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.4"
                              data-spm="cms_10530.3476797.4"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.4','//www.mi.com/search?keyword=%E6%89%93%E5%8D%B0%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%89%93%E5%8D%B0%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252589%252593%2525E5%25258D%2525B0%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">打印机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%96%B7%E5%A2%A8%E6%89%93%E5%8D%B0%E6%9C%BA"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.5"
                              data-spm="cms_10530.3476797.5"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.5','//www.mi.com/search?keyword=%E5%96%B7%E5%A2%A8%E6%89%93%E5%8D%B0%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%96%B7%E5%A2%A8%E6%89%93%E5%8D%B0%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252596%2525B7%2525E5%2525A2%2525A8%2525E6%252589%252593%2525E5%25258D%2525B0%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">喷墨打印机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%96%B7%E5%A2%A8%E6%89%93%E5%8D%B0%E6%9C%BA%E5%A2%A8%E6%B0%B4"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.6"
                              data-spm="cms_10530.3476797.6"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.6','//www.mi.com/search?keyword=%E5%96%B7%E5%A2%A8%E6%89%93%E5%8D%B0%E6%9C%BA%E5%A2%A8%E6%B0%B4','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%96%B7%E5%A2%A8%E6%89%93%E5%8D%B0%E6%9C%BA%E5%A2%A8%E6%B0%B4","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252596%2525B7%2525E5%2525A2%2525A8%2525E6%252589%252593%2525E5%25258D%2525B0%2525E6%25259C%2525BA%2525E5%2525A2%2525A8%2525E6%2525B0%2525B4"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">喷墨打印机墨水</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E8%B7%AF%E7%94%B1%E5%99%A8"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.7"
                              data-spm="cms_10530.3476797.7"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.7','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E8%B7%AF%E7%94%B1%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E8%B7%AF%E7%94%B1%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3%2525E8%2525B7%2525AF%2525E7%252594%2525B1%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米路由器</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.8"
                              data-spm="cms_10530.3476797.8"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.8','//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252599%2525BA%2525E8%252583%2525BD%2525E5%2525AE%2525B6%2525E5%2525BA%2525AD"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">智能家庭</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%AF%B9%E8%AE%B2%E6%9C%BA"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.9"
                              data-spm="cms_10530.3476797.9"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.9','//www.mi.com/search?keyword=%E5%AF%B9%E8%AE%B2%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%AF%B9%E8%AE%B2%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525AF%2525B9%2525E8%2525AE%2525B2%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">对讲机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%91%84%E5%83%8F%E6%9C%BA"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.10"
                              data-spm="cms_10530.3476797.10"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.10','//www.mi.com/search?keyword=%E6%91%84%E5%83%8F%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%91%84%E5%83%8F%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252591%252584%2525E5%252583%25258F%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">摄像机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%97%A8%E9%94%81"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.11"
                              data-spm="cms_10530.3476797.11"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.11','//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%97%A8%E9%94%81','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%97%A8%E9%94%81","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252599%2525BA%2525E8%252583%2525BD%2525E9%252597%2525A8%2525E9%252594%252581"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">智能门锁</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%A7%86%E9%A2%91%E9%97%A8%E9%93%83"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.12"
                              data-spm="cms_10530.3476797.12"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.12','//www.mi.com/search?keyword=%E8%A7%86%E9%A2%91%E9%97%A8%E9%93%83','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%A7%86%E9%A2%91%E9%97%A8%E9%93%83","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%2525A7%252586%2525E9%2525A2%252591%2525E9%252597%2525A8%2525E9%252593%252583"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/feaab5bd13257dbe8f30b80b6a4472be.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">视频门铃</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.13"
                              data-spm="cms_10530.3476797.13"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.13','//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E8%252580%252581%2525E5%2525B8%252588"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小爱老师</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=Redmi%E8%B7%AF%E7%94%B1%E5%99%A8"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.14"
                              data-spm="cms_10530.3476797.14"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.14','//www.mi.com/search?keyword=Redmi%E8%B7%AF%E7%94%B1%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=Redmi%E8%B7%AF%E7%94%B1%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=Redmi%2525E8%2525B7%2525AF%2525E7%252594%2525B1%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/51eacc66512a31713808a60b5695ae28.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi路由器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1"
                              data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.15"
                              data-spm="cms_10530.3476797.15"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476797.15','//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E9%25259F%2525B3%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小爱音箱</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476798.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        电源 配件
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-2">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%A7%BB%E5%8A%A8%E7%94%B5%E6%BA%90"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.2"
                              data-spm="cms_10530.3476798.2"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.2','//www.mi.com/search?keyword=%E7%A7%BB%E5%8A%A8%E7%94%B5%E6%BA%90','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%A7%BB%E5%8A%A8%E7%94%B5%E6%BA%90","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525A7%2525BB%2525E5%25258A%2525A8%2525E7%252594%2525B5%2525E6%2525BA%252590"}'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">移动电源</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%95%B0%E6%8D%AE%E7%BA%BF"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.3"
                              data-spm="cms_10530.3476798.3"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.3','//www.mi.com/search?keyword=%E6%95%B0%E6%8D%AE%E7%BA%BF','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%95%B0%E6%8D%AE%E7%BA%BF","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252595%2525B0%2525E6%25258D%2525AE%2525E7%2525BA%2525BF"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">数据线</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.4"
                              data-spm="cms_10530.3476798.4"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.4','//www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252585%252585%2525E7%252594%2525B5%2525E5%252599%2525A8"}'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">充电器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%94%B5%E6%B1%A0"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.5"
                              data-spm="cms_10530.3476798.5"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.5','//www.mi.com/search?keyword=%E7%94%B5%E6%B1%A0','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%94%B5%E6%B1%A0","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252594%2525B5%2525E6%2525B1%2525A0"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">电池</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%87%AA%E6%8B%8D%E6%9D%86"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.6"
                              data-spm="cms_10530.3476798.6"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.6','//www.mi.com/search?keyword=%E8%87%AA%E6%8B%8D%E6%9D%86','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%87%AA%E6%8B%8D%E6%9D%86","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%252587%2525AA%2525E6%25258B%25258D%2525E6%25259D%252586"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">自拍杆</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E5%A3%B3"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.7"
                              data-spm="cms_10530.3476798.7"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.7','//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E5%A3%B3','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E5%A3%B3","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252589%25258B%2525E6%25259C%2525BA%2525E5%2525A3%2525B3"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">手机壳</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E8%B4%B4%E8%86%9C"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.8"
                              data-spm="cms_10530.3476798.8"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.8','//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E8%B4%B4%E8%86%9C','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E8%B4%B4%E8%86%9C","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252589%25258B%2525E6%25259C%2525BA%2525E8%2525B4%2525B4%2525E8%252586%25259C"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">手机贴膜</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.9"
                              data-spm="cms_10530.3476798.9"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.9','//www.mi.com/search?keyword=%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252597%2525A0%2525E7%2525BA%2525BF%2525E5%252585%252585%2525E7%252594%2525B5%2525E5%252599%2525A8"}'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">无线充电器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.10"
                              data-spm="cms_10530.3476798.10"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.10','//www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B9%2525B3%2525E6%25259D%2525BF%2525E9%252585%25258D%2525E4%2525BB%2525B6"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">平板配件</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.11"
                              data-spm="cms_10530.3476798.11"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.11','//www.mi.com/search?keyword=%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E9%2525BB%252591%2525E9%2525B2%2525A8%2525E9%252585%25258D%2525E4%2525BB%2525B6"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">黑鲨配件</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6"
                              data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.12"
                              data-spm="cms_10530.3476798.12"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476798.12','//www.mi.com/search?keyword=%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252585%2525B6%2525E4%2525BB%252596%2525E7%252594%2525B5%2525E6%2525BA%252590%2525E9%252585%25258D%2525E4%2525BB%2525B6"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">其他配件</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476799.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        健康 儿童
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-3">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=15025"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.2"
                              data-spm="cms_10530.3476799.2"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.2','https://www.mi.com/buy?product_id=15025','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">米家跑步机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%B4%97%E6%89%8B%E6%9C%BA"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.3"
                              data-spm="cms_10530.3476799.3"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.3','//www.mi.com/search?keyword=%E6%B4%97%E6%89%8B%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%B4%97%E6%89%8B%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%2525B4%252597%2525E6%252589%25258B%2525E6%25259C%2525BA"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">洗手机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%B1%B3%E5%AE%B6%E4%BF%AE%E5%89%AA%E5%99%A8"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.4"
                              data-spm="cms_10530.3476799.4"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.4','//www.mi.com/search?keyword=%E7%B1%B3%E5%AE%B6%E4%BF%AE%E5%89%AA%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%B1%B3%E5%AE%B6%E4%BF%AE%E5%89%AA%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525B1%2525B3%2525E5%2525AE%2525B6%2525E4%2525BF%2525AE%2525E5%252589%2525AA%2525E5%252599%2525A8"}'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">修剪器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%89%83%E9%A1%BB%E5%88%80"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.5"
                              data-spm="cms_10530.3476799.5"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.5','//www.mi.com/search?keyword=%E5%89%83%E9%A1%BB%E5%88%80','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%89%83%E9%A1%BB%E5%88%80","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252589%252583%2525E9%2525A1%2525BB%2525E5%252588%252580"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">剃须刀</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%89%99%E5%88%B7"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.6"
                              data-spm="cms_10530.3476799.6"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.6','//www.mi.com/search?keyword=%E7%89%99%E5%88%B7','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%89%99%E5%88%B7","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%252589%252599%2525E5%252588%2525B7"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">牙刷</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%90%B9%E9%A3%8E%E6%9C%BA"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.7"
                              data-spm="cms_10530.3476799.7"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.7','//www.mi.com/search?keyword=%E5%90%B9%E9%A3%8E%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%90%B9%E9%A3%8E%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252590%2525B9%2525E9%2525A3%25258E%2525E6%25259C%2525BA"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">吹风机</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E4%BD%93%E9%87%8D%E7%A7%A4"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.8"
                              data-spm="cms_10530.3476799.8"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.8','//www.mi.com/search?keyword=%E4%BD%93%E9%87%8D%E7%A7%A4','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E4%BD%93%E9%87%8D%E7%A7%A4","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E4%2525BD%252593%2525E9%252587%25258D%2525E7%2525A7%2525A4"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">体重秤</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E4%BD%93%E8%84%82%E7%A7%A4"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.9"
                              data-spm="cms_10530.3476799.9"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.9','//www.mi.com/search?keyword=%E4%BD%93%E8%84%82%E7%A7%A4','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E4%BD%93%E8%84%82%E7%A7%A4","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E4%2525BD%252593%2525E8%252584%252582%2525E7%2525A7%2525A4"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">体脂秤</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.10"
                              data-spm="cms_10530.3476799.10"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.10','//www.mi.com/search?keyword=%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252597%2525A9%2525E6%252595%252599%2525E5%252590%2525AF%2525E6%252599%2525BA"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">早教启智</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.11"
                              data-spm="cms_10530.3476799.11"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.11','//www.mi.com/search?keyword=%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%25259B%25258A%2525E6%252599%2525BA%2525E7%2525A7%2525AF%2525E6%25259C%2525A8"}'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9d211ae20e700690ce9eec644ac3f31.png"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">益智积木</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.12"
                              data-spm="cms_10530.3476799.12"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.12','//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252584%2525BF%2525E7%2525AB%2525A5%2525E6%252589%25258B%2525E8%2525A1%2525A8"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">儿童手表</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.13"
                              data-spm="cms_10530.3476799.13"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.13','//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252584%2525BF%2525E7%2525AB%2525A5%2525E6%2525BB%252591%2525E6%25259D%2525BF%2525E8%2525BD%2525A6"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">儿童滑板车</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%8A%98%E5%8F%A0%E5%A9%B4%E5%84%BF%E6%8E%A8%E8%BD%A6"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.14"
                              data-spm="cms_10530.3476799.14"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.14','//www.mi.com/search?keyword=%E6%8A%98%E5%8F%A0%E5%A9%B4%E5%84%BF%E6%8E%A8%E8%BD%A6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%8A%98%E5%8F%A0%E5%A9%B4%E5%84%BF%E6%8E%A8%E8%BD%A6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%25258A%252598%2525E5%25258F%2525A0%2525E5%2525A9%2525B4%2525E5%252584%2525BF%2525E6%25258E%2525A8%2525E8%2525BD%2525A6"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">婴儿推车</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%A9%B4%E5%84%BF%E7%90%86%E5%8F%91%E5%99%A8"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.15"
                              data-spm="cms_10530.3476799.15"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.15','//www.mi.com/search?keyword=%E5%A9%B4%E5%84%BF%E7%90%86%E5%8F%91%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%A9%B4%E5%84%BF%E7%90%86%E5%8F%91%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525A9%2525B4%2525E5%252584%2525BF%2525E7%252590%252586%2525E5%25258F%252591%2525E5%252599%2525A8"}'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4568ec9535a8707cea88dcd0148dda8.jpeg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">理发器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%B1%B3%E5%AE%B6%E8%B5%B0%E6%AD%A5%E6%9C%BA"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.16"
                              data-spm="cms_10530.3476799.16"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.16','//www.mi.com/search?keyword=%E7%B1%B3%E5%AE%B6%E8%B5%B0%E6%AD%A5%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%B1%B3%E5%AE%B6%E8%B5%B0%E6%AD%A5%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525B1%2525B3%2525E5%2525AE%2525B6%2525E8%2525B5%2525B0%2525E6%2525AD%2525A5%2525E6%25259C%2525BA"}'
                              ><img
                                data-src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">走步机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%81%A5%E6%8E%A7%E8%BD%A6"
                              data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.17"
                              data-spm="cms_10530.3476799.17"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476799.17','//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%81%A5%E6%8E%A7%E8%BD%A6','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%81%A5%E6%8E%A7%E8%BD%A6","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252599%2525BA%2525E8%252583%2525BD%2525E9%252581%2525A5%2525E6%25258E%2525A7%2525E8%2525BD%2525A6"}'
                              ><img
                                data-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5852aab5992fdb1db09cd89edcb802c0.png"
                                src="//i1.mifile.cn/f/i/2014/cn/placeholder-40.png"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">智能遥控车</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3478351.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        耳机 音箱
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-4">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="https://www.mi.com/xiaomibuds3"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.2"
                              data-spm="cms_10530.3478351.2"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.2','https://www.mi.com/xiaomibuds3','&quot;&quot;']);"
                              data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fxiaomibuds3"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3eefd81174858e0300c66c8421a553a4.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text"
                                >Xiaomi 真无线降噪耳机 3</span
                              ></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=15217"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.3"
                              data-spm="cms_10530.3478351.3"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.3','https://www.mi.com/buy?product_id=15217','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/67eca164a2362f9c5fae29d2ecddfcc1.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi Buds 3 青春版</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="https://www.mi.com/buy?product_id=14903"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.4"
                              data-spm="cms_10530.3478351.4"
                              data-scm="server.0.0.0.cms.0.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.4','https://www.mi.com/buy?product_id=14903','&quot;&quot;']);"
                              data-params='""'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/336df8c7b2a0bdc4398ffa9094cd28a5.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi Buds 3</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=Xiaomi%20Sound"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.5"
                              data-spm="cms_10530.3478351.5"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.5','//www.mi.com/search?keyword=Xiaomi%20Sound','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=Xiaomi%20Sound","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=Xiaomi%252520Sound"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc146116e24cc288014cc40e28f15a2.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Xiaomi Sound</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=Redmi%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.6"
                              data-spm="cms_10530.3478351.6"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.6','//www.mi.com/search?keyword=Redmi%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=Redmi%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=Redmi%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E8%2525A7%2525A6%2525E5%2525B1%25258F"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi小爱触屏音箱 8</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F%E9%9F%B3%E7%AE%B1Pro8"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.7"
                              data-spm="cms_10530.3478351.7"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.7','//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F%E9%9F%B3%E7%AE%B1Pro8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F%E9%9F%B3%E7%AE%B1Pro8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E8%2525A7%2525A6%2525E5%2525B1%25258F%2525E9%25259F%2525B3%2525E7%2525AE%2525B1Pro8"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/146ad5dbbe9721c031aa168d4bf580ec.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小爱触屏音箱Pro 8</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1%20Pro"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.8"
                              data-spm="cms_10530.3478351.8"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.8','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1%20Pro','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1%20Pro","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E9%25259F%2525B3%2525E7%2525AE%2525B1%252520Pro"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小爱音箱 Pro </span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.9"
                              data-spm="cms_10530.3478351.9"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.9','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E9%25259F%2525B3%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米小爱音箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F%E9%9F%B3%E7%AE%B1"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.10"
                              data-spm="cms_10530.3478351.10"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.10','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F%E9%9F%B3%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E8%A7%A6%E5%B1%8F%E9%9F%B3%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E8%2525A7%2525A6%2525E5%2525B1%25258F%2525E9%25259F%2525B3%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米小爱触屏音箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=Redmi%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1Play"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.11"
                              data-spm="cms_10530.3478351.11"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.11','//www.mi.com/search?keyword=Redmi%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1Play','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=Redmi%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1Play","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=Redmi%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E9%25259F%2525B3%2525E7%2525AE%2525B1Play"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">Redmi音箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1%20Play"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.12"
                              data-spm="cms_10530.3478351.12"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.12','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1%20Play','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1%20Play","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E9%25259F%2525B3%2525E7%2525AE%2525B1%252520Play"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米小爱音箱 Play</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.13"
                              data-spm="cms_10530.3478351.13"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.13','//www.mi.com/search?keyword=%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525BA%2525BF%2525E6%25258E%2525A7%2525E8%252580%2525B3%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">线控耳机</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.14"
                              data-spm="cms_10530.3478351.14"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.14','//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%252593%25259D%2525E7%252589%252599%2525E8%252580%2525B3%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b6fa86f424bc8b0355ea899ae0dd39b.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">蓝牙耳机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.15"
                              data-spm="cms_10530.3478351.15"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.15','//www.mi.com/search?keyword=%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525A4%2525B4%2525E6%252588%2525B4%2525E8%252580%2525B3%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">头戴耳机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.16"
                              data-spm="cms_10530.3478351.16"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.16','//www.mi.com/search?keyword=%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%252593%252581%2525E7%252589%25258C%2525E8%252580%2525B3%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">品牌耳机</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.17"
                              data-spm="cms_10530.3478351.17"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.17','//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%252593%25259D%2525E7%252589%252599%2525E9%25259F%2525B3%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e8b89fb3702dc7c41248898f2b86f6d.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">蓝牙音箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3AI%E9%9F%B3%E7%AE%B1"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.18"
                              data-spm="cms_10530.3478351.18"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.18','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3AI%E9%9F%B3%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3AI%E9%9F%B3%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3AI%2525E9%25259F%2525B3%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米AI音箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1HD"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.19"
                              data-spm="cms_10530.3478351.19"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.19','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1HD','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1HD","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3%2525E5%2525B0%25258F%2525E7%252588%2525B1%2525E9%25259F%2525B3%2525E7%2525AE%2525B1HD"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4df2fa022495e79f890a943a9d7e70a5.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小米小爱音箱HD</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-4
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=k%E6%AD%8C%E8%80%B3%E6%9C%BA"
                              data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.20"
                              data-spm="cms_10530.3478351.20"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3478351.20','//www.mi.com/search?keyword=k%E6%AD%8C%E8%80%B3%E6%9C%BA','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=k%E6%AD%8C%E8%80%B3%E6%9C%BA","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=k%2525E6%2525AD%25258C%2525E8%252580%2525B3%2525E6%25259C%2525BA"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a290d924c1bbd1e3ce64e96f497d4059.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">k歌耳机</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      @mouseenter="changeCategoryItemActive($event)"
                      @mouseleave="changeCategoryItem($event)"
                      class="category-item"
                    >
                      <a
                        data-spm="cms_10530.3476801.1"
                        data-scm="server.0.0.0.cms.0.0.0"
                        href="javascript:void(0);"
                        data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.1"
                        class="title"
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.1','javascript:void(0);','&quot;&quot;']);"
                        data-params='""'
                      >
                        生活 箱包
                        <em class="iconfont">&#xe617;</em></a
                      >
                      <div class="children clearfix children-col-3">
                        <ul
                          class="
                            children-list children-list-col children-list-col-1
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E8%83%8C%E5%8C%85"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.2"
                              data-spm="cms_10530.3476801.2"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.2','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E8%83%8C%E5%8C%85','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B0%8F%E8%83%8C%E5%8C%85","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525B0%25258F%2525E7%2525B1%2525B3%2525E5%2525B0%25258F%2525E8%252583%25258C%2525E5%25258C%252585"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">小背包</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%8F%8C%E8%82%A9%E5%8C%85"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.3"
                              data-spm="cms_10530.3476801.3"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.3','//www.mi.com/search?keyword=%E5%8F%8C%E8%82%A9%E5%8C%85','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%8F%8C%E8%82%A9%E5%8C%85","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%25258F%25258C%2525E8%252582%2525A9%2525E5%25258C%252585"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">双肩包</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%83%B8%E5%8C%85"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.4"
                              data-spm="cms_10530.3476801.4"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.4','//www.mi.com/search?keyword=%E8%83%B8%E5%8C%85','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%83%B8%E5%8C%85","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%252583%2525B8%2525E5%25258C%252585"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">胸包</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%97%85%E8%A1%8C%E7%AE%B1"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.5"
                              data-spm="cms_10530.3476801.5"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.5','//www.mi.com/search?keyword=%E6%97%85%E8%A1%8C%E7%AE%B1','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%97%85%E8%A1%8C%E7%AE%B1","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%252597%252585%2525E8%2525A1%25258C%2525E7%2525AE%2525B1"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">旅行箱</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%BF%90%E5%8A%A8%E9%9E%8B"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.6"
                              data-spm="cms_10530.3476801.6"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.6','//www.mi.com/search?keyword=%E8%BF%90%E5%8A%A8%E9%9E%8B','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%BF%90%E5%8A%A8%E9%9E%8B","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%2525BF%252590%2525E5%25258A%2525A8%2525E9%25259E%25258B"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">运动鞋</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%9C%BC%E9%95%9C"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.7"
                              data-spm="cms_10530.3476801.7"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.7','//www.mi.com/search?keyword=%E7%9C%BC%E9%95%9C','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%9C%BC%E9%95%9C","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%25259C%2525BC%2525E9%252595%25259C"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">眼镜</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-2
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E5%BA%8A%E5%9E%AB"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.8"
                              data-spm="cms_10530.3476801.8"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.8','//www.mi.com/search?keyword=%E5%BA%8A%E5%9E%AB','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E5%BA%8A%E5%9E%AB","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E5%2525BA%25258A%2525E5%25259E%2525AB"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">床垫</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%9E%95%E5%A4%B4"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.9"
                              data-spm="cms_10530.3476801.9"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.9','//www.mi.com/search?keyword=%E6%9E%95%E5%A4%B4','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%9E%95%E5%A4%B4","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%25259E%252595%2525E5%2525A4%2525B4"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">枕头</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E8%9E%BA%E4%B8%9D%E5%88%80"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.10"
                              data-spm="cms_10530.3476801.10"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.10','//www.mi.com/search?keyword=%E8%9E%BA%E4%B8%9D%E5%88%80','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E8%9E%BA%E4%B8%9D%E5%88%80","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E8%25259E%2525BA%2525E4%2525B8%25259D%2525E5%252588%252580"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">螺丝刀</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E4%BF%9D%E6%B8%A9%E6%9D%AF"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.11"
                              data-spm="cms_10530.3476801.11"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.11','//www.mi.com/search?keyword=%E4%BF%9D%E6%B8%A9%E6%9D%AF','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E4%BF%9D%E6%B8%A9%E6%9D%AF","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E4%2525BF%25259D%2525E6%2525B8%2525A9%2525E6%25259D%2525AF"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">保温杯</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E9%A9%B1%E8%9A%8A%E5%99%A8"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.12"
                              data-spm="cms_10530.3476801.12"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.12','//www.mi.com/search?keyword=%E9%A9%B1%E8%9A%8A%E5%99%A8','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E9%A9%B1%E8%9A%8A%E5%99%A8","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E9%2525A9%2525B1%2525E8%25259A%25258A%2525E5%252599%2525A8"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">驱蚊器</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E6%AF%9B%E5%B7%BE"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.13"
                              data-spm="cms_10530.3476801.13"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.13','//www.mi.com/search?keyword=%E6%AF%9B%E5%B7%BE','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E6%AF%9B%E5%B7%BE","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E6%2525AF%25259B%2525E5%2525B7%2525BE"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">毛巾/浴巾</span></a
                            >
                          </li>
                        </ul>
                        <ul
                          class="
                            children-list children-list-col children-list-col-3
                          "
                        >
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%B1%B3%E5%85%94"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.14"
                              data-spm="cms_10530.3476801.14"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.14','//www.mi.com/search?keyword=%E7%B1%B3%E5%85%94','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%B1%B3%E5%85%94","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525B1%2525B3%2525E5%252585%252594"}'
                              ><img
                                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ac95ad25bb8f6391abcb937b03c1743.png?thumb=1&amp;w=80&amp;h=80&amp;f=webp&amp;q=90"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">米兔</span></a
                            >
                          </li>
                          <li>
                            <a
                              href="//www.mi.com/search?keyword=%E7%AC%94"
                              data-log_code="31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.15"
                              data-spm="cms_10530.3476801.15"
                              data-scm="server.0.0.0.cms.search.0.0"
                              class="link clearfix"
                              data-settrack="true"
                              onclick="_msq.push(['trackEvent','31pchomeother010000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476801.15','//www.mi.com/search?keyword=%E7%AC%94','&quot;&quot;']);"
                              data-params='{"keyword":"//www.mi.com/search?keyword=%E7%AC%94","uri":"www.mi.com%252Fsearch%253Fkeyword=%252F%252Fwww.mi.com%252Fsearch%253Fkeyword=%2525E7%2525AC%252594"}'
                              ><img
                                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&amp;w=80&amp;h=80"
                                width="40"
                                height="40"
                                alt=""
                                class="thumb"
                              /><span class="text">笔</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li data-index="0" class="nav-item">
                <a
                  href="javascript: void(0);"
                  data-log_code="31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476901.1"
                  data-spm="category_top_list.3476901.1"
                  data-scm=""
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother001000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476901.1','javascript:void(0);','&quot;&quot;']);"
                  data-params='""'
                  ><span class="text">Xiaomi手机</span></a
                >
              </li>
              <li data-index="1" class="nav-item">
                <a
                  href="javascript: void(0);"
                  data-log_code="31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.1"
                  data-spm="category_top_list.3476902.1"
                  data-scm=""
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother002000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.1','javascript:void(0);','&quot;&quot;']);"
                  data-params='""'
                  ><span class="text">Redmi 红米</span></a
                >
                <div class="item-children hide">
                  <div class="container">
                    <ul class="children-list clearfix">
                      <li class="first">
                        <a
                          href="https://www.mi.com/redminote11pro"
                          target="_blank"
                          data-log_code="31pchomeother002001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.2"
                          data-spm="category_top_list.3476902.2"
                          data-scm="server.0.0.0.product.10000330.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother002001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.2','https://www.mi.com/redminote11pro','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredminote11pro"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e78629420a392da6fd3e34dae9fac5d.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi Note 11 Pro系列"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi Note 11 Pro系列</div>
                          <p class="price">1799元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/redminote11"
                          target="_blank"
                          data-log_code="31pchomeother002002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.3"
                          data-spm="category_top_list.3476902.3"
                          data-scm="server.0.0.0.product.15135.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother002002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.3','https://www.mi.com/redminote11','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredminote11"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/25149bd95f33f9814aa4c4983c0d9b71.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi Note 11 5G"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi Note 11 5G</div>
                          <p class="price">1199元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/redminote11-4g"
                          target="_blank"
                          data-log_code="31pchomeother002003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.4"
                          data-spm="category_top_list.3476902.4"
                          data-scm="server.0.0.0.product.15386.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother002003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.4','https://www.mi.com/redminote11-4g','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredminote11-4g"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a785b54d06c72ff63e64d0fa51ee02f5.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi Note 11 4G"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi Note 11 4G</div>
                          <p class="price">999元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=14206"
                          target="_blank"
                          data-log_code="31pchomeother002004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.5"
                          data-spm="category_top_list.3476902.5"
                          data-scm="server.0.0.0.product.14206.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother002004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.5','https://www.mi.com/buy?product_id=14206','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14206"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3c5d99c28700a3c45ea65eebbea0a04.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi Note 10 Pro"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi Note 10 Pro</div>
                          <p class="price">1499元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=14210"
                          target="_blank"
                          data-log_code="31pchomeother002005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.6"
                          data-spm="category_top_list.3476902.6"
                          data-scm="server.0.0.0.product.14210.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother002005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.6','https://www.mi.com/buy?product_id=14210','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14210"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88bb84ff06f0ab467b859aeed36b817a.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi Note 10 5G"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi Note 10 5G</div>
                          <p class="price">1099元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=14031"
                          target="_blank"
                          data-log_code="31pchomeother002006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.7"
                          data-spm="category_top_list.3476902.7"
                          data-scm="server.0.0.0.product.14031.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother002006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.7','https://www.mi.com/buy?product_id=14031','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14031"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="K40 游戏增强版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">K40 游戏增强版</div>
                          <p class="price">1999元起</p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-index="2" class="nav-item">
                <a
                  href="javascript: void(0);"
                  data-log_code="31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.1"
                  data-spm="category_top_list.3476903.1"
                  data-scm=""
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother003000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.1','javascript:void(0);','&quot;&quot;']);"
                  data-params='""'
                  ><span class="text">电视</span></a
                >
                <div class="item-children hide">
                  <div class="container">
                    <ul class="children-list clearfix">
                      <li class="first">
                        <a
                          href="https://www.mi.com/buy?product_id=15100"
                          target="_blank"
                          data-log_code="31pchomeother003001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.2"
                          data-spm="category_top_list.3476903.2"
                          data-scm="server.0.0.0.product.15100.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother003001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.2','https://www.mi.com/buy?product_id=15100','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=15100"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi智能电视X55 2022"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi智能电视X55 2022</div>
                          <p class="price">2699元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=15101"
                          target="_blank"
                          data-log_code="31pchomeother003002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.3"
                          data-spm="category_top_list.3476903.3"
                          data-scm="server.0.0.0.product.15101.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother003002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.3','https://www.mi.com/buy?product_id=15101','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=15101"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi智能电视X65 2022"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi智能电视X65 2022</div>
                          <p class="price">3499元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=14779"
                          target="_blank"
                          data-log_code="31pchomeother003003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.4"
                          data-spm="category_top_list.3476903.4"
                          data-scm="server.0.0.0.product.14779.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother003003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.4','https://www.mi.com/buy?product_id=14779','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14779"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8871821795310769c1d3896c99b12381.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米电视6 65”  OLED"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米电视6 65” OLED</div>
                          <p class="price">6999元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=14781"
                          target="_blank"
                          data-log_code="31pchomeother003004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.5"
                          data-spm="category_top_list.3476903.5"
                          data-scm="server.0.0.0.product.14781.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother003004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.5','https://www.mi.com/buy?product_id=14781','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14781"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米电视 大师  77”  OLED"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米电视 大师 77” OLED</div>
                          <p class="price">17999元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/mitv-great/hyaline"
                          target="_blank"
                          data-log_code="31pchomeother003005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.6"
                          data-spm="category_top_list.3476903.6"
                          data-scm="server.0.0.0.product.12643.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother003005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.6','https://www.mi.com/mitv-great/hyaline','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fmitv-great%252Fhyaline"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米透明电视"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米透明电视</div>
                          <p class="price">49999元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=12049"
                          target="_blank"
                          data-log_code="31pchomeother003006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.7"
                          data-spm="category_top_list.3476903.7"
                          data-scm="server.0.0.0.product.12049.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother003006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476903.7','https://www.mi.com/buy?product_id=12049','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=12049"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米电视 大师 65英寸OLED"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米电视 大师 65英寸OLED</div>
                          <p class="price">8999元</p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-index="3" class="nav-item">
                <a
                  href="javascript: void(0);"
                  data-log_code="31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.1"
                  data-spm="category_top_list.3476904.1"
                  data-scm=""
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother004000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.1','javascript:void(0);','&quot;&quot;']);"
                  data-params='""'
                  ><span class="text">笔记本</span></a
                >
                <div class="item-children hide">
                  <div class="container">
                    <ul class="children-list clearfix">
                      <li class="first">
                        <a
                          href="https://www.mi.com/buy?product_id=10000321"
                          target="_blank"
                          data-log_code="31pchomeother004001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.2"
                          data-spm="category_top_list.3476904.2"
                          data-scm="server.0.0.0.product.10000321.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother004001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.2','https://www.mi.com/buy?product_id=10000321','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=10000321"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7872a4195d666f08bef0877562dd7fe7.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="RedmiBook Pro 14 增强版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">RedmiBook Pro 14 增强版</div>
                          <p class="price">4999元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=10000361"
                          target="_blank"
                          data-log_code="31pchomeother004002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.3"
                          data-spm="category_top_list.3476904.3"
                          data-scm="server.0.0.0.product.10000361.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother004002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.3','https://www.mi.com/buy?product_id=10000361','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=10000361"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/271ca8f503f72cfe33d282c74a499ebf.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米笔记本 Pro 14 锐龙版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米笔记本 Pro 14 锐龙版</div>
                          <p class="price">5499元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=10000320"
                          target="_blank"
                          data-log_code="31pchomeother004003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.4"
                          data-spm="category_top_list.3476904.4"
                          data-scm="server.0.0.0.product.10000320.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother004003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.4','https://www.mi.com/buy?product_id=10000320','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=10000320"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/789c69b743d9c46a39dd179cefdbce7c.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="RedmiBook Pro 15 增强版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">RedmiBook Pro 15 增强版</div>
                          <p class="price">5299元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/mibook/14prox"
                          target="_blank"
                          data-log_code="31pchomeother004004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.5"
                          data-spm="category_top_list.3476904.5"
                          data-scm="server.0.0.0.product.14294.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother004004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.5','https://www.mi.com/mibook/14prox','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fmibook%252F14prox"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8becd561abbbbf7fad1be7039017e09a.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米笔记本Pro X 14"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米笔记本Pro X 14</div>
                          <p class="price">7999元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/redmibook/game-intel"
                          target="_blank"
                          data-log_code="31pchomeother004005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.6"
                          data-spm="category_top_list.3476904.6"
                          data-scm="server.0.0.0.product.14955.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother004005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.6','https://www.mi.com/redmibook/game-intel','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredmibook%252Fgame-intel"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/02c259d295316579bd896130962e291b.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi G 2021 Intel版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi G 2021 Intel版</div>
                          <p class="price">6499元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/redmibook/game-amd"
                          target="_blank"
                          data-log_code="31pchomeother004006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.7"
                          data-spm="category_top_list.3476904.7"
                          data-scm="server.0.0.0.product.14954.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother004006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476904.7','https://www.mi.com/redmibook/game-amd','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredmibook%252Fgame-amd"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8564a24be7eee37dc2d263873bee0ad9.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi G 2021 AMD版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi G 2021 AMD版</div>
                          <p class="price">7999元</p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-index="4" class="nav-item">
                <a
                  href="javascript: void(0);"
                  data-log_code="31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.1"
                  data-spm="category_top_list.3916936.1"
                  data-scm=""
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother005000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.1','javascript:void(0);','&quot;&quot;']);"
                  data-params='""'
                  ><span class="text">平板</span></a
                >
                <div class="item-children hide">
                  <div class="container">
                    <ul class="children-list clearfix">
                      <li class="first">
                        <a
                          href="https://www.mi.com/xiaomipad5"
                          target="_blank"
                          data-log_code="31pchomeother005001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.2"
                          data-spm="category_top_list.3916936.2"
                          data-scm="server.0.0.0.product.14833.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother005001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.2','https://www.mi.com/xiaomipad5','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fxiaomipad5"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/33de34a4caf2834a1828dc51203dc922.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米平板5"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米平板5</div>
                          <p class="price">1999元起</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/xiaomipad5pro5G"
                          target="_blank"
                          data-log_code="31pchomeother005002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.3"
                          data-spm="category_top_list.3916936.3"
                          data-scm="server.0.0.0.product.15559.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother005002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.3','https://www.mi.com/xiaomipad5pro5G','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fxiaomipad5pro5G"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03892b203a6413bcd8ef3f92d77df79c.gif?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米平板5 Pro 5G"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米平板5 Pro 5G</div>
                          <p class="price">3499元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/xiaomipad5pro"
                          target="_blank"
                          data-log_code="31pchomeother005003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.4"
                          data-spm="category_top_list.3916936.4"
                          data-scm="server.0.0.0.product.14834.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother005003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3916936.4','https://www.mi.com/xiaomipad5pro','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fxiaomipad5pro"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aad55902a2cc64bf0306b004adb14ef7.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米平板5 Pro"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米平板5 Pro</div>
                          <p class="price">2499元起</p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-index="5" class="nav-item">
                <a
                  href="javascript: void(0);"
                  data-log_code="31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.1"
                  data-spm="category_top_list.3476896.1"
                  data-scm=""
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother006000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.1','javascript:void(0);','&quot;&quot;']);"
                  data-params='""'
                  ><span class="text">家电</span></a
                >
                <div class="item-children hide">
                  <div class="container">
                    <ul class="children-list clearfix">
                      <li class="first">
                        <a
                          href="https://www.mi.com/buy?product_id=13607"
                          target="_blank"
                          data-log_code="31pchomeother006001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.2"
                          data-spm="category_top_list.3476896.2"
                          data-scm="server.0.0.0.product.13607.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother006001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.2','https://www.mi.com/buy?product_id=13607','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=13607"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cbfab8147c1104eea97c7d0f07581237.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="巨省电 | 米家空调 新一级 1.5匹 睡眠版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">
                            巨省电 | 米家空调 新一级 1.5匹 睡眠版
                          </div>
                          <p class="price">2399元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=14306"
                          target="_blank"
                          data-log_code="31pchomeother006002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.3"
                          data-spm="category_top_list.3476896.3"
                          data-scm="server.0.0.0.product.14306.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother006002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.3','https://www.mi.com/buy?product_id=14306','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14306"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4be9f7bb741c25376594976ea5451842.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="巨省电 3匹|变频|新一级能效（鎏金款）"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">
                            巨省电 3匹|变频|新一级能效（鎏金款）
                          </div>
                          <p class="price">5699元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=10952"
                          target="_blank"
                          data-log_code="31pchomeother006003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.4"
                          data-spm="category_top_list.3476896.4"
                          data-scm="server.0.0.0.product.10952.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother006003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.4','https://www.mi.com/buy?product_id=10952','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=10952"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="米家风冷对开门冰箱 483L"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">米家风冷对开门冰箱 483L</div>
                          <p class="price">2399元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=12961"
                          target="_blank"
                          data-log_code="31pchomeother006004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.5"
                          data-spm="category_top_list.3476896.5"
                          data-scm="server.0.0.0.product.12961.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother006004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.5','https://www.mi.com/buy?product_id=12961','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=12961"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/65df9e92c06dcd148de5f0eb13e16ea2.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="米家扫拖机器人1T"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">米家扫拖机器人1T</div>
                          <p class="price">1999元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=11214"
                          target="_blank"
                          data-log_code="31pchomeother006005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.6"
                          data-spm="category_top_list.3476896.6"
                          data-scm="server.0.0.0.product.11214.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother006005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476896.6','https://www.mi.com/buy?product_id=11214','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=11214"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c82798dbbc793c8bd52929dbe86b316f.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米净水器S1 800G"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米净水器S1 800G</div>
                          <p class="price">2199元</p></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-index="6" class="nav-item">
                <a
                  href="javascript: void(0);"
                  data-log_code="31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.1"
                  data-spm="category_top_list.3476897.1"
                  data-scm=""
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother007000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.1','javascript:void(0);','&quot;&quot;']);"
                  data-params='""'
                  ><span class="text">路由器</span></a
                >
                <div class="item-children hide">
                  <div class="container">
                    <ul class="children-list clearfix">
                      <li class="first">
                        <a
                          href="https://www.mi.com/r6000"
                          target="_blank"
                          data-log_code="31pchomeother007001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.2"
                          data-spm="category_top_list.3476897.2"
                          data-scm="server.0.0.0.product.13368.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother007001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.2','https://www.mi.com/r6000','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fr6000"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米路由器AX6000"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米路由器AX6000</div>
                          <p class="price">599元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=13877"
                          target="_blank"
                          data-log_code="31pchomeother007002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.3"
                          data-spm="category_top_list.3476897.3"
                          data-scm="server.0.0.0.product.13877.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother007002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.3','https://www.mi.com/buy?product_id=13877','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=13877"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2815a0a208be362cba673aae9a1f9c93.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="小米路由器AX9000"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米路由器AX9000</div>
                          <p class="price">1299元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/rm2100/"
                          target="_blank"
                          data-log_code="31pchomeother007003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.4"
                          data-spm="category_top_list.3476897.4"
                          data-scm="server.0.0.0.product.11373.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother007003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.4','https://www.mi.com/rm2100/','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Frm2100%252F"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                              alt="Redmi路由器AC2100"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">Redmi路由器AC2100</div>
                          <p class="price">199元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/miwifi4ac/"
                          target="_blank"
                          data-log_code="31pchomeother007004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.5"
                          data-spm="category_top_list.3476897.5"
                          data-scm="server.0.0.0.product.9468.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother007004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.5','https://www.mi.com/miwifi4ac/','&quot;&quot;']);"
                          data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fmiwifi4ac%252F"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&amp;w=320&amp;h=220"
                              alt="小米路由器4A 千兆版"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米路由器4A 千兆版</div>
                          <p class="price">129元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/buy?product_id=8645"
                          target="_blank"
                          data-log_code="31pchomeother007005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.6"
                          data-spm="category_top_list.3476897.6"
                          data-scm="server.0.0.0.product.8645.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother007005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.6','https://www.mi.com/buy?product_id=8645','&quot;&quot;']);"
                          data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=8645"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28efac56ef4c4942077dac7e30e8c624.jpg?thumb=1&amp;w=320&amp;h=220"
                              alt="小米路由器 4C"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">小米路由器 4C</div>
                          <p class="price">69元</p></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.mi.com/a/h/8363.html"
                          target="_blank"
                          data-log_code="31pchomeother007006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.7"
                          data-spm="category_top_list.3476897.7"
                          data-scm="server.0.0.0.cms.0.0.0"
                          data-settrack="true"
                          onclick="_msq.push(['trackEvent','31pchomeother007006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476897.7','https://www.mi.com/a/h/8363.html','&quot;&quot;']);"
                          data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fa%252Fh%252F8363.html"}'
                          ><div class="figure figure-thumb">
                            <img
                              src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ddc6a2789c5f5ff78fa4ca1402417c8.png?thumb=1&amp;w=320&amp;h=220"
                              alt="查看全部#小米路由器"
                              width="160"
                              height="110"
                            />
                          </div>
                          <div class="title">查看全部<br />小米路由器</div></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li data-index="7" class="nav-item">
                <a
                  href="https://www.mi.com/service/"
                  target="_blank"
                  data-log_code="31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476899.1"
                  data-spm="category_top_list.3476899.1"
                  data-scm="server.0.0.0.cms.url.0.0"
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother008000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476899.1','https://www.mi.com/service/','&quot;&quot;']);"
                  data-params='{"uri":"https:%252F%252Fwww.mi.com%252Fservice%252F"}'
                  ><span class="text">服务</span></a
                >
              </li>
              <li data-index="8" class="nav-item">
                <a
                  href="http://www.xiaomi.cn/"
                  target="_blank"
                  data-log_code="31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476900.1"
                  data-spm="category_top_list.3476900.1"
                  data-scm="server.0.0.0.cms.url.0.0"
                  class="link"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother009000#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476900.1','http://www.xiaomi.cn/','&quot;&quot;']);"
                  data-params='{"uri":"http:%252F%252Fwww.xiaomi.cn%252F"}'
                  ><span class="text">社区</span></a
                >
              </li>
            </ul>
          </div>
          <div class="header-search">
            <form
              id="J_searchForm"
              action="//search.mi.com/search"
              method="get"
              class="search-form clearfix"
            >
              <label for="search" class="hide">站内搜索</label>
              <a
                data-log_code="bpm=28.265.3682762.1&amp;cdm=0.0.0.0"
                class="no-style-msq"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','bpm=28.265.3682762.1&amp;cdm=0.0.0.0','','&quot;&quot;']);"
                ><input
                  type="search"
                  id="search"
                  name="keyword"
                  autocomplete="off"
                  data-search-config='{&apos;defaultWords&apos;:[{"word":"Redmi K30","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468989.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"小米10","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468988.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"Redmi Note 8","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468986.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"小米CC9","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468985.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"黑鲨游戏手机","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468990.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"小米电视","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468984.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"小米笔记本","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468983.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"路由器","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468982.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"小爱音箱","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468981.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}},{"word":"净水器","block_id":0,"action":{"type":"none","path":"","log_code":"31pcsearchother000000#t=normal\u0026act=other\u0026page=search\u0026bid=3468980.1","extra":"","product_id":"","goods_id":"","default_line":"","spm_stat":{"spm_code":"","spm_params":"","scm":""}}}]}'
                  class="search-text"
                  placeholder="空调"
              /></a>
              <a
                id="J_submitBtn"
                data-log_code="bpm=28.265.3682763.4&amp;cdm=0.1.0.searchWord-5e7f1fe1390049aa9ed07df46191a3ff-空调-QUERY_HOT-QUERY-4-control&amp;next=28.265"
                class="no-style-msq"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','bpm=28.265.3682763.2&amp;cdm=0.1.0.searchWord-5e7f1fe1390049aa9ed07df46191a3ff-红米-QUERY_HOT-QUERY-2-control&amp;next=28.265','','&quot;&quot;']);"
                ><input
                  type="submit"
                  value="&#xe600;"
                  class="search-btn iconfont"
              /></a>
              <div class="search-hot-words"></div>
              <div id="J_keywordList" class="keyword-list hide">
                <ul class="result-list">
                  <li data-key="全部商品">
                    <a
                      data-log_code="bpm=28.265.3682766.1&amp;cdm=0.0.0.0&amp;query=%E5%85%A8%E9%83%A8%E5%95%86%E5%93%81&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E5%85%A8%E9%83%A8%E5%95%86%E5%93%81"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.1&amp;cdm=0.0.0.0&amp;query=%E5%85%A8%E9%83%A8%E5%95%86%E5%93%81&amp;next=28.265','//www.mi.com/search?keyword=%E5%85%A8%E9%83%A8%E5%95%86%E5%93%81','&quot;&quot;']);"
                      >全部商品</a
                    >
                  </li>
                  <li data-key="小米手机">
                    <a
                      data-log_code="bpm=28.265.3682766.2&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-小米手机-QUERY_HOT-QUERY-1-default&amp;query=%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.2&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-小米手机-QUERY_HOT-QUERY-1-default&amp;query=%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA&amp;next=28.265','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA','&quot;&quot;']);"
                      >小米手机</a
                    >
                  </li>
                  <li data-key="红米">
                    <a
                      data-log_code="bpm=28.265.3682766.3&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-红米-QUERY_HOT-QUERY-2-default&amp;query=%E7%BA%A2%E7%B1%B3&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E7%BA%A2%E7%B1%B3"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.3&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-红米-QUERY_HOT-QUERY-2-default&amp;query=%E7%BA%A2%E7%B1%B3&amp;next=28.265','//www.mi.com/search?keyword=%E7%BA%A2%E7%B1%B3','&quot;&quot;']);"
                      >红米</a
                    >
                  </li>
                  <li data-key="小米平板5 Pro">
                    <a
                      data-log_code="bpm=28.265.3682766.4&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-小米平板5 Pro-QUERY_HOT-QUERY-3-default&amp;query=%E5%B0%8F%E7%B1%B3%E5%B9%B3%E6%9D%BF5+Pro&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B9%B3%E6%9D%BF5%20Pro"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.4&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-小米平板5 Pro-QUERY_HOT-QUERY-3-default&amp;query=%E5%B0%8F%E7%B1%B3%E5%B9%B3%E6%9D%BF5+Pro&amp;next=28.265','//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E5%B9%B3%E6%9D%BF5%20Pro','&quot;&quot;']);"
                      >小米平板5 Pro</a
                    >
                  </li>
                  <li data-key="空调">
                    <a
                      data-log_code="bpm=28.265.3682766.5&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-空调-QUERY_HOT-QUERY-4-default&amp;query=%E7%A9%BA%E8%B0%83&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E7%A9%BA%E8%B0%83"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.5&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-空调-QUERY_HOT-QUERY-4-default&amp;query=%E7%A9%BA%E8%B0%83&amp;next=28.265','//www.mi.com/search?keyword=%E7%A9%BA%E8%B0%83','&quot;&quot;']);"
                      >空调</a
                    >
                  </li>
                  <li data-key="显示器">
                    <a
                      data-log_code="bpm=28.265.3682766.6&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-显示器-QUERY_HOT-QUERY-5-default&amp;query=%E6%98%BE%E7%A4%BA%E5%99%A8&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E6%98%BE%E7%A4%BA%E5%99%A8"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.6&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-显示器-QUERY_HOT-QUERY-5-default&amp;query=%E6%98%BE%E7%A4%BA%E5%99%A8&amp;next=28.265','//www.mi.com/search?keyword=%E6%98%BE%E7%A4%BA%E5%99%A8','&quot;&quot;']);"
                      >显示器</a
                    >
                  </li>
                  <li data-key="洗衣机">
                    <a
                      data-log_code="bpm=28.265.3682766.7&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-洗衣机-QUERY_HOT-QUERY-6-default&amp;query=%E6%B4%97%E8%A1%A3%E6%9C%BA&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E6%B4%97%E8%A1%A3%E6%9C%BA"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.7&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-洗衣机-QUERY_HOT-QUERY-6-default&amp;query=%E6%B4%97%E8%A1%A3%E6%9C%BA&amp;next=28.265','//www.mi.com/search?keyword=%E6%B4%97%E8%A1%A3%E6%9C%BA','&quot;&quot;']);"
                      >洗衣机</a
                    >
                  </li>
                  <li data-key="电视">
                    <a
                      data-log_code="bpm=28.265.3682766.8&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-电视-QUERY_HOT-QUERY-7-default&amp;query=%E7%94%B5%E8%A7%86&amp;next=28.265"
                      href="//www.mi.com/search?keyword=%E7%94%B5%E8%A7%86"
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','bpm=28.265.3682766.8&amp;cdm=0.1.0.hotword-bb0c539a0e804f399443a6cb19832237-电视-QUERY_HOT-QUERY-7-default&amp;query=%E7%94%B5%E8%A7%86&amp;next=28.265','//www.mi.com/search?keyword=%E7%94%B5%E8%A7%86','&quot;&quot;']);"
                      >电视</a
                    >
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div id="J_doodleWrapper"></div>
        </div>
        <div
          id="J_navMenu"
          class="header-nav-menu slide-up"
          style="display: none"
        >
          <div class="container">
            <ul class="children-list clearfix">
              <li class="first">
                <a
                  href="https://www.mi.com/redminote11pro"
                  target="_blank"
                  data-log_code="31pchomeother002001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.2"
                  data-spm="category_top_list.3476902.2"
                  data-scm="server.0.0.0.product.10000330.0.0"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother002001#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.2','https://www.mi.com/redminote11pro','&quot;&quot;']);"
                  data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredminote11pro"}'
                  ><div class="figure figure-thumb">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e78629420a392da6fd3e34dae9fac5d.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                      alt="Redmi Note 11 Pro系列"
                      width="160"
                      height="110"
                    />
                  </div>
                  <div class="title">Redmi Note 11 Pro系列</div>
                  <p class="price">1799元起</p></a
                >
              </li>
              <li>
                <a
                  href="https://www.mi.com/redminote11"
                  target="_blank"
                  data-log_code="31pchomeother002002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.3"
                  data-spm="category_top_list.3476902.3"
                  data-scm="server.0.0.0.product.15135.0.0"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother002002#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.3','https://www.mi.com/redminote11','&quot;&quot;']);"
                  data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredminote11"}'
                  ><div class="figure figure-thumb">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/25149bd95f33f9814aa4c4983c0d9b71.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                      alt="Redmi Note 11 5G"
                      width="160"
                      height="110"
                    />
                  </div>
                  <div class="title">Redmi Note 11 5G</div>
                  <p class="price">1199元起</p></a
                >
              </li>
              <li>
                <a
                  href="https://www.mi.com/redminote11-4g"
                  target="_blank"
                  data-log_code="31pchomeother002003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.4"
                  data-spm="category_top_list.3476902.4"
                  data-scm="server.0.0.0.product.15386.0.0"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother002003#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.4','https://www.mi.com/redminote11-4g','&quot;&quot;']);"
                  data-params='{"page_type":"overview","uri":"https:%252F%252Fwww.mi.com%252Fredminote11-4g"}'
                  ><div class="figure figure-thumb">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a785b54d06c72ff63e64d0fa51ee02f5.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                      alt="Redmi Note 11 4G"
                      width="160"
                      height="110"
                    />
                  </div>
                  <div class="title">Redmi Note 11 4G</div>
                  <p class="price">999元起</p></a
                >
              </li>
              <li>
                <a
                  href="https://www.mi.com/buy?product_id=14206"
                  target="_blank"
                  data-log_code="31pchomeother002004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.5"
                  data-spm="category_top_list.3476902.5"
                  data-scm="server.0.0.0.product.14206.0.0"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother002004#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.5','https://www.mi.com/buy?product_id=14206','&quot;&quot;']);"
                  data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14206"}'
                  ><div class="figure figure-thumb">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3c5d99c28700a3c45ea65eebbea0a04.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                      alt="Redmi Note 10 Pro"
                      width="160"
                      height="110"
                    />
                  </div>
                  <div class="title">Redmi Note 10 Pro</div>
                  <p class="price">1499元起</p></a
                >
              </li>
              <li>
                <a
                  href="https://www.mi.com/buy?product_id=14210"
                  target="_blank"
                  data-log_code="31pchomeother002005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.6"
                  data-spm="category_top_list.3476902.6"
                  data-scm="server.0.0.0.product.14210.0.0"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother002005#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.6','https://www.mi.com/buy?product_id=14210','&quot;&quot;']);"
                  data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14210"}'
                  ><div class="figure figure-thumb">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88bb84ff06f0ab467b859aeed36b817a.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                      alt="Redmi Note 10 5G"
                      width="160"
                      height="110"
                    />
                  </div>
                  <div class="title">Redmi Note 10 5G</div>
                  <p class="price">1099元起</p></a
                >
              </li>
              <li>
                <a
                  href="https://www.mi.com/buy?product_id=14031"
                  target="_blank"
                  data-log_code="31pchomeother002006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.7"
                  data-spm="category_top_list.3476902.7"
                  data-scm="server.0.0.0.product.14031.0.0"
                  data-settrack="true"
                  onclick="_msq.push(['trackEvent','31pchomeother002006#t=normal&amp;act=other&amp;page=home&amp;page_id=10530&amp;bid=3476902.7','https://www.mi.com/buy?product_id=14031','&quot;&quot;']);"
                  data-params='{"page_type":"buy","uri":"https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=https:%252F%252Fwww.mi.com%252Fbuy%253Fproduct_id=14031"}'
                  ><div class="figure figure-thumb">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/acd0f27496ccdf81ef42124c35e8bfc4.png?thumb=1&amp;w=320&amp;h=220&amp;f=webp&amp;q=90"
                      alt="K40 游戏增强版"
                      width="160"
                      height="110"
                    />
                  </div>
                  <div class="title">K40 游戏增强版</div>
                  <p class="price">1999元起</p></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <footer>
      <div class="site-footer">
        <div class="container">
          <div class="footer-service">
            <ul class="list-service clearfix">
              <li>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/quick-repair"
                  target="_blank"
                  ><em class="iconfont">&#xe6ae;</em>预约维修服务</a
                >
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/exchange#back"
                  target="_blank"
                  ><em class="iconfont">&#xe691;</em>7天无理由退货</a
                >
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/exchange#back"
                  target="_blank"
                  ><em class="iconfont">&#xe606;</em>15天免费换货</a
                >
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/buy/Postal%20policy"
                  target="_blank"
                  ><em class="iconfont">&#xe670;</em
                  ><span id="J_footerPrice">满69包邮</span></a
                >
              </li>
              <li>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/sitelist"
                  target="_blank"
                  ><em class="iconfont">&#xe61c;</em>520余家售后网点</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-links clearfix">
            <dl class="col-links col-links-first">
              <dt>帮助中心</dt>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/account/Account%20registration/"
                  target="_blank"
                  >账户管理</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/buy/SalesTime/"
                  target="_blank"
                  >购物指南</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/order/sendprogress/"
                  target="_blank"
                  >订单操作</a
                >
              </dd>
            </dl>
            <dl class="col-links">
              <dt>服务支持</dt>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/exchange"
                  target="_blank"
                  >售后政策</a
                >
              </dd>
              <dd>
                <a rel="nofollow" href="//www.mi.com/service/" target="_blank"
                  >自助服务</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/download/"
                  target="_blank"
                  >相关下载</a
                >
              </dd>
            </dl>
            <dl class="col-links">
              <dt>线下门店</dt>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/mihome/list"
                  target="_blank"
                  >小米之家</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/sitelist"
                  target="_blank"
                  >服务网点</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/family-location"
                  target="_blank"
                  >授权体验店/专区</a
                >
              </dd>
            </dl>
            <dl class="col-links">
              <dt>关于小米</dt>
              <dd>
                <a rel="nofollow" href="//www.mi.com/about/" target="_blank"
                  >了解小米</a
                >
              </dd>
              <dd>
                <a rel="nofollow" href="//hr.xiaomi.com/" target="_blank"
                  >加入小米</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//company.mi.com/zh-cn/ir/indexContent/index.html"
                  target="_blank"
                  >投资者关系</a
                >
              </dd>
              <dd>
                <a rel="nofollow" href="//www.mi.com/csr/" target="_blank"
                  >企业社会责任</a
                >
              </dd>
              <dd>
                <a rel="nofollow" href="//www.mi.com/integrity" target="_blank"
                  >廉洁举报</a
                >
              </dd>
            </dl>
            <dl class="col-links">
              <dt>关注我们</dt>
              <dd>
                <a
                  rel="nofollow"
                  href="//weibo.com/xiaomishangcheng"
                  target="_blank"
                  >新浪微博</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="javascript:void(0);"
                  id="J_siteWeixinCode"
                  >官方微信</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/about/contact/"
                  target="_blank"
                  >联系我们</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/foundation/index"
                  target="_blank"
                  >公益基金会</a
                >
              </dd>
            </dl>
            <dl class="col-links">
              <dt>特色服务</dt>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/order/fcode"
                  target="_blank"
                  >F 码通道</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/order/giftcode"
                  target="_blank"
                  >礼物码</a
                >
              </dd>
              <dd>
                <a
                  rel="nofollow"
                  href="//www.mi.com/service/imei"
                  target="_blank"
                  >防伪查询</a
                >
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {


	methods:{
		changeCategoryItemActive(e) {
			e.currentTarget.className = "category-item category-item-active"
		},

		changeCategoryItem(e) {
			e.currentTarget.className = "category-item"
		}
		
	}
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.appContent {
  width: 100%;
  height: 100%;
}
.line[data-v-70283663] {
    margin-top: 12px;
    border-bottom: 1px solid #e0e0e0;
}
</style>
