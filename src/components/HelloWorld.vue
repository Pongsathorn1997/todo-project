<template>
  <div id="home">
    <v-app id="homepage">
      <section style="height: 100vh">
        <v-app-bar color="grey darken-3"
                   dense
                   dark
        >
          <v-toolbar-title>Welcome to todo-list application</v-toolbar-title>
        </v-app-bar>
        <v-parallax
            dark
            src="https://i.redd.it/gx4ke12h05uy.png"
            style="height: 100vh"
        >
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card>
                  <v-toolbar color="grey darken-3" dark flat>
                    <v-toolbar-title>Please select one of these option..</v-toolbar-title>
                  </v-toolbar>
                  <!--this is the input text field for username and password-->
                  <v-card-text>
                    <v-btn class="d-flex justify-center md4 mt-7" to="/login">Login</v-btn>
                    <v-btn class="d-flex justify-center md4 mt-7" to="/register">Register</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
      </section>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  }
</script>
