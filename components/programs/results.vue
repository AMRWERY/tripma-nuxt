<template>
    <div class="flex items-center justify-between">
        <select data-te-select-init data-te-select-size="lg" class="xs:mx-3" v-model="selectedFilter"
            @change="filterPlaces">
            <option selected>Show All</option>
            <option>Include Flight</option>
            <option>Not Include Flight</option>
        </select>
        <p class="xs:mx-3">Result: {{ store.filteredPlacesArray.length }}</p>
    </div>
</template>
    
<script setup>
import { useProgrammesCards } from '@/stores/programStore';

const store = useProgrammesCards();
const selectedFilter = ref("Show All");

const filterPlaces = () => {
    store.filteredPlaces(selectedFilter.value)
}

onMounted(() => {
    filterPlaces()
})

onMounted(async () => {
    const { Select, initTE } = await import("tw-elements");
    initTE({ Select });
});
</script>