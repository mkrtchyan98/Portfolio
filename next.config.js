module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact':{page:'/contact'},
      '/skills':{page:'/skills'}
    }
  },
}

const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: 'https://tmkrtchyan.now.sh/',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});