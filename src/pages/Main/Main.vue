<script src="./Main.ts" />

<template>
    <Header title="Recargas y pagos" :canReturn="false" />
    <main class="main">
        <div class="container">
            <div class="main__header">
                <div class="main__header__virtualBalance__label">
                    <p class="small_text">Saldo virtual</p>
                </div>
                <div class="main__header__virtualBalance__value">
                    <template v-if="status === 'loading'">
                        <p class="big_text">Cargando ...</p>
                    </template>
                    <template v-else>
                        <p class="big_text">S/{{ virtualBalance }}</p>
                    </template>
                    <div
                        class="main__header__virtualBalance__reload"
                        @click="reloadGetVirtualBalanceData"
                    ></div>
                </div>
                <div class="main__header__question">
                    <span>¿Cómo cargar mi saldo virtual?</span>
                </div>
                <p class="main__header__code">
                    Código para cargar tu saldo: <span>{12345678901}</span>
                </p>
            </div>
            <div class="main__list">
                <router-link to="/recharges">
                    <Card type="recharges" text="Recargas" />
                </router-link>
                <Card type="services" text="Pago de servicios" />
                <Card
                    type="profitsAndOperations"
                    text="Historial de ganancias y operaciones"
                />
            </div>
        </div>
    </main>
</template>
