<template>
    <!-- Main navigation container -->
    <nav class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
        data-te-navbar-ref>
        <div class="flex flex-wrap items-center justify-between w-full px-3">
            <div class="flex">
                <nuxt-link to="/"
                    class="flex items-center mx-2 my-1 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0">
                    <img class="w-auto h-8" src="https://svgsilh.com/svg/872480.svg" />
                    <p class="ml-2 text-2xl xs:mt-1">Tripma</p>
                </nuxt-link>
            </div>

            <!-- Hamburger button for mobile view -->
            <button
                class="block px-2 bg-transparent border-0 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContent4"
                aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation">
                <!-- Hamburger icon -->
                <icon name="mingcute:menu-fill" />
            </button>

            <!-- Collapsible navbar container -->
            <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent4" data-te-collapse-item>
                <!-- Left links -->
                <ul class="flex flex-col pl-0 mr-auto list-style-none lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                    <!-- Home link -->
                    <li class="pl-2 my-4 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <nuxt-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/" data-te-nav-link-ref>Home</nuxt-link>
                    </li>
                    <li class="pl-2 my-4 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <nuxt-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/our-service" data-te-nav-link-ref>Our Service</nuxt-link>
                    </li>
                    <li class="pl-2 my-4 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <nuxt-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/programs" data-te-nav-link-ref>Programs</nuxt-link>
                    </li>
                    <li class="pl-2 my-4 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <nuxt-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/about" data-te-nav-link-ref>About</nuxt-link>
                    </li>
                    <li class="pl-2 my-4 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <nuxt-link
                            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" to="/contact" data-te-nav-link-ref>Contact</nuxt-link>
                    </li>
                </ul>

                <div class="flex items-center">
                    <nuxt-link to="/user-profile"
                        class="inline-block pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-600 rounded-full">
                        <icon name="dashicons:admin-users" />
                    </nuxt-link>
                    <nuxt-link to="/dashboard"
                        class="inline-block pl-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-600 rounded-full">
                        <icon name="charm:chart-line" />
                    </nuxt-link>
                    <button type="button"
                        class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-600 rounded-full">
                        <icon name="streamline:interface-text-formatting-translate-options-text-translate" />
                    </button>
                    <nuxt-link type="button" to="/auth"
                        class="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</nuxt-link>
                    <button type="button"
                        class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-600 rounded-full">
                        <icon name="ic:round-logout" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
onMounted(async () => {
    const { Collapse, initTE } = await import("tw-elements");
    initTE({ Collapse });
});
</script>