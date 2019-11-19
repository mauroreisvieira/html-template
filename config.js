const { commun } = require("./data/info.json");
const { menus, posts } = require("./data/site.json");

module.export = {
    data: {
        global: commun,
        menus: menu,
        posts: posts
    }
};
