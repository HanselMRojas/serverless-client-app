<template>
  <v-dialog
      v-model="modal.visible"
      width="500">

      <v-card>
        <v-card-title class="primary">
          <h4 class="white--text">{{ modalLabel }} Imagen</h4>
          <v-spacer></v-spacer>
          <v-btn icon @click="onCloseModal">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="my-4">
          <p>
            hello
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="onCloseModal">
            Cerrar
          </v-btn>

          <v-btn
            v-if="modal.isNew"
            color="primary"
            text>
            Cargar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script lang="ts" src="./UiModalImage.ts"></script>
