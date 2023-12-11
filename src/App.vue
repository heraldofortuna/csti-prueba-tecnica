<script setup lang="ts"></script>

<template>
    <div class="app">
        <div class="container">
            <Suspense>
                <router-view></router-view>
            </Suspense>
        </div>
    </div>
</template>

<style>
@import "./style.css";
</style>
