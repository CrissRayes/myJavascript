// Seleccionar elementos del DOM
const taskInput = document.querySelector( '#task-input' )
const btnAddTask = document.querySelector( '#btn-add-task' )
const tasksDetail = document.querySelector( '#tasks-detail' )

// crear un array vacio de tareas
let tasks = []

// Funcion para agregar una tarea
btnAddTask.addEventListener( 'click', () => {
  // validar si el input esta vacio
  if ( taskInput.value === '' ) {
    alert( 'El campo no puede estar vacío' )
    return
  }

  // crear un objeto con la tarea
  const newTask = {
    id: Date.now(),
    name: taskInput.value,
    completed: false
  }

  // agregar la tarea al array de tareas
  tasks.push( newTask )

  // limpiar el input
  taskInput.value = ''

  // ejecutar la funcion para mostrar las tareas
  showTasks()

} )

// Funcion para mostrar las tareas
const showTasks = () => {
  let tasksList = ''
  // agregar una tarea por cada elemento del array
  tasks.forEach( task => {
    tasksList += `
    <tr>
      <td>${task.id}</td>
      <td>${task.name}</td>
      <td><input type="checkbox" ${task.completed ? 'checked' : ''} onclick="completeTask(${task.id})"></td>
      <td><button class="btn btn-danger" onclick="deleteTask(${task.id})">X</button></td>
    </tr>
    `
  } )
  // agregar el elemento al html
  tasksDetail.innerHTML = tasksList

  // contar el total de tareas
  const totalTasks = document.querySelector( '#total-tasks' )
  totalTasks.textContent = tasks.length

  // contar las tareas completadas
  const completedTasks = document.querySelector( '#completed-tasks' )
  const totalCompletedTasks = tasks.filter( task => task.completed ).length
  completedTasks.textContent = totalCompletedTasks

}

// Funcion para eliminar una tarea
const deleteTask = id => {

  // confirmacion de eliminacion
  const confirm = window.confirm( '¿Estás seguro de eliminar esta tarea?' )
  if ( !confirm ) return // si el usuario cancela la confirmacion, terminar la ejecucion de la funcion
  // filtrar el array de tareas por su id
  tasks = tasks.filter( task => task.id !== id )

  // alerta de tarea eliminada
  alert( 'Tarea eliminada' )
  // ejecutar la funcion para mostrar las tareas
  showTasks()
}

// Funcion para marcar una tarea como completada
const completeTask = id => {
  // buscar la tarea por su id
  const task = tasks.find( task => task.id === id )
  // cambiar el estado de la tarea
  task.completed = !task.completed
  // ejecutar la funcion para mostrar las tareas
  showTasks()
}
