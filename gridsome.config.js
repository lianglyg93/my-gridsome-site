/*
 * @Descripttion:
 * @Author: liangs
 * @Date: 2021-07-18 16:17:22
 * @LastEditors: liangs
 * @LastEditTime: 2021-07-20 01:38:03
 */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["blog", "project", "social", "follower"],
        // singleTypes: ["impressum"],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
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
  },
};
