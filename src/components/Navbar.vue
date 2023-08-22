<template>
      <header class="bg-[#1E2A38] text-orange-500 text-base md:text-xl p-5 shadow h-20 flex justify-between items-stretch">
      <router-link :to="{name : 'home'}" class="inline-flex items-center px-5 h-full">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="px-2  inline-flex items-center h-full transition-colors hover:text-orange-300">
          Search meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class="px-2 inline-flex items-center h-full transition-colors hover:text-orange-300">
          meals by Letter
        </router-link>
        <router-link :to="{name:'ingredients'}" class="px-2 inline-flex items-center h-full transition-colors hover:text-orange-300">
         meals by ingredients
        </router-link>
        

      </div>
</header>
</template>