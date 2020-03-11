let app = new Vue({
  el: "#app",
  data: {
    navBarItem: [
      {
        title: "About",
        link: "about"
      },
      {
        title: "Skills",
        link: "skills"
      },
      {
        title: "Works",
        link: "works"
      },
      {
        title: "Experience & Education",
        link: "experiencesAndEducation"
      }
    ],
    contentText: {
      h1: "Hello I'm James",
      h4: "Beginner Fronted Engineer"
    },
    about: {
      h1: "About Me. ｜ 你有多自律 就有多自由",
      h2: "James ｜ 李哲宇",
      p: [
        "曾經是個快破百的胖子，自學健身、控制飲食，半年減了20公斤，兩年達到體態巔峰，三項總合450公斤。",
        "勇於踏出舒適圈、了解需要的東西，一步一步的實現，尋找解決方案，正面面對問題。",
        "擔任「溝通」、「洽談」的角色，例如：洽談客戶需求、與工程師討論客戶的需求該如何實現，通過溝通有效達成團隊合作。",
        "　",
        "畢業於臺北商業大學-資訊管理系",
        "目前於台灣慧諮擔任客服顧問，負責釐清客戶問題、客戶教育訓練、擔任PM與客戶洽談新需求/功能、報表修改",
        "服務事蹟：因服務品質優良被客戶寄送了一箱芒果、客戶直接向總經理讚美說有我當員工是很幸運的事情。",
        "　",
        "未來想當個SA、PM，於是想先把程式的基礎打穩。",
        "從 2019/7 開始自學Html、Css、JS、Vue.js，陸陸續續有做些小作品。",
        "雖然整體基礎很不夠，但未來會一步一步弄清楚不懂的地方，成為一位前端工程師。"
      ],
      i: [
        {
          name: "fab fa-github",
          link: "https://github.com/a9261020"
        },
        {
          name: "fab fa-facebook",
          link: "https://www.facebook.com/profile.php?id=100002492866957"
        },
        {
          name: "fab fa-instagram",
          link: "https://www.instagram.com/fish840212/?hl=zh-tw"
        }
      ]
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
            "使用 HTML5、CSS、SCSS 基礎切版，製作簡單的網頁"
          ]
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
            "了解MVC的概念並嘗試在購物車中實現"
          ]
        },
        {
          iconName: "network-wired",
          itemTitle: "Others",
          h6: "Git, Heroku",
          li: ["使用 Git 簡單的基本指令來完成開發及版控", "使用Heroku做發佈"]
        },
        {
          iconName: "language",
          itemTitle: "Language",
          h6: "TOEIC, JLPT",
          li: [
            "TOEIC 745分",
            "能夠應付例行性的業務需求，參加英文會議，聽取大部分要點",
            "自學日文 考取JLPT N5"
          ]
        }
      ]
    },
    experiences: {
      title: "Experiences",
      subTitle: "經歷",
      item: [
        {
          itemH5: "Wisetechglobal 台灣慧諮 ｜ 客服顧問師",
          itemH6: "2018-05-24 ~ 至今",
          itemLi: [
            "＊ 特殊經歷",
            "寫了一隻字串處理程式，將例行性作業省了 90% 的時間。",
            "客戶直接向總經理讚美說有我當員工是很幸運的事情",
            "因服務品質優良被客戶寄送了一箱芒果",
            "＊ 接聽電話，解決客戶問題",
            "第一時間與客戶接觸，安撫客人情緒，了解客戶對於系統上的問題，協助解決相關問題",
            "＊ 擔任PM與客戶洽談新需求/功能",
            "詢問客戶的需求，了解之後先畫出初步的流程圖，並請研發部評估工時，請業務部報價",
            "＊ 外出對客戶教育訓練",
            "客戶有人員調動時，會像我司提出系統教育訓練，會外出至客戶公司當講師",
            "＊ 報表修改",
            "依照客戶的需求使用c#、My Sql語法抓出系統中的欄位，轉換成客戶需要呈現的樣子",
            "＊ 測試程式",
            "更版前、新需求做完之後都必須對程式做測試，維持程式的品質"
          ]
        },
        {
          itemH5: "Café Philo 幕哲咖啡 ｜ 內外場服務生",
          itemH6: "2015-06 ~ 2017-11",
          itemLi: ["＊ 內場", "備料、煮餐", "＊ 外場", "帶位、送餐、咖啡製作"]
        }
      ]
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
            "帶領30人團隊活動企劃發想、執行與檢討，學習與組員共事，與其他組溝通協調。 舉辦人數130左右的迎新活動。"
          ]
        },
        {
          itemH5: "清傳高商 ｜ 資料處理科",
          itemH6: "2010-09 ~ 2013-06",
          itemLi: [
            "＊ 電腦研習社社長",
            "學習電腦的基本架構到網路的架設，帶領同學及學弟妹們來完成老師的指示。",
            "＊ 2013年全國技藝競賽「文書處理組」個人優勝"
          ]
        }
      ]
    },
    works: {
      title: "Works",
      subTitle: "作品集",
      item: [
        {
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
            "商品、訂單、會員、優惠券、留言板，新增編輯刪除"
          ],
          extensions: [
            "Vuex",
            "Vue-Router",
            "Vue-loading-overlay",
            "Vue-awesome-swiper",
            "Vee-validate",
            "sweetalert",
            "axios",
            "Bootstrap"
          ]
        },
        {
          img: "./images/works/Vue.js-Message board.jpg",
          herf: "https://glacial-escarpment-80195.herokuapp.com/",
          itemTitle: "Message board",
          itemDetails: "Express、Mongoose、heroku",
          funcTions: [
            "Vue.js",
            "訪客留言板",
            "Node.js",
            "留言板新增、編輯、刪除"
          ],
          extensions: ["無"]
        },
        {
          img: "./images/works/Vue.js-Todo List with element ui.jpg",
          herf: "https://a9261020.github.io/todo_list/",
          itemTitle: "Todo List",
          itemDetails: "Vue.js",
          funcTions: [
            "Vue.js",
            "新增、修改、刪除任務",
            "判斷任務狀態，是否完成"
          ],
          extensions: ["element-UI"]
        },
        {
          img: "./images/works/Vue.js-Todo List.jpg",
          herf: "https://codesandbox.io/s/vue-todolist-rpgtx",
          itemTitle: "Todo List",
          itemDetails: "Vue.js",
          funcTions: [
            "Vue.js",
            "新增、修改、刪除任務",
            "判斷任務狀態，是否完成"
          ],
          extensions: ["無"]
        },

        {
          img: "./images/works/Vue.js-Calculator.jpg",
          herf: "https://codesandbox.io/s/vuejs-calculator-iezs4",
          itemTitle: "Calculator",
          itemDetails: "Vue.js",
          funcTions: ["Vue.js", "簡單的計算功能"],
          extensions: ["無"]
        }
      ]
    }
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
    }
  }
});

// 讓打字機結束後可以停頓一秒之後再重複執行
// 參考網站：https://www.cnblogs.com/wangshengli520/p/9899703.html
let contextText = document.querySelector(".contextText,h4");
contextText.classList.add("animate");
contextText.addEventListener("animationend", function() {
  contextText.classList.remove("animate");
  setTimeout(function() {
    contextText.classList.add("animate");
  }, 0800);
});
