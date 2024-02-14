<template>
    <div>
        <h1 class="text mt-10 mb-5">Hotel Reservation</h1>

        <div class="mx-auto max-w-7xl py-8 sm:px-6 lg:px-8">
            <div class="bg-white p-6">
                <form action="">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="city-name" class="block text-sm font-semibold leading-6 text-gray-900">City
                                Name</label>
                            <div class="mt-2.5">
                                <select id="city" name="select-city"
                                    class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                    <option selected disabled>-- Choose --</option>
                                    <option v-for="city in storeTwo.countries" :key="city">
                                        {{ city.city }}</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="hotel-name" class="block text-sm font-semibold leading-6 text-gray-900">Hotel
                                Name</label>
                            <div class="mt-2.5">
                                <select id="hotel" name="select-hotel"
                                    class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                    <option selected disabled>-- Choose --</option>
                                    <option v-for="hotel in store.hotels" :key="hotel">
                                        {{ hotel.hotel }}</option>
                                </select>
                            </div>
                        </div>
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
                        <div>
                            <label for="adults" class="block text-sm font-semibold leading-6 text-gray-900">Number Of
                                Adults +12 Years</label>
                            <div class="mt-2.5">
                                <input type="number" min="1" value="1" name="adults" id="adults" autocomplete="adults"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="children" class="block text-sm font-semibold leading-6 text-gray-900">Number Of
                                Children 2-11 Years</label>
                            <div class="mt-2.5">
                                <input type="number" min="0" value="0" name="children" id="children" autocomplete="children"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    <div class="my-10">
                        <button type="button" @click="toggleRoomTable"
                            class="block w-40 h-14 rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Select Room
                        </button>
                    </div>

                    <!-- room table -->
                    <room-table v-if="showRoomTable" />

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
import { useHotelStore } from '@/stores/hotelStore'

const store = useHotelStore()
const storeTwo = useCountryStore()
const date = ref();

onMounted(() => {
    store.fetchHotels()
    storeTwo.fetchCountries()
})

const showRoomTable = ref(false)

const toggleRoomTable = () => {
    showRoomTable.value = !showRoomTable.value;
}
</script>