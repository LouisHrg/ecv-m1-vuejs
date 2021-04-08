<template>
  <div>
    <id-card
      v-for="user in data"
      :key="user.birthdate"
      :firstName="user.firstName"
      :lastName="user.lastName"
      :birthDate="user.birthDate"
      :avatar="user.avatar"
    >
    <button @click="deleteCard(user)"> Supprimer le joueur </button>
    </id-card>
  </div>
</template>

<script>
import IdCard from '@/components/cours1/exo4/IdCard.vue'
export default {
  components: {
    'id-card': IdCard
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteCard (user) {
      this.$emit('deleteItem', user)
    }
  }
}
</script>
