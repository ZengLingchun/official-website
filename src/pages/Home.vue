<template>
  <div class="home-hero-container container">
    <div class="home-hero">
      <div
        id="J_homeSwiper"
        class="
          swiper-container
          home-hero-swiper
          swiper-no-swiping
          swiper-container-fade
          swiper-container-initialized
          swiper-container-horizontal
        "
      >
        <el-carousel arrow="always">
          <el-carousel-item v-for="item in swiper" :key="item">
            <img alt="" class="swiper-lazy swiper-lazy-loaded" :src="item" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="home-hero-sub row">
        <div class="span4">
          <ul class="home-channel-list clearfix">
            <li>
              <a
                target="_blank"
                href="https://api.jr.mi.com/activity/scene/scenePCsearch.html?from=search"
                data-spm="cms_10530.3480970.1"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagefeatures_entrance001001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.1"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagefeatures_entrance001001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.1','https://api.jr.mi.com/activity/scene/scenePCsearch.html?from=search','&quot;&quot;']);"
                data-params='{"component":"six_icon","component_name":"【功能】功能入口","img":203877}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&amp;h=48"
                  alt="保障服务"
                />
                保障服务
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://qiye.mi.com/"
                data-spm="cms_10530.3480970.2"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagefeatures_entrance002001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.2"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagefeatures_entrance002001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.2','https://qiye.mi.com/','&quot;&quot;']);"
                data-params='{"component":"six_icon","component_name":"【功能】功能入口","img":199065}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&amp;h=48"
                  alt="企业团购"
                />
                企业团购
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.mi.com/order/fcode"
                data-spm="cms_10530.3480970.3"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagefeatures_entrance003001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.3"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagefeatures_entrance003001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.3','https://www.mi.com/order/fcode','&quot;&quot;']);"
                data-params='{"component":"six_icon","component_name":"【功能】功能入口","img":199067}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&amp;h=48"
                  alt="F码通道"
                />
                F码通道
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://10046.mi.com"
                data-spm="cms_10530.3480970.4"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagefeatures_entrance004001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.4"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagefeatures_entrance004001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.4','https://10046.mi.com','&quot;&quot;']);"
                data-params='{"component":"six_icon","component_name":"【功能】功能入口","img":199068}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&amp;h=48"
                  alt="米粉卡"
                />
                米粉卡
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="//www.mi.com/a/h/16769.html"
                data-spm="cms_10530.3480970.5"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagefeatures_entrance005001#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.5"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagefeatures_entrance005001#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.5','//www.mi.com/a/h/16769.html','&quot;&quot;']);"
                data-params='{"component":"six_icon","component_name":"【功能】功能入口","img":199069}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&amp;h=48"
                  alt="以旧换新"
                />
                以旧换新
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://recharge.10046.mi.com/"
                data-spm="cms_10530.3480970.6"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagefeatures_entrance006001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.6"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagefeatures_entrance006001#t=normal&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480970.6','https://recharge.10046.mi.com/','&quot;&quot;']);"
                data-params='{"component":"six_icon","component_name":"【功能】功能入口","img":199070}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&amp;h=48"
                  alt="话费充值"
                />
                话费充值
              </a>
            </li>
          </ul>
        </div>
        <div class="span16">
          <ul id="J_homePromoList" class="home-promo-list clearfix">
            <li class="first">
              <a
                target="_blank"
                href="https://www.mi.com/mi11ultra"
                data-spm="cms_10530.3480925.1"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagecells_auto_fill000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480925.1&amp;adp=3117&amp;adm=30081"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagecells_auto_fill000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480925.1&amp;adp=3117&amp;adm=30081','https://www.mi.com/mi11ultra','&quot;&quot;']);"
                data-params='{"component":"three_line","component_name":"【广告】三拼","img":571067}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8a6d6d37904e22c72130e3e4ec79b41.jpg?w=632&amp;h=340"
                  alt=""
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.mi.com/mixfold"
                data-spm="cms_10530.3480925.2"
                data-scm="cms.0.0.0.0.0.0.0"
                data-log_code="31pchomepagecells_auto_fill000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480925.2&amp;adp=3118&amp;adm=31670"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagecells_auto_fill000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480925.2&amp;adp=3118&amp;adm=31670','https://www.mi.com/mixfold','&quot;&quot;']);"
                data-params='{"component":"three_line","component_name":"【广告】三拼","img":633526}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bdb0b3ff4e73fe2a6bf2f8fd399015e.png?w=632&amp;h=340"
                  alt=""
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.mi.com/buy?product_id=2213400011"
                data-spm="cms_10530.3480925.3"
                data-scm="cms.0.0.0.product.2213400011.0.0"
                data-log_code="31pchomepagecells_auto_fill000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=2213400011&amp;page_id=10530&amp;bid=3480925.3&amp;adp=3119&amp;adm=24873"
                data-settrack="true"
                onclick="_msq.push(['trackEvent','31pchomepagecells_auto_fill000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=2213400011&amp;page_id=10530&amp;bid=3480925.3&amp;adp=3119&amp;adm=24873','https://www.mi.com/buy?product_id=2213400011','&quot;&quot;']);"
                data-params='{"component":"three_line","component_name":"【广告】三拼","default_goods":"2213400011","img":598742}'
                ><img
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35b3f906861db9d6472206e6d68318d9.jpeg?w=632&amp;h=340"
                  alt=""
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="page-main home-main">
    <div class="container">
      <div class="home-banner-box">
        <a
          ><img
            alt="test"
            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f334fbd05d5681bb838fefd1c815d88c.jpg?thumb=1&amp;w=2452&amp;h=240&amp;f=webp&amp;q=90"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f334fbd05d5681bb838fefd1c815d88c.jpg?thumb=1&amp;w=2452&amp;h=240&amp;f=webp&amp;q=90"
        /></a>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd">
          <h2 class="title">手机</h2>
          <div class="more">
            <a href="//www.mi.com/p/1915.html" class="more-link"
              >查看更多<i class="iconfont">&#xe617;</i></a
            >
          </div>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-l">
                  <a
                    href="https://www.mi.com/mixfold"
                    data-log_code="31pchomepagelist_eight_product000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.1&amp;adp=3120&amp;adm=28087"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.1"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":513682}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.1&amp;adp=3120&amp;adm=28087','https://www.mi.com/mixfold','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&amp;w=468&amp;h=1228&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&amp;w=468&amp;h=1228&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <ul class="brick-list clearfix">
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/mi12pro"
                    data-log_code="31pchomepagelist_eight_product000001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.3&amp;pid=15472"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.3"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":630447}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product000001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.3&amp;pid=15472','https://www.mi.com/mi12pro','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="Xiaomi 12 Pro"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7382271e3a677bf188679ca38d68a42.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7382271e3a677bf188679ca38d68a42.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">Xiaomi 12 Pro</h3>
                    <p class="desc">全新骁龙8｜2K AMOLED屏幕</p>
                    <p class="price">
                      <span class="num">4699</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/mi12"
                    data-log_code="31pchomepagelist_eight_product001001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.4&amp;pid=15491"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.4"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":630357}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product001001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.4&amp;pid=15491','https://www.mi.com/mi12','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="Xiaomi 12"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e870129c5c374088bf7cc46be0b7ace2.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e870129c5c374088bf7cc46be0b7ace2.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">Xiaomi 12</h3>
                    <p class="desc">全新骁龙8｜5000万主摄</p>
                    <p class="price">
                      <span class="num">3699</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/mi12x"
                    data-log_code="31pchomepagelist_eight_product002001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.5&amp;pid=15476"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.5"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":630555}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product002001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.5&amp;pid=15476','https://www.mi.com/mi12x','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="Xiaomi 12X"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/63e15f377e87212d460592b4a1369ccd.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/63e15f377e87212d460592b4a1369ccd.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">Xiaomi 12X</h3>
                    <p class="desc">骁龙870｜5000万主摄</p>
                    <p class="price">
                      <span class="num">3199</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/mi11le-5g-ne"
                    data-log_code="31pchomepagelist_eight_product003001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.6&amp;pid=15415"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.6"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":619366}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product003001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.6&amp;pid=15415','https://www.mi.com/mi11le-5g-ne','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="Xiaomi 11 青春活力版"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d4b362431de4bdda03315ffdbc7b32a.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d4b362431de4bdda03315ffdbc7b32a.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">Xiaomi 11 青春活力版</h3>
                    <p class="desc">轻薄5G，内外皆出彩</p>
                    <p class="price">
                      <span class="num">1999</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/redminote11pro"
                    data-log_code="31pchomepagelist_eight_product004001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.7&amp;pid=10000330"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.7"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":594619}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product004001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.7&amp;pid=10000330','https://www.mi.com/redminote11pro','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="Redmi Note 11 Pro系列"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6d0a3e7acc3e91e2cfd83dbbe1d1c029.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">Redmi Note 11 Pro系列</h3>
                    <p class="desc">三星AMOLED高刷屏</p>
                    <p class="price">
                      <span class="num">1799</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/redminote11"
                    data-log_code="31pchomepagelist_eight_product005001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.8&amp;pid=15135"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.8"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":594539}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product005001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.8&amp;pid=15135','https://www.mi.com/redminote11','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="Redmi Note 11 5G"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50da95e9e4496dcac8704da2deb94f6e.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50da95e9e4496dcac8704da2deb94f6e.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">Redmi Note 11 5G</h3>
                    <p class="desc">5000mAh大电量</p>
                    <p class="price">
                      <span class="num">1199</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/redminote11-4g"
                    data-log_code="31pchomepagelist_eight_product006001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.9&amp;pid=15386"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.9"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":608180}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product006001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.9&amp;pid=15386','https://www.mi.com/redminote11-4g','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="Redmi Note 11 4G"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c001ebc4aee69bc9ff6fae9ecf9137d0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c001ebc4aee69bc9ff6fae9ecf9137d0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">Redmi Note 11 4G</h3>
                    <p class="desc">5000mAh大电量</p>
                    <p class="price">
                      <span class="num">999</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
                <li class="brick-item brick-item-m brick-item-m-2">
                  <a
                    href="https://www.mi.com/blackshark4spro"
                    data-log_code="31pchomepagelist_eight_product007001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.10&amp;pid=15083"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480926.10"
                    data-params='{"component":"list_eight_product","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u5355TAB ","img":587020}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product007001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480926.10&amp;pid=15083','https://www.mi.com/blackshark4spro','&quot;&quot;']);"
                    ><div class="figure figure-img">
                      <img
                        width="160"
                        height="160"
                        alt="黑鲨4S Pro"
                        data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3490cfc52dc7c9abf9badfa1dc2d0eae.png?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3490cfc52dc7c9abf9badfa1dc2d0eae.png?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                        lazy="loaded"
                      />
                    </div>
                    <h3 class="title">黑鲨4S Pro</h3>
                    <p class="desc">磁动力升降肩键</p>
                    <p class="price">
                      <span class="num">4799</span>元<span>起</span
                      ><!---->
                    </p></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd">
          <h2 class="title">智能穿戴</h2>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-l">
                  <a
                    href="https://www.mi.com/xiaomiwatchcolor2"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.1&amp;adp=5209&amp;adm=30944"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3951217.1"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":601087}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.1&amp;adp=5209&amp;adm=30944','https://www.mi.com/xiaomiwatchcolor2','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9895c56a7b792fb9053e3085fc261072.jpg?thumb=1&amp;w=468&amp;h=1228&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9895c56a7b792fb9053e3085fc261072.jpg?thumb=1&amp;w=468&amp;h=1228&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <div>
                <ul class="brick-list clearfix">
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/xiaomiwatchs1"
                        data-log_code="31pchomepagelist_eight_product_tab000001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.3&amp;pid=15466"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3951217.3"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":632046}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.3&amp;pid=15466','https://www.mi.com/xiaomiwatchs1','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="Xiaomi Watch S1"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8259e8fb355acf168c66f75d375c6af.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8259e8fb355acf168c66f75d375c6af.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">Xiaomi Watch S1</h3>
                        <p class="desc">腕事具备</p>
                        <p class="price">
                          <span class="num">1099</span>元<span>起</span
                          ><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/xiaomibuds3"
                        data-log_code="31pchomepagelist_eight_product_tab001001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.4&amp;pid=15450"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3951217.4"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":632836}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab001001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.4&amp;pid=15450','https://www.mi.com/xiaomibuds3','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="Xiaomi真无线降噪耳机3"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b271a074e087848357aa61ae665b214.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b271a074e087848357aa61ae665b214.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">Xiaomi真无线降噪耳机3</h3>
                        <p class="desc">静听好声音</p>
                        <p class="price">
                          <span class="num">499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/redmiwatch2"
                        data-log_code="31pchomepagelist_eight_product_tab002001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.5&amp;pid=15099"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3951217.5"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":594878}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab002001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.5&amp;pid=15099','https://www.mi.com/redmiwatch2','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="Redmi 手表 2"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f84503dbf5adbdf17111c61d4a7cf893.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f84503dbf5adbdf17111c61d4a7cf893.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">Redmi 手表 2</h3>
                        <p class="desc">AMOLED高清大屏</p>
                        <p class="price">
                          <span class="num">399</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/shouhuan6/nfc"
                        data-log_code="31pchomepagelist_eight_product_tab003001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.6&amp;pid=13836"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3951217.6"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":507519}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab003001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.6&amp;pid=13836','https://www.mi.com/shouhuan6/nfc','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米手环6 NFC版"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b28153b80cb2c67564608e56d5c2f3f3.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b28153b80cb2c67564608e56d5c2f3f3.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米手环6 NFC版</h3>
                        <p class="desc">全屏实力</p>
                        <p class="price">
                          <span class="num">259</span>元<!----><del
                            ><span class="num">279</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/redmi-watch-mulan"
                        data-log_code="31pchomepagelist_eight_product_tab004001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.7&amp;pid=13160"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3951217.7"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":459751}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab004001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.7&amp;pid=13160','https://www.mi.com/redmi-watch-mulan','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="Redmi 手表"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfec307342eb35ee4a437f664004c50f.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfec307342eb35ee4a437f664004c50f.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">Redmi 手表</h3>
                        <p class="desc">35g超轻/1.4"大屏/多功能NFC/7天长续航</p>
                        <p class="price">
                          <span class="num">249</span>元<!----><del
                            ><span class="num">299</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/xiaomibuds3pro"
                        data-log_code="31pchomepagelist_eight_product_tab005001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.8&amp;pid=15041"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3951217.8"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":581723}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab005001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951217.8&amp;pid=15041','https://www.mi.com/xiaomibuds3pro','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="Xiaomi 真无线降噪耳机 3 Pro"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cc4e8e58d7288cd8dff13b98bdc3ea8.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cc4e8e58d7288cd8dff13b98bdc3ea8.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">Xiaomi 真无线降噪耳机 3 Pro</h3>
                        <p class="desc">动态降噪 静听曼妙</p>
                        <p class="price">
                          <span class="num">649</span>元<del
                            ><span class="num">699</span>元</del
                          >
                        </p></a
                      >
                    </li>
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14903"
                        data-log_code="31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=14903&amp;page_id=10530&amp;bid=3951217.9"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14903.0.0"
                        data-spm="cms_10530.3951217.9"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14903","img":577246}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=14903&amp;page_id=10530&amp;bid=3951217.9','https://www.mi.com/buy?product_id=14903','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="Redmi Buds 3半入耳真无线蓝牙耳机"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/11570d5371f16d2d9b19f504e09d01f0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/11570d5371f16d2d9b19f504e09d01f0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">Redmi Buds 3半入耳真无线蓝牙耳机</h3>
                        <p class="desc">轻巧半入耳，舒适有天分</p>
                        <p class="price">
                          <span class="num">199</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <li class="brick-item brick-item-s">
                    <a
                      href="//www.mi.com/p/3469.html"
                      data-log_code="31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480938.3"
                      data-scm="cms.0.0.0.0.0.0.0"
                      data-spm="cms_10530.3480938.3"
                      target="_blank"
                      data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480938.3','//www.mi.com/p/3469.html','&quot;&quot;']);"
                      ><div class="figure figure-more">
                        <i class="iconfont">&#xe602;</i>
                      </div>
                      <div class="more">
                        浏览更多
                        <small>热门</small>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd">
          <h2 class="title">家电</h2>
          <div class="more">
            <a class="more-link hot">热门</a>
          </div>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=10000316"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=10000316&amp;page_id=10530&amp;bid=3480938.1&amp;adp=3121&amp;adm=29933"
                    target="_blank"
                    data-scm="cms.0.0.0.product.10000316.0.0"
                    data-spm="cms_10530.3480938.1"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"10000316","img":568862}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=10000316&amp;page_id=10530&amp;bid=3480938.1&amp;adp=3121&amp;adm=29933','https://www.mi.com/buy?product_id=10000316','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=14781"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14781&amp;page_id=10530&amp;bid=3480938.2&amp;adp=3122&amp;adm=29932"
                    target="_blank"
                    data-scm="cms.0.0.0.product.14781.0.0"
                    data-spm="cms_10530.3480938.2"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14781","img":568863}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14781&amp;page_id=10530&amp;bid=3480938.2&amp;adp=3122&amp;adm=29932','https://www.mi.com/buy?product_id=14781','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca83e0294e7d725690b0576a1a4681e2.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca83e0294e7d725690b0576a1a4681e2.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <div>
                <ul class="brick-list clearfix">
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14779"
                        data-log_code="31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14779&amp;page_id=10530&amp;bid=3480938.4"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14779.0.0"
                        data-spm="cms_10530.3480938.4"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14779","img":561370}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14779&amp;page_id=10530&amp;bid=3480938.4','https://www.mi.com/buy?product_id=14779','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米电视6 65”  OLED"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米电视6 65” OLED</h3>
                        <p class="desc">
                          OLED自发光屏 | 百万级对比度 | 4.6mm超薄全面屏
                        </p>
                        <p class="price">
                          <span class="num">6999</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14438"
                        data-log_code="31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=14438&amp;page_id=10530&amp;bid=3480938.5"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14438.0.0"
                        data-spm="cms_10530.3480938.5"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14438","img":547356}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=14438&amp;page_id=10530&amp;bid=3480938.5','https://www.mi.com/buy?product_id=14438','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米电视6 至尊版 65英寸"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7c15101f2c8a652a4a0d069501d1e53.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7c15101f2c8a652a4a0d069501d1e53.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米电视6 至尊版 65英寸</h3>
                        <p class="desc">
                          百级分区背光 | 双120Hz高刷 | 4.5GB+64GB
                        </p>
                        <p class="price">
                          <span class="num">7499</span>元<!----><del
                            ><span class="num">7999</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14417"
                        data-log_code="31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=14417&amp;page_id=10530&amp;bid=3480938.6"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14417.0.0"
                        data-spm="cms_10530.3480938.6"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14417","img":547731}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=14417&amp;page_id=10530&amp;bid=3480938.6','https://www.mi.com/buy?product_id=14417','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米电视 ES55 2022款"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/388b13bf52ab0d6a56bc9f195b5f1dd5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/388b13bf52ab0d6a56bc9f195b5f1dd5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米电视 ES55 2022款</h3>
                        <p class="desc">
                          多分区背光 | MEMC动态补偿 | 杜比+DTS双解码
                        </p>
                        <p class="price">
                          <span class="num">2999</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=13168"
                        data-log_code="31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=13168&amp;page_id=10530&amp;bid=3480938.7"
                        target="_blank"
                        data-scm="cms.0.0.0.product.13168.0.0"
                        data-spm="cms_10530.3480938.7"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"13168","img":459187}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=13168&amp;page_id=10530&amp;bid=3480938.7','https://www.mi.com/buy?product_id=13168','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家互联网对开门冰箱 540L"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bed167fc905bab57dee478bcf1e5e0d.JPG?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bed167fc905bab57dee478bcf1e5e0d.JPG?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家互联网对开门冰箱 540L</h3>
                        <p class="desc">重磅新品福利特惠</p>
                        <p class="price">
                          <span class="num">2799</span>元<!----><del
                            ><span class="num">3699</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14819"
                        data-log_code="31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=14819&amp;page_id=10530&amp;bid=3480938.8"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14819.0.0"
                        data-spm="cms_10530.3480938.8"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14819","img":562614}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=14819&amp;page_id=10530&amp;bid=3480938.8','https://www.mi.com/buy?product_id=14819','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家超薄电磁炉"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/91bd66c0e6bf7a22d12a8b191da19078.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/91bd66c0e6bf7a22d12a8b191da19078.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家超薄电磁炉</h3>
                        <p class="desc">纤薄美学，精准猛火</p>
                        <p class="price">
                          <span class="num">499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14561"
                        data-log_code="31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=14561&amp;page_id=10530&amp;bid=3480938.9"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14561.0.0"
                        data-spm="cms_10530.3480938.9"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14561","img":561299}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=14561&amp;page_id=10530&amp;bid=3480938.9','https://www.mi.com/buy?product_id=14561','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家集尘扫拖机器人"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7826279526dcce1e5a8b2eff2fa49784.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7826279526dcce1e5a8b2eff2fa49784.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家集尘扫拖机器人</h3>
                        <p class="desc">自动倒垃圾，45天手不沾尘</p>
                        <p class="price">
                          <span class="num">2999</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=9866"
                        data-log_code="31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=9866&amp;page_id=10530&amp;bid=3480938.10"
                        target="_blank"
                        data-scm="cms.0.0.0.product.9866.0.0"
                        data-spm="cms_10530.3480938.10"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"9866","img":172151}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=9866&amp;page_id=10530&amp;bid=3480938.10','https://www.mi.com/buy?product_id=9866','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家电烤箱"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家电烤箱</h3>
                        <p class="desc">全能烘焙体验</p>
                        <p class="price">
                          <span class="num">329</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <li class="brick-item brick-item-s">
                    <a
                      href="//www.mi.com/p/3469.html"
                      data-log_code="31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480938.3"
                      data-scm="cms.0.0.0.0.0.0.0"
                      data-spm="cms_10530.3480938.3"
                      target="_blank"
                      data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480938.3','//www.mi.com/p/3469.html','&quot;&quot;']);"
                      ><div class="figure figure-more">
                        <i class="iconfont">&#xe602;</i>
                      </div>
                      <div class="more">
                        浏览更多
                        <small>热门</small>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd clearfix">
          <h2 class="title">生活电器</h2>
          <div class="more"></div>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=14894"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14894&amp;page_id=10530&amp;bid=3480939.1&amp;adp=3123&amp;adm=30939"
                    target="_blank"
                    data-scm="cms.0.0.0.product.14894.0.0"
                    data-spm="cms_10530.3480939.1"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14894","img":600987}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14894&amp;page_id=10530&amp;bid=3480939.1&amp;adp=3123&amp;adm=30939','https://www.mi.com/buy?product_id=14894','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/190871ab5bd9bdaa16a0b957a3628ab0.jpeg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/190871ab5bd9bdaa16a0b957a3628ab0.jpeg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=14505"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14505&amp;page_id=10530&amp;bid=3480939.2&amp;adp=3124&amp;adm=30941"
                    target="_blank"
                    data-scm="cms.0.0.0.product.14505.0.0"
                    data-spm="cms_10530.3480939.2"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14505","img":600993}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14505&amp;page_id=10530&amp;bid=3480939.2&amp;adp=3124&amp;adm=30941','https://www.mi.com/buy?product_id=14505','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d51103fe64d90aca747a6d753beae293.jpeg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d51103fe64d90aca747a6d753beae293.jpeg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <div>
                <ul class="brick-list clearfix">
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14891"
                        data-log_code="31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14891&amp;page_id=10530&amp;bid=3480939.4"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14891.0.0"
                        data-spm="cms_10530.3480939.4"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14891","img":572423}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14891&amp;page_id=10530&amp;bid=3480939.4','https://www.mi.com/buy?product_id=14891','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家扫拖机器人 2Pro"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家扫拖机器人 2Pro</h3>
                        <p class="desc">扫拖除菌一步到位</p>
                        <p class="price">
                          <span class="num">2699</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14505"
                        data-log_code="31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=14505&amp;page_id=10530&amp;bid=3480939.5"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14505.0.0"
                        data-spm="cms_10530.3480939.5"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14505","img":553916}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=14505&amp;page_id=10530&amp;bid=3480939.5','https://www.mi.com/buy?product_id=14505','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家扫拖机器人 2"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca7c7fcce9da361df977e162ca37452.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca7c7fcce9da361df977e162ca37452.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家扫拖机器人 2</h3>
                        <p class="desc">经典延续，全面升级</p>
                        <p class="price">
                          <span class="num">1799</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14561"
                        data-log_code="31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=14561&amp;page_id=10530&amp;bid=3480939.6"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14561.0.0"
                        data-spm="cms_10530.3480939.6"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14561","img":561299}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=14561&amp;page_id=10530&amp;bid=3480939.6','https://www.mi.com/buy?product_id=14561','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家集尘扫拖机器人"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7826279526dcce1e5a8b2eff2fa49784.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7826279526dcce1e5a8b2eff2fa49784.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家集尘扫拖机器人</h3>
                        <p class="desc">自动倒垃圾，45天手不沾尘</p>
                        <p class="price">
                          <span class="num">2999</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=12961"
                        data-log_code="31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=12961&amp;page_id=10530&amp;bid=3480939.7"
                        target="_blank"
                        data-scm="cms.0.0.0.product.12961.0.0"
                        data-spm="cms_10530.3480939.7"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"12961","img":439192}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=12961&amp;page_id=10530&amp;bid=3480939.7','https://www.mi.com/buy?product_id=12961','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家扫拖机器人1T"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b03d716905ebd84a813d1fd91906a1b5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b03d716905ebd84a813d1fd91906a1b5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家扫拖机器人1T</h3>
                        <p class="desc">3D精准避障，扫拖不再碰撞</p>
                        <p class="price">
                          <span class="num">1999</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14226"
                        data-log_code="31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=14226&amp;page_id=10530&amp;bid=3480939.8"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14226.0.0"
                        data-spm="cms_10530.3480939.8"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14226","img":556269}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=14226&amp;page_id=10530&amp;bid=3480939.8','https://www.mi.com/buy?product_id=14226','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家扫拖机器人 2C"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86be1c24911e305729ae8710f23b9c8b.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86be1c24911e305729ae8710f23b9c8b.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家扫拖机器人 2C</h3>
                        <p class="desc">抗菌去渍二合一，开启生活新净界</p>
                        <p class="price">
                          <span class="num">1499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=13682"
                        data-log_code="31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=13682&amp;page_id=10530&amp;bid=3480939.9"
                        target="_blank"
                        data-scm="cms.0.0.0.product.13682.0.0"
                        data-spm="cms_10530.3480939.9"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"13682","img":507593}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=13682&amp;page_id=10530&amp;bid=3480939.9','https://www.mi.com/buy?product_id=13682','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家扫拖机器人 Pro"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d910c9c340274064a1e784e1d371ce5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家扫拖机器人 Pro</h3>
                        <p class="desc">AI智能识别 3D精准避障</p>
                        <p class="price">
                          <span class="num">2699</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=13796"
                        data-log_code="31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=13796&amp;page_id=10530&amp;bid=3480939.10"
                        target="_blank"
                        data-scm="cms.0.0.0.product.13796.0.0"
                        data-spm="cms_10530.3480939.10"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"13796","img":508558}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=13796&amp;page_id=10530&amp;bid=3480939.10','https://www.mi.com/buy?product_id=13796','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家无线吸尘器K10 Pro"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fcf8a058ddee92f1e47742d1bb2032d.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fcf8a058ddee92f1e47742d1bb2032d.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家无线吸尘器K10 Pro</h3>
                        <p class="desc">吸拖一体，全屋清洁一机搞定</p>
                        <p class="price">
                          <span class="num">1999</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <li class="brick-item brick-item-s">
                    <a
                      href="//www.mi.com/p/3469.html"
                      data-log_code="31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480938.3"
                      data-scm="cms.0.0.0.0.0.0.0"
                      data-spm="cms_10530.3480938.3"
                      target="_blank"
                      data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480938.3','//www.mi.com/p/3469.html','&quot;&quot;']);"
                      ><div class="figure figure-more">
                        <i class="iconfont">&#xe602;</i>
                      </div>
                      <div class="more">
                        浏览更多
                        <small>热门</small>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd clearfix">
          <h2 class="title">厨房电器</h2>
          <div class="more"></div>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=14534"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14534&amp;page_id=10530&amp;bid=3480944.1&amp;adp=3125&amp;adm=30935"
                    target="_blank"
                    data-scm="cms.0.0.0.product.14534.0.0"
                    data-spm="cms_10530.3480944.1"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14534","img":600982}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=14534&amp;page_id=10530&amp;bid=3480944.1&amp;adp=3125&amp;adm=30935','https://www.mi.com/buy?product_id=14534','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0a92bc19df74c4da59563206321320a.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0a92bc19df74c4da59563206321320a.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=15103"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=15103&amp;page_id=10530&amp;bid=3480944.2&amp;adp=3126&amp;adm=30936"
                    target="_blank"
                    data-scm="cms.0.0.0.product.15103.0.0"
                    data-spm="cms_10530.3480944.2"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"15103","img":600983}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=15103&amp;page_id=10530&amp;bid=3480944.2&amp;adp=3126&amp;adm=30936','https://www.mi.com/buy?product_id=15103','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f58378dfd4d3d3609f5492b204bd5aae.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f58378dfd4d3d3609f5492b204bd5aae.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <div>
                <ul class="brick-list clearfix">
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14534"
                        data-log_code="31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14534&amp;page_id=10530&amp;bid=3480944.4"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14534.0.0"
                        data-spm="cms_10530.3480944.4"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14534","img":553601}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14534&amp;page_id=10530&amp;bid=3480944.4','https://www.mi.com/buy?product_id=14534','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米净水器1200G"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1889916871e84f151975bb83014ea61f.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1889916871e84f151975bb83014ea61f.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米净水器1200G</h3>
                        <p class="desc">3.2L/min大流量，鲜活首杯水</p>
                        <p class="price">
                          <span class="num">3499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14896"
                        data-log_code="31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=14896&amp;page_id=10530&amp;bid=3480944.5"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14896.0.0"
                        data-spm="cms_10530.3480944.5"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14896","img":571099}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=14896&amp;page_id=10530&amp;bid=3480944.5','https://www.mi.com/buy?product_id=14896','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米即热净水器Q600"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c5909c8e91f871efaf94e2159b6f85e.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c5909c8e91f871efaf94e2159b6f85e.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米即热净水器Q600</h3>
                        <p class="desc">净热一体，1秒速热，精选调温每1℃</p>
                        <p class="price">
                          <span class="num">3199</span>元<!----><del
                            ><span class="num">3499</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=12965"
                        data-log_code="31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=12965&amp;page_id=10530&amp;bid=3480944.6"
                        target="_blank"
                        data-scm="cms.0.0.0.product.12965.0.0"
                        data-spm="cms_10530.3480944.6"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"12965","img":431839}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=12965&amp;page_id=10530&amp;bid=3480944.6','https://www.mi.com/buy?product_id=12965','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米净水器H600G"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6594e9856ed024575434d7d81d86e868.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6594e9856ed024575434d7d81d86e868.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米净水器H600G</h3>
                        <p class="desc">纯净生活双出水，六级过滤健康直饮</p>
                        <p class="price">
                          <span class="num">1499</span>元<!----><del
                            ><span class="num">1699</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=9614"
                        data-log_code="31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=9614&amp;page_id=10530&amp;bid=3480944.7"
                        target="_blank"
                        data-scm="cms.0.0.0.product.9614.0.0"
                        data-spm="cms_10530.3480944.7"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"9614","img":152247}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=9614&amp;page_id=10530&amp;bid=3480944.7','https://www.mi.com/buy?product_id=9614','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米净水器600G"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c09841227b58f4e0271ec9086753e6a1.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c09841227b58f4e0271ec9086753e6a1.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米净水器600G</h3>
                        <p class="desc">600加仑通量，流速更快</p>
                        <p class="price">
                          <span class="num">1399</span>元<!----><del
                            ><span class="num">1499</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=11214"
                        data-log_code="31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=11214&amp;page_id=10530&amp;bid=3480944.8"
                        target="_blank"
                        data-scm="cms.0.0.0.product.11214.0.0"
                        data-spm="cms_10530.3480944.8"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"11214","img":247761}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=11214&amp;page_id=10530&amp;bid=3480944.8','https://www.mi.com/buy?product_id=11214','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米净水器S1 800G"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c71ab7e9c2508f75acc9a50f2d0dcd6.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c71ab7e9c2508f75acc9a50f2d0dcd6.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米净水器S1 800G</h3>
                        <p class="desc">APP检测水质，OLED屏显水龙头</p>
                        <p class="price">
                          <span class="num">2199</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=12962"
                        data-log_code="31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=12962&amp;page_id=10530&amp;bid=3480944.9"
                        target="_blank"
                        data-scm="cms.0.0.0.product.12962.0.0"
                        data-spm="cms_10530.3480944.9"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"12962","img":431481}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=12962&amp;page_id=10530&amp;bid=3480944.9','https://www.mi.com/buy?product_id=12962','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米净水器H1000G"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/924690d930af1fa0ebfe6945840f5033.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/924690d930af1fa0ebfe6945840f5033.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米净水器H1000G</h3>
                        <p class="desc">双RO反渗透净化，稳定高效过滤</p>
                        <p class="price">
                          <span class="num">2499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=13071"
                        data-log_code="31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=13071&amp;page_id=10530&amp;bid=3480944.10"
                        target="_blank"
                        data-scm="cms.0.0.0.product.13071.0.0"
                        data-spm="cms_10530.3480944.10"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"13071","img":463978}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=13071&amp;page_id=10530&amp;bid=3480944.10','https://www.mi.com/buy?product_id=13071','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米台式净饮机"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fa153eaa084af41915d0c57454f1b9f.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fa153eaa084af41915d0c57454f1b9f.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米台式净饮机</h3>
                        <p class="desc">即滤即热，乐享鲜活纯净水</p>
                        <p class="price">
                          <span class="num">1499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <li class="brick-item brick-item-s">
                    <a
                      href="//www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8"
                      data-log_code="31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480944.3"
                      data-scm="cms.0.0.0.0.0.0.0"
                      data-spm="cms_10530.3480944.3"
                      target="_blank"
                      data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480944.3','//www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8','&quot;&quot;']);"
                      ><div class="figure figure-more">
                        <i class="iconfont iconfont-circle-arrow-right"></i>
                      </div>
                      <div class="more">
                        浏览更多
                        <small>净水器</small>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd clearfix">
          <h2 class="title">智能家居</h2>
          <div class="more"></div>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/mispeaker/sound"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.1&amp;adp=3127&amp;adm=29967"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480946.1"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":566564}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.1&amp;adp=3127&amp;adm=29967','https://www.mi.com/mispeaker/sound','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=12790"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=12790&amp;page_id=10530&amp;bid=3480946.2&amp;adp=3128&amp;adm=30940"
                    target="_blank"
                    data-scm="cms.0.0.0.product.12790.0.0"
                    data-spm="cms_10530.3480946.2"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"12790","img":600990}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=12790&amp;page_id=10530&amp;bid=3480946.2&amp;adp=3128&amp;adm=30940','https://www.mi.com/buy?product_id=12790','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a517d9aa182942ef01b5bcbc3eea744e.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a517d9aa182942ef01b5bcbc3eea744e.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <div>
                <ul class="brick-list clearfix">
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14596"
                        data-log_code="31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14596&amp;page_id=10530&amp;bid=3480946.4"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14596.0.0"
                        data-spm="cms_10530.3480946.4"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14596","img":559356}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=14596&amp;page_id=10530&amp;bid=3480946.4','https://www.mi.com/buy?product_id=14596','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米小爱音箱Play 增强版"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米小爱音箱Play 增强版</h3>
                        <p class="desc">是音箱也是床头时钟</p>
                        <p class="price">
                          <span class="num">149</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/mispeaker/sound"
                        data-log_code="31pchomepagelist_eight_product_tab001001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.5&amp;pid=14631"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3480946.5"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":562733}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab001001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.5&amp;pid=14631','https://www.mi.com/mispeaker/sound','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="Xiaomi Sound"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d73fad85fb9f683109834a882ba15a6.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d73fad85fb9f683109834a882ba15a6.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">Xiaomi Sound</h3>
                        <p class="desc">小米高保真智能音箱</p>
                        <p class="price">
                          <span class="num">499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=10015"
                        data-log_code="31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=10015&amp;page_id=10530&amp;bid=3480946.6"
                        target="_blank"
                        data-scm="cms.0.0.0.product.10015.0.0"
                        data-spm="cms_10530.3480946.6"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"10015","img":175952}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=10015&amp;page_id=10530&amp;bid=3480946.6','https://www.mi.com/buy?product_id=10015','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米小爱音箱 Play"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米小爱音箱 Play</h3>
                        <p class="desc">听音乐、语音遥控家电</p>
                        <p class="price">
                          <span class="num">99</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=10745"
                        data-log_code="31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=10745&amp;page_id=10530&amp;bid=3480946.7"
                        target="_blank"
                        data-scm="cms.0.0.0.product.10745.0.0"
                        data-spm="cms_10530.3480946.7"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"10745","img":219743}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=10745&amp;page_id=10530&amp;bid=3480946.7','https://www.mi.com/buy?product_id=10745','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米小爱音箱 Pro"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米小爱音箱 Pro</h3>
                        <p class="desc">语音遥控5000+品牌主流家电</p>
                        <p class="price">
                          <span class="num">299</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=13878"
                        data-log_code="31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=13878&amp;page_id=10530&amp;bid=3480946.8"
                        target="_blank"
                        data-scm="cms.0.0.0.product.13878.0.0"
                        data-spm="cms_10530.3480946.8"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"13878","img":506676}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=13878&amp;page_id=10530&amp;bid=3480946.8','https://www.mi.com/buy?product_id=13878','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米AI音箱（第二代）"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86c3f61639ae6a2a9a205a463d338ed2.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86c3f61639ae6a2a9a205a463d338ed2.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米AI音箱（第二代）</h3>
                        <p class="desc">小米AI音箱（第二代）</p>
                        <p class="price">
                          <span class="num">199</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/aispeaker-touch/"
                        data-log_code="31pchomepagelist_eight_product_tab005001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.9&amp;pid=9334"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3480946.9"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":132981}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab005001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.9&amp;pid=9334','https://www.mi.com/aispeaker-touch/','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米小爱触屏音箱"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米小爱触屏音箱</h3>
                        <p class="desc">好听，更好看</p>
                        <p class="price">
                          <span class="num">249</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=10744"
                        data-log_code="31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=10744&amp;page_id=10530&amp;bid=3480946.10"
                        target="_blank"
                        data-scm="cms.0.0.0.product.10744.0.0"
                        data-spm="cms_10530.3480946.10"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"10744","img":219709}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=10744&amp;page_id=10530&amp;bid=3480946.10','https://www.mi.com/buy?product_id=10744','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米小爱音箱 "
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e13900c094ae4ac4eb53b35f2d0c95b0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e13900c094ae4ac4eb53b35f2d0c95b0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米小爱音箱</h3>
                        <p class="desc">全面升级 旗舰音质</p>
                        <p class="price">
                          <span class="num">249</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <li class="brick-item brick-item-s">
                    <a
                      href="//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1"
                      data-log_code="31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.3"
                      data-scm="cms.0.0.0.0.0.0.0"
                      data-spm="cms_10530.3480946.3"
                      target="_blank"
                      data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480946.3','//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1','&quot;&quot;']);"
                      ><div class="figure figure-more">
                        <i class="iconfont iconfont-circle-arrow-right"></i>
                      </div>
                      <div class="more">
                        浏览更多
                        <small>小爱音箱</small>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd clearfix">
          <h2 class="title">运动出行</h2>
          <div class="more"></div>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/scooter/"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.1&amp;adp=3129&amp;adm=13600"
                    target="_blank"
                    data-scm="cms.0.0.0.0.0.0.0"
                    data-spm="cms_10530.3480948.1"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":574255}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.1&amp;adp=3129&amp;adm=13600','https://www.mi.com/scooter/','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/84fef78042e4056ea589474196780d4e.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/84fef78042e4056ea589474196780d4e.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=15025"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=15025&amp;page_id=10530&amp;bid=3480948.2&amp;adp=3130&amp;adm=19651"
                    target="_blank"
                    data-scm="cms.0.0.0.product.15025.0.0"
                    data-spm="cms_10530.3480948.2"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"15025","img":608534}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=15025&amp;page_id=10530&amp;bid=3480948.2&amp;adp=3130&amp;adm=19651','https://www.mi.com/buy?product_id=15025','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecce1c0d981037e58cfa281a06122249.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecce1c0d981037e58cfa281a06122249.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <div>
                <ul class="brick-list clearfix">
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/scooter/"
                        data-log_code="31pchomepagelist_eight_product_tab000001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.4&amp;pid=2774"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3480948.4"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.4&amp;pid=2774','https://www.mi.com/scooter/','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="九号平衡车"
                            data-src="//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&amp;w=400&amp;h=400"
                            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&amp;w=400&amp;h=400"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">九号平衡车</h3>
                        <p class="desc">年轻人的酷玩具</p>
                        <p class="price">
                          <span class="num">2199</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=10013"
                        data-log_code="31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=10013&amp;page_id=10530&amp;bid=3480948.5"
                        target="_blank"
                        data-scm="cms.0.0.0.product.10013.0.0"
                        data-spm="cms_10530.3480948.5"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"10013","img":179146}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=10013&amp;page_id=10530&amp;bid=3480948.5','https://www.mi.com/buy?product_id=10013','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="九号平衡车燃动版"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/223f9f2c0f9765851adff89e43db65f0.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">九号平衡车燃动版</h3>
                        <p class="desc">燃动升级，随走随停</p>
                        <p class="price">
                          <span class="num">2599</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/scooterplus/"
                        data-log_code="31pchomepagelist_eight_product_tab002001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.6&amp;pid=6079"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3480948.6"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab002001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.6&amp;pid=6079','https://www.mi.com/scooterplus/','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="九号平衡车 Plus"
                            data-src="//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png?thumb=1&amp;w=400&amp;h=400"
                            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png?thumb=1&amp;w=400&amp;h=400"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">九号平衡车 Plus</h3>
                        <p class="desc">一个形影不离的新伙伴</p>
                        <p class="price">
                          <span class="num">3499</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=11916"
                        data-log_code="31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=11916&amp;page_id=10530&amp;bid=3480948.7"
                        target="_blank"
                        data-scm="cms.0.0.0.product.11916.0.0"
                        data-spm="cms_10530.3480948.7"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"11916","img":325001}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab003001#t=product&amp;act=product&amp;page=homepage&amp;pid=11916&amp;page_id=10530&amp;bid=3480948.7','https://www.mi.com/buy?product_id=11916','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家电动滑板车1S"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3622a82de99a8a3ee1aeb2b2b7586209.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家电动滑板车1S</h3>
                        <p class="desc">型出格，行出色</p>
                        <p class="price">
                          <span class="num">2199</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=9285"
                        data-log_code="31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=9285&amp;page_id=10530&amp;bid=3480948.8"
                        target="_blank"
                        data-scm="cms.0.0.0.product.9285.0.0"
                        data-spm="cms_10530.3480948.8"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"9285","img":129436}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=9285&amp;page_id=10530&amp;bid=3480948.8','https://www.mi.com/buy?product_id=9285','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="小米米家电动滑板车Pro"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aabf1a475043266cf4759ec58d0f679c.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aabf1a475043266cf4759ec58d0f679c.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">小米米家电动滑板车Pro</h3>
                        <p class="desc">性能提升，动力更强劲</p>
                        <p class="price">
                          <span class="num">3099</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=12633"
                        data-log_code="31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=12633&amp;page_id=10530&amp;bid=3480948.9"
                        target="_blank"
                        data-scm="cms.0.0.0.product.12633.0.0"
                        data-spm="cms_10530.3480948.9"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"12633","img":394740}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=12633&amp;page_id=10530&amp;bid=3480948.9','https://www.mi.com/buy?product_id=12633','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="九号卡丁车Pro兰博基尼汽车定制版"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/609d0a457c7f8ac27d76f953c8acb7fc.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/609d0a457c7f8ac27d76f953c8acb7fc.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">九号卡丁车Pro兰博基尼汽车定制版</h3>
                        <p class="desc">九号卡丁车Pro兰博基尼汽车定制版</p>
                        <p class="price">
                          <span class="num">9999</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=10085"
                        data-log_code="31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=10085&amp;page_id=10530&amp;bid=3480948.10"
                        target="_blank"
                        data-scm="cms.0.0.0.product.10085.0.0"
                        data-spm="cms_10530.3480948.10"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"10085","img":180593}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=10085&amp;page_id=10530&amp;bid=3480948.10','https://www.mi.com/buy?product_id=10085','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="九号平衡车 改装套件（不含平衡车）"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fcc87477432d45a0e13a544cd5d7b2f5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fcc87477432d45a0e13a544cd5d7b2f5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">九号平衡车 改装套件（不含平衡车）</h3>
                        <p class="desc">小朋友的大玩具，老顽童的小赛车</p>
                        <p class="price">
                          <span class="num">2799</span>元<!----><del
                            ><span class="num">2999</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <li class="brick-item brick-item-s">
                    <a
                      href="//www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6"
                      data-log_code="31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.3"
                      data-scm="cms.0.0.0.0.0.0.0"
                      data-spm="cms_10530.3480948.3"
                      target="_blank"
                      data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3480948.3','//www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6','&quot;&quot;']);"
                      ><div class="figure figure-more">
                        <i class="iconfont iconfont-circle-arrow-right"></i>
                      </div>
                      <div class="more">
                        浏览更多
                        <small>平衡车/滑板车</small>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-brick-box home-brick-row-2-box xm-plain-box">
        <div class="box-hd clearfix">
          <h2 class="title">日用百货</h2>
          <div class="more"></div>
        </div>
        <div class="box-bd clearfix">
          <div class="row">
            <div class="span4">
              <ul class="brick-promo-list clearfix">
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=11174"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=11174&amp;page_id=10530&amp;bid=3951179.1&amp;adp=5206&amp;adm=30937"
                    target="_blank"
                    data-scm="cms.0.0.0.product.11174.0.0"
                    data-spm="cms_10530.3951179.1"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"11174","img":600984}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=11174&amp;page_id=10530&amp;bid=3951179.1&amp;adp=5206&amp;adm=30937','https://www.mi.com/buy?product_id=11174','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5769bd53177a9301113f799fdc8511d.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5769bd53177a9301113f799fdc8511d.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
                <li class="brick-item brick-item-m">
                  <a
                    href="https://www.mi.com/buy?product_id=11191"
                    data-log_code="31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=11191&amp;page_id=10530&amp;bid=3951179.2&amp;adp=5207&amp;adm=30938"
                    target="_blank"
                    data-scm="cms.0.0.0.product.11191.0.0"
                    data-spm="cms_10530.3951179.2"
                    data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"11191","img":600985}'
                    data-settrack="true"
                    onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=ad&amp;act=product&amp;page=homepage&amp;pid=11191&amp;page_id=10530&amp;bid=3951179.2&amp;adp=5207&amp;adm=30938','https://www.mi.com/buy?product_id=11191','&quot;&quot;']);"
                    ><img
                      alt=""
                      data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/65950f83f429f2a05125bea297d8df6b.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/65950f83f429f2a05125bea297d8df6b.jpg?thumb=1&amp;w=468&amp;h=600&amp;f=webp&amp;q=90"
                      lazy="loaded"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="span16">
              <div>
                <ul class="brick-list clearfix">
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=13857"
                        data-log_code="31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=13857&amp;page_id=10530&amp;bid=3951179.4"
                        target="_blank"
                        data-scm="cms.0.0.0.product.13857.0.0"
                        data-spm="cms_10530.3951179.4"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"13857","img":511230}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000001#t=product&amp;act=product&amp;page=homepage&amp;pid=13857&amp;page_id=10530&amp;bid=3951179.4','https://www.mi.com/buy?product_id=13857','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家声波电动牙刷T700"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家声波电动牙刷T700</h3>
                        <p class="desc">米家声波电动牙刷T700</p>
                        <p class="price">
                          <span class="num">399</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=11191"
                        data-log_code="31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=11191&amp;page_id=10530&amp;bid=3951179.5"
                        target="_blank"
                        data-scm="cms.0.0.0.product.11191.0.0"
                        data-spm="cms_10530.3951179.5"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"11191","img":253222}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab001001#t=product&amp;act=product&amp;page=homepage&amp;pid=11191&amp;page_id=10530&amp;bid=3951179.5','https://www.mi.com/buy?product_id=11191','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家电动剃须刀S500"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5566da4f82e730c21bc8d85b3819f7b.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5566da4f82e730c21bc8d85b3819f7b.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家电动剃须刀S500</h3>
                        <p class="desc">浮动贴面更干净，减压设计更舒适</p>
                        <p class="price">
                          <span class="num">179</span>元<!----><del
                            ><span class="num">199</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=14178"
                        data-log_code="31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=14178&amp;page_id=10530&amp;bid=3951179.6"
                        target="_blank"
                        data-scm="cms.0.0.0.product.14178.0.0"
                        data-spm="cms_10530.3951179.6"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"14178","img":524529}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab002001#t=product&amp;act=product&amp;page=homepage&amp;pid=14178&amp;page_id=10530&amp;bid=3951179.6','https://www.mi.com/buy?product_id=14178','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家理发器"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4cd18c61d5786df7dfb4a8927d83da66.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4cd18c61d5786df7dfb4a8927d83da66.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家理发器</h3>
                        <p class="desc">米家理发器</p>
                        <p class="price">
                          <span class="num">119</span>元<!----><del
                            ><span class="num">149</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/dispenser/"
                        data-log_code="31pchomepagelist_eight_product_tab003001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951179.7&amp;pid=8881"
                        target="_blank"
                        data-scm="cms.0.0.0.0.0.0.0"
                        data-spm="cms_10530.3951179.7"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","img":333327}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab003001#t=product&amp;act=webview&amp;page=homepage&amp;page_id=10530&amp;bid=3951179.7&amp;pid=8881','https://www.mi.com/dispenser/','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家自动洗手机套装"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccefe4c39329ec01b587d114f64eab5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccefe4c39329ec01b587d114f64eab5.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家自动洗手机套装</h3>
                        <p class="desc">伸手出泡，抑菌有效</p>
                        <p class="price">
                          <span class="num">79</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=11416"
                        data-log_code="31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=11416&amp;page_id=10530&amp;bid=3951179.8"
                        target="_blank"
                        data-scm="cms.0.0.0.product.11416.0.0"
                        data-spm="cms_10530.3951179.8"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"11416","img":282851}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab004001#t=product&amp;act=product&amp;page=homepage&amp;pid=11416&amp;page_id=10530&amp;bid=3951179.8','https://www.mi.com/buy?product_id=11416','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家电动冲牙器"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7676cd481892743762484613df962606.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7676cd481892743762484613df962606.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家电动冲牙器</h3>
                        <p class="desc">动力强劲，全方位清洁口腔</p>
                        <p class="price">
                          <span class="num">199</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=10535"
                        data-log_code="31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=10535&amp;page_id=10530&amp;bid=3951179.9"
                        target="_blank"
                        data-scm="cms.0.0.0.product.10535.0.0"
                        data-spm="cms_10530.3951179.9"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"10535","img":334165}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab005001#t=product&amp;act=product&amp;page=homepage&amp;pid=10535&amp;page_id=10530&amp;bid=3951179.9','https://www.mi.com/buy?product_id=10535','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家声波电动牙刷T500"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2e6100cb09462515a939caf8bbe56ab.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2e6100cb09462515a939caf8bbe56ab.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家声波电动牙刷T500</h3>
                        <p class="desc">刷的干净、智能护齿</p>
                        <p class="price">
                          <span class="num">169</span>元<!----><del
                            ><span class="num">179</span>元</del
                          >
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <div>
                    <li class="brick-item brick-item-m brick-item-m-2">
                      <a
                        href="https://www.mi.com/buy?product_id=11534"
                        data-log_code="31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=11534&amp;page_id=10530&amp;bid=3951179.10"
                        target="_blank"
                        data-scm="cms.0.0.0.product.11534.0.0"
                        data-spm="cms_10530.3951179.10"
                        data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB ","default_goods":"11534","img":280299}'
                        data-settrack="true"
                        onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab006001#t=product&amp;act=product&amp;page=homepage&amp;pid=11534&amp;page_id=10530&amp;bid=3951179.10','https://www.mi.com/buy?product_id=11534','&quot;&quot;']);"
                        ><div class="figure figure-img">
                          <img
                            width="160"
                            height="160"
                            alt="米家电子体温计"
                            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/161335ac42176491d4e98986c6b9de68.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/161335ac42176491d4e98986c6b9de68.jpg?thumb=1&amp;w=400&amp;h=400&amp;f=webp&amp;q=90"
                            lazy="loaded"
                          />
                        </div>
                        <h3 class="title">米家电子体温计</h3>
                        <p class="desc">快速知体温，精准更智能</p>
                        <p class="price">
                          <span class="num">99</span>元<!----><!---->
                        </p></a
                      >
                    </li>
                    <!---->
                  </div>
                  <li class="brick-item brick-item-s">
                    <a
                      href="//www.mi.com/search?keyword=%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7"
                      data-log_code="31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3951179.3"
                      data-scm="cms.0.0.0.0.0.0.0"
                      data-spm="cms_10530.3951179.3"
                      target="_blank"
                      data-params='{"component":"list_eight_product_tab","component_name":"\u3010\u4ea7\u54c1\u3011\u697c\u5c42\u591aTAB "}'
                      data-settrack="true"
                      onclick="_msq.push(['trackEvent','31pchomepagelist_eight_product_tab000000#t=normal&amp;act=other&amp;page=homepage&amp;page_id=10530&amp;bid=3951179.3','//www.mi.com/search?keyword=%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7','&quot;&quot;']);"
                      ><div class="figure figure-more">
                        <i class="iconfont iconfont-circle-arrow-right"></i>
                      </div>
                      <div class="more">
                        浏览更多
                        <small>个护健康</small>
                      </div></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElCarousel, ElCarouselItem } from "element-plus";
export default {
  components: {
    ElCarousel,
    ElCarouselItem,
  },
  setup() {
    return {
      swiper: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/501a5baf58dab50b5a7bd00d040de48b.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd741adcce9417d72ea4c1a6dfcc96e2.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
      ],
    };
  },
};
</script>

<style lang="less">
.container {
  width: 2812px;
  margin-right: auto;
  margin-left: auto;
}

.container:after,
.container:before {
  content: " ";
  display: table;
}

.site-header,
.site-header .container {
  position: relative;
}

.hide {
  display: none !important;
}

.loading {
  padding: 40px 0;
}

.loader {
  position: relative;
  margin: 0 auto;
  width: 10px;
  height: 40px;
  background: #ff6700;
  overflow: visible;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  &:before,
  &:after {
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
    -webkit-transform: scaleY(0.3);
    -ms-transform: scaleY(0.3);
    transform: scaleY(0.3);
  }
  &:before {
    margin: -20px 0 0 10px;
  }

  &:after {
    margin: -20px 0 0 -20px;
  }
  &:after,
  &:before {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 40px;
    content: "";
    background: #ff6700;
  }
}

.loader,
.loader:after,
.loader:before {
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation-name: loader;
  animation-name: loader;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
  clear: both;
}

@keyframes loader {
  from {
    transform: scaleY(0.3);
  }
  to {
    transform: scaleY(1);
  }
}

.site-topbar {
  position: relative;
  z-index: 30;
  height: 100px;
  font-size: 24px;
  color: #b0b0b0;
  background: #333;
  .topbar-nav {
    float: left;
    height: 40px;
    line-height: 40px;
  }
  .topbar-cart {
    position: relative;
    float: right;
    width: 240px;
    height: 100px;
    margin-left: 15px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    font-size: 12px;
    cursor: pointer;
  }
  .cart-mini {
    position: relative;
    z-index: 32;
    display: block;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #b0b0b0;
    background: #424242;
    em {
      margin-right: 4px;
      font-size: 20px;
      line-height: 20px;
      vertical-align: -4px;
    }
  }

  .topbar-info {
    position: relative;
    float: right;
    height: 100px;
    line-height: 100px;
  }

  .cart-menu {
    position: absolute;
    right: 0;
    top: 100px;
    z-index: 31;
    width: 712px;
    height: 200px;
    color: #424242;
    background: #fff;
    -webkit-box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
    box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
    overflow: hidden;
    -webkit-transition: height 0.3s;
    transition: height 0.3s;

    .menu-content {
      padding: 40px 0 0;
    }

    .loading,
    .msg {
      margin: 0 20px 20px;
      text-align: center;
    }
  }

  .cart-item {
    position: relative;
    height: 120px;
    padding: 20px 0;
    border-top: 2px solid #e0e0e0;
    line-height: 40px;
    .thumb {
      float: left;
      margin-right: 20px;
      img {
        width: 120px;
        height: 120px;
      }
    }
    .name {
      float: left;
      width: 280px;
      height: 80px;
      line-height: 40px;
      margin: 20px 0;
      color: #424242;
      overflow: hidden;
    }
    .price {
      float: right;
      margin: 40px 40px 0 10px;
    }
    .btn-del {
      position: absolute;
      top: 40px;
      right: 0;
      font-size: 32px;
      opacity: 0;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }
  }

  .cart-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      position: relative;
      height: 160px;
      padding: 0 40px;
      display: list-item;
      text-align: -webkit-match-parent;
    }
    li.first .cart-item,
    li:first-child .cart-item {
      border-top: 0;
    }
  }

  .cart-total {
    padding: 20px 20px;
    background: #fafafa;
    .total {
      float: left;
      width: 270px;
      color: #757575;
    }
    .price {
      display: block;
      font-weight: 400;
      color: #ff6700;
      em {
        font-size: 36px;
      }
    }
    .btn-cart {
      float: right;
      width: 260px;
      padding: 0;
      font-size: 28px;
      line-height: 86px;
      text-align: center;
      color: #f5f5f5;
      background: #ff6700;
    }
    em {
      font-style: normal;
    }
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  a {
    color: #b0b0b0;
    line-height: 100px;
    display: inline-block;
  }

  .link {
    padding: 0 15px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }

  .message {
    padding: 0 20px;
    text-align: center;
    cursor: pointer;
    a:hover {
      color: #fff;
    }
  }
}

.site-header {
  z-index: 20;
  height: 200px;

  .header-logo {
    float: left;
    width: 124px;
    margin-top: 44px;
  }
  .logo {
    position: relative;
    display: block;
    width: 112px;
    height: 112px;
    overflow: hidden;
  }
  .ir {
    display: block;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
  }

  .logo:after,
  .logo:before {
    background: url(//s02.mifile.cn/assets/static/image/logo-mi2.png) no-repeat;
    background-size: 112px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .logo:after,
  .logo:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 112px;
    height: 112px;
    content: "";
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  .logo:before {
    opacity: 1;
  }

  .logo:after {
    opacity: 0;
    margin-left: -110px;
  }

  .header-nav {
    float: left;
    width: 1700px;
  }
  .nav-list {
    position: relative;
    z-index: 10;
    float: left;
    width: 2200px;
    height: 176px;
    margin-left: 37.5px;
    padding: 24px 0 0 30px;
    list-style-type: none;
    font-size: 36px;
  }
  .nav-item {
    float: left;
    .link {
      display: block;
      padding: 52px 20px 76px;
      color: #333;
      -webkit-transition: color 0.2s;
      transition: color 0.2s;
    }
    .item-children {
      display: none;
    }
  }
  .header-search {
    float: right;
    width: 600px;
    margin-top: 50px;
  }
  .search-form {
    position: relative;
    width: 600px;
    height: 100px;
    z-index: 20;
    .keyword-list {
      position: absolute;
      left: 0;
      top: 100px;
      z-index: 20;
      width: 500px;
      border: 2px solid #ff6700;
      border-top: 0;
      background: #fff;
    }
  }
  .no-style-msq {
    color: #333;
  }

  .nav-category {
    position: relative;
    float: left;
    width: 260px;
    padding-right: 30px;
    .link-category {
      display: block;
      padding: 55px 0 152px;
      text-align: right;
      color: #333;
      visibility: hidden;
    }
  }

  .search-btn,
  .search-text {
    position: absolute;
    top: 0;
    border: 2px solid #e0e0e0;
    outline: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  .search-text {
    right: 100px;
    z-index: 1;
    width: 460px;
    height: 100px;
    padding: 0 20px;
    font-size: 28px;
    line-height: 100px;
  }
  .search-hot-words {
    position: absolute;
    top: 30px;
    right: 124px;
    z-index: 2;
    text-align: right;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }
  .search-btn {
    right: 0;
    z-index: 2;
    width: 110px;
    height: 104px;
    font-size: 48px;
    line-height: 48px;
    background: #fff;
    color: #616161;
  }
}

.site-category {
  display: none;
  position: absolute;
  top: 180px;
  left: -191px;
  z-index: 21;
  width: 468px;
  height: 1100px;
  font-size: 30px;
}

.site-category-list.site-category-list-custom {
  height: 1017px;
  border: 0;
  color: #fff;
  background: rgba(105, 101, 101, 0.6);
  .title {
    color: #fff;
    text-align: left;
  }
}

.site-category-list {
  height: 1017px;
  margin: 0;
  padding: 40px 0;
  list-style-type: none;
  border: 2px solid #ff6700;
  color: #424242;
  background: #fff;
	.category-item-active {
		.title {
			background: #ff6700;
			color: #fff;
		}
		.children {
			display: block;
		}
	}
  .title {
    position: relative;
    display: block;
    padding-left: 60px;
    height: 101px;
    line-height: 101px;
    color: #424242;
    em[class*="iconfont"] {
      position: absolute;
      top: 24px;
      right: 40px;
      font-size: 38px;
      line-height: 50px;
      color: #e0e0e0;
      font-weight: 900;
    }
  }

  .children {
    display: none;
    position: absolute;
    left: 468px;
    top: -4px;
    z-index: 24;
    height: 1100px;
    border: 1px solid #e0e0e0;
    border-left: 0;
    background: #fff;
    -webkit-box-shadow: 0 8px 16px rgb(0 0 0 / 18%);
    box-shadow: 0 8px 16px rgb(0 0 0 / 18%);
  }
  .children-col-4 {
    width: 62.5rem;
    .children-list-col {
      width: 500px;
    }
  }
  .children-list {
    height: 520px;
    margin: 0;
    padding: 2px 0;
    list-style-type: none;
		li {
			position: relative;
			float: left;
			width: 530px;
			height: 152px;
		}
    .link {
      display: block;
      padding: 36px 40px;
      line-height: 80px;
      color: #333;
      -webkit-transition: color 0.2s;
      transition: color 0.2s;
    }
		.thumb {
			float: left;
			margin-right: 24px;
			vertical-align: middle;
		}
		.text {
			text-align: left;
		}
  }
  .children-list-col {
    float: left;
    width: 530px;
  }
}

a {
  text-decoration: none !important;
}

input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.home-hero-container {
  position: relative;
  z-index: 10;
}
.home-hero {
  position: relative;
  margin-bottom: 52px;
  overflow: hidden;

  .el-carousel__arrow {
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    height: 200px;
    width: 50px;
    cursor: pointer;
    transition: var(--el-transition-duration);
    border-radius: 5%;
    background-color: rgba(255, 255, 255, 0);
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    text-align: center;
    font-size: var(--el-carousel-arrow-font-size);
  }
  .el-icon {
    --color: inherit;
    height: 100px;
    width: 50px;
    line-height: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    color: var(--color);
    font-size: 100px;
  }
  .el-carousel__arrow--left {
    left: 13rem;

    &:hover {
      background-color: rgba(105, 101, 101, 0.6);
    }
  }
  .el-carousel__arrow--right {
    right: 0.526667rem;

    &:hover {
      background-color: rgba(105, 101, 101, 0.6);
    }
  }
  .el-carousel__indicators--horizontal {
    bottom: 3%;
    left: 58%;
    transform: translateX(-50%);
  }
  .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 10px;
    .el-carousel__button {
      display: block;
      opacity: 0.48;
      width: 50px;
      height: 5px;
      background-color: #fff;
      border: none;
      outline: 0;
      padding: 0;
      margin: 0;
      cursor: pointer;
      transition: var(--el-transition-duration);
    }
  }
  .is-active {
    button {
      opacity: 1 !important;
    }
  }
  .home-hero-sub {
    margin-top: 28px;
  }
}
.home-hero-swiper {
  position: relative;
  height: 1100px;
  overflow: hidden;
  .home-hero-sub {
    margin-top: 28px;
  }
  .el-carousel__container {
    position: relative;
    height: 1100px;
  }
  .el-carousel__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1100px;
    display: inline-block;
    overflow: hidden;
    z-index: calc(var(--el-index-normal) - 1);
  }
  img {
    display: block;
    width: 2835px;
    height: 1100px;
  }
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.row {
  margin-left: -28px;
}
.span4 {
  width: 468px;
}
.span1,
.span2,
.span3,
.span4,
.span5,
.span6,
.span7,
.span8,
.span9,
.span10,
.span11,
.span12,
.span13,
.span14,
.span15,
.span16,
.span17,
.span18,
.span19,
.span20 {
  float: left;
  margin-left: 28px;
  min-height: 2px;
}
.home-channel-list {
  margin: 0;
  padding: 6px;
  list-style-type: none;
  font-size: 30px;
  text-align: center;
  background: #5f5750;
  overflow: hidden;
  li {
    position: relative;
    float: left;
    width: 140px;
    height: 5.34rem;
    padding: 0 6px;
  }
  li:before {
    top: -7.5px;
    left: 11.25px;
    width: 130px;
    height: 2px;
  }
  a {
    display: block;
    padding-top: 45px;
    text-overflow: ellipsis;
    color: #fff;
    opacity: 0.7;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }
  img {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto 4px;
  }
  li:after {
    top: 0.3rem;
    left: 0;
    width: 0.026667rem;
    height: 4.733333rem;
  }
  li:after,
  li:before {
    position: absolute;
    content: "";
    background: #665e57;
  }
}
.span16 {
  width: 61.76rem;
}
.home-promo-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  li.first {
    margin-left: 0;
  }
  li {
    float: left;
    width: 750px;
    height: 340px;
    margin-left: 0.88rem;
    -webkit-transition: -webkit-box-shadow 0.2s linear;
    transition: -webkit-box-shadow 0.2s linear;
    transition: box-shadow 0.2s linear;
    transition: box-shadow 0.2s linear, -webkit-box-shadow 0.2s linear;
  }
  a {
    display: block;
    height: 170px;
    background: url(//i1.mifile.cn/f/i/2014/cn/placeholder-80.png) no-repeat 50%;
  }
  img {
    display: block;
    width: 750px;
    height: 11rem;
  }
}

.home-main {
  padding-top: 4px;
  padding-bottom: 12px;
}

.page-main {
  background: #f5f5f5;
}

.home-banner-box {
  width: 100%;
  height: 280px;
  margin: 50px 0;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.home-brick-box {
  margin-bottom: 16px;
  .brick-list,
  .brick-promo-list {
    margin: 0 0 -28px -28px;
  }
}

.xm-plain-box {
  .box-hd {
    position: relative;
    height: 116px;
    -webkit-font-smoothing: antialiased;
    .title {
      margin: 0;
      font-size: 44px;
      font-weight: 400;
      line-height: 116px;
      color: #333;
      text-align: left;
    }
    .more {
      position: absolute;
      top: 0;
      right: 0;
      .more-link {
        font-size: 32px;
        line-height: 116px;
        color: #424242;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
        .iconfont {
          width: 24px;
          height: 24px;
          padding: 8px;
          margin-left: 16px;
          border-radius: 32px;
          font-size: 24px;
          line-height: 24px;
          background: #b0b0b0;
          color: #fff;
          vertical-align: 2px;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
        }
      }
    }
  }
}

.brick-list,
.brick-promo-list {
  height: 1228px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.brick-promo-list {
  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .brick-item-m {
    height: 16rem;
    width: 12.48rem;
    padding: 0;
    img {
      height: 16rem;
    }
  }

  img {
    width: 12.48rem;
  }
}

.brick-item {
  position: relative;
  z-index: 1;
  float: left;
  width: 468px;
  margin-left: 28px;
  margin-bottom: 28px;
  background: #fff;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  &:hover {
    z-index: 2;
    box-shadow: 0 30px 60px rgb(0 0 0 / 10%);
    transform: translate3d(0, -2px, 0);
  }
}

.brick-item-l {
  height: 1228px;
  img {
    height: 1228px;
  }
}

.brick-item-m-2 {
  height: 600px;
  padding: 0;
  a {
    display: block;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 0;
  }
  .price {
    margin: 0 20px 28px;
  }
}
.brick-item-m {
  height: 492px;
  width: 14.88rem;
  padding: 68px 0 40px;
  .figure-img {
    width: 300px;
    height: 300px;
    margin: 0 auto 26px;
    img {
      width: 320px;
      height: 320px;
    }
  }
  .desc,
  .title {
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .desc {
    margin: 0 20px 20px;
    height: 36px;
    font-size: 24px;
    color: #b0b0b0;
  }
  .price {
    margin: 0 20px 20px;
    text-align: center;
    color: #ff6700;
    font-size: 20px;
  }
  .title {
    margin: 0 20px;
    font-size: 24px;
    font-weight: 800;
    color: #333;
  }
}

.brick-item-s {
  height: 186px;
  padding-top: 100px;
  width: 14.88rem;
  .figure-more {
    position: absolute;
    right: 70px;
    top: 100px;
    width: 100px;
    height: 100px;
    color: #ff6700;
  }
  i {
    font-size: 100px;
    line-height: 100px;
  }
  .more {
    display: block;
    margin: 0 220px 0 60px;
    font-size: 36px;
    color: #333;
    text-align: left;
    small {
      display: block;
      font-size: 24px;
      color: #757575;
    }
  }
}

.site-footer {
	.footer-service {
			padding: 54px 0;
			border-bottom: 1px solid #e0e0e0;
	}
	.list-service {
    margin: 0;
    padding: 0;
    list-style-type: none;
		
		li {
			float: left;
			width: 19.8%;
			height: 50px;
			border-left: 1px solid #e0e0e0;
			font-size: 32px;
			line-height: 50px;
			text-align: center;
		}
		a {
			color: #616161;
			-webkit-transition: color .2s;
			transition: color .2s;
		}
		em[class*=iconfont] {
			margin-right: 12px;
			font-size: 48px;
			line-height: 48px;
			vertical-align: -0.1rem;
		}
	}

	.footer-links {
    padding: 80px 11rem;
	}
	.footer-links {
		.col-links {
			float: left;
			width: 320px;
			margin: 0;
			dt {
				margin: -1px 0 52px;
				font-size: 28px;
				line-height: 1.25;
				color: #424242;
			}
			dd {
				margin: 20px 0 0;
				font-size: 12px;
			}
			a {
				color: #757575;
			}
		}
	}
} 
</style>
