Vue.component('edit', {
    template: '<div><input v-model="name" /><button @click="updateName">Update</button></div>',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        updateName() {
            this.$emit('update-greeting', this.name);
        }
    }
});
let app = new Vue({
    el: '#app',
    data() {
        return {
            message: 'Hello, ',
            userName: undefined
        }
    },
    computed: {
        greeting() {
            return `${this.message} ${this.userName}`
        }
    },
    methods: {
        updateUser(value) {
            this.userName = value
        }
    }
});
