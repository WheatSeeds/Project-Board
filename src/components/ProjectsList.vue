  <script>
  import project from "./Project.vue";
    export default {
      components: {project},
      props: {
        projects: {
          type: Array,
          required: true
        },
        editedProject: {
          type: Object,
          required: true,
        }
      }
    }
  </script>

  <template>
    <div id="project_list">
      <project
          v-for="(project, index) in projects"
          :editedProject="editedProject"
          :project="project"
          :index="index"
          @confirmEdit="$emit('confirmEdit', project)"
          @deleteProject="$emit('deleteProject', project)"
          @editProject="$emit('editProject', project)"
      />
    </div>
  </template>

  <style>
    #project_list {
      max-width: 1024px;
      display: grid;
      gap: 20px;
      padding: 16px;
      grid-template-columns: repeat(auto-fill, 250px);
      justify-items: center;
    }
  </style>