var addTodobtn = document.querySelector('.addtodo');
var data = JSON.parse(localStorage.getItem('todolist')) || [];
var todoList = document.querySelector('.todo-list');
updateList(data);

/* var select = 'all';
var selectsection = document.querySelector('.triangle-1')


selectsection.addEventListener('click', setitem, false)


function setitem(e) {
    var x = e.clientX;
    var y = e.clientY;
    console.log(x, y)
} */
$(".dropdown-btn").click(function(){
    $(".dropdown-menu").toggleClass('show');
  });

addTodobtn.addEventListener('click', addTodo, false);

function keyenter(event) {
    if (event.keyCode === 13) {
        console.log(event)
        addTodo(event);
        document.querySelector('.todo-text').value = '';
    }
}


function addTodo(e) {
    e.preventDefault();
    var addtext = document.querySelector('.todo-text').value;
    if (addtext === '') {
        return
    } else
        data.push(addtext);
    localStorage.setItem('todolist', JSON.stringify(data))
    updateList(data)
    document.querySelector('.todo-text').value = '';
}


function updateList(item) {
    var str = '';
    var length = item.length;
    for (var i = 0; i < length; i++) {
        str += ` <div class="todos" >
        <div class="todos-circle"></div>
        <div class="todos-text mr-auto">${item[i]}</div>
        <div class="todos-play">
            <i class="far fa-play-circle"></i>
        </div>
    </div >`

    }
    todoList.innerHTML = str;
}

