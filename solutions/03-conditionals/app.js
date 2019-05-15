let app = new Vue({
    el: '#app',
    data: {
        show: true,
        age: undefined,
        message: {
            default: 'Parental guidance is suggested.',
            underage: 'Parents are strongly cautioned.'
        }
    }
});
