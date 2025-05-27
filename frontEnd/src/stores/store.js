import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {

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

return { account, userList, changeHelper, isnewHelper, 
    addToList, deleteFromList, editUser, storeChanges

}})
