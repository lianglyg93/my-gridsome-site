// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "liangs",
  siteDescription: "大前端",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["blog", "project", "contact", "avatar"],
        singleTypes: ["mysingle"],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./*.md",
      },
    },
  ],
  templates: {
    StrapiBlog: [
      {
        path: "/blog/detail/:id",
        component: "./src/templates/Blog.vue",
      },
    ],
    StrapiProject: [
      {
        path: "/project/detail/:id",
        component: "./src/templates/Project.vue",
      },
    ],
    StrapiContact: [
      {
        path: "/contact/avatar/:id",
        component: "./src/templates/Avatar.vue",
      },
    ],
  },
};
