<script src="./Recharges.ts" />

<template>
    <div class="rechargesPage">
        <router-link to="/">
            <span class="small_text backButton">Atrás</span>
        </router-link>
        <InputField
            label="Buscar empresa"
            :value="inputValue"
            placeholder="ej. Culqi"
            @update:value="handleInputValue"
        />
        <div class="rechargesPage__filters">
            <FilterOption
                name="all"
                text="Todas"
                :disabled="false"
                :selected="filterValue === 'all'"
                @click="handleFilterProvidersByType"
            />
            <FilterOption
                name="favorites"
                text="Favoritas"
                :disabled="false"
                :selected="filterValue === 'favorites'"
                @click="handleFilterProvidersByType"
            />
            <FilterOption
                name="telephony"
                text="Telefonía"
                :disabled="true"
                :selected="filterValue === 'telephony'"
                @click="handleFilterProvidersByType"
            />
        </div>
        <template v-if="status === 'loading'">
            <span>Loading</span>
        </template>
        <template v-else>
            <ul class="rechargesPage__providers">
                <li
                    class="rechargesPage__provider"
                    v-for="(provider, index) in currentProviders"
                >
                    <ProviderCard
                        :image="provider?.image"
                        :provider="provider?.company"
                        :isFavorite="provider?.isFavorite"
                        @click="handleMakeFavoriteProviders"
                    />
                </li>
            </ul>
        </template>
    </div>
</template>
