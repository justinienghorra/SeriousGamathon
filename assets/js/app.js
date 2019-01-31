const app = new Vue({
    el: '#app',
    methods: {
        treatComplaint: function () {
            if (this.checkboxes.eLearning && this.checkboxes.uxDesign && this.checkboxes.dataScience) {
                return alert("Vous ne pouvez pas utiliser toutes vos compétences en même temps !")
            }
            if (this.nbComplaintsTreated == 0) {
                if (this.checkboxes.dataScience) {
                    alert("Vous ne m'aidez pas, là !");
                } else {
                    this.isComplaint = false;
                    this.satisfaction
                    this.clientImg = "assets/img/happy.png";
                }
            } else {
                M.toast({ html: 'Choisissez au moins une des compétences', classes: "blue darken-4 white-text" });
            }
        }
    },
    data: {
        checkboxes: {
            eLearning: false,
            dataScience: false,
            uxDesign: false
        },
        currentProblem: "Je n'arrive pas à me servir de votre site. L'interface n'est pas intuitive, j'ai du mal à m'y retrouver...",
        answer: "Merci beaucoup, votre interface est beaucoup plus claire et votre tutoriel va m'apprendre à m'en servir !",
        nbComplaintsTreated: 0,
        isComplaint: true,
        time: 12,
        satisfaction: 50,
        clientImg: "assets/img/grumpy.png"
    },
    clients: [this.client1, this.client2, this.client3],
    client1: {
        problem: "Je n'arrive pas à me servir de votre site. L'interface n'est pas intuitive, j'ai du mal à m'y retrouver...",
        UX: "C'est déjà mieux. J'espère ne pas mettre trop de temps à apprendre à me servir du site...",
        el: "Ce tutoriel va m'aider à m'y retrouver, mais l'interface n'est pas intuitive.",
        data: "Vous ne m'aidez pas, là !",
        uxandel: "Merci beaucoup, votre interface est beaucoup plus claire et votre tutoriel va m'apprendre à m'en servir !",
        uxanddata: "C'est déjà mieux. J'espère ne pas mettre trop de temps à apprendre à me servir du site...",
        elanddata: "Ce tutoriel va m'aider à m'y retrouver, mais l'interface n'est pas intuitive."
    },
    client2: {
        problem: "Je n'ai pas d'idées de série à regarder, votre site devrait afficher des recommandations...",
        UX2: "Vous n'avez pas résolu mon problème, je ne sais toujours pas quoi regarder.",
        eL2: "Vous n'avez pas résolu mon problème, je ne sais toujours pas quoi regarder.",
        data: "J'ai vu que vous aviez mis des recommandations, mais j'ai eu beaucoup de mal à les trouver...",
        uxandel: "Vous n'avez pas résolu mon problème, je ne sais toujours pas quoi regarder !",
        uxanddat: "Merci ! Vos recommandations m'ont permis de découvrir de nouvelles séries très rapidement !",
        elanddata: "J'ai vu que vous aviez mis des recommandations, mais j'ai eu beaucoup de mal à les trouver...",
    },
    client3: {
        problem: "Il faut augmenter la sécurité du site, la base de données peut être hackée à tout moment.",
        UX: "Ca ne change rien à la sécurité.",
        eL: "Ca ne change rien à la sécurité.",
        data: "Vos compétences ont permis de résoudre le problème, les données des clients sont protégées.",
        uxandel: "Ca ne change rien à la sécurité.",
        uxanddata: "Vous avez mis trop de temps à accomplir cette tâche...",
        elanddata: "Vous avez mis trop de temps à accomplir cette tâche..."
    }
});