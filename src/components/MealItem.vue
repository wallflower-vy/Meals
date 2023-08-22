<template>
     <div  class="bg-white img-box shadow rounded-xl">
   <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
    <img :src="meal.strMealThumb"  alt="strMeal " class="rounded-t-xl   object-cover"/>
   </router-link>
    <div class="p-3">
        <h3 class="  font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">{{truncateWords(meal.strInstructions, 20) }}</p>
    <div class="flex items-center justify-between">
     <YouTubeButton :href ='meal.strYoutube'/> 
     
    </div>
    </div>
   </div>
</template>
<style scoped>
.img-box {
  overflow: hidden;
}
img {
  width: 100%;
  height: 250px;
  transition: all 1.2s ease;
}

.img-box:hover img {
  transform: scale(1.1);
  cursor: pointer;
}
</style>

<script setup>
    import YouTubeButton from './YouTubeButton.vue';
    
function truncateWords(str, count) {
    if (!str) return str;
    return str.split(" ").slice(0, count).join(" ")
  }

  
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>