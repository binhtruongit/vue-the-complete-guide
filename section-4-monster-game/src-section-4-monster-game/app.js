function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    debugger
}

let currentRound = 0;

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0
        };
    },
    computed:{
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack(){
            return (this.currentRound % 3) !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;            
            const attackValue = getRandomValue(12,5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {            
            const attackValue = getRandomValue(15,8);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    },
});

app.mount("#game");
