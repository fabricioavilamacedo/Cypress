const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //Aqui eu declaro a url base que será utilizada a partir de cada request
      baseUrl: 'http://localhost:8080/api/v1/'
  },
});
