<script setup>
import {ref} from 'vue';
import ProjectsList from "../components/ProjectsList.vue";
import Header from "../components/Header.vue";
import FilterSelectorUI from "../components/UI/FilterSelectorUI.vue";
import SearchBarUI from "../components/UI/SearchBarUI.vue";
import ButtonUI from "../components/UI/ButtonUI.vue";
import { useAuthStore } from '../store';
import axios from "axios";

const authStore = useAuthStore();
const projects = ref(authStore.projects);

const projectsSortOptions = [
  {value: 'title', name: 'Name'},
  {value: 'description', name: 'Description'},
  {value: 'date', name: 'Date'},
];
const selectedSort = ref('');

const newProjectTitle = ref('');
const newProjectDescription = ref('');

const addProject = async () => {
  try {
    const newProject = {
      id: Date.now(),
      title: newProjectTitle.value,
      tasks: [],
    };

    const response = await axios.post('http://localhost:5000/projects', newProject);
    authStore.projects.push(response.data.project);
    projects.value = authStore.projects;
  } catch (error) {
    console.error('Failed to add project:', error);
    alert('Error adding project');
  }
};

</script>

<template>
  <Header></Header>
  <div id="projects_page">
    <nav class="navbar">
      <button-u-i class='new-task-btn' @click="addProject">New Project</button-u-i>
      <filter-selector-u-i v-model="selectedSort" :options="projectsSortOptions"></filter-selector-u-i>
      <search-bar-u-i></search-bar-u-i>
    </nav>
    <projects-list :projects="projects"/>
  </div>
  <div v-if="authStore.authenticated">
    <input v-model="newProjectTitle" type="text" placeholder="Project title" />
    <input v-model="newProjectDescription" type="text" placeholder="Project description" />
    <button-u-i @click="addProject">Add Project</button-u-i>
  </div>
</template>

<style>
#projects_page {
  display: flex;
  padding-top: 50px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>