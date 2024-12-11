  <script>
  import ButtonUI from "./UI/ButtonUI.vue";

  export default {
    data() {
      return {
        project:{
          title: '',
        },
        dropdownVisible: false,
      }
    },
    components: { ButtonUI },
    props: {
      projectTitle: {
        type: String,
        required: true,
      },
      project: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
      editedProject: {
        type: Object,
        required: true,
      },
    },
    methods: {
      confirmEdit() {
        this.$emit('confirmEdit', this.project);
        this.project ={
          id: '',
          title: '',
        }
      },
      deleteProject(){
        this.$emit('deleteProject', this.project);
      },
      editProject(){
        this.$emit('editProject', this.project);
      }
    },
  };
  </script>

  <template>
    <div class="project" v-if="editedProject !== project">
      <router-link class="project_title"
          :to="{ name: 'tasks', params: { projectId: project._id || 1} }"
      >{{ project.title }}</router-link>
      <span>Tasks: {{project.tasks.length}}</span>
      <div class="dropdown" @click="dropdownVisible = !dropdownVisible">
        <img class="dropdown-image" alt="" src="../../public/images/icons/dots.svg">
        <div class="dropdown-content" v-if="dropdownVisible">
          <button class="dropdown-btn" @click="editProject">Edit</button>
          <button class="dropdown-btn" @click="deleteProject">Delete</button>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="project-edit">
        <input
            v-model="project.title"
            type="text"
            placeholder="Project title"
        />
        <button-u-i @click="confirmEdit">Done</button-u-i>
      </div>
    </div>
  </template>

  <style scoped>
  .project_title{
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 550;
    background-image: linear-gradient(90deg, #fd48f8, #6929ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .project-edit > input{
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 550;
    width: 200px;
    background: rgb(0,0,0,0);
    border: none;
    color: white;
  }
  .project-edit{
    display: flex;
    gap: 16px;
    background-color: #20212c;
  }
  .project, .project-edit {
    width: 250px;
    height: 200px;
    background-color: #20212c;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
  }
  .project > span,.project-edit > span {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 550;
  }
  </style>
