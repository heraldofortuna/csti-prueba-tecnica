<script setup lang="ts">
defineProps<{
    type: string;
    text: string;
}>();
</script>

<template>
    <div class="card" :class="type">
        <div class="card__icon"></div>
        <span class="medium_text">{{ text }}</span>
    </div>
</template>
