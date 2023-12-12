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
            <FilterOption text="Todas" />
            <FilterOption text="Favoritas" />
            <FilterOption text="Telefonía" />
        </div>
        <template v-if="status === 'loading'">
            <span>Loading</span>
        </template>
        <template v-else>
            <p>{{ inputValue }}</p>
            <ul class="rechargesPage__providers">
                <li
                    class="rechargesPage__provider"
                    v-for="(provider, index) in filteredProviders"
                >
                    <ProviderCard
                        :image="provider?.image"
                        :provider="provider?.company"
                    />
                    <img class="rechargesPage__provider__icon" />
                </li>
            </ul>
        </template>
    </div>
</template>
