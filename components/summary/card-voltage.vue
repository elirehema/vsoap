<template>
    <v-card v-if="voltage" height="260"  rounded>
        <v-app-bar color="white" dense flat>
            <v-toolbar-title class="pl-0">
               {{ voltage.title }}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-app-bar>
        <v-card-text >
           
           <chart-semi-donut :data="voltage" :height="220" />
           <v-container class="d-flex justify-center ma-0 pa-0 mt-2">
        <span class="text-h5 gold--text text--darken-2">{{ voltage.line.toUpperCase() }}</span>
        </v-container>
        </v-card-text>
    </v-card>
    <skeleton-table-loader v-else />
</template>
<script>
export default {
    props:{
        voltage:{
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