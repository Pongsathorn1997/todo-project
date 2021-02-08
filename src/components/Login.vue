<template>
    <div id="app">
        <v-app id="inspire">
            <v-content>

<!--                This is the upper blue thing-->
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
<!--                                this is the input text field for username and password-->
                                <v-card-text>
                                    <v-form>
                                        <v-text-field v-model="username" label="username" name="username" type="username"></v-text-field>

                                        <v-text-field v-model="password"  label="Password" name="password" type="password"></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-text v-if="errorMessage">{{errorMessage}} </v-card-text>
<!--                                this is the login bottom-->
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click="doLogin">Login</v-btn>
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
export default {
  data () {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    doLogin () {
      if (this.username === 'user' && this.password === 'pass') {
        this.$router.push({ name: 'todo' })
      } else {
        this.errorMessage = 'Invalid username or password'
      }
    }
  }

}
</script>
