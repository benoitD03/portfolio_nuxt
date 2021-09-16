export const state = () => ({
    projects: [
        {
            id: 1,
            title: "Frontend e-commerce + interface administrateur",
            description:
              "Réalisation d'un site type e-commerce : développement d'une partie administrateur permettant d'ajouter, modifier et supprimer des articles, et développement de la partie client, avec les fonctionnalités d'ajout et de suppression d'articles dans un panier.",
            image: "/image_ecommerce.png",
            technos: ["Vue.js", "Vuex", "Json-server", "localStorage"],
          },
          {
            id: 2,
            title: "Réseau social d'entreprise",
            description:
              "Réalisation d'un réseau social, avec la gestion des utilisateurs ( connexion, inscription, modifications et suppressions de profil, possibilité aux admin de supprimer d'autres utilisateurs, etc ), et partage de posts sur un fil d'actualité ( avec également la possibilité aux admin de supprimer tous les posts des utilisateurs )",
            image: "/image_groupomania.png",
            technos: ["Vue.js", "Vuetify", "Node.js", "MySQL", "Sequelize"],
          },
    ]
})

export const getters = {
    getProjects(state) {
        return state.projects;
    }
}