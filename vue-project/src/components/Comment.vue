<template>
  <div id="app">
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}:</strong> {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  const { data, error } = await supabase.from('comments').select()
  if (error) {
    console.error('Error fetching comments:', error)
  } else {
    comments.value = data || []  // Ensure it's an empty array if data is null
  }
}

onMounted(() => {
  getComments()
})
</script>

<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 10px;
}
</style>
