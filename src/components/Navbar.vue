<template>
      <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name : 'home'}" class="inline-flex items-center px-5 h-full">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="px-2  inline-flex items-center h-full transition-colors hover:bg-purple-100">
          Search meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="px-2 inline-flex items-center h-full transition-colors hover:bg-purple-100">
          meals by Letter
        </router-link>
        <router-link :to="{name:'byIngredient'}" class="px-2 inline-flex items-center h-full transition-colors hover:bg-purple-100">
         meals by ingredients
        </router-link>
        

      </div>
</header>
</template>