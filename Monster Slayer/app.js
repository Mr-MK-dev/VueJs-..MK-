function demageBack(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            google: "https://github.com/",
            winner: null
        }
    },
    methods: {
        newGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.round = 0
            this.winner = null

        },
        surrender() {
            this.winner = 'monster'
        },
        attackMonster() {
            this.round++;
            const demage = demageBack(12, 5)
            this.monsterHealth -= demage
            this.attackPlayer()
            console.log(`${this.playerHealth} ${this.monsterHealth}`);


        },
        attackPlayer() {
            const demage = demageBack(18, 8)
            this.playerHealth -= demage
        },
        specialAttack() {
            this.round++;
            const demage = demageBack(25, 10)
            this.monsterHealth -= demage
            this.attackPlayer()
            console.log(`${this.round}`);
            console.log(`${this.playerHealth}`);

        },
        healPlayer() {
            const heal = demageBack(15, 5)
            if (this.playerHealth > 100) {
                this.playerHealth = 100
            } else {

                this.playerHealth += heal
            }
            console.log(`${this.playerHealth}`);
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'

            }
        },

        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'

            }
        }
    },
    computed: {
        special3Attack() {
            return this.round % 3 !== 0
        },
        playerBar() {
            return { width: this.playerHealth + '%' }
        },
        monsterBar() {
            return { width: this.monsterHealth + '%' }
        }
    }
})

app.mount('#game')