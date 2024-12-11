  <script setup>
  import {computed, ref} from 'vue';
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
    { value: 'title', name: 'Name' },
    { value: 'description', name: 'Description' },
  ];
  const selectedSort = ref('');
  const editedProject = ref(null)

  const addProject = async () => {
    const newProject = {
      title: '',
      tasks: []}
    editedProject.value = newProject;
    projects.value.unshift(newProject);
  }

  const searchQuery = ref("");
  const editProject = async (project) => {
    console.log(project)
    editedProject.value = project;
  };
  const deleteProject = async (projectId) => {
    try {
      const token = authStore.token;
      const response = await axios.delete(
          `http://localhost:5000/projects/${projectId._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
      );

      // Удаляем проект из локального состояния
      const index = projects.value.findIndex(p => p._id === projectId._id);
      if (index !== -1) {
        projects.value.splice(index, 1);
      }

      alert('Project deleted successfully!');
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project. Please try again later.');
    }
  };
  const sortedProjects = computed(() => {
    return projects.value.slice().sort((a, b) => {
      if (a[selectedSort.value] && b[selectedSort.value]) {
        return a[selectedSort.value].localeCompare(b[selectedSort.value]);
      }
      return 0;
    });
  });

  const filteredTasks = computed(() => {
    return sortedProjects.value.filter((project) =>
        project?.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  </script>

  <template>
    <Header></Header>
    <div id="projects_page">
      <nav class="navbar">
        <button-u-i class="new-task-btn" @click="addProject">New Project</button-u-i>
        <filter-selector-u-i v-model="selectedSort" :options="projectsSortOptions"></filter-selector-u-i>
        <search-bar-u-i v-model="searchQuery"></search-bar-u-i>
      </nav>
      <projects-list
          :projects="filteredTasks"
          :editedProject="editedProject"
          @confirmEdit="confirmEdit"
          @deleteProject="deleteProject"
          @editProject="editProject"></projects-list>
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