<script setup lang="ts">
defineProps<{
    text: string;
}>();
</script>

<template>
    <span class="filterOption">{{ text }}</span>
</template>
