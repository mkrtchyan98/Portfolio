module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/contact':{page:'/contact'},
      '/skills':{page:'/skills'}
    }
  },
}

