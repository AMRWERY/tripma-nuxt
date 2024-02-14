<template>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <results />

        <div class="max-w-2xl px-4 py-10 mx-auto sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                <nuxt-link v-for="offer in store.filteredPlacesArray" :key="offer" :to="'/programs/' + offer.id"
                    class="group">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-lg h-96 aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                        <img :src="offer.img"
                            class="object-cover object-center w-full h-full group-hover:opacity-75 transit" />
                    </div>
                    <div class="flex">
                        <p class="mt-3 text-2xl font-medium text-blue-600">{{ offer.title }}</p>
                        <p class="mt-3.5 ml-auto text-lg font-medium text-gray-900">${{ offer.price }}</p>
                    </div>
                    <span class="text-gray-900">{{ offer.subtitle }}</span>

                    <rating />

                    <h3 class="mt-2 text-gray-700 text-md">{{ offer.duration }}</h3>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProgrammesCards } from '@/stores/programStore'

const store = useProgrammesCards()

onMounted(() => {
    store.fetchPlaces()
})
</script>