<template lang="pug">
  .container
    cfg-modal
    b-jumbotron(header="Gemidão do Zap", lead="Cada vez mais fácil de trollar seus amigos")
      b-btn(variant="primary", v-b-modal="'cfgmodal'") {{ isConfigured ? 'Configurações' : 'Iniciar' }}
      phone-caller(v-if="isConfigured")
</template>

<script>
  import CfgModal from './CfgModal.vue'
  import PhoneCaller from './PhoneCaller.vue'

  export default {
    name: 'main-page',
    components: {
      CfgModal,
      PhoneCaller
    },
    computed: {
      isConfigured () {
        return this.$store.getters.provider.token !== null
      }
    }
  }
</script>


<style scoped>
  .container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
