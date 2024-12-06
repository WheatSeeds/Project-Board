<script>
  export default {
    data(){
      return {
        task:{
          title: '',
          description: '',
          date: '',
          priority: '',
        },
        dropdownVisible: false,
      }
    },
    props:{
      task: {
        type: Object,
        required: true,
      },
      editedTask: {
        type: Object,
        required: true,
      }
    },
    methods: {
      deleteTask(task){
        this.$emit('deleteTask', task);
      },
      editTask(task){
        this.$emit('editTask', task);
      },
      confirmEdit(){
        this.task.id = Date.now();
        this.$emit('confirmEdit', this.task)
        this.task = {
          title: '',
          description:'',
          date: '',
          priority: '',
        }
      }

    }
  }
</script>

<template>
  <div class="task" v-if="!(editedTask == task)">
    <div class="task-content">
    <div class="task-title">
      <span class="task-title-content">{{task.title}}</span>
      <div
          class="priorityBlock"
          :class="{
          'high-priority': task.priority === 'High',
          'medium-priority': task.priority === 'Medium',
          'low-priority': task.priority === 'Low'
        }"><span>{{task.priority}}</span>
      </div>
    </div>

    <div class="dropdown" @click="dropdownVisible = !dropdownVisible">
      <img class="dropdown-image" alt="" src="../../public/images/icons/dots.svg">
      <div class="dropdown-content" v-if="dropdownVisible">
        <button class="dropdown-btn" @click="editTask(task)">Edit</button>
        <button class="dropdown-btn" @click="deleteTask(task)">Delete</button>
      </div>
    </div>
    <span class="task-description">{{task.description}}</span>
    <div class="task-date">
      <img class="task-date-img" alt="" src="../../public/images/icons/calendar.svg">
      <span class="task-date-content"> {{ new Date(task.date)
          .toLocaleDateString(
              'en-EN',
              { day: 'numeric', month: 'long', year: 'numeric' }
          ) }}
    </span>
    </div>
    </div>
  </div>

  <div class="task-edit" v-else>
    <form class="task-content">
      <div class="task-title">
        <input class="task-title-edit" v-model="task.title" placeholder="Название">
        <select>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <input class="task-description" v-model="task.description" placeholder="Описание">

        <input type="date" class="task-date-content" v-model="task.date" placeholder="Date">
        <button id="add_task_btn" @click="confirmEdit">Done</button>
    </form>
  </div>
</template>

<style>
  .task-title-edit{
    color: #D3D3D6;
    font-weight: 600;
    font-size: 18px;
    background-color: #17181F;
    border: none

  }
  .task-content{
    padding: 16px;
  }
  .dropdown-content{
    display: flex;
    flex-direction: column;
    width: 150px;
    position: absolute;
    border-radius: 16px;
    overflow: hidden;
  }
  .dropdown-content > button{
    height: 25px;
    color: white;
    background-color: #272835;
    border: none;
  }
  .dropdown-image{
    width: 36px;
  }
  .priorityBlock{
    height:24px;
    width: max-content;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .low-priority{
    background-color: #00B81D;
  }
  .medium-priority{
    background-color: #EF9712;
  }
  .high-priority{
    background-color: #D34748;
  }
  .task{
    display: flex;
    flex-direction: column;
  }
  .task, .task-edit{
    background-color: #20212C;
    width: 790px;
    min-height: 135px;
    max-height: max-content;
    border-radius: 16px;
    color: white;
    display: grid;
  }
  .task-title, .task-description, .task-date-content, .priorityBlock{
    font-family: 'Montserrat', sans-serif;
    color: #828388;
  }
  .priorityBlock{
    color: white;
  }
  .task-title{
    color: #D3D3D6;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 16px;
    grid-area: 1 / 1 / 2 / 5;
  }
  .task-description{
    grid-area: 2 / 1 / 3 / 6;
  }
  .task-description, .task-date-content{
    font-weight: 400;
    font-size: 16px;
  }
  .task-date{
    display: flex;
    align-items: center;
    grid-area: 3 / 1 / 3 / 6;
  }
  .task-date-img{
    width: 24px;
    height: auto;
  }

  .task-content{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr auto 1fr;
  }
  .dropdown{
    grid-area: 1 / 5 / 2 / 6;
    justify-self: end;
  }
</style>