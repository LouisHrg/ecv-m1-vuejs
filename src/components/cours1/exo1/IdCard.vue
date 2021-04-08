<template>
  <div class="id-card">
    <img height="300px" :src="avatar">
    <p> {{ fullname }} </p>
    <p> Date de naissance : {{ birthDate }} </p>
  </div>
</template>

<script>
export default {
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
