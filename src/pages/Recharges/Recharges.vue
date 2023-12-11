<script src="./Recharges.ts" />

<template>
    <div>
        <p>Buscar empresa</p>
        <div>Ej. Culqi</div>
    </div>
    <div>
        <span>Todas</span>
        <span>Favoritas</span>
        <span>Telefonía</span>
    </div>
    <ul>
        <li v-for="(provider, index) in providers">
            <v-avatar size="40" tile>
                <img :src="provider?.image" :alt="provider?.company" />
            </v-avatar>
            {{ provider?.company }}
        </li>
    </ul>
</template>
