function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    debugger
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100
        };
    },
    computed:{
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackMonster() {            
            const attackValue = getRandomValue(12,5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {            
            const attackValue = getRandomValue(15,8);
            this.playerHealth -= attackValue;
        },
    },
});

app.mount("#game");
