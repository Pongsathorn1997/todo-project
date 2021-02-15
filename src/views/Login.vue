<template>
  <div id="app">
    <v-app id="inspire">
      <section style="height: 100vh">
        <v-app-bar color="blue"
                   dense
                   dark
        >
          <v-toolbar-title>Please login with your email and password!</v-toolbar-title>
        </v-app-bar>
        <v-parallax
            dark
            src="https://cdn.dribbble.com/users/182545/screenshots/2224022/dribbble.jpg"
            style="height: 100vh"
        >
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                  <v-toolbar color="blue" dark flat>
                    <v-toolbar-title>Login form</v-toolbar-title>
                  </v-toolbar>
                  <!--this is the input text field for username and password-->
                  <v-card-text>
                    <v-form>
                      <v-text-field
                          v-model="email"
                          label="username"
                          name="username"
                          type="username">
                      </v-text-field>

                      <v-text-field
                          v-model="password"
                          label="Password"
                          name="password"
                          type="password"
                          @keyup.enter="Login"
                      >
                      </v-text-field>
                    </v-form>
                  </v-card-text>
                  <!-- this is the login bottom-->
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" dark @click="Login" type="submit">Login</v-btn>
                    <v-btn color="green" dark @click="googleLogin" type="submit">Google Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
      </section>>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase";
import { required, email } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
  name: "Login",
  data() {
    return {
        email: '',
        password: '',
    };
  },
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required },
  },
  methods: {
    Login(){
      this.$v.$touch();
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            this.$store.dispatch('Login', data.user);
            this.$store.dispatch('userRegister', { data });
            this.$router.push('/todo')
          })
          .catch((error) => {
            console.log(error.message);
            alert("Invalid username or password");
          });
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((data) => {
        this.$store.dispatch('Login', data.user);
        this.$store.dispatch('userRegister', { data });
        this.$router.push('/todo')
      }).catch((err) => {
        alert(err.message);
      });
    },
  },
};

</script>
