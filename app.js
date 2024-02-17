
const app = Vue.createApp({
    /*template:`
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    `*/

    data(){ //se esta trabajando el estado del componente
        return {
            message: 'Hola a todos',
            manager: 'Mr robot'
        }
    },
    methods:{
        changeMessage(event){
            console.log('hi',event);
            this.message="hi stalker";
            this.changeManager();
        },
        changeManager(){
            this.manager="Steve chambitas";
        }
    }
});

app.mount('#myapp');