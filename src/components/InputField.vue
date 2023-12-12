<script setup lang="ts">
defineProps<{
    label: string;
    placeholder: string;
}>();
</script>

<template>
    <div class="inputField">
        <p class="inputField__label small_text">{{ label }}</p>
        <div class="inputField__input">
            <input :placeholder="placeholder" />
        </div>
    </div>
</template>
