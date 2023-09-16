import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    jobs: []
  }),

  actions: {
    //fetch data
    async fetchHandler() {
      try {
        const { data } = await axios({
          url: 'https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth',
          method: 'get'
        })

        this.jobs = data
        console.log(data, 'asdasd')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
