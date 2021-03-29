<template>
  <div class="web-inner">

    <section v-if="!loader">
      <header class="my-4" >
        <h2>Imágenes cargadas</h2>
      </header>

      <v-row>
        <v-col v-for="image in imageList"
          :key="image.id"
          class="d-flex child-flex"
          cols="3">
            <v-img
              :src="image.url"
              :lazy-src="image.url"
              aspect-ratio="1"
              class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
        </v-col>
      </v-row>
    </section>

    <v-layout v-else
      class="progress-fill"
      column
      align-center
      justify-center
      fill-height>
      <v-progress-circular
          indeterminate
          :size="150"
          :width="10"
          color="primary"
        ></v-progress-circular>
        <h2 class="my-4">Cargado listado de imágenes...</h2>
    </v-layout>
  </div>
</template>

<style lang="stylus" scoped src="./Home.styl"></style>
<script lang="ts" src="./Home.ts"></script>
