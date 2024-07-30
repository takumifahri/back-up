<template>
    <!-- <v-card>
        <v-layout>
            <v-navigation-drawer
                v-model="drawer"
                temporary
            >
                <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
                title="John Leider"
                ></v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
                <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
        <v-app-bar style="background-color: #7c83fd; width: 100%; height: 70px;" class="pa-2" density="comfortable" rounded :elevation="4" scroll-behavior="elevate">
                
                <v-app-bar-nav-icon class="me-auto"  @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

                <v-btn class="pa-2 rounded-pill" style="background-color: #503fec; width: 100px;">
                    <h4 class="text-center">Login</h4>
                </v-btn>
                <v-icon icon="mdi-dots-vertical" class="ma-5">
                </v-icon>
            </v-app-bar>

    </v-card> -->

    <!-- <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <div class="d-flex justify-center align-center h-100">
          <v-btn
            color="primary"
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </div>
      </v-main>
    </v-layout>
  </v-card> -->

  <v-card>
    <v-app-bar
        style="background-color: #7c83fd;"

        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer>  </v-spacer>

        <v-btn class="rounded-pill shadow-lg text-white" style="width: 100px; background-color: #3735c0;" onclick="location.href='/login'"><h3>Login</h3></v-btn>

        <v-btn icon="mdi-dots-vertical" class="mx-5" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          :items="items"
        >
            
        </v-list>
      </v-navigation-drawer>
    <!-- <v-layout>
      <v-app-bar
        style="background-color: #7c83fd;"
        class="sticky top-0"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer>  </v-spacer>

        <v-btn class="rounded-pill shadow-xl" style="width: 100px; background-color: #3735c0;" onclick="location.href='/login'"><h3>Login</h3></v-btn>

        <v-btn icon="mdi-dots-vertical" class="mx-5" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          :items="items"
        >
            
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 100vh">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
        <BusComp/>
      </v-main>
    </v-layout> -->
    <!-- <v-main style="min-height: 100vh">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
        <BusComp/>
      </v-main> -->
  </v-card>
</template> 

<script>
    // import BusComp from '@/components/BusComp.vue';
    export default{
        name : 'NavbarComp',

        // data () {
        //     return {
        //         drawer: null,
        //     }
        // }
        data: () => ({
            drawer: false,
            group: null,
            items: [
                {
                title: 'Foo',
                subtitle: 'Subtitle',
                value: 'foo',
                },
                {
                title: 'Bar',
                value: 'bar',
                },
                {
                title: 'Fizz',
                value: 'fizz',
                },
                {
                title: 'Buzz',
                value: 'buzz',
                },
            ],
        }),

            watch: {
                group () {
                    this.drawer = false
                },
            },
        
    }
</script>

