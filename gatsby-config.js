module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        trickle: true,
        trickleSpeed: 800,
        easing: 'ease',
        speed: 500,
        parent: '#nprogress',
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/assets/images',
      },
    },
  ],
}
