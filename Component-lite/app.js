const app = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {

    }
})

app.component('friend-list', {
    template: `
    <li v-for="friend in friends">
          <h2>{{ friend.name }}</h2>
          <button @click="isVisibleMethod"> {{ isVisible ? "Hide" :  "Show" }} Details</button>
          <ul v-if="isVisible">
            <li><strong>Phone:</strong> {{friend.phone }}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>`,
    data() {
        return {
            isVisible: true,
            friends: [
                {
                    name: 'mk',
                    phone: '011525',
                    email: 'mk@gmail'
                },

                {
                    name: 'ali',
                    phine: '0100',
                    email: 'ali@gmail'
                }
            ]
        }
    },

    methods: {
        isVisibleMethod() {
            this.isVisible = !this.isVisible
        }
    }
})

app.mount('#app')