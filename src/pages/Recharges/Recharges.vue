<script src="./Recharges.ts" />

<template>
    <div class="recharges">
        <div class="recharges__finder">
            <p class="small_text">Buscar empresa</p>
            <input class="inputfield" placeholder="ej. Culqi" />
        </div>
        <div class="recharges__filters">
            <span class="recharges__filter">Todas</span>
            <span class="recharges__filter">Favoritas</span>
            <span class="recharges__filter">Telefonía</span>
        </div>
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
    </div>
</template>
