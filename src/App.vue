<script setup>
import { ref } from "vue"

const account = ref({})
const userList = ref(JSON.parse(localStorage.getItem("User List")) || [])
const changeHelper = ref(false)
const isnewHelper = ref(true)

function addToList() {
  console.log(account.value)
  userList.value.push(JSON.parse(JSON.stringify(account.value)))
  localStorage.setItem("User List", JSON.stringify(userList.value))
  account.value = {}
}

function deleteFromList(index) {
  userList.value.splice(index, 1)
  localStorage.setItem("User List", JSON.stringify(userList.value))
}


function editUser(index) {
  account.value = userList.value[index]
  isnewHelper.value = false
  changeHelper.value=true
  // console.log(changeHelper.value)
}

function storeChanges() {
  localStorage.setItem("User List", JSON.stringify(userList.value))
  account.value = {}
  isnewHelper.value = false
}
</script>

<template>
  <form v-if="changeHelper">
    <h1>Create your account</h1>

    <p>E-Mail</p>
    <input type="text" placeholder="E-mail" v-model="account.email">
    <p>Name</p>
    <input type="text" placeholder="Name" v-model="account.name">
    <p>Vorname</p>
    <input type="text" placeholder="Vorname" v-model="account.vorname">
    <p>Alter</p>
    <input type="number" placeholder="Alter" v-model="account.alter">
    <p>Beruf</p>
    <input type="text" placeholder="Beruf" v-model="account.beruf">
    <p>Land</p>
    <select v-model="account.land">
      <option value="GER">Deutschland</option>
      <option value="AUS">Österreich</option>
      <option value="NL">Niederlande</option>
      <option value="ZH">Schweiz</option>
    </select>
    <p>Ich habe alles verstanden</p>
    <input type="checkbox" v-model="account.verstanden">
    <p>Ich habe nicht verstanden</p>
    <input type="checkbox" v-model="account.nichtverstanden">
    <p>Admin?</p>
    <input type="checkbox" v-model="account.admin">

    <button v-if="isnewHelper" @click="addToList()">Create your account</button>
    <button v-else @click="storeChanges()">Speichern</button>
    <button>Abbrechen</button> 
    <!-- Der Abbrechen Button funktioniert nur, weil er als letzter Buttons des Formulars den autoamtsichen Page reload auslöst. -->
  </form>
<button v-else @click="changeHelper=true">New</button>


  <!-- <h4>Ausgabe User List: {{ userList }}</h4> -->
  <div class="userItem" v-for="(user, index) in userList">
    <span>{{ index }}</span>
    <div v-for="(value, key) in user">
      <span>{{ key }}</span>
      <p>{{ value }}</p>
    </div>

    <button @click="editUser(index)">Change</button>
    <button @click="deleteFromList(index)">X</button>



  </div>


</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  color: blue
}

form {
 position: absolute;
 background-color: white;
 width: 100%;
 padding: 40px;
}

.userItem {
  padding: 5px;
  margin: 10px auto;
  box-shadow: 0 0 3px grey;
  border-radius: 5px;
  width: 90%;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
}

span {
  font-size: smaller;
  color: grey;
}

p {
  margin-top: 0;
}
</style>
