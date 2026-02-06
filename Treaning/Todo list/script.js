//Array for todo list !
const TodoList = [{
  TodoText : 'Macke Dinner',
  TodoDate : '2026-01-15',
  TodoTime : '21:06'
},{
  TodoText : 'Macke Dinner',
  TodoDate : '2026-01-15',
  TodoTime : '21:06'
},{
  TodoText : 'Macke Dinner',
  TodoDate : '2026-01-15',
  TodoTime : '21:06'
}];

Render();

function Render () {
  //save loop result !
  let TodoListHTML = '';
  //loop for adding result to web page !
  for (let i = 0 ; i < TodoList.length ; i++) {
    const TodoTextObjeckt = TodoList[i];
    const {TodoText} = TodoTextObjeckt; 
    const {TodoDate} = TodoTextObjeckt;
    const {TodoTime} = TodoTextObjeckt;
    const Num = i+1
    const html = `
    <div>${Num}</div>
    <div><input type="checkbox" class="Input-check"></div>
    <div class="list-text">${TodoText}</div>  
    <div class="list-text">${TodoDate}</div>
    <div class="list-text">${TodoTime}</div>
    <button onclick="
      TodoList.splice(${i} , 1);
      Render();"
      class="todo-item-delete">
      Delete
    </button>
    `;
    TodoListHTML += html;
  };
  document.querySelector('.todo-list').innerHTML = TodoListHTML;
};

//tacke the value from web page !
function TackeValue () {
  //acsses to deta from web page and save in to the vareubel !
  const InputText = document.querySelector('.input-todo-js');
  const TodoInputText = InputText.value;

  const InputDate = document.querySelector('.input-todo-date-js');
  const TodoInputDate = InputDate.value;
  
  const InputTime = document.querySelector('.input-todo-time-js');
  const TodoInputTime = InputTime.value;
  //update date for todo list objeckt from top !
  TodoList.push({
    TodoText: TodoInputText,
    TodoDate: TodoInputDate,
    TodoTime: TodoInputTime
  }) ;
  //clear the placsholder in web !
  InputText.value = '';
  InputDate.value = '';
  InputTime.value = '';
  //show list in web !
  Render();
};