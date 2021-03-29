<template>
  <header class="ui-navbar">
    <section class="web-inner d-flex align-center">
      <v-badge
        bordered
        content="Image service"
        color="error"
        offset-y="30"
        overlap>
        <figure>
          <img src="../../assets/logos/logo.png" alt="PirPOS logo" />
        </figure>
      </v-badge>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>cloud_upload</v-icon>
          </v-btn>
        </template>
        <span>Cargar nueva imagen</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="refreshImages">
            <v-icon>refresh</v-icon>
          </v-btn>
        </template>
        <span>Recargar imágenes</span>
      </v-tooltip>
    </section>

  </header>
</template>

<style lang="stylus" scoped src="./UiNavbar.styl"></style>
<script lang="ts" src="./UiNavbar.ts"></script>
