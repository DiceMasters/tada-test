<template>
  <v-dialog
    v-model="open"
    persistent
    max-width="290"
  >
    <v-form
      v-model="valid"
      ref="form"
      @submit.prevent="submit"
    >
      <v-card>
        <v-card-title class="headline">
          Авторизуйтесь
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="username"
            dense
            outlined
            label="Имя пользователя"
            :rules="rules.required"
            :loading="loading"
            :disabled="loading"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="green darken-1"
            block
            text
            type="submit"
            :loading="loading"
            :disabled="loading"
          >
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default () {
        return false
      }
    },
    loading: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      username: '',
      valid: false,
      rules: {
        required: [v => !!v.trim() || 'Обязательное поле']
      }
    }
  },
  methods: {
    async submit () {
      const validate = await this.$refs.form.validate()

      if (validate) {
        this.$emit('submit', this.username)
      }
    }
  }
}
</script>
