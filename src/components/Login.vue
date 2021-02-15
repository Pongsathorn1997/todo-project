<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>

        <!--This is the upper blue thing-->
        <v-app-bar color="primary"
                   dense
                   dark
        >
          <v-toolbar-title>This is Login Page</v-toolbar-title>
        </v-app-bar>

        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <!--this is the input text field for username and password-->
                <v-card-text>
                  <v-form>
                    <v-text-field
                        v-model="username"
                        label="username"
                        name="username"
                        type="username">
                    </v-text-field>

                    <v-text-field
                        v-model="password"
                        label="Password"
                        name="password"
                        type="password"
                        @keyup.enter="doLogin"
                    >
                    </v-text-field>
                  </v-form>
                </v-card-text>
                <!-- this is the login bottom-->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="doLogin" type="submit">Login</v-btn>
                </v-card-actions>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      username: 'pongsathorn.pem@gmail.com',
      password: '41217855'
    }
  },
  methods: {
    doLogin () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(() => {
          this.$router.push('/todo')
        })
        .catch((error) => {
          console.log(error)
          alert('Invalid username or password')
        })
    }
  }
}
</script>
