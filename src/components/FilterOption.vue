<script setup lang="ts">
const { name, text, disabled, selected } = defineProps([
    "name",
    "text",
    "disabled",
    "selected",
]);

const emit = defineEmits();

const onClick = () => {
    emit("click", name);
};
</script>

<template>
    <span
        :class="[
            'filterOption',
            disabled ? 'filterOption--disabled' : '',
            selected ? 'filterOption--selected' : '',
        ]"
        @click="onClick"
        >{{ text }}</span
    >
</template>
