<template>
  <div class="id-card">
    <img height="300px" :src="avatar">
    <p> {{ fullname }} </p>
    <p> Date de naissance : {{ birthDate }} </p>
    <slot></slot>
    <button @click="openForm">Editer le joueur</button>
    <div v-if="formOpen">
      <label>Prénom : </label>
      <input v-model="form.firstName">
      <br>
      <label>Nom : </label>
      <input v-model="form.lastName">
      <br>
      <label>Avatar (lien) : </label>
      <input v-model="form.avatar">
      <br>
      <label>Date de naissance (au format jj/mm/aaaa) : </label>
      <input v-model="form.birthDate">
      <br>
      <br>
      <button @click="submitForm">Sauvegarder</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formOpen: false,
      form: {
        firstName: '',
        lastName: '',
        avatar: '',
        birthDate: ''
      }
    }
  },
  methods: {
    openForm () {
      if (this.formOpen) {
        this.formOpen = false
        return true
      }
      this.form.firstName = this.firstName
      this.form.lastName = this.lastName
      this.form.avatar = this.avatar
      this.form.birthDate = this.birthDate
      this.formOpen = true
    },
    submitForm () {
      this.$emit('editItem', this.form)
      this.formOpen = false
    }
  },
  props: {
    avatar: {
      type: String,
      required: true,
      default: () => 'https://www.google.fr/url?sa=i&url=https%3A%2F%2Flesexpertsdurecouvrement.com%2Fexperts%2Fjacques-gelpi%2Fdefault-avatar%2F&psig=AOvVaw2mTWS57H8T-Txj_wyrQzf5&ust=1617967260525000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKihq_DD7u8CFQAAAAAdAAAAABAJ'
    },
    lastName: {
      type: String,
      required: true,
      default: () => 'Doe'
    },
    firstName: {
      type: String,
      required: true,
      default: () => 'John'
    },
    birthDate: {
      type: String,
      required: true,
      default: () => '01/01/1970'
    }
  },
  computed: {
    fullname () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style>
  .id-card {
    border: 1px solid gray;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.50);
    width: 400px;
    margin: 25px auto;
  }
</style>
