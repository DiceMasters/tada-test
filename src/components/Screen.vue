<template>
  <div class="screen-room">
    <!--
      Пишем классы в kebab-case пока юзаем Vuetify
      Вобще классы описываю по БЭМ и в snake_case,
      модификтаоры через двойной kebab
    -->
    <div
      v-if="roomName"
      class="screen-room-chat"
    >
      <!-- Header -->
      <v-app-bar
        dense
        dark
        flat
      >
        <v-toolbar-title>{{ roomName }}</v-toolbar-title>
      </v-app-bar>

      <!-- Chat -->
      <div class="screen-room-chat-window">
        <transition-group name="list">
          <Cloud
            v-for="(message, index) in messageList"
            class="my-2"
            :color="message.sender.username === userName ? '#26c6da' : '#232323'"
            :name="message.sender.username"
            :text="message.text"
            :date="message.created"
            :key="`msg-${index}`"
          />
        </transition-group>
      </div>

      <!-- Input -->
      <div class="screen-room-chat-input">
        <v-form
          v-model="validate"
          ref="chat"
          @submit.prevent="sendMessage"
        >
          <v-text-field
            v-model="message"
            append-outer-icon="mdi-send"
            outlined
            dark
            clear-icon="mdi-close-circle"
            clearable
            label="Сообщение"
            type="text"
            @click:append-outer="sendMessage"
          />
        </v-form>
      </div>
    </div>

    <div
      v-else
      class="screen-room-empty"
    >
      <SvgNature/>
      <p class="text-subtitle-2">
        Выберите комнату в меню слева...
      </p>
    </div>
  </div>
</template>

<script>
import SvgNature from '@/components/func/SvgNature'
import Cloud from '@/components/UI/Cloud'

export default {
  props: {
    roomName: {
      type: String,
      default: ''
    },
    wsInstance: null,
    userName: {
      type: String,
      default: ''
    }
  },
  components: { SvgNature, Cloud },
  data () {
    return {
      message: '',
      messageList: [],
      messageLimit: 30,
      validate: false
    }
  },
  watch: {
    roomName () {
      this.messageList = []
    }
  },
  created () {
    this.$bus.$on('message', this.getMessage)
  },
  beforeDestroy () {
    this.getMessage && this.$bus.$off('message', this.getMessage)
  },
  methods: {
    async sendMessage () {
      if (this.wsInstance && this.roomName) {
        const validate = await this.$refs.chat.validate()

        if (validate) {
          const message = { room: this.roomName, text: this.message }
          this.message = ''
          this.wsInstance.send(JSON.stringify(message))
        }
      } else {
        throw new Error('Передайте валидный инстанс веб сокет соединения и имя комнаты')
      }
    },
    getMessage (message) {
      const data = JSON.parse(message.data)

      if (this.roomName === data.room) {
        if (this.messageList.length > this.messageLimit) {
          this.messageList.shift()
        }
        this.messageList.push(data)
      }
    }
  }
}
</script>

<style lang="less">
.screen-room {
  width: calc(100% - 256px);
  height: 100vh;
  overflow-y: auto;

  &-col, &-row {
    height: 100%;
  }

  &-col {
    display: flex;
    flex-direction: column;
  }

  &-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    svg {
      width: 200px;
      height: 200px;
    }

    p {
      color: #232323;
    }
  }

  &-chat {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-window {
      display: flex;
      flex-direction: column-reverse;
      flex-grow: 1;
      padding: 15px 20px;
      overflow-y: auto;
    }

    &-input {
      flex-grow: 0;
      margin: 0 20px;
    }

    .v-toolbar { flex-grow: 0; }
  }
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
