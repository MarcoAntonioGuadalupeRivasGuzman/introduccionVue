
//data para trabajar
const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]


const app = Vue.createApp({
    /*template:`
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    `*/

    data(){ //se esta trabajando el estado del componente
        return {
            message: 'Hola a todos',
            manager: 'Mr robot',
            citas: quotes,
            newQuote: 'Hola stalker'
        }
    },
    methods:{ //se declaran los metodos que tendra el objeto
        changeMessage(event){
            console.log('hi',event);
            this.message="hi stalker";
            this.changeManager();
        },
        changeManager(){
            this.manager="Steve chambitas";
        },
        addQuote(event){
            this.citas.unshift({
                quote: this.newQuote,
                author: 'steve'
            })
        }
    }
});

app.mount('#myapp');