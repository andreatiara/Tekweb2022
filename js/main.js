let app = Vue.createApp({
    data() {
      return {
        articles: {},
        markdown: null
      }
    },
    methods: {
      getArticleData() {
        axios
          .get(
            "https://raw.githubusercontent.com/andreatiara/Tekweb2022/main/js/vue.json"
          )
          .then((res) => {
            this.articles = res.data;
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getArticleData()
    }
  })
  app.mount('#app');