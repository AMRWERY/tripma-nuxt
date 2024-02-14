<template>
    <div class="text-center my-10">
        <h2 class="text mb-8">Find Your Reservation</h2>
        <p class="text-lg text-gray-500">You can search for your reservation with your 20-character reservation code</p>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
                <div class="relative mt-2">
                    <div class="flex">
                        <input v-model="search" type="text" name="company" id="company" autocomplete="organization"
                            placeholder="e.g. 2alw2m5lfwlc4ockk0kw"
                            class="block w-full rounded-lg border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-2" />
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                            <icon name="oui:search" class="text-gray-400 mr-2" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const search = ref('')
</script>