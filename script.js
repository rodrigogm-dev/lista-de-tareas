// Proyecto: Lista de Tareas
;(() => {
  const btnAddTask = document.getElementById('add-task')
  btnAddTask.addEventListener('click', crearNota)
  setFocoNuevaTarea()
})()

function setFocoNuevaTarea () {
  const newTask = document.getElementById('new-task')
  newTask.value = ''
  newTask.focus()
}

function crearNota () {
  const nuevoDiv = document.createElement('div')
  const nuevoTextArea = document.createElement('textarea')
  const nuevoBtn = document.createElement('button')

  const style = document.createElement('style')
  const reglasCssDiv = `
  .nuevo-div {
      display: flex;
      align-items: start;
    }
  `
  const reglasCssTextArea = `
  .nuevo-textarea {
      width: 100%;
      height: 100%;
      background-color: #fff;
      height: 45px;
      border-radius: 5px;
      border: 2px solid black;
      padding-inline: 2px;
      margin-bottom: 10px;
      overflow: auto;
  }
  `
  const reglasCssBtn = `
  .list-btns {
    padding: 2px 5px;
  }
  `
  style.appendChild(document.createTextNode(reglasCssDiv))
  style.appendChild(document.createTextNode(reglasCssTextArea))
  style.appendChild(document.createTextNode(reglasCssBtn))
  document.head.appendChild(style)

  nuevoDiv.classList.add('nuevo-div')
  nuevoTextArea.textContent = document.getElementById('new-task').value
  setFocoNuevaTarea()

  nuevoTextArea.classList.add('nuevo-textarea')

  nuevoBtn.classList.add('list-btns')
  nuevoBtn.innerText = 'X'

  document.getElementById('task-list-wrapper').appendChild(nuevoDiv)
  nuevoDiv.appendChild(nuevoTextArea)
  nuevoDiv.appendChild(nuevoBtn)

  nuevoBtn.addEventListener('click', function () {
    this.parentElement.remove()
    setFocoNuevaTarea()
  })
}
