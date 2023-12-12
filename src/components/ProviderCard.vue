<script setup lang="ts">
const { image, provider, isFavorite } = defineProps([
    "image",
    "provider",
    "isFavorite",
]);

const emit = defineEmits();

const onClick = () => {
    emit("click", provider);
};
</script>

<template>
    <div
        class="providerCard"
        :class="isFavorite ? 'providerCard--favorite' : ''"
        @click="onClick"
    >
        <div class="providerCard__content">
            <img class="providerCard__image" :src="image" :alt="provider" />
            <span class="medium_text">{{ provider }}</span>
        </div>
        <img class="providerCard__icon" />
    </div>
</template>
