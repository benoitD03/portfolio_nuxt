export const state = () => ({
    projects: [
        {
          id: 1,
          title: "Application MarkBook",
          description:
            "Réalisation d'une application responsive permettant de gérer ses lectures, avec l'allure d'un réseau social : l'utilisateur créer son espace personnel, ou il pourra voir ses statistiques, ajouter les livres qu'il souhaite, et les répartir dans 3 catégories (Livres lus, en cours, et liste d'envies). Il pourra également se rendre sur le profil des autres utilisateurs, pour voir un condensé de leurs espaces personnels (statistiques, 5 dernières lectures, et liste d'envies. Cliquez sur le lien YouTube ci-dessous pour voir une démonstration de l'application, et sur les liens GitHub pour voir le code.",
          image: "/markbook.png",
          image2: "/markbook2.png",
          technos: ["MongoDB", "Node.js", "Express", "Json-Web-Token", "Vue.js", "Vuex", "Json-server", "Animate.css"],
          github: "https://github.com/benoitD03/markbook_frontend",
          github2: "https://github.com/benoitD03/markBook_backend",
          youtube: "https://youtu.be/qp0C9QWYRV4"
        },
        {
            id: 2,
            title: "e-commerce + interface administrateur",
            description:
              "Réalisation d'un site type e-commerce : développement d'une partie administrateur permettant d'ajouter, modifier et supprimer des articles, et développement de la partie client, avec les fonctionnalités d'ajout et de suppression d'articles dans un panier. Cliquez sur le lien YouTube ci-dessous pour voir une démonstration, et sur les liens GitHub pour voir le code.",
            image: "/ecommerce.png",
            image2: "/ecommerce2.png",
            technos: ["Vue.js", "Vuex", "Json-server", "localStorage", "Animate.css"],
            github: "https://github.com/benoitD03/training_vuex_ecommerce",
            youtube: "https://youtu.be/i4J6R4fEusE"
          },
          {
            id: 3,
            title: "Réseau social d'entreprise",
            description:
              "Réalisation d'un réseau social, avec la gestion des utilisateurs ( connexion, inscription, modification et suppression de profil, possibilité aux admins de supprimer d'autres utilisateurs, etc ), et partage de posts sur un fil d'actualité ( avec également la possibilité aux admin de supprimer tous les posts des utilisateurs )",
            image: "/groupomania.png",
            image2: "/groupomania2.png",
            technos: ["Vue.js", "Vuetify", "Node.js", "MySQL", "Sequelize"],
            github: "https://github.com/benoitD03/BenoitDurand_7_020321"
          },
          {
            id: 4,
            title: "Générateur de dégradé CSS",
            description: "Réalisation d'un générateur de dégradé CSS pour des background originaux. Possibilité d'ajouter jusqu'à 8 couleurs, pouvant être générées manuellement ou aléatoirement, et de modifier l'inclinaison. Une fois satisfait, l'utilisateur pourra copier la ligne de code et la coller dans son projet.",
            image: "/gradient_generator.png",
            image2: "/gradient_generator2.png",
            technos: ["JavaScript"],
            github: "https://github.com/benoitD03/Gradient_Generator",
            link: "https://benoitd03.github.io/Gradient_Generator/"
          },
          {
            id: 5,
            title: "Portfolio Nuxt.js",
            description: "Réalisation d'un portfolio peronnel avec Nuxt.js, permettant de présenter une partie de mes projets, et une partie de mon parcours",
            image: "/portfolio.png",
            image2: "/portfolio2.png",
            technos: ["Nuxt.js","Vuetify","Animate.css"],
            github: "https://github.com/benoitD03/portfolio_nuxt",
            link: "https://benoit-durand.fr"
          }
    ]
})

export const getters = {
    getProjects(state) {
        return state.projects;
    }
}