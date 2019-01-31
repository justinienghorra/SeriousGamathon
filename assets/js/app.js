const app = new Vue({
    el: '#app',
    data: {
        checkboxes: {
            eLearning: false,
            dataScience: false,
            uxDesign: false
        },
        nbComplaintsTreated: 0,
        isComplaint: true,
        client: {
            grumpy : "../img/grumpy.png",
            happy : "../img/happy.png"
        }
    },
    methods: {
        treatComplaint: function () {
            this.nbComplaintsTreated++;
            this.isComplaint = false;
        }
    }
});