<template>
  <router-link :to="{name: 'byIngredient', params:{ingredient: ingredient.strIngredient}}" class=" block p-8 pb-0" v-for="ingredient in ingredients" :key="ingredient.idIngredient">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
    <pre>{{ ingredient.strDescription}}</pre>
  </router-link>
  

 
  <!-- <MealItem :meals="meals" /> -->
</template>

<script setup>
// import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";
// import MealItem from '../components/MealItem.vue'

const route = useRoute();
// const ingredient = computed(() => store.state.ingredient)
// const meals = computed(() => store.state.mealsByIngredient)
const ingredients =ref([])
onMounted(() => {
  axiosClient.get("list.php?i=list ")
  .then(({data})=>{
    // debugger;
    ingredients.value=data.meals
  })
  // store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>