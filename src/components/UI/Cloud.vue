<template>
  <v-card
    :color="color"
    dark
  >
    <v-card-text class="headline font-weight-bold">
      {{ text }}
    </v-card-text>
    <v-card-actions>
      <div class="d-flex align-center">
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-avatar
              size="40"
            >
              {{ name[0] }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <span
          v-if="date"
          class="text-caption"
        >
          {{ getReadableDate }}
        </span>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#26c6da'
    },
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    getReadableDate () {
      const date = new Date(this.date)
      return date.toLocaleDateString()
    }
  }
}
</script>
