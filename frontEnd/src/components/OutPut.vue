  <script setup>
  import { useStore } from '@/stores/store.js';
  const store = useStore()
  import Icons from '@/components/Icons.vue';
  import DeleteIcon from './DeleteIcon.vue';

</script>
  <template>
    <!-- <h4>Ausgabe User List: {{ userList }}</h4> -->
    <div class="userItem" v-for="(user, index) in store.userList">
      <span>{{ index }}</span>
      <div v-for="(value, key) in user">
        <span>{{ key }}</span>
        <p>{{ value }}</p>
      </div>

      <button @click="store.editUser(index)">
        <Icons />
      </button>
      <button @click="store.deleteFromList(index)">
        <DeleteIcon />
      </button>
    </div>
  </template>
