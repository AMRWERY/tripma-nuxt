<template>
    <div>
        <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
            <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                <img class="h-full w-full object-cover"
                    src="https://themehut.co/html/geair/assets/img/images/about_img02.jpg" />
            </div>

            <div
                class="max-w-lg md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                <div class="flex flex-col p-12 md:px-16">
                    <h2 class="text-2xl font-medium text-green-800 lg:text-4xl">
                        Magical Singapore now even more amazing!
                    </h2>
                    <p class="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <ul class="mt-6">
                        <li>
                            <icon name="ic:baseline-check" class="text-primary-600" />
                            <span class="ml-2 font-semibold text-gray-700">Pre-Book Your Baggage Donating</span>
                        </li>
                        <li>
                            <icon name="ic:baseline-check" class="text-primary-600" />
                            <span class="ml-2 font-semibold text-gray-700">Accusamus Iusto Odio Dignissimos Ducimus</span>
                        </li>
                        <li>
                            <icon name="ic:baseline-check" class="text-primary-600" />
                            <span class="ml-2 font-semibold text-gray-700">Dislike Men Who are so Beguiled</span>
                        </li>
                    </ul>
                    <div class="mt-8">
                        <nuxt-link to="/contact"
                            class="
                    rounded-lg bg-gray-500 h-14 px-12 py-5 text-sm font-medium text-white shadow hover:bg-gray-600 focus:outline-none active:bg-gray-500 sm:w-auto transit">Contact
                            Us</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <our-applications />
        <our-offers />
    </div>
</template>

<script setup>

</script>