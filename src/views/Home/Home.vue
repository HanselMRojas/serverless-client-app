<template>
  <div class="web-inner">
    <header class="my-4">
      <h2>Imágenes cargadas</h2>
    </header>

    <section>
      <v-row>
        <v-col
            v-for="n in 9"
            :key="n"
            class="d-flex child-flex"
            cols="3"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
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
  </div>
</template>

<style lang="stylus" scoped src="./Home.styl"></style>
<script lang="ts" src="./Home.ts"></script>
