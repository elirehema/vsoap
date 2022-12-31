<template>

    <v-card v-if="power">
        <v-app-bar color="white" dense flat>
            <v-toolbar-title class="pl-0">
               Power
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-app-bar>
        <v-card-text >
           <v-container class="d-flex justify-center justify-space-around px-0">
            <v-chip v-for="label in labels" :key="label" link class=" py-6 font-weight-bold primary--text" color="#EAEAEA" label> {{ label.toUpperCase() }}</v-chip>
           </v-container>

           <div class="d-flex flex-column  align-center mt-4">
           <span class="gold--text text--darken-3 text-h5 ">{{ power.line }}</span>
           <span class="text-h4 mt-3">{{ power.value }} kWh</span>
           
           </div>
           <div class="d-flex justify-center justify-space-around  mt-6">
            <span class="text-caption">
                {{ power.min }}
           </span>
           <v-icon color="gold darken-3">mdi-menu-down</v-icon>
           <span class="text-caption">
            {{ power.max }} kWh
           </span>
           </div>
        </v-card-text>
    </v-card>
    <skeleton-table-loader v-else />
</template>
<script>
export default {
    props:{
        power:{
            type: Object,
            default: null
        }
    },
    data(){
        return{
            labels:['R','h','d','w','m','y']
        }
    }
}
</script>