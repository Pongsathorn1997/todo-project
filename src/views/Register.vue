<template>
  <div id="app">
    <v-app id="register">
      <v-app-bar color="red"
                 dense
                 dark
      >
        <v-toolbar-title>This is Register Page</v-toolbar-title>
      </v-app-bar>
      <span class="image">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="red" dark flat>
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <!--this is the input text field for username and password-->
                <v-card-text>
                  <v-form>
                    <v-text-field
                        v-model="name"
                        label="Name"
                        name="name"
                        hint="Enter your name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        name="email"
                        hint="Enter your email"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        type="password"
                        label="Password"
                        hint="At least 6 characters"
                        required
                    ></v-text-field>

                  </v-form>
                </v-card-text>
                <!-- this is the login bottom-->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" dark @click="userRegister" type="submit">Register</v-btn>
                </v-card-actions>

                </v-card>
              </v-flex>
           </v-layout>
          </v-container>
      </span>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase";
import { required, email, minLength,} from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  mixins: [validationMixin],
  validations: {
    name: {required},
    email: {required, email},
    password: {required, minLength: minLength(6)},
  },
  methods: {
    userRegister() {
      this.$v.$touch();
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((data) => {
              data.user
                  .updateProfile({
                    displayName: this.name
                  })
                  .then(() => {
                    this.$store.dispatch('authenticate/userRegister', data);
                    alert("Register Successfully !!")
                    this.$router.push('/login')
                  });
            })
            .catch(err => {
              console.log(err.message);
              alert("please try again");
            });
    }
  },
}
</script>

<style>
.image {
  height: 100vh;
  background: url("https://miro.medium.com/max/3622/1*RoXcbaF9lIqwpMjiXg54Vw.png");
  background-repeat: no-repeat;
}
</style>
