<template>
    <div class="flex flex-col overflow-x-auto mt-14">
        <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-x-auto">
                    <table class="min-w-full text-sm font-light text-left">
                        <thead class="font-medium border-b dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="px-6 py-4">#</th>
                                <th scope="col" class="px-6 py-4">Image</th>
                                <th scope="col" class="px-6 py-4">Flight No.</th>
                                <th scope="col" class="px-6 py-4">Program Direction</th>
                                <th scope="col" class="px-6 py-4">Hotel Name</th>
                                <th scope="col" class="px-6 py-4">From</th>
                                <th scope="col" class="px-6 py-4">To</th>
                                <th scope="col" class="px-6 py-4">Number of days</th>
                                <th scope="col" class="px-6 py-4">Number of nights</th>
                                <th scope="col" class="px-6 py-4">Includes flying</th>
                                <th scope="col" class="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="px-6 py-4 font-medium whitespace-nowrap">1</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex-shrink-0">
                                        <img class="rounded-full h-14 w-14"
                                            src="https://justfields.com/storage/projects/7M5rV059/hoodie_2_front.jpg" />
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">123456</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">Batumi</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">test</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">2023-11-14</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">2023-11-19</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">6</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">5</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <button type="button"
                                        class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-green-500 hover:text-green-600 rounded-full">
                                        <icon name="ph:check-bold" />
                                    </button>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <nuxt-link to="/dashboard/edit-program">
                                        <button type="button"
                                            class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-500 rounded-full">
                                            <icon name="ph:note-pencil-fill" />
                                        </button>
                                    </nuxt-link>

                                    <delete-program />

                                </td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="px-6 py-4 font-medium whitespace-nowrap">1</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex-shrink-0">
                                        <img class="rounded-full h-14 w-14"
                                            src="https://justfields.com/storage/projects/7M5rV059/cd_1_flat.jpg" />
                                    </div>
                                </td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">654321</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">Tbilisi</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">test</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">2023-11-17</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">2023-11-23</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">6</td>
                                <td class="px-6 py-4 font-medium text-center whitespace-nowrap">5</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <button type="button"
                                        class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-red-500 hover:text-red-600 rounded-full">
                                        <icon name="ci:close-sm" />
                                    </button>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <nuxt-link to="/dashboard/edit-program">
                                        <button type="button"
                                            class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-500 rounded-full">
                                            <icon name="ph:note-pencil-fill" />
                                        </button>
                                    </nuxt-link>

                                    <delete-program />

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

</script>