<template>
    <div class="bg-white">
        <div class="max-w-2xl px-4 py-10 mx-auto sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
            <p class="font-bold text-blue-600 text-md">Offer Deals</p>
            <p class="text-2xl font-bold text-gray-600">Flight Offer Deals</p>

            <div class="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                <nuxt-link v-for="offer in store.places" :key="offer" to="" class="group">
                    <div class="w-full overflow-hidden bg-gray-200 rounded-lg h-96 aspect-w-1 xl:aspect-w-7">
                        <img :src="offer.img"
                            class="object-cover object-center w-full h-full group-hover:opacity-75 transit" />
                    </div>
                    <div class="flex">
                        <p class="mt-3 text-lg font-medium text-gray-900">{{ offer.title }} <span class="text-blue-600">{{
                            offer.subtitle }}</span></p>
                        <p class="mt-3.5 ml-auto text-lg font-medium text-gray-900">${{ offer.price }}</p>
                    </div>

                    <h3 class="mt-2 text-sm text-gray-700">{{ offer.date }}</h3>
                    <h3 class="mt-2 text-gray-700 text-md">{{ offer.category }}</h3>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useOfferDealsStore } from '@/stores/offerDealsStore'

const store = useOfferDealsStore()

onMounted(() => {
    store.fetchPlaces()
})
</script>