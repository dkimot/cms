<template>
  <div>
    <h2>Welcome to the Graffiti CMS</h2>
    <form class="pure-form" style="margin: auto; max-width: 400px;" v-on:submit.prevent="onSubmit">
      <fieldset>
        <input type="text" name="user" placeholder="Username" v-model="user">
        <input type="password" name="password" placeholder="Password" v-model="password">
        <fieldset class="inline">
          <p>Login as:</p>
          <label for="admin">
            <input type="radio" id="admin" name="typeRadios" value="admin" v-model="type">
            Admin
          </label>
          <label for="dev">
            <input type="radio" id="dev" name="typeRadios" value="dev" v-model="type">
            Developer
          </label>
          <label for="team">
            <input type="radio" id="team" name="typeRadios" value="team" v-model="type">
            Team Member
          </label>
        </fieldset><br />
        <button class="pure-button" @click="setUser({user: user, password: password, type: type,})">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'auth',
  methods: mapActions([
    'setUser',
  ]),
};
</script>

<style lang='scss' scoped>

fieldset > input[type="text"] {
  margin: auto;
  margin-bottom: 8px;
}

fieldset.inline {
  display: inline;
}

</style>
