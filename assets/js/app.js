const app = new Vue({
    el: '#app',
    data: {
        elt1: [],
        elt2: {
            elt3: true,
            elt4: "yay"
        },
        elt5: 50
    },
    methods: {
        yay: function () {
            this.elt2.elt4 = "yay !!!";
            this.elt2.elt3 = false;
            this.elt5 = 100;
        }
    }
});