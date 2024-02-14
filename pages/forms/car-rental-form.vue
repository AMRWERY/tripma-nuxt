<template>
    <div>
        <h1 class="text mt-10 mb-5">Car Rental</h1>

        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
            <div class="bg-white p-6">
                <form action="">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
                        <div>
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Country
                                Name</label>
                            <div class="mt-2.5">
                                <select id="country" name="select-country"
                                    class="block w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                    <option selected disabled>-- Choose --</option>
                                    <option v-for="country in store.countries" :key="country">
                                        {{ country.country }}</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="city-name" class="block text-sm font-semibold leading-6 text-gray-900">City
                                Name</label>
                            <div class="mt-2.5">
                                <select id="city" name="select-city"
                                    class="block w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                    <option selected disabled>-- Choose --</option>
                                    <option v-for="city in store.countries" :key="city">
                                        {{ city.city }}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
                        <div>
                            <label for="from-date" class="block text-sm font-semibold leading-6 text-gray-900">From
                                Date</label>
                            <div class="mt-2.5">
                                <vue-date-picker v-model="date" range placeholder="Select Date"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900" />
                            </div>
                        </div>
                        <div>
                            <label for="to-date" class="block text-sm font-semibold leading-6 text-gray-900">To
                                Date</label>
                            <div class="mt-2.5">
                                <vue-date-picker v-model="date" range placeholder="Select Date"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <nuxt-link to="">
                            <button type="submit"
                                class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
                        </nuxt-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/countryStore'

const store = useCountryStore()
const date = ref();

onMounted(() => {
    store.fetchCountries()
})
</script>