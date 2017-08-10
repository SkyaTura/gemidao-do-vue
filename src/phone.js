import axios from 'axios'

const providers = {
  totalVoice: {
    startCall (params) {
      return new Promise((resolve, reject) => {
        axios.create({
          headers: {
            Accept: 'application/json',
            'Access-Token': params.token
          },
          baseURL: 'https://api.totalvoice.com.br'
        })
          .post('/composto', {
            numero_destino: params.to,
            dados: [
              {
                acao: 'audio',
                acao_dados: {
                  url_audio: window.location.origin + require('./assets/gemidao.mp3')
                }
              }
            ],
            bina: params.from
          })
          .then(resolve)
          .catch(reject)
        resolve(true)
      })
    },
    name: 'Total Voice'
  }
}

const phone = {
  install (Vue) {
    Vue.prototype.$phone = {
      providers,
      startCall: function (provider, params) {
        return new Promise((resolve, reject) => {
          providers[provider.name].startCall({
            from: params.from,
            to: params.to,
            token: provider.token
          })
            .then(resolve)
            .catch(reject)
        })
      }
    }
  }
}

export default phone
