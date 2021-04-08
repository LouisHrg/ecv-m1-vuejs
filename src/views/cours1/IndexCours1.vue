<template>
  <div>
    <router-link class="link" to="/"> Acceuil </router-link>
    <router-link class="link" to="/cours-1/exo-1" >
      Exercice 1
    </router-link>
    <router-link class="link" to="/cours-1/exo-2" >
      Exercice 2
    </router-link>
    <router-link class="link" to="/cours-1/exo-3" >
      Exercice 3
    </router-link>
    <router-link class="link" to="/cours-1/exo-4" >
      Exercice 4
      <router-link class="link" to="/cours-1/exo-5" >
        Exercice 5
      </router-link>
    </router-link>
  </div>
</template>

<style>
  .link {
    display: block;
  }
</style>
