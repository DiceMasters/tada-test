<template>
  <v-card
    tile
    height="100vh"
    width="256"
    elevation="6"
  >
    <v-navigation-drawer
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      dark
      permanent
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ username }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ getUserStatus }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item, index) in rooms"
          :key="`room-${index}`"
          link
          @click="emitRoomChange(item.name)"
        >
          <v-list-item-content>
            <v-list-item-title>
              <div class="d-flex align-center">
                <v-avatar
                  class="mr-2"
                  color="#232323"
                  size="30"
                >
                  {{ getRoomAbbr(item.name) }}
                </v-avatar>
                {{ item.name }}
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            block
            @click="dialog = true"
          >
            Создать комнату
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <CreateRoom
      :open="dialog"
      @close="dialog = false"
    />
  </v-card>
</template>

<script>
import CreateRoom from '@/components/CreateRoom'

export default {
  props: {
    username: {
      type: String,
      default: ''
    },
    loggedIn: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  components: { CreateRoom },
  data () {
    return {
      collapsed: false,
      rooms: [],
      dialog: false
    }
  },
  created () {
    this.fetchRooms()
    this.$bus.$on('updateRooms', this.fetchRooms)
  },
  beforeDestroy () {
    this.fetchRooms && this.$bus.$off('updateRooms', this.fetchRooms)
  },
  computed: {
    getUserStatus () {
      return this.loggedIn ? 'logged in' : ''
    }
  },
  methods: {
    fetchRooms () {
      this.$store.dispatch('api/fetchRooms')
        .then(data => {
          this.rooms = data.data.result
        })
        .catch(err => {
          throw new Error(err)
        })
    },
    emitRoomChange (name) {
      if (name) {
        this.$emit('change-room', name)
      } else {
        throw new Error('Не передано имя комнаты')
      }
    },
    getRoomAbbr (roomName) {
      return roomName[0]
    }
  }
}
</script>
