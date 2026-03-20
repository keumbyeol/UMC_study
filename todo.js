const todoInput = document.querySelector('.todo-list');
const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');


todoInput.addEventListener('keypress', function(e){
    if(e.key=='Enter' && todoInput.value.trim()!==""){
        addTodo(todoInput.value);
        todoInput.value="";
    }
})


function addTodo(text) {
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span>${text}</span>
    <button class="complete-btn" onclick="completeTask(this)">완료</button>
  `;
  
  todoList.appendChild(li);
}


function completeTask(btn) {
  const li = btn.parentElement; 
  
  li.classList.add('completed');
  
 
  btn.remove();
  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '삭제';
  deleteBtn.style.background = '#ff5252'; 
  deleteBtn.className = 'complete-btn'; 
  
  deleteBtn.onclick = function() {
    li.remove(); 
  };
  
  li.appendChild(deleteBtn);
  
 
  completedList.appendChild(li);
}