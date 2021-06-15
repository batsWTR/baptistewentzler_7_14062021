<template>
  <h1>login</h1>
  <div>
    <div>
        <label for="loginUsername">Pseudo </label>
        <input type="text" id="loginUsername" v-model="loginUsername" required/>
    </div>
    <div>
        <label for="loginPassword">Mot de passe </label>
        <input type="text" id="loginPassword" v-model="loginPassword" required/>
    </div>
  </div>
</template>
