import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag'
import { apolloClient } from '../apolloClient'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ip: '178.162.23.97',
    getLocation: null,
    locations: [
      {
        ip: null
      }
    ]
  },
  mutations: {
    setIp (state, ip) {
      state.ip = ip
    },
    setGetLocation (state, data) {
      state.getLocation = data
    },
    setHistory (state, data) {
      const firstItem = state.locations.map(item => item.ip)
      if (firstItem[0] === null) {
        state.locations = []
        state.locations[0] = data
      } else {
        state.locations.push(data)
      }
    },
    clearHistory (state) {
      state.locations = []
      state.locations[0] = {
        ip: null
      }
    }
  },
  actions: {
    async getLocation ({ commit, state }) {
      const response = await apolloClient.query({
        query: gql`
          query getLocation($ip: String!) {
            getLocation(ip: $ip) {
              continent {
                code
                names {
                  en
                  ru
                }
              }
              country {
                iso_code
                names {
                  en
                  ru
                }
              }
              city {
                names {
                  en
                  ru
                }
              }
              postal {
                code
              }
              location {
                latitude
                longitude
              }
            }
          }
        `,
        variables: {
          ip: state.ip
        }
      })
      const { getLocation } = response.data
      getLocation.ip = state.ip
      commit('setGetLocation', { ...getLocation })
      commit('setHistory', { ...getLocation })
    }
  }
})
