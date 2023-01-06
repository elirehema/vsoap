<template>

    <v-card rounded>
        <v-app-bar color="white" dense flat>
            <v-toolbar-title class="pl-5">
                POWER
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-icon small>mdi-menu</v-icon>
        </v-app-bar>
        <v-card-text>
            <v-row class="d-flex justify-center">
                <v-col cols="3" class="d-flex flex-column ">
                    <span class=" font-weight-bold">NOW </span>
                    <span class="mt-3 font-weight-bold" >Hour </span>
                    <span class="mt-3 font-weight-bold">Day </span>
                    <span class="mt-3 font-weight-bold">Month</span>
                    <span class="mt-3 font-weight-bold">Year</span>
                    <span class="mt-3 font-weight-bold">TOTAL</span>
                </v-col>

                <v-col cols="4"  class="d-flex flex-column ">
                    <span class=" font-weight-bold">0 W</span>
                    <span class="mt-3 ">0 kWh</span>
                    <span class="mt-3 ">8.4 kWh</span>
                    <span class="mt-3 ">348 kWh</span>
                    <span class="mt-3 ">5760 kWh</span>
                    <span class="mt-3 ">81836 kWh</span>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>