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
const tasksList = ref(authStore.projects[projectId]?.tasks || []);
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

const addTask = () => {
  const newTask = { id: Date.now(), title: "", description: "", date: "" };
  tasksList.value.unshift(newTask);
  editedTask.value = newTask;
};

const deleteTask = (task) => {
  tasksList.value.splice(tasksList.value.indexOf(task), 1);
};

const editTask = (task) => {
  editedTask.value = task;
};

const confirmEdit = () => {
  editedTask.value = null;
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
  background-color: #17181f;
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
