const app = new Vue({
    el: '#app',
    methods: {
        newClient: function () {
            if (this.nbComplaintsTreated == 3) {
                window.location.href = "end.html";
            } else {
                const client = this.clients[this.nbComplaintsTreated];
                this.isComplaint = true;
                this.checkboxes.dataScience = false;
                this.checkboxes.uxDesign = false;
                this.checkboxes.eLearning = false;
                this.clientImg = "assets/img/grumpy.png";
                this.currentProblem = client.problem;
                this.currentUX = client.UX;
                this.currentEl = client.el;
                this.currentData = client.dataS;
                this.currentUXandEl = client.uxandel;
                this.currentUXandData = client.uxanddata;
                this.currentElandData = client.elanddata;
            }
        },
        treatComplaint: function () {
            if (this.checkboxes.eLearning && this.checkboxes.uxDesign && this.checkboxes.dataScience) {
                return M.toast({ html: 'Vous ne pouvez pas utiliser toutes vos compétences en même temps !', classes: "blue darken-4 white-text" });
            }
            else if (!(this.checkboxes.eLearning || this.checkboxes.uxDesign || this.checkboxes.dataScience)) {
                return M.toast({ html: 'Choisissez au moins une compétence', classes: "blue darken-4 white-text" });
            }

            if (this.nbComplaintsTreated == 0) {
                if (this.checkboxes.dataScience){
                    return M.toast({ html: "Vous ne m'aidez pas, là !", classes: "blue darken-4 white-text" });
                }
                this.isComplaint = false;
                this.nbComplaintsTreated++;
                if (this.checkboxes.uxDesign && this.checkboxes.eLearning) {
                    this.satisfaction = this.satisfaction + 10;
                    this.time = this.time - 3;
                    this.pageToLoad = 3;
                    this.answer = this.currentUXandEl;
                    this.clientImg = "assets/img/happy.png";
                } else if (this.checkboxes.uxDesign) {
                    this.satisfaction = this.satisfaction + 5;
                    this.time = this.time - 2;
                    this.pageToLoad = 4;
                    this.answer = this.currentUX;
                    this.clientImg = "assets/img/ok.png";
                } else if (this.checkboxes.eLearning) {
                    this.satisfaction = this.satisfaction + 3;
                    this.time = this.time - 1;
                    this.pageToLoad = 2;
                    this.answer = this.currentEl;
                    this.clientImg = "assets/img/ok.png";
                } else if (this.checkboxes.uxDesign && this.checkboxes.dataScience) {
                    this.satisfaction = this.satisfaction + 3;
                    this.time = this.time - 5;
                    this.pageToLoad = 4;
                    this.answer = this.currentUXandData;
                    this.clientImg = "assets/img/ok.png";
                } else if (this.checkboxes.eLearning && this.checkboxes.dataScience) {
                    this.satisfaction = this.satisfaction + 3;
                    this.time = this.time - 4;
                    this.pageToLoad = 2;
                    this.answer = this.currentElandData;
                    this.clientImg = "assets/img/ok.png";
                }
            } else if (this.nbComplaintsTreated == 1) {
                if ((this.checkboxes.uxDesign || this.checkboxes.eLearning) && !this.checkboxes.dataScience) {
                    return M.toast({ html: "Vous n'avez pas résolu mon problème, je ne sais toujours pas quoi regarder.", classes: "blue darken-4 white-text" });
                }
                this.isComplaint = false;
                this.nbComplaintsTreated++;
                if (this.checkboxes.dataScience && this.checkboxes.eLearning) {
                    this.satisfaction = this.satisfaction + 5;
                    this.time = this.time - 4;
                    if(this.pageToLoad==2){
                        this.pageToLoad = 9;
                    } else if (this.pageToLoad ==3){
                        this.pageToLoad = 5;
                    } else if (this.pageToLoad==4){
                        this.pageToLoad = 5;
                    }
                    this.answer = this.currentElandData;
                    this.clientImg = "assets/img/ok.png";
                } else if (this.checkboxes.dataScience && this.checkboxes.uxDesign) {
                    this.satisfaction = this.satisfaction + 15;
                    this.time = this.time - 5;
                    if(this.pageToLoad==2){
                        this.pageToLoad = 8;
                    } else if (this.pageToLoad ==3){
                        this.pageToLoad = 6;
                    } else if (this.pageToLoad==4){
                        this.pageToLoad = 11;
                    }
                    this.answer = this.currentUXandData;
                    this.clientImg = "assets/img/happy.png";
                } else if (this.checkboxes.dataScience) {
                    this.satisfaction = this.satisfaction + 5;
                    this.time = this.time - 3;
                    if(this.pageToLoad==2){
                        this.pageToLoad = 9;
                    } else if (this.pageToLoad ==3){
                        this.pageToLoad = 5;
                    } else if (this.pageToLoad==4){
                        this.pageToLoad = 10;
                    }
                    this.answer = this.currentData;
                    this.clientImg = "assets/img/ok.png";
                }

            } else if (this.nbComplaintsTreated == 2) {
                this.isComplaint = false;
                this.nbComplaintsTreated++;
                if (!this.checkboxes.dataScience) {
                    this.satisfaction = this.satisfaction - 10;
                    this.time = this.time - 2;
                    this.answer = this.currentUX;
                    this.clientImg = "assets/img/grumpy.png";
                } else if (this.checkboxes.dataScience && (this.checkboxes.uxDesign || this.checkboxes.eLearning)) {
                    this.satisfaction = this.satisfaction - 5;
                    this.time = this.time - 4;
                    this.answer = this.currentElandData;
                    this.clientImg = "assets/img/grumpy.png";
                } else if (this.checkboxes.dataScience) {
                    this.satisfaction = this.satisfaction + 10;
                    this.time = this.time - 3;
                    this.answer = this.currentData;
                    this.clientImg = "assets/img/happy.png";
                }
            }
            setTimeout(() => this.newClient(), 5000);


        }
    },
    mounted() {
        this.clients = [];
        this.clients.push(this.client1);
        this.clients.push(this.client2);
        this.clients.push(this.client3);
        this.newClient();
    },
    data: {
        checkboxes: {
            eLearning: false,
            dataScience: false,
            uxDesign: false
        },
        currentProblem: "",
        pageToLoad: 1,
        currentUX: "",
        currentEl: "",
        currentData: "",
        currentUXandEl: "",
        currentUXandData: "",
        currentElandData: "",
        answer: "",
        nbComplaintsTreated: 0,
        isComplaint: true,
        time: 12,
        satisfaction: 50,
        clientImg: "assets/img/grumpy.png",
        clients: [],
        client1: {
            problem: "Je n'arrive pas à me servir de votre site. L'interface n'est pas intuitive, j'ai du mal à m'y retrouver...",
            UX: "C'est déjà mieux. J'espère ne pas mettre trop de temps à apprendre à me servir du site...",
            el: "Ce tutoriel va m'aider à m'y retrouver, mais l'interface n'est pas intuitive.",
            dataS: "Vous ne m'aidez pas, là !",
            uxandel: "Merci beaucoup, votre interface est beaucoup plus claire et votre tutoriel va m'apprendre à m'en servir !",
            uxanddata: "C'est déjà mieux. J'espère ne pas mettre trop de temps à apprendre à me servir du site...",
            elanddata: "Ce tutoriel va m'aider à m'y retrouver, mais l'interface n'est pas intuitive."
        },
        client2: {
            problem: "Je n'ai pas d'idées de série à regarder, votre site devrait afficher des recommandations...",
            UX: "Vous n'avez pas résolu mon problème, je ne sais toujours pas quoi regarder.",
            eL: "Vous n'avez pas résolu mon problème, je ne sais toujours pas quoi regarder.",
            dataS: "J'ai vu que vous aviez mis des recommandations, dommage qu'elles ne soient pas affichées sur la page d'accueil...",
            uxandel: "Vous n'avez pas résolu mon problème, je ne sais toujours pas quoi regarder !",
            uxanddata: "Merci ! Vos recommandations m'ont permis de découvrir de nouvelles séries très rapidement !",
            elanddata: "J'ai vu que vous aviez mis des recommandations, dommage qu'elles ne soient pas affichées sur la page d'accueil...",
        },
        client3: {
            problem: "Je n'arrive plus à accéder à ma liste de favoris, elle semble avoir été supprimée.",
            UX: "Je ne l'ai toujours pas récupérée ! Bande d'incompétents !",
            eL: "Je ne l'ai toujours pas récupérée ! Bande d'incompétents !",
            dataS: "Elle vient de réapparaître ! Merci beaucoup.",
            uxandel: "Ca ne change rien à la sécurité.",
            uxanddata: "Vous avez réagi trop tardivement, je suis passé chez le concurrent.",
            elanddata: "Vous avez réagi trop tardivement, je suis passé chez le concurrent."
        }
    },
});
