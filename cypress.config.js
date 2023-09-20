const { defineConfig } = require('cypress')
module.exports = defineConfig({
  projectId: '1ndj9i',
  chromeWebSecurity: false,
  e2e: {
    baseUrl:"https://qacart-todo.herokuapp.com/", 
    experimentalWebKitSupport: true,
    setupNodeEvents(on, config) {
    
    },
  },

  
});
