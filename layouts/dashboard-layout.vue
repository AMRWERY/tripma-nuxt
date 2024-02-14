<template>
    <div>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar" type="button"
                            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <icon name="fluent-mdl2:list" class="w-6 h-6" />
                        </button>
                        <nuxt-link to="" class="flex ms-2 md:me-24">
                            <img class="w-auto h-8" src="https://svgsilh.com/svg/872480.svg" />
                            <p class="ml-2 text-2xl xs:mt-1">Tripma</p>
                        </nuxt-link>
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center ms-3">
                            <div>
                                <nuxt-link type="button" to="/"
                                    class="inline-block px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-400 hover:text-gray-600 rounded-full">
                                    <icon name="humbleicons:home" />
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <aside id="logo-sidebar"
            class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar">
            <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li>
                        <nuxt-link to="/dashboard"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="material-symbols-light:featured-play-list"
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="ms-3">Programs</span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/dashboard/add-program"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="material-symbols-light:create-new-folder"
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ms-3 whitespace-nowrap">Add Program</span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/dashboard/photos-of-services"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="ph:image-fill"
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ms-3 whitespace-nowrap">Photos of Services</span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/archives"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="ph:archive-fill"
                                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ms-3 whitespace-nowrap">Archives</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </aside>

        <div class="p-4 mt-16 sm:ml-64">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { initDrawers } from 'flowbite'

onMounted(() => {
    initDrawers();
})
</script>