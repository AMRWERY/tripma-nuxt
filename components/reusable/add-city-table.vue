<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                        <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                    #
                                </th>
                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                    City
                                </th>
                                <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                                    Hotel Name (AR)
                                </th>
                                <th scope="col" class="px-6 py-4 border-r dark:border-neutral-500">Hotel Name (EN)</th>
                                <th scope="col" class="px-6 py-4 border-r dark:border-neutral-500">Registration Date</th>
                                <th scope="col" class="px-6 py-4 border-r dark:border-neutral-500">Departure Date</th>
                                <th scope="col" class="px-6 py-4 border-r dark:border-neutral-500">Number of nights</th>
                                <th scope="col" class="px-6 py-4 border-r dark:border-neutral-500"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                    1
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    <div class="mt-2">
                                        <input id="hotel-name" name="hotel-name" type="text" autocomplete="email"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </td>
                                <td class="whitespace-nowrap border-r dark:border-neutral-500 px-6 py-4">
                                    <input id="hotel-name" name="hotel-name" type="text" autocomplete="email"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </td>
                                <td class="whitespace-nowrap px-6 border-r dark:border-neutral-500 py-4">
                                    <VueDatePicker v-model="date" range />
                                </td>
                                <td class="whitespace-nowrap px-6 border-r dark:border-neutral-500 py-4">
                                    <VueDatePicker v-model="date" range />
                                </td>
                                <td class="whitespace-nowrap px-6 border-r dark:border-neutral-500 py-4">
                                    <input id="hotel-name" name="hotel-name" type="number" autocomplete="email"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </td>
                                <td class="whitespace-nowrap px-6 border-r dark:border-neutral-500 py-4">
                                    <button type="button"
                                        class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-red-400 hover:text-red-500 rounded-full">
                                        <icon name="ci:trash-full" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})
</script>