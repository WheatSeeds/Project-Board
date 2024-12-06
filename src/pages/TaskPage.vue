<script>
import TasksList from "../components/TasksList.vue";
import ButtonUI from "../components/UI/ButtonUI.vue";
import SearchBarUI from "../components/UI/SearchBarUI.vue";
import FilterSelectorUI from "../components/UI/FilterSelectorUI.vue";

export default {
  components: {TasksList, ButtonUI, SearchBarUI, FilterSelectorUI},
  data(){
    return{
      tasks: [
        {
          id: 1,
          title: "Fix login form validation",
          description: "Ensure all fields in the login form have proper validation. Add error messages for incorrect inputs and test thoroughly across browsers.",
          date: "2024-12-15",
          priority: "High"
        },
        {
          id: 2,
          title: "Update user profile page",
          description: "Redesign the user profile page to include new fields: phone number, address, and profile picture. Ensure responsive design compatibility.",
          date: "2024-12-18",
          priority: "Medium"
        },
        {
          id: 3,
          title: "Write API documentation",
          description: "Document all endpoints of the authentication API, including request formats, response formats, and example usage. Use clear and concise language.",
          date: "2024-12-20",
          priority: "Low"
        },
        {
          id: 4,
          title: "Prepare presentation for stakeholders",
          description: "Create a PowerPoint presentation summarizing project progress, challenges faced, and upcoming milestones. Include visuals and graphs.",
          date: "2024-12-22",
          priority: "High"
        },
        {
          id: 5,
          title: "Optimize database queries",
          description: "Analyze slow database queries and implement optimizations to improve performance. Focus on large data sets and frequently accessed tables.",
          date: "2024-12-25",
          priority: "Medium"
        },
        {
          id: 6,
          title: "Test mobile app compatibility",
          description: "Perform thorough testing of the mobile app on both iOS and Android devices. Focus on edge cases and responsiveness issues.",
          date: "2024-12-28",
          priority: "High"
        },
        {
          id: 7,
          title: "Create onboarding flow",
          description: "Design and develop an intuitive onboarding process for new users. Include tooltips, guides, and helpful resources.",
          date: "2024-12-30",
          priority: "Medium"
        },
        {
          id: 8,
          title: "Add unit tests for payment module",
          description: "Write unit tests for all functions in the payment module. Aim for at least 90% test coverage and ensure existing tests pass.",
          date: "2025-01-05",
          priority: "Low"
        },
        {
          id: 9,
          title: "Set up CI/CD pipeline",
          description: "Configure a continuous integration and deployment pipeline for the project. Automate testing, builds, and deployment steps.",
          date: "2025-01-10",
          priority: "High"
        },
        {
          id: 10,
          title: "Design email templates",
          description: "Create responsive email templates for marketing campaigns, including welcome emails, password reset, and newsletters. Follow the brand's style guide.",
          date: "2025-01-15",
          priority: "Medium"
        }
      ]
      ,
      tasksSortOptions: [
        {value: 'title', name: 'Name'},
        {value: 'description', name: 'Description'},
        {value: 'date', name: 'Date'},
        {value: 'priority', name: 'Priority'},
      ],
      editedTask: null,
      selectedSort: '',
      sortedTasks: [],
    }
  },
  methods: {
    addTask(){
      const newTask = {id: Date.now(), title: '', description: '', date: ''};
      this.tasks.unshift(newTask);
      this.editedTask = newTask;
    },
    deleteTask(task){
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    editTask(task){
      this.editedTask = task;
    },
    confirmEdit(task){
      this.editedTask = null;
    }
  },
  computed:{
    sortedTasks(){
      return [...this.tasks]
          .sort((a,b)=>
          a[this.selectedSort]?.
          localeCompare(b[this.selectedSort]));
    }
  }
}
</script>

<template>

  <div id="task-page">
    <div id="task-page-content">
      <nav class="navbar">
        <button-u-i class='new-task-btn' @click="addTask">New Task</button-u-i>
        <filter-selector-u-i v-model="selectedSort" :options="tasksSortOptions"></filter-selector-u-i>
        <search-bar-u-i></search-bar-u-i>
      </nav>
      <tasks-list
          :tasks="sortedTasks"
          :editedTask="editedTask"
          @deleteTask="deleteTask"
          @editTask="editTask"
          @confirmEdit="confirmEdit"
      />
    </div>
  </div>
</template>

<style>
  .navbar{
    display: flex;
    gap: 16px;
    margin: 16px 0;
  }
  body{
    background-color: #17181F;
  }
  #task-page{
    display: flex;
  }
  #task-page-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
  }
</style>