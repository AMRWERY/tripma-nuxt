<template>
    <section class="overflow-hidden text-gray-700 body-font">
        <div class="px-5 py-12 mx-auto">
            <div class="flex flex-wrap mx-auto lg:w-4/5">
                <img class="object-cover object-center w-full border border-gray-200 rounded lg:w-1/2 h-4/5"
                    src="https://justfields.com/storage/projects/7M5rV059/hilton.webp" />
                <div class="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                    <h2 class="text-lg tracking-widest text-gray-500 title-font">
                        {{ programDetails?.title }}
                    </h2>
                    <div class="flex">
                        <h1 class="mb-1 text-3xl font-medium text-gray-900 title-font">
                            {{ programDetails?.subtitle }}
                        </h1>
                        <span class="ml-auto text-lg underline">8 Days & 7 Nights</span>
                    </div>
                    <div class="flex mb-4">
                        <span class="flex items-center">

                            <rating />

                            <span class="ml-3 text-gray-600">4 Reviews</span>
                        </span>
                        <span class="flex py-2 pl-3 ml-3 border-l-2 border-gray-200">
                            <a class="text-gray-500">
                                <icon name="iconoir:facebook" size="20px" class="w-5 h-5" />
                            </a>
                            <a class="ml-2 text-gray-500">
                                <icon name="iconoir:twitter" size="20px" class="w-5 h-5" />
                            </a>
                            <a class="ml-2 text-gray-500">
                                <icon name="iconoir:instagram" size="20px" class="w-5 h-5" />
                            </a>
                        </span>
                    </div>

                    <!-- Go Trip -->
                    <p class="my-3 text-2xl font-semibold leading-relaxed">Go Trip</p>
                    <div class="col-span-full">
                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Flight
                            Line</label>
                        <div class="mt-2">
                            <div class="text-center read-only-input">
                                <p class="font-medium">Fly Jordan</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="going-from" class="block text-sm font-medium leading-6 text-gray-900">Going
                                From</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">{{ programDetails?.goFrom }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="arrival-in" class="block text-sm font-medium leading-6 text-gray-900">Arrival
                                In</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">{{ programDetails?.arrivalIn }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="departure-time" class="block text-sm font-medium leading-6 text-gray-900">Departure
                                Time</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">{{ programDetails?.departureTime }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="arrival-time" class="block text-sm font-medium leading-6 text-gray-900">Arrival
                                Time</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">{{ programDetails?.arrivalTime }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="kg" class="block text-sm font-medium leading-6 text-gray-900">Allowed Weight
                                (KG)</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">20</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="flight-number" class="block text-sm font-medium leading-6 text-gray-900">Flight
                                Number</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">FJR500</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Return Trip -->
                    <p class="my-3 mt-10 text-2xl font-semibold leading-relaxed">Return Trip</p>
                    <div class="col-span-full">
                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Flight
                            Line</label>
                        <div class="mt-2">
                            <div class="text-center read-only-input">
                                <p class="font-medium">Fly Jordan</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="going-from" class="block text-sm font-medium leading-6 text-gray-900">Going
                                From</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">Amman AMM Airport (AMM)</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="arrival-in" class="block text-sm font-medium leading-6 text-gray-900">Arrival
                                In</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">Batumi Intonational Airport (BUS)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="departure-time" class="block text-sm font-medium leading-6 text-gray-900">Departure
                                Time</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">05:00:00</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="arrival-time" class="block text-sm font-medium leading-6 text-gray-900">Arrival
                                Time</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">08:30:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="kg" class="block text-sm font-medium leading-6 text-gray-900">Allowed Weight
                                (KG)</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">20</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="flight-number" class="block text-sm font-medium leading-6 text-gray-900">Flight
                                Number</label>
                            <div class="mt-2">
                                <div class="read-only-input">
                                    <p class="ml-2 font-medium">FJR500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useProgrammesCards } from '@/stores/programStore'

const store = useProgrammesCards()
const route = useRoute()
const programId = ref('')
const programDetails = ref(null);

onMounted(() => {
    programId.value = route.params.id;
    store.getProgramById(programId.value);
    console.log(programId.value)
});
</script>