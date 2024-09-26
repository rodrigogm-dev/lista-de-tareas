// Proyecto: Lista de Tareas
;(() => {
  const btnAddTask = document.getElementById('add-task')
  btnAddTask.addEventListener('click', crearTarea)
  setFocoNuevaTarea()
})()

function setFocoNuevaTarea () {
  const newTask = document.getElementById('new-task')
  newTask.value = ''
  newTask.focus()
}

function crearTarea () {
  const style = document.createElement('style')
  const reglasCssDiv = `
  .nuevo-div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      // border: 1px solid black;
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
      overflow: auto;
  }
  `
  const reglasCssBtn = `
  .list-btns {
    padding: 2px 5px;
    align-self: start;
  }
  `
  const reglasCssCheckBox = `
  .list-checkboxes {
    width: 20px;
    height: 20px;
  }
  `
  style.appendChild(document.createTextNode(reglasCssDiv))
  style.appendChild(document.createTextNode(reglasCssTextArea))
  style.appendChild(document.createTextNode(reglasCssBtn))
  style.appendChild(document.createTextNode(reglasCssCheckBox))
  document.head.appendChild(style)

  const nuevoDiv = document.createElement('div')
  const nuevoTextArea = document.createElement('textarea')
  const nuevoBtn = document.createElement('button')
  const nuevoCheckBox = document.createElement('input')
  nuevoCheckBox.type = 'checkbox'

  nuevoDiv.classList.add('nuevo-div')
  nuevoTextArea.classList.add('nuevo-textarea')
  nuevoBtn.classList.add('list-btns')
  nuevoCheckBox.classList.add('list-checkboxes')

  nuevoTextArea.textContent = document.getElementById('new-task').value
  setFocoNuevaTarea()
  nuevoBtn.innerText = 'X'

  document.getElementById('task-list-wrapper').appendChild(nuevoDiv)
  nuevoDiv.appendChild(nuevoCheckBox)
  nuevoDiv.appendChild(nuevoTextArea)
  nuevoDiv.appendChild(nuevoBtn)

  nuevoCheckBox.addEventListener('change', function () {
    if (this.checked) {
      nuevoTextArea.disabled = true
      nuevoTextArea.style.backgroundColor = 'lightgray'
    } else {
      nuevoTextArea.disabled = false
      nuevoTextArea.style.backgroundColor = 'white'
    }
  })

  nuevoBtn.addEventListener('click', function () {
    this.parentElement.remove()
    setFocoNuevaTarea()
  })
}
