<template>
    <div>
        <!--Tabs navigation-->
        <ul class="flex flex-row flex-wrap pl-0 mb-5 list-none border-b-0" role="tablist" data-te-nav-ref>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-car02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-car02" data-te-nav-active role="tab"
                    aria-controls="tabs-car02" aria-selected="true">Cars reservation</a>
            </li>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-hotel02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-hotel02" role="tab" aria-controls="tabs-hotel02"
                    aria-selected="false">Hotels reservation</a>
            </li>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-flight02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-flight02" role="tab" aria-controls="tabs-flight02"
                    aria-selected="false">Flights reservation</a>
            </li>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-tourist02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-tourist02" role="tab" aria-controls="tabs-tourist02"
                    aria-selected="false">Tourist trips reservation</a>
            </li>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-train02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-train02" role="tab" aria-controls="tabs-train02"
                    aria-selected="false">Train reservation</a>
            </li>
        </ul>

        <!--Tabs content-->
        <div class="mb-6">
            <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-car02" role="tabpanel" aria-labelledby="tabs-car-tab02" data-te-tab-active>
                <form>
                    <div class="w-full h-auto max-w-xl mx-auto mt-24 rounded-lg">
                        <div class="col-span-full">
                            <div
                                class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                                <div class="text-center">
                                    <img v-if="carsImage.photo !== ''" class="w-64 h-auto mx-auto" :src="carsImage.photo">
                                    <icon name="fa6-solid:image" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true"
                                        v-else />
                                    <div class="flex mt-4 text-sm leading-6 text-gray-600">
                                        <label for="car-file-upload"
                                            class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload image</span>
                                            <input id="car-file-upload" name="car-file-upload" type="file" class="sr-only"
                                                @change="getCarImage($event)" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center mt-8">
                            <button type="submit"
                                class="px-8 py-4 font-bold text-white transition duration-300 ease-in-out delay-150 bg-gray-800 rounded-xl hover:bg-gray-800 hover:-translate-y-1 hover:scale-110">
                                Save image
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-hotel02" role="tabpanel" aria-labelledby="tabs-hotel-tab02">
                <form>
                    <div class="w-full h-auto max-w-xl mx-auto mt-24 rounded-lg">
                        <div class="col-span-full">
                            <div
                                class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                                <div class="text-center">
                                    <img v-if="hotelsImage.photo !== ''" class="w-64 h-auto mx-auto"
                                        :src="hotelsImage.photo">
                                    <icon name="fa6-solid:image" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true"
                                        v-else />
                                    <div class="flex mt-4 text-sm leading-6 text-gray-600">
                                        <label for="hotel-file-upload"
                                            class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload image</span>
                                            <input id="hotel-file-upload" name="hotel-file-upload" type="file"
                                                class="sr-only" @change="getHotelImage($event)" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center mt-8">
                            <button type="submit"
                                class="px-8 py-4 font-bold text-white transition duration-300 ease-in-out delay-150 bg-gray-800 rounded-xl hover:bg-gray-800 hover:-translate-y-1 hover:scale-110">
                                Save image
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-flight02" role="tabpanel" aria-labelledby="tabs-flight-tab02">
                <form>
                    <div class="w-full h-auto max-w-xl mx-auto mt-24 rounded-lg">
                        <div class="col-span-full">
                            <div
                                class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                                <div class="text-center">
                                    <img v-if="flightsImage.photo !== ''" class="w-64 h-auto mx-auto"
                                        :src="flightsImage.photo">
                                    <icon name="fa6-solid:image" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true"
                                        v-else />
                                    <div class="flex mt-4 text-sm leading-6 text-gray-600">
                                        <label for="flight-file-upload"
                                            class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload image</span>
                                            <input id="flight-file-upload" name="flight-file-upload" type="file"
                                                class="sr-only" @change="getFlightImage($event)" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center mt-8">
                            <button type="submit"
                                class="px-8 py-4 font-bold text-white transition duration-300 ease-in-out delay-150 bg-gray-800 rounded-xl hover:bg-gray-800 hover:-translate-y-1 hover:scale-110">
                                Save image
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-tourist02" role="tabpanel" aria-labelledby="tabs-tourist-tab02">
                <form>
                    <div class="w-full h-auto max-w-xl mx-auto mt-24 rounded-lg">
                        <div class="col-span-full">
                            <div
                                class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                                <div class="text-center">
                                    <img v-if="programsImage.photo !== ''" class="w-64 h-auto mx-auto"
                                        :src="programsImage.photo">
                                    <icon name="fa6-solid:image" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true"
                                        v-else />
                                    <div class="flex mt-4 text-sm leading-6 text-gray-600">
                                        <label for="program-file-upload"
                                            class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload image</span>
                                            <input id="program-file-upload" name="program-file-upload" type="file"
                                                class="sr-only" @change="getProgramImage($event)" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center mt-8">
                            <button type="submit"
                                class="px-8 py-4 font-bold text-white transition duration-300 ease-in-out delay-150 bg-gray-800 rounded-xl hover:bg-gray-800 hover:-translate-y-1 hover:scale-110">
                                Save image
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-train02" role="tabpanel" aria-labelledby="tabs-train-tab02">
                <form>
                    <div class="w-full h-auto max-w-xl mx-auto mt-24 rounded-lg">
                        <div class="col-span-full">
                            <div
                                class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                                <div class="text-center">
                                    <img v-if="trainImage.photo !== ''" class="w-64 h-auto mx-auto" :src="trainImage.photo">
                                    <icon name="fa6-solid:image" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true"
                                        v-else />
                                    <div class="flex mt-4 text-sm leading-6 text-gray-600">
                                        <label for="train-file-upload"
                                            class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload image</span>
                                            <input id="train-file-upload" name="train-file-upload" type="file"
                                                class="sr-only" @change="getTrainImage($event)" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center mt-8">
                            <button type="submit"
                                class="px-8 py-4 font-bold text-white transition duration-300 ease-in-out delay-150 bg-gray-800 rounded-xl hover:bg-gray-800 hover:-translate-y-1 hover:scale-110">
                                Save image
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
onMounted(async () => {
    const { Tab, initTE } = await import("tw-elements");
    initTE({ Tab });
});

const carsImage = ref({
    photo: '',
    file: ''
})
const hotelsImage = ref({
    photo: '',
    file: ''
})
const flightsImage = ref({
    photo: '',
    file: ''
})
const programsImage = ref({
    photo: '',
    file: ''
})
const trainImage = ref({
    photo: '',
    file: ''
})

const getCarImage = (e) => {
    carsImage.value.photo = URL.createObjectURL(e.target.files[0])
    carsImage.value.file = e.target.files[0]
}
const getHotelImage = (e) => {
    hotelsImage.value.photo = URL.createObjectURL(e.target.files[0])
    hotelsImage.value.file = e.target.files[0]
}
const getFlightImage = (e) => {
    flightsImage.value.photo = URL.createObjectURL(e.target.files[0])
    flightsImage.value.file = e.target.files[0]
}
const getProgramImage = (e) => {
    programsImage.value.photo = URL.createObjectURL(e.target.files[0])
    programsImage.value.file = e.target.files[0]
}
const getTrainImage = (e) => {
    trainImage.value.photo = URL.createObjectURL(e.target.files[0])
    trainImage.value.file = e.target.files[0]
}

definePageMeta({
    layout: 'dashboard-layout'
})
</script>