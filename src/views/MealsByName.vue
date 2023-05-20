<template>
   <div class="p-8">
    <input type="text"    @change="searchMeals"  v-model="keyword" class="rounded w-full border-2 border-gray-200" placeholder="Search for meals"/>
   
   
   </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
    <img :src="meal.strMealThumb"  alt="strMeal " class="rounded-t-xl h-52 w-full object-cover"/>
    <div class="p-3">
        <h3 class="  font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati repudiandae accusamus in quam maxime. Debitis facere tempora architecto esse officia blanditiis ipsam culpa porro, tempore in facilis, saepe qui?</p>
    <div >
       <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-500 hover:text-white">YouTube</a>
       <router-link to="/">view</router-link>
    </div>
    </div>
   </div>
   </div>
</template>

<script setup>
import {  ref } from "vue";
import { computed } from "@vue/reactivity";
import store from "../store";


const keyword = ref(""); 
const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
//   if (keyword.value) {
//     store.dispatch("searchMeals", keyword.value);
//   } else {
//     store.commit("setSearchedMeals", []);
//   }
}

</script>