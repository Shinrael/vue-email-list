const { createApp } = Vue;

createApp({

  data(){
    return{
      emailArray: [],
      allEmail : false,
    }
  },

  methods:{
    emailGenerate(email){
      // Chiamata API per generare un indirizzo email casuale
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        // Estrai l'indirizzo email dalla risposta
        const email = response.data.response;
        // Aggiungi l'indirizzo email all'array emailArray
        this.emailArray.push(email);
        // Se sono state generate 10 email, imposta il flag allEmail a true
        if (this.emailArray.length === 10) {
          this.allEmail = true;
        }
      })
    }
  },

  computed:{

  },

  mounted(){
    // Genera 10 indirizzi email chiamando il metodo emailGenerate()
    for (let i = 0; i < 10; i++) {
      this.emailGenerate();
    }
  }
}).mount('#app')