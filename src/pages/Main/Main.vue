<script src="./Main.ts" />

<template>
    <h1>Recargas y pagos</h1>
    <div>
        <p>Saldo virtual</p>
        <p>S/ {{ virtualBalance }}</p>
        <p>¿Cómo cargar mi saldo virtual?</p>
        <p>Código para cargar tu saldo: <span>{12345678901}</span></p>
    </div>
    <div @click="navigateToRecharges">
        <img />
        <span>Recargas</span>
    </div>
    <div>
        <img />
        <span>Pago de servicios</span>
    </div>
    <div>
        <img />
        <span>Historial de ganancias y operaciones</span>
    </div>
</template>
