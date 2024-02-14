<template>
    <div>
        <div class="grid grid-cols-2 gap-4">
            <!-- First Column -->
            <div class="col-span-full sm:col-span-1">
                <div class="px-6 py-4 md:flex dark:border-gray-700">
                    <div class="w-full md:w-3/4 lg:w-2/4">
                        <label for="hs-as-table-product-review-search" class="sr-only">Search</label>
                        <div class="relative">
                            <input type="text" id="hs-as-table-product-review-search"
                                class="w-full px-3 py-3 text-sm border-gray-200 rounded-md shadow-sm pe-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-zinc-100 dark:border-gray-700 dark:text-gray-400"
                                placeholder="Search with name, code, or email">
                            <div class="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                                <icon name="oui:search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Column -->
            <div class="col-span-full sm:col-span-1">
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-full sm:col-span-1 xs:mx-4">
                        <label for="date-from" class="block text-sm font-medium leading-6 text-gray-900">Date from</label>
                        <div class="mt-2">
                            <vue-date-picker v-model="date" range />
                        </div>
                    </div>

                    <div class="col-span-full sm:col-span-1 xs:mx-4">
                        <label for="to-date" class="block text-sm font-medium leading-6 text-gray-900">Date to</label>
                        <div class="mt-2">
                            <vue-date-picker v-model="date" range />
                        </div>
                    </div>

                    <div class="col-span-1 xs:col-span-full sm:col-span-full xs:mx-4">
                        <div class="flex flex-col gap-4 md:flex-row xs:mx-auto">
                            <button type="button"
                                class="flex-1 xs:w-full rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                Apply Filter
                            </button>

                            <button type="button"
                                class="flex-1 xs:w-full mt-4 md:mt-0 rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                Cancel Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 xs:mx-4">
            <div class="col-span-full sm:col-span-1 xs:mt-4">
                Export as:
                <span class="sm:ml-3">
                    <button type="button"
                        class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm xs:mr-2 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                        <icon name="fa6-regular:file-pdf" class="-ml-0.5 mr-1.5" aria-hidden="true" />
                        Pdf
                    </button>
                </span>
                <span class="sm:ml-3">
                    <button type="button"
                        class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                        <icon name="fa6-solid:file-excel" class="-ml-0.5 mr-1.5" aria-hidden="true" />
                        Excel
                    </button>
                </span>
            </div>
            <div class="ml-auto col-span-full sm:col-span-1 lg:mt-6">
                <p>Results: <span>193</span></p>
                <p>Total Check Icons: <span>12</span></p>
                <p>Total X-Mark Icons: <span>181</span></p>
            </div>
        </div>

        <div class="flex flex-col overflow-x-auto mt-14">
            <div class="sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-x-auto">
                        <table class="min-w-full text-sm font-light text-left">
                            <thead class="font-medium border-b dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">Date created</th>
                                    <th scope="col" class="px-6 py-4">Reservation code</th>
                                    <th scope="col" class="px-6 py-4">First Name</th>
                                    <th scope="col" class="px-6 py-4">Last Name</th>
                                    <th scope="col" class="px-6 py-4">Email</th>
                                    <th scope="col" class="px-6 py-4">Phone no.</th>
                                    <th scope="col" class="px-6 py-4">Nationality</th>
                                    <th scope="col" class="px-6 py-4 text-center">Passport no.</th>
                                    <th scope="col" class="px-6 py-4 text-center">Person 1</th>
                                    <th scope="col" class="px-6 py-4 text-center">Person 2</th>
                                    <th scope="col" class="px-6 py-4 text-center">Person 3</th>
                                    <th scope="col" class="px-6 py-4 text-center">Person 4</th>
                                    <th scope="col" class="px-6 py-4 text-center">Person 5</th>
                                    <th scope="col" class="px-6 py-4 text-center">Person 6</th>
                                    <th scope="col" class="px-6 py-4 text-center">Person 7</th>
                                    <th scope="col" class="px-6 py-4 text-center">Status</th>
                                    <th scope="col" class="px-6 py-4">Total</th>
                                    <th scope="col" class="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:border-neutral-500">
                                    <td class="px-6 py-4 font-medium whitespace-nowrap">2023-11-05</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">L4OeZL825f2culHb</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">amr</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">mohamed</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">Season_tour@yahoo.com
                                    </td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">0101210210</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">egy</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">01010110</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">1</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">2</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">3</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">4</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">5</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">6</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">7</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <button type="button"
                                            class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-500 rounded-full">
                                            <icon name="fa6-solid:repeat" />
                                        </button>
                                        <icon name="fa6-solid:check" class="text-blue-600" />
                                    </td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">$600.00</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">
                                        <button
                                            class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-500 rounded-full">
                                            <icon name="fa6-solid:download" class="text-green-600" />
                                        </button>
                                    </td>
                                </tr>

                                <tr class="border-b dark:border-neutral-500">
                                    <td class="px-6 py-4 font-medium whitespace-nowrap">2023-11-05</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">L4OeZL825f2culHb</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">amr</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">mohamed</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">Season_tour@yahoo.com
                                    </td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">0101210210</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">egy</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">01010110</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">1</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">2</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">3</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">4</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">5</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">6</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">7</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <button type="button"
                                            class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-500 rounded-full">
                                            <icon name="fa6-solid:repeat" />
                                        </button>
                                        <icon name="fa6-solid:xmark" class="text-red-600" />
                                    </td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">$600.00</td>
                                    <td class="px-6 py-4 font-medium text-center whitespace-nowrap">
                                        <button
                                            class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-500 rounded-full">
                                            <icon name="fa6-solid:download" class="text-green-600" />
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
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