<template>
  <div>
    <section class="hero primary" />

    <div class="web-inner">
      <v-card v-if="!loader" class="mt-16" rounded>
        <v-card-title class="pa-0">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-badge
                  bordered
                  content="Image service"
                  color="error"
                  offset-y="30">
                  <v-img
                    width="100"
                    src="../../assets/logos/logo.png"
                    alt="PirPOS logo" />
                </v-badge>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="onClickNewImage">
                <v-icon>cloud_upload</v-icon>
              </v-btn>
            </v-list-item-action>

            <v-list-item-action>
              <v-btn icon @click="onRefreshImages">
                <v-icon>refresh</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card-title>

        <v-divider></v-divider>

        <v-row class="ma-2">
          <v-col v-for="image in imageList"
            :key="image.id"
            class="d-flex child-flex"
            cols="6"
            md="3">
              <v-img
                :src="image.url"
                :lazy-src="image.url"
                :alt="image.name"
                aspect-ratio="1"
                class="grey lighten-2">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center">
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5">
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
          </v-col>
        </v-row>
      </v-card>

      <v-card v-else  class="mt-16" height="600">
        <v-layout
          column
          align-center
          justify-center
          fill-height>
          <v-progress-circular
            indeterminate
            :size="130"
            :width="10"
            color="primary">
          </v-progress-circular>
          <h3 class="my-4">Cargando...</h3>
        </v-layout>
      </v-card>

      <ui-modal-image />
    </div>
  </div>
</template>

<style lang="stylus" scoped src="./Home.styl"></style>
<script lang="ts" src="./Home.ts"></script>
