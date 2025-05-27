<script setup>
import { useStore } from '@/stores/store'
import DeleteIcon from './DeleteIcon.vue';
import AddToList from './AddToList.vue';
import ChangeHelper from './ChangeHelper.vue';
const store = useStore()
</script>

<template>
    <form v-if="store.changeHelper">
      <h1>Create your account</h1>
  
      <p>E-Mail</p>
      <input type="text" placeholder="E-Mail" v-model="store.account.email">
      <p>Name</p>
      <input type="text" placeholder="Name" v-model="store.account.name">
      <p>Vorname</p>
      <input type="text" placeholder="Vorname" v-model="store.account.vorname">
      <p>Alter</p>
      <input type="number" placeholder="Alter" v-model="store.account.alter">
      <p>Beruf</p>
      <input type="text" placeholder="Beruf" v-model="store.account.beruf">
      <p>Land</p>
      <select v-model="store.account.land">
        <option value="GER">Deutschland</option>
        <option value="AUS">Österreich</option>
        <option value="NL">Niederlande</option>
        <option value="ZH">Schweiz</option>
      </select>
      <p>Ich habe alles verstanden</p>
      <input type="checkbox" v-model="store.account.verstanden">
      <p>Ich habe nicht verstanden</p>
      <input type="checkbox" v-model="store.account.nichtverstanden">
      <p>Admin?</p>
      <input type="checkbox" v-model="store.account.admin">
  
      <button v-if="store.isnewHelper" @click="store.addToList()">
        <AddToList />
      </button>
      <button v-else @click="store.storeChanges()">Speichern</button>
      <button>
        <DeleteIcon />
      </button> 
      <!-- Der Abbrechen Button funktioniert nur, weil er als letzter Buttons des Formulars den autoamtsichen Page reload auslöst. -->
    </form>
  <button v-else @click="store.changeHelper=true">
    <ChangeHelper />
    </button>

</template>

<style scoped>

</style>