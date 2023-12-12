<script src="./Recharges.ts" />

<template>
    <div class="recharges">
        <router-link to="/">
            <span class="small_text backButton">Atrás</span>
        </router-link>
        <div class="recharges__finder">
            <p class="small_text">Buscar empresa</p>
            <div class="inputfield">
                <input placeholder="ej. Culqi" />
            </div>
        </div>
        <div class="recharges__filters">
            <span class="recharges__filter">Todas</span>
            <span class="recharges__filter">Favoritas</span>
            <span class="recharges__filter">Telefonía</span>
        </div>
        <template v-if="status === 'loading'">
            <span>Loading</span>
        </template>
        <template v-else>
            <ul class="recharges__providers">
                <li
                    class="recharges__provider"
                    v-for="(provider, index) in providers"
                >
                    <div class="recharges__provider__content">
                        <img
                            class="recharges__provider__image"
                            :src="provider?.image"
                            :alt="provider?.company"
                        />
                        <span class="medium_text">{{ provider?.company }}</span>
                    </div>
                    <img class="recharges__provider__icon" />
                </li>
            </ul>
        </template>
    </div>
</template>
