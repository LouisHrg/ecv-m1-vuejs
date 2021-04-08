<template>
  <div>
    <router-link to="/cours-1"> Index cours 1 </router-link>
    <h3> Exercice 2 : </h3>
    <p> Créez un deuxième composant qui affiche les id-card en liste. En haut de la liste, créez un bouton qui permet de trier les cards par date de naissance. </p>
    <button @click="sortBirthDate">Trier par date de naissance</button>
    <card-list :data="items" />
  </div>
</template>

<script>
import CardList from '@/components/cours1/exo2/CardList'

export default {
  name: 'Exo2',
  components: {
    'card-list': CardList
  },
  data () {
    return {
      sort: 'ASC',
      items: [
        {
          firstName: 'Michael',
          lastName: 'Jordan',
          avatar: 'https://cdn.britannica.com/96/195196-050-3909D5BD/Michael-Jordan-1988.jpg',
          birthDate: '17/02/1963'
        },
        {
          firstName: 'Scottie',
          lastName: 'Pippen',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lipofsky_Pippen.jpg/200px-Lipofsky_Pippen.jpg',
          birthDate: '25/09/1965'
        },
        {
          firstName: 'Dennis',
          lastName: 'Rodman',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Dennis_Rodman_ToPo.jpg/200px-Dennis_Rodman_ToPo.jpg',
          birthDate: '13/05/1961'
        }
      ]
    }
  },
  methods: {
    sortBirthDate () {
      if (this.sort === 'ASC') {
        this.sort = 'DESC'
        this.items.sort((a, b) => a.birthDate < b.birthDate)
      } else {
        this.sort = 'ASC'
        this.items.sort((a, b) => a.birthDate > b.birthDate)
      }
    }
  }
}
</script>
