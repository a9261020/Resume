let app = new Vue({
  el: "#app",
  data: {
    navBarItem: [
      {
        title: "About",
        link: "about",
      },
      {
        title: "Skills",
        link: "skills",
      },
      {
        title: "Works",
        link: "works",
      },
      {
        title: "Experience & Education",
        link: "experiencesAndEducation",
      },
    ],
    contentText: {
      h1: "Hello I'm James",
      h4: "Fronted Engineer",
    },
    about: {
      h1: "About Me. ｜ 你有多自律 就有多自由",
      h2: "James ｜ 李哲宇",
      p: [
        "　",
        "畢業於臺北商業大學-資訊管理系",
        "　",
        "勇於踏出舒適圈、了解需要的東西，一步一步的實現，尋找解決方案，正面面對問題。",
        "　",
        "從 2019/7 開始自學Html、Css、JS、Vue.js、Node.js、Mongodb，陸陸續續有做出些小作品。",
        "　",
        "購物車網站(前後端、資料庫)、留言板(前後端)、Pomodoro、KKBOX_API(純前端)。",
        "　",
        "目前在筆記網路工程部擔任前端工程師，維護商城頁面、開發新功能。",
      ],
      i: [
        {
          name: "fab fa-github",
          link: "https://github.com/a9261020",
        },
        {
          name: "fab fa-blogger",
          link: "https://a9261020.github.io/jamesBlog/",
        },
      ],
    },
    skill: {
      iconBlock: [
        {
          iconName: "desktop",
          itemTitle: "Frontend Development",
          h6: "HTML, CSS, Javascript, Vue.js",
          li: [
            "具有介接 FB Login API 經驗",
            "用Vue.js、Vuex，Vue-Router，Bootstrap 建立一個購物車網站",
            "以 Ajax、Axios 串接 API 資料，渲染在頁面設計SPA架構",
            "使用 原生JS、Jquery、SASS、SCSS 做網頁切版",
          ],
        },
        {
          iconName: "server",
          itemTitle: "Backend Development",
          h6: "Node.js, MySQL, Mongoose",
          li: [
            "使用express搭配mongoose 建立購物網頁api",
            "會員註冊，臉書登入、登出功能",
            "商品新增、修改、刪除，優惠券新增、修改、刪除",
            "帳單建立、查詢訂單、留言板",
            "了解MVC的概念並嘗試在購物車中實現",
          ],
        },
        {
          iconName: "network-wired",
          itemTitle: "Others",
          h6: "Git(sourceTree), Heroku",
          li: ["使用 Git 來完成開發及版控", "使用Heroku做發佈"],
        },
        {
          iconName: "language",
          itemTitle: "Language",
          h6: "TOEIC, JLPT",
          li: [
            "TOEIC 745分",
            "能夠應付例行性的業務需求，參加英文會議，聽取大部分要點",
            "自學日文 考取JLPT N5",
          ],
        },
      ],
    },
    experiences: {
      title: "Experiences",
      subTitle: "經歷",
      item: [
        {
          itemH5: "Biji 筆記網路 ｜ 前端工程師",
          itemH6: "2020-07-21 ~ 至今",
          itemLi: [
            "* 作品",
            "筆記商城維護",
            "籃球筆記維護",
            "1990官網維護",
            "Jodo網頁官網設計及製作",
          ],
        },
        {
          itemH5: "Wisetechglobal 台灣慧諮 ｜ 客服顧問師",
          itemH6: "2018-05-24 ~ 2020-07-17",
          itemLi: [
            "＊ 特殊經歷",
            "寫了一隻字串處理程式(CRM Mail convert)，將例行性作業省了 90% 的時間",
            "安排、主持 新功能－電子發票說明會",
            "因服務品質優良被客戶寄送了一箱芒果",
            "＊ 接聽電話，解決客戶問題",
            "第一時間與客戶接觸，安撫客人情緒，了解客戶對於系統上的問題，協助解決相關問題",
            "＊ 擔任PM與客戶洽談新需求/功能",
            "詢問客戶的需求，了解之後先畫出初步的流程圖，確認傳送格式、資料欄位，並請研發部評估工時，請業務部報價",
            "目前完成專案：ASUS Tracking，CCN 提單傳送，客戶美國站點EDI維護",
            "＊ 外出對客戶教育訓練",
            "客戶有人員調動時，會向我司提出系統教育訓練，會外出至客戶公司當講師",
            "＊ 報表修改",
            "依照客戶的需求使用c#、My Sql語法抓出系統中的欄位，轉換成客戶需要呈現的樣子",
            "＊ 測試程式",
            "更版前、新需求做完之後都必須對程式做測試，維持程式的品質",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      subTitle: "學歷",
      item: [
        {
          itemH5: "臺北商業大學 ｜ 資訊管理系",
          itemH6: "2013-09 ~ 2017-06",
          itemLi: [
            "＊ 專題製作 － Gift Friends",
            "製作文件、流程圖、網頁、PPT、上台報告",
            "＊ 資管系學會財務長",
            "掌控各大/小活動的預算及支出，與各組溝通如何在不把預算刪減的情況下展現出我們最好的成果。大活動：五系聯合聖誕舞會、資管系財稅系聯合系烤、資管送舊…等",
            "＊ 資管系迎新活動長",
            "帶領30人團隊活動企劃發想、執行與檢討，學習與組員共事，與其他組溝通協調。 舉辦人數130左右的迎新活動。",
          ],
        },
        {
          itemH5: "清傳高商 ｜ 資料處理科",
          itemH6: "2010-09 ~ 2013-06",
          itemLi: [
            "＊ 電腦研習社社長",
            "學習電腦的基本架構到網路的架設，帶領同學及學弟妹們來完成老師的指示。",
            "＊ 2013年全國技藝競賽「文書處理組」個人優勝",
          ],
        },
      ],
    },
    works: {
      title: "Works",
      subTitle: "作品集",
      item: [
        {
          github: "https://github.com/a9261020/James_Shop",
          img: "./images/works/Vue.js-Jamess Shop.jpg",
          herf: "https://james-shop0310.herokuapp.com/",
          itemTitle: "James's Shop",
          itemDetails: "Vuex、Express、Mongoose、heroku",
          funcTions: [
            "Vue.js",
            "sessionStorage儲存登入token，並寫入vuex",
            "商品類別、名稱搜尋",
            "購物車、我的最愛",
            "終極密碼、優惠券",
            "會員訂單、模擬金流付款",
            "訪客、會員留言板",
            "Node.js",
            "會員註冊、登入、臉書登入",
            "商品、訂單、會員、優惠券、留言板，新增編輯刪除",
          ],
          extensions: [
            "Vuex",
            "Vue-Router",
            "Vue-loading-overlay",
            "Vue-awesome-swiper",
            "Vee-validate",
            "sweetalert",
            "axios",
            "Bootstrap",
          ],
        },
        {
          github: "https://github.com/a9261020/vue_jest_demo",
          img: "./images/works/Vue.js-vue_jest_demo.jpg",
          herf: "https://a9261020.github.io/vue_jest_demo/#/",
          itemTitle: "vue-jest-demo",
          itemDetails: "vue-jest、vue-router、vuex",
          funcTions: [
            "練習寫測試",
            "event 觸發測試",
            "axios 觸發測試",
            "vue-router 測試",
            "vuex action 改變 store測試",
            "mock 第三方套件",
          ],
          extensions: [
            "vue-jest",
            "Vuex",
            "Vue-Router",
          ],
        },
        {
          github: "https://github.com/a9261020/restCountriesApiWithColorThemeSwticher",
          img: "./images/works/Vue.js-rest_countries_api.jpg",
          herf: "https://rest-countries-api-with-color-theme-swticher.vercel.app/",
          itemTitle: "rest-countries-api",
          itemDetails: "vue3, vue-router, compositionAPI",
          funcTions: [
            "串接 rest-countries-api",
            "vue3 新功能練習",
            "熟悉 composition API",
            "suspense",
            "$attrs, $emit",
            "使用css變數做主題切換"
          ],
          extensions: [
            "vue3",
            "vue-router"
          ],
        },
        {
          github: "https://github.com/a9261020/IP-Tracker",
          img: "./images/works/React-IP_tracker.jpg",
          herf: "https://ip-tracker-sage.vercel.app/",
          itemTitle: "IP-tracker",
          itemDetails: "vue3, vue-router, compositionAPI",
          funcTions: [
            "串接 leaflet API",
            "串接 ipify API",
            "React hooks",
            "useState",
            "useEffect",
          ],
          extensions: [
            "React",
            "redux",
            "redux-saga"
          ],
        },
        {
          github: "https://github.com/a9261020/pomodoro",
          img: "./images/works/Vue.js-pomodoro.jpg",
          herf: "https://a9261020.github.io/pomodoro",
          itemTitle: "Pomodoro",
          itemDetails: "Vue.js、vuex、vue-router、SCSS",
          funcTions: [
            "Todolist",
            "計時功能",
            "音樂播放功能",
            "鈴聲設置",
            "手刻SCSS",
          ],
          extensions: ["無"],
        },
        {
          github: "https://github.com/a9261020/kkbox_api",
          img: "./images/works/Vue.js-KKBOX_api.jpg",
          herf: "https://a9261020.github.io/kkbox_api",
          itemTitle: "kkbox_api",
          itemDetails: "Vue.js、KKbox open api、Vuex",
          funcTions: [
            "api串接",
            "Axios獲取token資料",
            "用Vuex儲存token",
            "歌曲撥放",
            "手刻SCSS",
          ],
          extensions: ["Axios"],
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
let contextText = document.querySelector(".contextText,h4");
contextText.classList.add("animate");
contextText.addEventListener("animationend", function () {
  contextText.classList.remove("animate");
  setTimeout(function () {
    contextText.classList.add("animate");
  }, 0800);
});

AOS.init({
  offset: 120,
  duration: 1000,
  easing: "ease",
});
