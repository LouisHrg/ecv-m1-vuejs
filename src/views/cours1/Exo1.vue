<template>
  <div>
    <router-link to="/cours-1"> Index cours 1 </router-link>
    <h3> Exercice 1 : </h3>
    <p> Créez un component id-card qui affiche un avatar, un nom, un prénom et une date de naissance. Les données affichés devront être passée en props. Le nom et le prénom doivent être une variable calculée.</p>
    <id-card
      firstName="Michael"
      lastName="Jordan"
      birthDate="17/02/63"
      avatar="https://cdn.britannica.com/96/195196-050-3909D5BD/Michael-Jordan-1988.jpg"
    />
  </div>
</template>

<script>
import IdCard from '@/components/cours1/exo1/IdCard'

export default {
  name: 'Exo1',
  components: {
    'id-card': IdCard
  }
}
</script>
