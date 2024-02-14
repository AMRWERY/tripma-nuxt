<template>
    <div>
        <!--Tabs navigation-->
        <ul class="flex flex-row flex-wrap pl-0 mb-5 list-none border-b-0" role="tablist" data-te-nav-ref>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-cars02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-cars02" data-te-nav-active role="tab"
                    aria-controls="tabs-cars02" aria-selected="true">Cars</a>
            </li>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-hotels02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-hotels02" role="tab" aria-controls="tabs-hotels02"
                    aria-selected="false">Hotels</a>
            </li>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-flights02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-flights02" role="tab" aria-controls="tabs-flights02"
                    aria-selected="false">Flights</a>
            </li>
            <li role="presentation" class="flex-grow text-center basis-0">
                <a href="#tabs-tourist02"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill" data-te-target="#tabs-tourist02" role="tab" aria-controls="tabs-tourist02"
                    aria-selected="false">Tourist trips</a>
            </li>
        </ul>

        <!--Tabs content-->
        <div class="mb-6">
            <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-cars02" role="tabpanel" aria-labelledby="tabs-cars-tab02" data-te-tab-active>

                <cars />

            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-hotels02" role="tabpanel" aria-labelledby="tabs-hotels-tab02">

                <hotels />

            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-flights02" role="tabpanel" aria-labelledby="tabs-flights-tab02">

                <flights />

            </div>
            <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-tourist02" role="tabpanel" aria-labelledby="tabs-tourist-tab02">

                <trips />

            </div>
        </div>
    </div>
</template>

<script setup>
onMounted(async () => {
    const { Tab, initTE } = await import("tw-elements");
    initTE({ Tab });
});

definePageMeta({
    layout: 'dashboard-layout'
})
</script>