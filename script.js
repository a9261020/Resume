let app = new Vue({
  el: '#app',
  data: {
    navBarItem: [
      {
        title: 'About',
        link: 'about',
      },
      {
        title: 'Skills',
        link: 'skills',
      },
      {
        title: 'Works',
        link: 'works',
      },
      {
        title: 'Experience & Education',
        link: 'experiencesAndEducation',
      },
    ],
    contentText: {
      h1: "Hello I'm James",
      h4: 'Frontend Engineer',
    },
    about: {
      h1: 'James ｜ 李哲宇',
      h2: '',
      p: [
        '　',
        '畢業於臺北商業大學-資訊管理系 (2013-09 ~ 2017-06)',
        '　',
        '曾在筆記網路、哲煜科技，負責開發、維護專案',
        '　',
        '現於Yahoo 擔任 INTL Media Frontend。',
        '　',
        '熟悉Vue, Nuxt, React, Express',
      ],
      i: [
        {
          name: 'fab fa-github',
          link: 'https://github.com/a9261020',
        },
      ],
    },
    skill: {
      iconBlock: [
        {
          iconName: 'desktop',
          itemTitle: 'Frontend Development',
          h6: 'Nuxt.js, Vue.js(2, 3), React.js, jQuery',
          li: [
            '維護、開發過Vue2, 3專案',
            '熟悉Nuxt的特性，可以使用Nuxt寫出好維護的程式碼',
          ],
        },
        {
          iconName: 'server',
          itemTitle: 'Backend Development',
          h6: 'Express, MySQL, Mongoose',
          li: [
            '使用express搭配mongoose 建立購物網頁api',
            '會員註冊，臉書登入、登出功能',
            '商品新增、修改、刪除，優惠券新增、修改、刪除',
            '帳單建立、查詢訂單、留言板',
            '了解MVC的概念並嘗試在購物車中實現',
          ],
        },
        {
          iconName: 'network-wired',
          itemTitle: 'Others',
          h6: 'Git(sourceTree), Heroku, vercel',
          li: [
            '了解Git在實戰中該如何正確使用(功能改壞、即時救火)',
            '使用 Git 來完成開發及版控',
          ],
        },
        {
          iconName: 'language',
          itemTitle: 'Language',
          h6: 'TOEIC, JLPT',
          li: [
            'TOEIC 745分',
            '能夠應付例行性的業務需求，參加英文會議，聽取大部分要點',
            '自學日文 考取JLPT N5',
          ],
        },
      ],
    },
    experiences: {
      title: 'Experiences',
      subTitle: '經歷',
      item: [
        {
          itemH5: 'Yahoo ｜ INTL Media Frontend',
          itemH6: '2022-06-06 ~ 在職',
          itemLi: [
            '採用monorepo維護專案',
            '使用Jest、Mocha、Enzyme進行測試',
            'BionicReading feature experiment',
            'Rookie onboarding doc',
            'use cache to save lots of money from third party API',
          ],
        },
        {
          itemH5: '哲煜科技 ｜ 前端工程師',
          itemH6: '2021-02-17 ~ 2022-05-27',
          itemLi: [
            '* 獨立完成',
            '比漾廣場官網、商城、文章系統 (Nuxt.js)',
            '寶島鐘錶(Nuxt.js)',
            '哲煜科技官網 (jQuery)',
          ],
        },
        {
          itemH5: 'Biji 筆記網路 ｜ 前端工程師',
          itemH6: '2020-07-21 ~ 2021-01-29',
          itemLi: [
            'jQuery, Gulp, SASS',
            '筆記商城維護',
            '籃球筆記維護',
            '1990官網維護',
            'Jodo網頁官網設計及製作',
          ],
        },
        {
          itemH5: 'Wisetechglobal 台灣慧諮 ｜ 客服顧問師',
          itemH6: '2018-05-24 ~ 2020-07-17',
          itemLi: [
            '＊ 特殊經歷',
            '寫了一隻字串處理程式(CRM Mail convert)，將例行性作業省了 90% 的時間',
            '安排、主持 新功能－電子發票說明會',
            '＊ 擔任PM與客戶洽談新需求/功能',
            '詢問客戶的需求，了解之後先畫出初步的流程圖，確認傳送格式、資料欄位，並請研發部評估工時，請業務部報價',
            '目前完成專案：ASUS Tracking，CCN 提單傳送，客戶美國站點EDI維護',
            '＊ 外出對客戶教育訓練',
            '客戶有人員調動時，會向我司提出系統教育訓練，會外出至客戶公司當講師',
            '＊ 報表修改',
            '依照客戶的需求使用c#、My Sql語法抓出系統中的欄位，轉換成客戶需要呈現的樣子',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      subTitle: '學歷',
      item: [
        {
          itemH5: '臺北商業大學 ｜ 資訊管理系',
          itemH6: '2013-09 ~ 2017-06',
          itemLi: [
            '＊ 資管系學會財務長',
            '掌控各大/小活動的預算及支出，與各組溝通如何在不把預算刪減的情況下展現出我們最好的成果。大活動：五系聯合聖誕舞會、資管系財稅系聯合系烤、資管送舊…等',
            '＊ 資管系迎新活動長',
            '帶領30人團隊活動企劃發想、執行與檢討，學習與組員共事，與其他組溝通協調。 舉辦人數130左右的迎新活動。',
          ],
        },
        {
          itemH5: '清傳高商 ｜ 資料處理科',
          itemH6: '2010-09 ~ 2013-06',
          itemLi: [
            '＊ 電腦研習社社長',
            '學習電腦的基本架構到網路的架設，帶領同學及學弟妹們來完成老師的指示。',
            '＊ 2013年全國技藝競賽「文書處理組」個人優勝',
          ],
        },
      ],
    },
    works: {
      title: 'Works',
      subTitle: '作品集',
      item: [
        {
          github: '',
          img: './images/works/Nuxt.js-Beyond(official).jpg',
          href: 'https://beyondbeyond.com.tw/official',
          itemTitle: '比漾廣場 - (官網)',
          itemDetails: 'Nuxt.js、SCSS、Google Calendar API',
          funcTions: [
            'AWD架構',
            '透過SSR優化SEO',
            '會員抽獎功能(免費及扣點)',
            'DM功能',
            '串接Google Calendar API',
          ],
          extensions: [],
        },
        {
          github: '',
          img: './images/works/Nuxt.js-Beyond(content).jpg',
          href: 'https://beyondbeyond.com.tw/',
          itemTitle: '比漾廣場 - (文章)',
          itemDetails: 'Nuxt.js、SCSS、Canvas',
          funcTions: [
            'AWD架構',
            '透過SSR優化SEO',
            'Canvas - X Day賀卡製作',
            '文件檔案投稿上傳',
            '電子發票載具歸戶API',
            '串接社群分享功能(FB, Twitter, Line, Pinterest)',
          ],
          extensions: [],
        },
        {
          github: '',
          img: './images/works/Nuxt.js-Beyond(shop).jpg',
          href: 'https://beyondbeyond.com.tw/shop',
          itemTitle: '比漾廣場 - (商城)',
          itemDetails: 'Nuxt.js、SCSS',
          funcTions: [
            'AWD架構',
            '透過SSR優化SEO',
            '當前位置偵測並串接中央天氣預報API',
            '商品圖片放大鏡',
            '串接台新付款API',
            '發票捐贈API',
          ],
          extensions: [],
        },
        {
          github: '',
          img: './images/works/Nuxt.js-Formosa.png',
          href: 'https://www.formosatimes.com.tw/',
          itemTitle: '寶島鐘錶',
          itemDetails: 'Nuxt.js、SCSS、Google Map API',
          funcTions: [
            'Google Map 功能(門市查詢)',
            '限定國外IP的部分權限',
            '部分功能重構及優化',
          ],
          extensions: [],
        },
        {
          github: 'https://github.com/a9261020/vue_jest_demo',
          img: './images/works/Vue.js-vue_jest_demo.jpg',
          href: 'https://a9261020.github.io/vue_jest_demo/#/',
          itemTitle: 'vue-jest-demo',
          itemDetails: 'vue-jest、vue-router、vuex',
          funcTions: [
            '練習寫測試',
            'event 觸發測試',
            'axios 觸發測試',
            'vue-router 測試',
            'vuex action 改變 store測試',
            'mock 第三方套件',
          ],
          extensions: ['vue-jest', 'Vuex', 'Vue-Router'],
        },
        {
          github:
            'https://github.com/a9261020/restCountriesApiWithColorThemeSwticher',
          img: './images/works/Vue.js-rest_countries_api.jpg',
          href: 'https://rest-countries-api-with-color-theme-swticher.vercel.app/',
          itemTitle: 'rest-countries-api',
          itemDetails: 'vue3, vue-router, compositionAPI',
          funcTions: [
            '串接 rest-countries-api',
            'vue3 新功能練習',
            '熟悉 composition API',
            'suspense',
            '$attrs, $emit',
            '使用css變數做主題切換',
          ],
          extensions: ['vue3', 'vue-router'],
        },
      ],
    },
  },
  computed: {
    navBarLink() {
      return Object.keys(this.navBarItem);
    },
    aboutIcon() {
      return Object.values(this.about.i);
    },
    skillIconBlock() {
      return Object.values(this.skill.iconBlock);
    },
    expItem() {
      return Object.values(this.experiences.item);
    },
    eduItem() {
      return Object.values(this.education.item);
    },
    worksItem() {
      return Object.values(this.works.item);
    },
  },
});

// 讓打字機結束後可以停頓一秒之後再重複執行
// 參考網站：https://www.cnblogs.com/wangshengli520/p/9899703.html
let contextText = document.querySelector('.contextText,h4');
contextText.classList.add('animate');
contextText.addEventListener('animationend', function () {
  contextText.classList.remove('animate');
  setTimeout(function () {
    contextText.classList.add('animate');
  }, 0800);
});

AOS.init({
  offset: 120,
  duration: 1000,
  easing: 'ease',
});
