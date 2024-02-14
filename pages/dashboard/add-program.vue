<template>
    <div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Add new Program</h2>

        <form>
            <div class="space-y-12">
                <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="destination" class="block text-sm font-medium leading-6 text-gray-900">Program
                            destination</label>
                        <div class="mt-2">
                            <select id="destination" name="destination" autocomplete="destination"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="program-name" class="block text-sm font-medium leading-6 text-gray-900">Program name
                            (AR)</label>
                        <div class="mt-2">
                            <input type="text" name="program-name" id="program-name" autocomplete="program-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="program-name" class="block text-sm font-medium leading-6 text-gray-900">Program name
                            (EN)</label>
                        <div class="mt-2">
                            <input type="text" name="program-name" id="program-name" autocomplete="program-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-4">
                    <div class="sm:col-span-1">
                        <label for="nights" class="block text-sm font-medium leading-6 text-gray-900">Number of
                            nights</label>
                        <div class="mt-2">
                            <input type="number" name="nights" id="nights" autocomplete="nights"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-1">
                        <div class="mt-2">
                            <label for="days" class="block text-sm font-medium leading-6 text-gray-900">Number of
                                days</label>
                            <input type="number" name="days" id="days" autocomplete="days"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-1">
                        <label for="date-from" class="block text-sm font-medium leading-6 text-gray-900">From</label>
                        <div class="mt-2">
                            <VueDatePicker v-model="date" range />
                        </div>
                    </div>

                    <div class="sm:col-span-1">
                        <label for="to-date" class="block text-sm font-medium leading-6 text-gray-900">To</label>
                        <div class="mt-2">
                            <VueDatePicker v-model="date" range />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="car-type" class="block text-sm font-medium leading-6 text-gray-900">Car type</label>
                        <div class="mt-2">
                            <select id="car-type" name="car-type" autocomplete="car-type"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="meal-type" class="block text-sm font-medium leading-6 text-gray-900">Meals type</label>
                        <div class="mt-2">
                            <select id="meal-type" name="meal-type" autocomplete="meal-type"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="include-fly" class="block text-sm font-medium leading-6 text-gray-900">Includes
                            flying</label>
                        <div class="mt-2">
                            <select id="include-fly" name="include-fly" autocomplete="include-fly"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="single-price" class="block text-sm font-medium leading-6 text-gray-900">Price per
                            adult is single</label>
                        <div class="mt-2">
                            <input type="number" name="single-price" id="single-price" autocomplete="single-price"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="double-price" class="block text-sm font-medium leading-6 text-gray-900">Price per adult
                            is double</label>
                        <div class="mt-2">
                            <input type="number" name="double-price" id="double-price" autocomplete="double-price"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="triple-price" class="block text-sm font-medium leading-6 text-gray-900">Price per adult
                            is triple</label>
                        <div class="mt-2">
                            <input type="number" name="triple-price" id="triple-price" autocomplete="triple-price"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="child-price" class="block text-sm font-medium leading-6 text-gray-900">Price for a child
                            without a bed</label>
                        <div class="mt-2">
                            <input type="number" name="child-price" id="child-price" autocomplete="child-price"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="child-price" class="block text-sm font-medium leading-6 text-gray-900">Price for a child
                            with a bed</label>
                        <div class="mt-2">
                            <input type="number" name="child-price" id="child-price" autocomplete="child-price"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="infant-price" class="block text-sm font-medium leading-6 text-gray-900">Infant
                            price</label>
                        <div class="mt-2">
                            <input type="number" name="infant-price" id="infant-price" autocomplete="infant-price"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <div class="mt-5 col-span-full">
                    <label for="tax" class="block text-sm font-medium leading-6 text-gray-900">Tax</label>
                    <div class="mt-2">
                        <input type="number" name="tax" id="tax" autocomplete="tax"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <hr>

                <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="program-details" class="block text-sm font-medium leading-6 text-gray-900">Program
                            details (AR)</label>
                        <div class="mt-2">
                            <textarea id="program-details" name="program-details" rows="3"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"></textarea>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="program-details" class="block text-sm font-medium leading-6 text-gray-900">Program
                            details (EN)</label>
                        <div class="mt-2">
                            <textarea id="program-details" name="program-details" rows="3"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"></textarea>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="max-w-full px-4 mx-auto md:px-8">
                    <div class="flex flex-col gap-4 mb-6 sm:mb-8 md:gap-6">

                        <div class="flex flex-wrap overflow-hidden rounded-lg gap-x-4 sm:gap-y-4 lg:gap-6">
                            <a href="#" class="relative block w-32 h-48 overflow-hidden bg-gray-100 group sm:h-56 sm:w-48">
                                <img v-if="imageUrl" :src="imageUrl" loading="lazy"
                                    class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                            </a>

                            <div class="w-full p-4 ml-auto border-t sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                                <div class="pt-3 ml-4 md:ml-8 md:pt-2 lg:ml-16">
                                    <span class="block font-bold text-gray-800 md:text-lg">Basic picture</span>
                                </div>

                                <div class="flex flex-col items-end gap-2 mt-10">
                                    <label for="file-upload"
                                        class="relative font-semibold bg-white rounded-md cursor-pointer focus-within:ring-2">
                                        <span
                                            class="rounded-lg mt-2 bg-red-600 hover:bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                                            Browse
                                        </span>
                                        <input id="file-upload" name="file-upload" type="file" class="sr-only"
                                            @change="handleFileChange" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-full px-4 mx-auto md:px-8">
                    <div class="flex flex-col gap-4 mb-6 sm:mb-8 md:gap-6">

                        <div class="flex flex-wrap overflow-hidden rounded-lg gap-x-4 sm:gap-y-4 lg:gap-6">
                            <a href="#" class="relative block w-32 h-48 overflow-hidden bg-gray-100 group sm:h-56 sm:w-48">
                                <img v-if="imgUrl" :src="imgUrl" loading="lazy"
                                    class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                            </a>

                            <div class="w-full p-4 ml-auto border-t sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                                <div class="pt-3 ml-4 md:ml-8 md:pt-2 lg:ml-16">
                                    <span class="block font-bold text-gray-800 md:text-lg">Details picture</span>
                                </div>

                                <div class="flex flex-col items-end gap-2 mt-10">
                                    <label for="files-upload"
                                        class="relative font-semibold bg-white rounded-md cursor-pointer focus-within:ring-2">
                                        <span
                                            class="rounded-lg mt-2 bg-red-600 hover:bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                                            Browse
                                        </span>
                                        <input id="files-upload" name="files-upload" type="file" class="sr-only"
                                            @change="handleImgChange" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr>

                <div class="max-w-full px-4 py-6 mx-auto sm:px-6 lg:px-8">
                    <div class="flex">
                        <h1 class="text-xl font-semibold">Cities within the program</h1>
                        <button type="button"
                            class="inline-flex justify-center px-5 py-3 ml-auto text-sm font-semibold text-black rounded-md shadow-sm bg-amber-400 hover:bg-amber-500 sm:w-auto">
                            Add City
                        </button>
                    </div>

                    <div class="mt-4">

                        <add-city-table />

                    </div>
                </div>

                <div class="flex items-center justify-center mt-6 gap-x-6">
                    <button type="submit"
                        class="px-4 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                        Program</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})

const imageUrl = ref('');
const imgUrl = ref('');

const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imageUrl.value = reader.result;
        };
        reader.readAsDataURL(file);
    }
};

const handleImgChange = (event) => {
    const img = event.target.files[0];

    if (img) {
        const reader = new FileReader();
        reader.onload = () => {
            imgUrl.value = reader.result;
        };
        reader.readAsDataURL(img);
    }
};

definePageMeta({
    layout: 'dashboard-layout'
})
</script>