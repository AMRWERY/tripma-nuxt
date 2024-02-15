<template>
    <div class="space-y-2">
        <button type="button" data-te-toggle="modal" data-te-target="#exampleModalCenter" data-te-ripple-color="light"
            class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto transit">
            Get Started
        </button>
    </div>

    <!--Vertically centered modal-->
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <!--Modal body-->
                <div class="relative p-4">
                    <div class="sm:col-span-2 sm:col-start-1 relative mb-8">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900 text-start">From
                            Where?</label>
                        <div class="mt-2 relative rounded-md shadow-sm">
                            <select id="country" name="select-country"
                                class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <option v-for="country in countriesData" :key="country" :value="country">
                                    {{ country.name }} - {{ country.code }}</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <icon name="icon-park-outline:airplane" class="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-2 sm:col-start-1 relative mb-8">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900 text-start">
                            Where To?</label>
                        <div class="mt-2 relative rounded-md shadow-sm">
                            <select id="country" name="select-country"
                                class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <option v-for="country in countriesData" :key="country" :value="country">
                                    {{ country.name }} - {{ country.code }}</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <icon name="icon-park-solid:airplane-window-one" class="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-2 sm:col-start-1 relative mb-8">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900 text-start">
                            Passengers</label>
                        <div class="mt-2 relative rounded-md shadow-sm">
                            <input type="text" name="city" id="city" autocomplete="address-level2"
                                class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Adults" />
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <icon name="icon-park-solid:every-user" class="text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-2 sm:col-start-1 relative mb-8">
                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900 text-start">
                            Depart - Return</label>
                        <div class="mt-2 relative rounded-md shadow-sm">
                            <vue-date-picker v-model="date" range placeholder="Select Date" />
                        </div>
                    </div>
                </div>

                <!--Modal footer-->
                <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button type="button"
                        class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script setup>
import dataBase from '@/public/countries.json';

const countriesData = ref(dataBase.countries);

const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})

onMounted(async () => {
    const { Modal, Ripple, initTE } = await import("tw-elements");
    initTE({ Modal, Ripple });
});
</script>