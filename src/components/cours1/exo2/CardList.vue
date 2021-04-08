<template>
  <div>
    <id-card
      v-for="user in data"
      :key="user.birthdate"
      :firstName="user.firstName"
      :lastName="user.lastName"
      :birthDate="user.birthDate"
      :avatar="user.avatar"
    />
  </div>
</template>

<script>
import IdCard from '@/components/cours1/exo1/IdCard.vue'
export default {
  components: {
    'id-card': IdCard
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
