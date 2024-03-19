const { createApp } = Vue;

createApp({

  data(){
    return{
      emailArray: [],
    }
  },

  methods:{
    emailGenerate(email){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        const email = response.data.response;
        this.emailArray.push(email);
      })
    }
  },

  computed:{

  },

  mounted(){
    for (let i = 0; i < 10; i++) {
      this.emailGenerate();
    }
  }
}).mount('#app')