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
        {id: 1, title: "Проверить документацию", description: "Design the Home screen according to the selected concept. Read the requirements in the brief carefully. Pay attention to style, color and font." },
        {id: 2, title: "Создать макет страницы", description: "Разработать прототип интерфейса главной страницы." },
        {id: 3, title: "Настроить окружение", description: "Входимые зависимости и настроить окружение для разработки." },
        {id: 4, title: "Написать тесты", description: "Добавить модульные тесты для основных функций приложения." },
        {id: 5, title: "Добавить анимацию", description: "Реализовать анимации для улучшения пользовательского опыта." },
        {id: 6, title: "Оптимизировать запросы", description: "Снизить время выполнения запросов к серверу за счёт оптимизации." },
        {id: 7, title: "Сделать код-ревью", description: "Проверить код коллег на наличие ошибок и предложить улучшения." },
        {id: 8, title: "Обновить документацию", description: "Внести изменения в документацию, связанные с новыми функциями." },
        {id: 9, title: "Провести встречу с командой", description: "Обсудить прогресс по задачам и уточнить приоритеты." },
        {id: 10, title: "Подготовить презентацию", description: "Создать презентацию о текущем состоянии проекта для заказчика." },
      ],
      tasksSortOptions: [
        {value: 'title', name: 'Name'},
        {value: 'description', name: 'Description'},
      ],
      editedTask: null,
      selectedSort: '',
      sortedTasks: [],
    }
  },
  methods: {
    addTask(){
      const newTask = {id: Date.now(), title: '', description: ''};
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
  body{
    background-color: #17181F;
  }
  #task-page{
    display: flex;
    justify-content: center;
  }
  #task-page-content{
    display: flex;
    flex-direction: column;
    width: max-content;
  }
</style>