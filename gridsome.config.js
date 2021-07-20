/*
 * @Descripttion:
 * @Author: liangs
 * @Date: 2021-07-18 16:17:22
 * @LastEditors: liangs
 * @LastEditTime: 2021-07-21 01:08:25
 */
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
        apiURL: "http://localhost:1337",
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
