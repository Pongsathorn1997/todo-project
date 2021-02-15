<template>
  <div id="todo">
    <v-container align-center justify-center>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 justify-center align-center>
          <v-text-field label="What needs to be done?" @keydown.enter="createTodo" v-model="inputTodo">
            <v-icon slot="append" color="blue" > mdi-plus </v-icon>
          </v-text-field>
          <v-card v-for="items in todos" v-bind:key="items.text" v-model="inputTodo" class="mx-auto">
            <v-card-title>
              <v-checkbox color="success"></v-checkbox>
              {{ items.text }}
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon color="orange">mdi-plus</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
          <v-divider></v-divider>
          <br>
          <div class="text-center">
            <v-btn class='absolute' @click.prevent="userLogout"> Logout </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import firebase from 'firebase';
import 'firebase/database';

export default {
  name: 'Todos',
  data() {
    return {
      todoRef: null,
      todos: {},
      inputTodo: '',
    };
  },
  created() {
    this.todoRef = firebase.database().ref(`/users/${this.$store.state.auth.user.uid}`);
  },
  mounted() {
    this.todoRef.on('value', (snapshot) => {
      this.todos = snapshot.val();
      console.log(this.todos);
    });
  },
  methods: {
    createTodo() {
      this.todoRef.push({
        text: this.inputTodo.trim(),
        isDone: false,
      });
      this.inputTodo = '';
    },
    userLogout() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$store.dispatch('userLogout', null);
            this.$router.push('/login')
          });
    },
  },
};
</script>
<style scoped>
</style>



























<!--<template>-->
<!--  <div>-->
<!--    <v-content>-->
<!--      <v-container>-->
<!--        <p class="headline">{{ day }}, {{ date }}{{ ord }} {{ year }}</p>-->

<!--        <h2 class="display-1 pl-3">-->
<!--          Todo List:&nbsp;-->
<!--          <v-fade-transition leave-absolute>-->
<!--              <span :key="`tasks-${tasks.length}`">-->
<!--                {{ tasks.length }}-->
<!--              </span>-->
<!--          </v-fade-transition>-->
<!--        </h2>-->

<!--        <br>-->

<!--        <v-text-field-->
<!--            label="Add Todo"-->
<!--            outlined-->
<!--            v-model="newTask"-->
<!--            @keydown.enter="addItem"-->
<!--        >-->

<!--          <v-fade-transition slot="append">-->
<!--            <v-icon v-if="newTask" @click="addItem">-->
<!--            </v-icon>-->
<!--          </v-fade-transition>-->
<!--        </v-text-field>-->

<!--        <v-divider class="mt-3"></v-divider>-->

<!--        <v-toolbar>-->
<!--          <v-tabs-->
<!--              background-color="yellow"-->
<!--              grow-->
<!--          >-->

<!--            <v-tab>-->
<!--                <strong class="mx-3 info&#45;&#45;text text&#45;&#45;darken-3"> Remaining: {{ calculateRemaining }} </strong>-->
<!--            </v-tab>-->

<!--            <v-tab>-->
<!--                <strong class="mx-3 green&#45;&#45;text"> Completed: {{ calculateCompleted }} </strong>-->
<!--            </v-tab>-->

<!--          </v-tabs>-->
<!--        </v-toolbar>-->

<!--        <v-divider vertical></v-divider>-->

<!--        <v-spacer></v-spacer>-->

<!--        <strong class="mx-3 black&#45;&#45;text"> Task Completed {{ calculateProgress }} % </strong>-->

<!--        <v-progress-circular :value="calculateProgress" class="mr-2"></v-progress-circular>-->

<!--        <v-divider class="mb-3"></v-divider>-->

<!--        <v-card v-if="tasks.length > 0" color="#90CAF9">-->
<!--          <v-slide-y-transition class="py-0" group tag="v-list">-->
<!--            <template v-for="(task, i) in tasks">-->

<!--              <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>-->

<!--              <v-list-item-title :key="`${i} - ${task.text}`">-->

<!--                <v-list-tile-action>-->

<!--                  <v-checkbox v-model="task.done" color="success">-->
<!--                    <div-->
<!--                        slot="label"-->
<!--                        :class="(task.done && 'text-decoration-line-through') || 'text&#45;&#45;primary'"-->
<!--                        v-text="task.text"-->
<!--                    >Line-through text-->
<!--                    </div>-->
<!--                  </v-checkbox>-->

<!--                  <v-list-item-subtitle>Date Created: {{ date }}{{ ord }} {{ day }} {{ year }}</v-list-item-subtitle>-->

<!--                  <v-btn icon color="red" @click="removeTodo(i)">-->
<!--                    <v-icon>mdi-delete</v-icon>-->
<!--                  </v-btn>-->

<!--                </v-list-tile-action>-->

<!--                <v-spacer></v-spacer>-->

<!--              </v-list-item-title>-->
<!--            </template>-->
<!--          </v-slide-y-transition>-->
<!--        </v-card>-->
<!--      </v-container>-->
<!--    </v-content>-->
<!--    <v-btn-->
<!--        color="#E53935"-->
<!--        type="submit"-->
<!--        class="mr-4"-->
<!--        @click="userLogout"-->
<!--    >-->
<!--      Logout-->
<!--    </v-btn>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import firebase from "firebase";-->

<!--export default {-->
<!--  name: "Todo",-->
<!--  data() {-->
<!--    return {-->
<!--      user: null,-->
<!--      tasks: [-->
<!--        {-->
<!--          done: false,-->
<!--          text: 'Finish Project',-->
<!--        },-->
<!--      ],-->
<!--      newTask: null,-->
<!--      day: this.todoDay(),-->
<!--      date: new Date().getDate(),-->
<!--      ord: this.nth(new Date().getDate()),-->
<!--      year: new Date().getFullYear(),-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    calculateCompleted() {-->
<!--      return this.tasks.filter(task => task.done).length;-->
<!--    },-->
<!--    calculateProgress() {-->
<!--      if ((isNaN(this.calculateCompleted / this.tasks.length) * 100)) {-->
<!--        return 100;-->
<!--      }-->
<!--      else {-->
<!--        return (this.calculateCompleted / this.tasks.length) * 100;-->
<!--      }-->
<!--    },-->
<!--    calculateRemaining() {-->
<!--      return this.tasks.length - this.calculateCompleted;-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    userLogout() {-->
<!--      firebase.auth()-->
<!--          .signOut()-->
<!--          .then((data) => {-->
<!--            this.$store.dispatch('userLogout', false);-->
<!--            this.$store.dispatch('setUser', data);-->
<!--            this.$router.push('/login')-->
<!--          })-->
<!--    },-->
<!--    addItem() {-->
<!--      if (this.newTask.text !== '') {-->
<!--        this.tasks.push({-->
<!--          done: false,-->
<!--          text: this.newTask-->
<!--        });-->
<!--      }-->
<!--      this.newTask = null;-->
<!--    },-->
<!--    removeTodo(index) {-->
<!--      this.tasks.splice(index, 1);-->
<!--    },-->
<!--    todoDay() {-->
<!--      const d = new Date();-->
<!--      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];-->
<!--      return days[d.getDay()];-->
<!--    },-->
<!--    nth(d) {-->
<!--      if (d > 3 && d < 21) return 'th';-->
<!--      switch (d % 10) {-->
<!--        case 1:-->
<!--          return "st";-->
<!--        case 2:-->
<!--          return "nd";-->
<!--        case 3:-->
<!--          return "rd";-->
<!--        default:-->
<!--          return "th";-->
<!--      }-->
<!--    },-->
<!--  }-->
<!--};-->
<!--</script>-->
