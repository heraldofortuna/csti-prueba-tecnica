<script>
export default {
    name: "Error",
};
</script>

<template>
    <div class="errorPage">
        <h1 class="big_text">Error</h1>
        <p class="medium_text">Hubo un problema al cargar la página.</p>
        <router-link to="/">
            <button class="button">Volver</button>
        </router-link>
    </div>
</template>
