<template>
  <v-row>
    <v-col cols="3">
      <v-card class="mx-auto" max-width="400" >
        <v-list nav dense>
          <v-list-item-group color="primary" two-line>
            <template v-for="(item, index) in routes">
            <v-list-item :to="`/settings/${item.to}`">
              <v-list-item-avatar>
                <v-icon large v-text="item.icon" color="primary"></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider/>
            </template>
           
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="9">
      <NuxtChild />
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "Roles",
          subtitle: "Role Management i.e Create, Update, Delete, etc",
          icon: "mdi-alpha-r-circle",
          to: "roles",
        },
        {
          title: "Permissions",
          subtitle: "View list of available permissions",
          icon: "mdi-alpha-p-circle",
          to: "permissions",
        },
      ],
    };
  },
};
</script>
