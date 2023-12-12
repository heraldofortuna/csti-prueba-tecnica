<script setup lang="ts">
defineProps<{
    image: string;
    provider: string;
}>();
</script>

<template>
    <div class="providerCard__content">
        <img class="providerCard__image" :src="image" :alt="provider" />
        <span class="medium_text">{{ provider }}</span>
    </div>
    <img class="providerCard__icon" />
</template>
