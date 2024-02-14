<template>
    <div>
        <h1 class="text mt-10 mb-5">Programs</h1>
        <!--Tabs navigation-->
        <div class="mx-auto max-w-5xl p-4">
            <div class="bg-white dark:bg-slate-800 rounded-lg">
                <!--Tabs navigation-->
                <ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0" role="tablist" data-te-nav-ref>
                    <li role="presentation" class="flex-grow basis-0 text-center">
                        <a href="#tabs-home02"
                            class="my-2 block  border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill" data-te-target="#tabs-home02" data-te-nav-active role="tab"
                            aria-controls="tabs-home02" aria-selected="true">Include Flight</a>
                    </li>
                    <li role="presentation" class="flex-grow basis-0 text-center">
                        <a href="#tabs-profile02"
                            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill" data-te-target="#tabs-profile02" role="tab" aria-controls="tabs-profile02"
                            aria-selected="false">Not Include Flight</a>
                    </li>
                </ul>

                <!--Tabs content-->
                <div class="mb-6">
                    <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-home02" role="tabpanel" aria-labelledby="tabs-home-tab02" data-te-tab-active>
                        <form action="">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label for="first-name"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Country
                                        Name</label>
                                    <div class="mt-2.5">
                                        <select id="country" name="select-country"
                                            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                            <option selected disabled>-- Choose --</option>
                                            <option v-for="country in store.countries" :key="country">
                                                {{ country.country }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">City
                                        Name</label>
                                    <div class="mt-2.5">
                                        <select id="country" name="select-country"
                                            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                            <option selected disabled>-- Choose --</option>
                                            <option v-for="city in store.countries" :key="city">
                                                {{ city.city }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="departure-date"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Departure Date</label>
                                    <div class="mt-2.5">
                                        <vue-date-picker v-model="date" range placeholder="Select Date"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900" />
                                    </div>
                                </div>
                                <div>
                                    <label for="adults" class="block text-sm font-semibold leading-6 text-gray-900">Number
                                        Of
                                        Adults +12 Years</label>
                                    <div class="mt-2.5">
                                        <input type="number" min="1" value="1" name="adults" id="adults"
                                            autocomplete="adults"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label for="children" class="block text-sm font-semibold leading-6 text-gray-900">Number
                                        Of
                                        Children 2-11 Years</label>
                                    <div class="mt-2.5">
                                        <vue-date-picker v-model="date" range placeholder="Select Date"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900" />
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

                    <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-profile02" role="tabpanel" aria-labelledby="tabs-profile-tab02">
                        <form action="">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label for="first-name"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Country
                                        Name</label>
                                    <div class="mt-2.5">
                                        <select id="country" name="select-country"
                                            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                            <option selected disabled>-- Choose --</option>
                                            <option v-for="country in store.countries" :key="country">
                                                {{ country.country }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">City
                                        Name</label>
                                    <div class="mt-2.5">
                                        <select id="country" name="select-country"
                                            class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                            <option selected disabled>-- Choose --</option>
                                            <option v-for="city in store.countries" :key="city">
                                                {{ city.city }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="departure-date"
                                        class="block text-sm font-semibold leading-6 text-gray-900">Departure Date</label>
                                    <div class="mt-2.5">
                                        <vue-date-picker v-model="date" range placeholder="Select Date"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900" />
                                    </div>
                                </div>
                                <div>
                                    <label for="adults" class="block text-sm font-semibold leading-6 text-gray-900">Number
                                        Of
                                        Adults +12 Years</label>
                                    <div class="mt-2.5">
                                        <input type="number" min="1" value="1" name="adults" id="adults"
                                            autocomplete="adults"
                                            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label for="children" class="block text-sm font-semibold leading-6 text-gray-900">Number
                                        Of
                                        Children 2-11 Years</label>
                                    <div class="mt-2.5">
                                        <input type="number" min="0" value="0" name="children" id="children"
                                            autocomplete="children"
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

const showRoomTable = ref(false)

const toggleRoomTable = () => {
    showRoomTable.value = !showRoomTable.value;
}

onMounted(async () => {
    const { Tab, initTE } = await import("tw-elements");
    initTE({ Tab });
});
</script>