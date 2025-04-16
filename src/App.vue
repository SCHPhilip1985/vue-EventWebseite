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

    <button v-if="isnewHelper" @click="addToList()">
      <svg xmlns="http://www.w3.org/2000/svg" width="30"height="30"fill="currentColor" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
      <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
      <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
    </svg>
    </button>
    <button v-else @click="storeChanges()">Speichern</button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="30"height="30"fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    </button> 
    <!-- Der Abbrechen Button funktioniert nur, weil er als letzter Buttons des Formulars den autoamtsichen Page reload auslöst. -->
  </form>
<button v-else @click="changeHelper=true">
  <svg xmlns="http://www.w3.org/2000/svg" width="30"eight="30"fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
  </svg>
  </button>


  <!-- <h4>Ausgabe User List: {{ userList }}</h4> -->
  <div class="userItem" v-for="(user, index) in userList">
    <span>{{ index }}</span>
    <div v-for="(value, key) in user">
      <span>{{ key }}</span>
      <p>{{ value }}</p>
    </div>

    <button @click="editUser(index)">
      <svg xmlns="http://www.w3.org/2000/svg" width="30"height="30"fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
      </svg>  
    </button>
    <button @click="deleteFromList(index)">
      <svg xmlns="http://www.w3.org/2000/svg" width="30"height="30"fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    </button>
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

button{
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.5s;
}

button:hover{
  background-color: black;
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
