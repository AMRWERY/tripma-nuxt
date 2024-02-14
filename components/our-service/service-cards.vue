<template>
    <div>
        <div class="text-center">
            <h2 class="my-10 text">Our Service</h2>
            <p class="text-lg text-gray-500">We offer you travel services in order to facilitate everything on your trip and
                provide full fun.
                Only you have to <br>decide and we have to meet</p>
        </div>
        <div class="max-w-2xl px-4 py-10 mx-auto sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                <nuxt-link v-for="card in cards" :key="card" :to="card.route" class="group">
                    <div
                        class="w-full overflow-hidden bg-gray-200 rounded-lg h-96 aspect-h-1 aspect-w-1 xl:aspect-h-6 xl:aspect-w-7">
                        <img :src="card.img"
                            class="object-cover object-center w-full h-full group-hover:opacity-75 transit" />
                    </div>
                    <div class="flex">
                        <p class="mt-3 text-2xl font-medium text-blue-600">{{ card.title }}</p>
                    </div>

                    <h3 class="mt-2 text-sm text-gray-700">{{ card.desc }}</h3>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const cards = ref([
    { title: 'Flight Reservation', desc: 'You no longer have to worry about your flight booking, you now have a whole team tasked with fulfilling your request in this regard and making sure that everything is ready for your convenience.', img: 'https://justfields.com/storage/projects/7M5rV059/flights.png', route: '/forms/flight-reservations-form' },
    { title: 'Programs', desc: 'You can choose what suits you from our integrated programs and provide everything you need during your trip, starting from flight reservations, hotel reservations, car rental and all the services you may need during your trip.', img: 'https://justfields.com/storage/projects/7M5rV059/programs.png', route: '/forms/programs-form' },
    { title: 'Hotel Reservation', desc: 'We are in Seasons Tour. We do not care about anything but your comfort , so we were keen to search for the best hotels with the best offers to make sure that you will get what you deserve from the comfort, privacy and fun during your trip.', img: 'https://justfields.com/storage/projects/7M5rV059/hotels.png', route: '/forms/hotel-reservation-form' },
    { title: 'Car Rental', desc: 'Car rental service to provide you with comfort, privacy and save time during internal transfers throughout your stay.', img: 'https://justfields.com/storage/projects/7M5rV059/cars.png', route: '/forms/car-rental-form' },
])
</script>