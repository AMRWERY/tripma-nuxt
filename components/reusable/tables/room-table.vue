<template>
    <div class="flex flex-col w-full">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="w-full text-center text-sm font-light">
                        <thead
                            class="border-b bg-gray-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                            <tr>
                                <th scope="col" class=" px-6 py-4">#</th>
                                <th scope="col" class=" px-6 py-4">Room Type</th>
                                <th scope="col" class=" px-6 py-4">Child Reservation</th>
                                <th scope="col" class=" px-6 py-4">Child Count In Room</th>
                                <th scope="col" class=" px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <select id="room" name="room" autocomplete="room"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Single Room</option>
                                        <option>Double Room</option>
                                        <option>Triple Room</option>
                                    </select>
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <select id="room" name="room" autocomplete="room"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>None</option>
                                        <option>Child With Bed</option>
                                        <option>Child Without Bed</option>
                                    </select>
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <input id="children" name="children" type="number" autocomplete="children" min="0"
                                        value="0"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <button type="button"
                                        class=" rounded-full px-3.5 py-2.5 text-center text-sm font-semibold text-gray-400 shadow-sm hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                        <icon name="carbon:trash-can" />
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

</script>