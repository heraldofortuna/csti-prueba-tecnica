<script src="./Main.ts" />

<template>
    <div class="main">
        <div class="main__header">
            <div class="main__header__virtualBalance__label">
                <p>Saldo virtual</p>
            </div>
            <div class="main__header__virtualBalance__value">
                <p class="big_text">S/ {{ virtualBalance }}</p>
            </div>
            <div class="main__header__question">
                <span>¿Cómo cargar mi saldo virtual?</span>
            </div>
            <p class="main__header__code">
                Código para cargar tu saldo: <span>{12345678901}</span>
            </p>
        </div>
        <div class="main__list">
            <div class="main__list__element" @click="navigateToRecharges">
                <div class="main__list__element__icon"></div>
                <span class="medium_text">Recargas</span>
            </div>
            <div class="main__list__element">
                <div class="main__list__element__icon"></div>
                <span class="medium_text">Pago de servicios</span>
            </div>
            <div class="main__list__element">
                <div class="main__list__element__icon"></div>
                <span class="medium_text"
                    >Historial de ganancias y operaciones</span
                >
            </div>
        </div>
    </div>
</template>
