<template>
  <img
    class="vuetify-logo"
    alt="Payless Logo"
    src="https://billing.payless.cloud/asset/img/logo.png"
  >
</template>

<style>
.vuetify-logo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
