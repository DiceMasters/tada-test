<template>
  <v-app>
    <v-main>
      <div class="d-flex align-stretch">
        <Drawer
          :username="username"
          :loggedIn="loggedIn"
          @change-room="changeRoom"
        />
        <Screen
          :userName="username"
          :roomName="activeRoom"
          :wsInstance="connection"
        />
      </div>
      <Login
        :open="openLoginDialog"
        :loading="loadingLoginDialog"
        @submit="connect"
      />
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer'
import Screen from '@/components/Screen'
import Login from '@/components/Login'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { Drawer, Screen, Login },
  data () {
    return {
      username: '%username%',
      loggedIn: false,
      connection: null,
      activeRoom: null,
      openLoginDialog: true,
      loadingLoginDialog: false
    }
  },
  created () {
    this.$bus.$on('createRoom', this.createRoom)
  },
  beforeDestroy () {
    this.createRoom && this.$bus.$off(this.createRoom)
  },
  computed: {
    ...mapState({
      wsConnectionURI: state => state.api.wsConnect
    })
  },
  methods: {
    connect (username) {
      console.log('Connection start...')
      this.loadingLoginDialog = true

      this.connection = new WebSocket(this.wsConnectionURI + `?username=${username}`)

      this.connection.onopen = e => {
        console.log(e)
        this.openLoginDialog = false
        this.username = username
        this.loggedIn = true
        this.loadingLoginDialog = false
      }

      this.connection.onerror = e => {
        console.log(e)
        this.loadingLoginDialog = false
      }

      this.connection.onmessage = message => {
        this.$bus.$emit('message', message)
      }
    },
    changeRoom (room) {
      this.$store.dispatch('api/fetchHistory', room)
        .then(() => {
          this.activeRoom = room
        })
        .catch(err => {
          throw new Error(err)
        })
    },
    createRoom (name) {
      const initialMessage = {
        id: this.username,
        room: name,
        text: `Новая комната ${name}, была создана пользователем ${this.username}`
      }

      this.connection.send(JSON.stringify(initialMessage))
      this.activeRoom = name

      this.$bus.$emit('updateRooms')
    }
  }
}
</script>

<style>
.v-application { background-color: #363636 !important; }
</style>
