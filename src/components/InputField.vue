<script setup lang="ts">
const { label, value, placeholder } = defineProps([
    "label",
    "value",
    "placeholder",
]);

const emit = defineEmits();

const onInput = (event: Event) => {
    emit("update:value", (event?.target as HTMLInputElement)?.value);
};
</script>

<template>
    <div class="inputField">
        <p class="inputField__label small_text">{{ label }}</p>
        <div class="inputField__input">
            <input :value="value" :placeholder="placeholder" @input="onInput" />
        </div>
    </div>
</template>
