
const app = Vue.createApp({
    /*template:`
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    `*/

    data(){ //se esta trabajando el estado del componente
        return {
            message: 'Hola a todos'
        }
    }
});

app.mount('#myapp');