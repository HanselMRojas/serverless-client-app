<template>
  <v-dialog
      v-model="modal.visible"
      width="500">

      <v-card>
        <v-card-title class="primary">
          <h4 class="white--text">{{ modalLabel }} Imagen</h4>
          <v-spacer></v-spacer>
          <v-btn icon :disabled="loader" @click="onCloseModal">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="my-8">
          <v-form
            v-model="formValid"
            v-if="!uploadSucess"
            ref="uploadForm"
            lazy-validation>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  :disabled="loader"
                  :rules="textRules"
                  :counter="25"
                  required
                  label="Nombre"
                  prepend-icon="person"
                  placeholder="Nombre de la persona que carga la imagen"
                  outlined>
                </v-text-field>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  v-model="image"
                  @change="onFileChange"
                  :disabled="loader"
                  :rules="fileRules"
                  required
                  outlined
                  counter
                  show-size
                  chips
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Seleccione una imagen..."
                  prepend-icon="camera"
                  label="Seleccionar imagen">
                </v-file-input>
              </v-col>

              <v-col cols="12" v-if="preview != null">
                <v-img aspect-ratio="1" :src="preview" v-if="!loader"></v-img>
                <v-layout
                  v-else
                  column
                  align-center
                  justify-center
                  fill-height>
                  <v-progress-linear
                    indeterminate
                    :size="130"
                    :width="10"
                    color="primary">
                  </v-progress-linear>
                  <h3 class="my-4">Cargando...</h3>
                </v-layout>
              </v-col>
            </v-row>
          </v-form>

          <v-layout v-else column align-center justify-center>
            <v-icon color="green" :size="150">check_circle</v-icon>
            <h3 class="my-4">Cargado Correctamente</h3>
            <v-btn text color="green" @click="onCloseModal">Cerrar</v-btn>
          </v-layout>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions v-if="!uploadSucess">
          <v-spacer></v-spacer>
          <v-btn text @click="onCloseModal" :disabled="loader">
            Cerrar
          </v-btn>

          <v-btn
            v-if="modal.isNew"
            @click="onUploadPhoto"
            :disabled="loader"
            :loading="loader"
            color="primary"
            text>
            Cargar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script lang="ts" src="./UiModalImage.ts"></script>
