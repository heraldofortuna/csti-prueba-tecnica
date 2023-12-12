<script setup lang="ts">
const { title, canReturn } = defineProps(["title", "canReturn"]);

const emit = defineEmits();
</script>

<template>
    <header class="header">
        <div class="header_container">
            <template v-if="canReturn">
                <router-link to="/">
                    <span class="backButton"></span>
                </router-link>
            </template>
            <template v-else>
                <span></span>
            </template>
            <h1>{{ title }}</h1>
        </div>
    </header>
</template>
