<template>
    <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div class="max-w-lg mx-auto text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                <p class="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
                    nulla eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>

            <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
                <div>
                    <label for="email" class="sr-only">Email</label>

                    <div class="relative">
                        <input type="email" class="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                            placeholder="Enter email" />

                        <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                            <icon name="entypo:email" class="w-4 h-4 text-gray-400" />
                        </span>
                    </div>
                </div>

                <div>
                    <label for="password" class="sr-only">Password</label>
                    <div class="relative">
                        <input type="password" class="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                            placeholder="Enter password" />
                        <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                            <icon name="entypo:eye" class="w-4 h-4 text-gray-400" />
                            <!-- <icon name="entypo:eye-with-line" class="w-4 h-4 text-gray-400" /> -->
                        </span>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <p class="text-sm text-gray-500">
                        Already have an account?
                        <nuxt-link class="underline" to="/auth">Sign in</nuxt-link>
                    </p>

                    <button type="submit"
                        class="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                        Sign up
                    </button>
                </div>
            </form>
        </div>

        <div class="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="absolute inset-0 object-cover w-full h-full" />
        </div>
    </section>
</template>
  
<script setup>

</script>