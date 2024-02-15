<template>
    <div class="max-w-full py-16 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col p-6 sm:flex-row">
            <!-- First column (size 8) -->
            <div class="w-full pr-4 sm:w-2/3">
                <form action="" class="space-y-8">
                    <div class="sm:col-span-3">
                        <label for="userName" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div class="mt-2">
                            <input type="text" name="userName" id="userName" autocomplete="userName"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail
                            address</label>
                        <div class="mt-2">
                            <input type="email" name="email" id="email" autocomplete="email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Current
                                Password</label>
                            <div class="mt-2">
                                <input type="password" name="password" id="password" autocomplete="password"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">New
                                Password</label>
                            <div class="mt-2">
                                <input type="password" name="password" id="password" autocomplete="password"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-end mt-6 gap-x-6">
                        <button type="submit"
                            class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update
                            Account</button>
                    </div>
                </form>
            </div>

            <div class="w-full mt-4 sm:w-1/3 sm:mt-0">
                <div
                    class="max-w-2xl mx-4 mt-6 text-gray-900 rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                    <div class="h-32 overflow-hidden rounded-t-lg">
                        <img class="object-cover object-top w-full"
                            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                    </div>
                    <div class="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
                        <img class="object-cover object-center h-32"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                    </div>
                    <div class="mt-2 text-center">
                        <h2 class="font-semibold">Sarah Smith</h2>
                        <p class="text-gray-500">Agent Profile</p>
                    </div>
                    <ul class="flex items-center justify-around py-4 mt-2 text-gray-700">
                        <li class="flex flex-col items-center justify-around">
                            <icon name="material-symbols-light:credit-card" class="w-4 text-blue-900 fill-current" />
                            <div>2k</div>
                        </li>
                        <li class="flex flex-col items-center justify-around">
                            <icon name="oui:percent" class="w-4 text-blue-900 fill-current" />
                            <div>15</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>

</script>