const app = Vue.createApp({
    data() {
      return {
        currentUserInput: '',
        message: '¡Vue es genial!',
      };
    },
    methods: {
      saveInput(event) {
        this.currentUserInput = event.target.value;
      },
      setText() {
        // this.message = this.currentUserInput;
        this.message = this.$refs.userText.value;
        // console.dir(this.$refs.userText);
      },
    },
  });
  
  app.mount('#app');


  const app2 = Vue.createApp({
    template: `
      <p>{{ comidaFav }}</p>
      `,
    data() {
      return {
        comidaFav: 'Pizza'
      }
    }
  });
  
  app2.mount('#app2')