function getRandomValue(min, max) {
    return min + Math.floor(Math.random() * (max - min));
    debugger
}

let currentRound = 0;

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return (this.currentRound % 3) !== 0;
        }
    },
    watch: {
        //Ở đây biến được theo dõi là this.playerHealth
        playerHealth (value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                //Draw
                this.winner = 'draw'
            } else if(value < 0){
                //Player lost
                this.winner = 'monster'
            }
        },
        monsterHealth (value) {
            if(value <= 0 && this.playerHealth <= 0) {
                //Draw
                this.winner = draw;
            } else if(value < 0){
                //Player lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(5, 10);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
        }
    },
});

app.mount("#game");
