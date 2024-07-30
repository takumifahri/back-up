<template>
    <!-- Kita pake slider group untuk sliding imagena -->
    <v-sheet
        class="mx-auto"
        elevation="5"
        max-width="100%"
    >
        <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
        >
        <v-slide-group-item
            v-for="n in 10"
            :key="n"
            v-slot="{ isSelected, toggle }"
        >
            <v-card
            :color="isSelected ? 'primary' : 'grey-lighten-1'"
            class="ma-5"
            style="width: 300px;"
            height="200px"
            @click="toggle"
            >
            <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                <v-icon
                    v-if="isSelected"
                    color="white"
                    icon="mdi-close-circle-outline"
                    size="42"
                ></v-icon>
                </v-scale-transition>
            </div>
            </v-card>
        </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
    export default {
        name: 'NewsComp',
        data: () => ({
            model: null,
        }),
    }
</script>

sc