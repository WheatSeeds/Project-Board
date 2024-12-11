<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import TasksList from "../components/TasksList.vue";
import ButtonUI from "../components/UI/ButtonUI.vue";
import SearchBarUI from "../components/UI/SearchBarUI.vue";
import FilterSelectorUI from "../components/UI/FilterSelectorUI.vue";
import Header from "../components/Header.vue";
import { useAuthStore } from "../store/index.js";

const route = useRoute();
const authStore = useAuthStore();

const projectId = route.params.projectId;
const project = authStore.projects.find(p => p._id === projectId);
const tasksList = ref(project ? project.tasks : []);
const tasksSortOptions = [
  { value: "title", name: "Name" },
  { value: "description", name: "Description" },
  { value: "date", name: "Date" },
  { value: "priority", name: "Priority" },
];
const editedTask = ref(null);
const selectedSort = ref("");
const searchQuery = ref("");
const priorities = { High: 3, Medium: 2, Low: 1 };

const addTask = async () => {
  const newTask = { id: Date.now(), title: "", description: "", date: "", priority: "Low" };
  tasksList.value.push(newTask);
  editedTask.value = newTask;
};

const editTask = async (task) => {
  editedTask.value = task;
};

const sortedTasks = computed(() => {
  return [...tasksList.value].sort((a, b) => {
    if (selectedSort.value === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (selectedSort.value === "priority") {
      return priorities[b.priority] - priorities[a.priority];
    } else if (a[selectedSort.value] && b[selectedSort.value]) {
      return a[selectedSort.value].localeCompare(b[selectedSort.value]);
    } else {
      return 0;
    }
  });
});

const filteredTasks = computed(() => {
  return sortedTasks.value.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <Header />
  <div id="task-page">
    <div id="task-page-content">
      <nav class="navbar">
        <button-u-i class="new-task-btn" @click="addTask">New Task</button-u-i>
        <filter-selector-u-i v-model="selectedSort" :options="tasksSortOptions"></filter-selector-u-i>
        <search-bar-u-i v-model="searchQuery"></search-bar-u-i>
      </nav>
      <tasks-list
          :tasks="filteredTasks"
          :editedTask="editedTask"
          @deleteTask="deleteTask"
          @editTask="editTask"
          @confirmEdit="confirmEdit"
      />
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  gap: 16px;
  margin: 16px 0;
}
body {
  background: rgb(23,24,31);
  background: -moz-linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
  background: -webkit-linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
  background: linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#17181f",endColorstr="#000000",GradientType=1);
}
#task-page {
  padding-top: 50px;
  display: flex;
  justify-content: center;
}
#task-page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
}
</style>