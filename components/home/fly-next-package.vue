<template>
    <div class="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
        <p class="text-lg title-font text-blue-600 dark:text-white tracking-widest text-center mb-6">Fly Next Package
        </p>
        <h2 class="text">Your Great Destination</h2>
        <!--Tabs navigation-->

        <ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0" role="tablist" data-te-nav-ref>
            <li role="presentation">
                <a href="#tabs-home"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-home" data-te-nav-active role="tab"
                    aria-controls="tabs-home" aria-selected="true">Flights
                    <icon name="icon-park-outline:airplane" class="ml-2" />
                </a>
            </li>
            <li role="presentation">
                <a href="#tabs-profile"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
                    aria-selected="false">Car
                    Rentals
                    <icon name="carbon:taxi" class="ml-2" />
                </a>
            </li>
            <li role="presentation">
                <a href="#tabs-messages"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-messages" role="tab" aria-controls="tabs-messages"
                    aria-selected="false">Taxis
                    <icon name="icon-park-outline:taxi" class="ml-2" />
                </a>
            </li>
        </ul>

        <!--Tabs content-->
        <div class="mb-6">
            <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab" data-te-tab-active>
                <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div class="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="offer in store.places" :key="offer"
                            class="mx-3 mt-6 flex flex-col text-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 transit">
                            <nuxt-link to="">
                                <img class="rounded-t-lg w-full" :src="offer.img" />
                            </nuxt-link>
                            <div class="p-6">
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">{{ offer.date }}</p>
                                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    <span>{{ offer.from }}</span>
                                </h5>
                                <icon name="carbon:arrows-horizontal"
                                    class="mb-2 text-base text-neutral-600 dark:text-neutral-200" />
                                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    <span>{{ offer.to }}</span>
                                </h5>
                                <nuxt-link to="">
                                    <img :src="offer.smallImg" class="mx-auto text-center">
                                </nuxt-link>
                            </div>
                            <div
                                class="mt-auto border-t-2 border-neutral-100 px-6 pt-3 pb-1 text-left dark:border-neutral-600 dark:text-neutral-50">
                                <span>{{ offer.category }}</span>
                            </div>
                            <div
                                class="mt-auto border-neutral-100 px-6 pb-3 pt-1 text-lg font-semibold text-left dark:border-neutral-600 dark:text-neutral-50">
                                <span>${{ offer.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div class="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="offer in storeTwo.places" :key="offer"
                            class="mx-3 mt-6 flex flex-col text-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 transit">
                            <nuxt-link to="">
                                <img class="rounded-t-lg w-full" :src="offer.img" />
                            </nuxt-link>
                            <div class="p-6">
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">{{ offer.date }}</p>
                                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    <span>{{ offer.from }}</span>
                                </h5>
                                <icon name="carbon:arrows-horizontal"
                                    class="mb-2 text-base text-neutral-600 dark:text-neutral-200" />
                                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    <span>{{ offer.to }}</span>
                                </h5>
                                <nuxt-link to="">
                                    <img :src="offer.smallImg" class="mx-auto text-center">
                                </nuxt-link>
                            </div>
                            <div
                                class="mt-auto border-t-2 border-neutral-100 px-6 pt-3 pb-1 text-left dark:border-neutral-600 dark:text-neutral-50">
                                <span>{{ offer.category }}</span>
                            </div>
                            <div
                                class="mt-auto border-neutral-100 px-6 pb-3 pt-1 text-lg font-semibold text-left dark:border-neutral-600 dark:text-neutral-50">
                                <span>${{ offer.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                <div class="mx-auto  max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div class="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="offer in storeThree.places" :key="offer"
                            class="mx-3 mt-6 flex flex-col text-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 transit">
                            <nuxt-link to="">
                                <img class="rounded-t-lg w-full" :src="offer.img" />
                            </nuxt-link>
                            <div class="p-6">
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">{{ offer.date }}</p>
                                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    <span>{{ offer.from }}</span>
                                </h5>
                                <icon name="carbon:arrows-horizontal"
                                    class="mb-2 text-base text-neutral-600 dark:text-neutral-200" />
                                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    <span>{{ offer.to }}</span>
                                </h5>
                                <nuxt-link to="">
                                    <img :src="offer.smallImg" class="mx-auto text-center">
                                </nuxt-link>
                            </div>
                            <div
                                class="mt-auto border-t-2 border-neutral-100 px-6 pt-3 pb-1 text-left dark:border-neutral-600 dark:text-neutral-50">
                                <span>{{ offer.category }}</span>
                            </div>
                            <div
                                class="mt-auto border-neutral-100 px-6 pb-3 pt-1 text-lg font-semibold text-left dark:border-neutral-600 dark:text-neutral-50">
                                <span>${{ offer.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useFlightsPackage } from '@/stores/flightsStore'
import { useCarPackage } from '@/stores/carRentStore'
import { useTaxiPackage } from '@/stores/taxisStore'

const store = useFlightsPackage()
const storeTwo = useCarPackage()
const storeThree = useTaxiPackage()

onMounted(() => {
    store.fetchPlaces()
})

onMounted(() => {
    storeTwo.fetchPlaces()
})

onMounted(() => {
    storeThree.fetchPlaces()
})

onMounted(async () => {
    const { Tab, initTE } = await import("tw-elements");
    initTE({ Tab });
});
</script>