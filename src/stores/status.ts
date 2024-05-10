import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', {
  state() {
    return {
      discordStatus: 'Offline',
      needFetch: true
    }
  },
  actions: {
    async fetch(discordId: string) {
      if (!this.needFetch) return

      const discordPromise = fetch(`https://api.lanyard.rest/v1/users/${discordId}`)

      Promise.all([discordPromise]).then(async ([discordResp]) => {
        const {
          data: { discord_status: discord_status }
        } = await discordResp.json()

        switch (discord_status) {
          case 'online':
            this.discordStatus = 'Online'
            break

          case 'dnd':
            this.discordStatus = 'Busy'
            break

          case 'idle':
            this.discordStatus = 'Idle'
            break

          case 'offline':
            this.discordStatus = 'Offline'
            break
        }

        this.needFetch = false
      })
    }
  }
})
