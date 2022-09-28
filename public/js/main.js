const markComplete = document.querySelectorAll('.incomplete')
const markIncomplete = document.querySelectorAll('.complete')
const delTodo = document.querySelectorAll('.delTodo')

Array.from(markComplete).forEach((el)=>{
    el.addEventListener('click', markCompleteTodo)
})

Array.from(markIncomplete).forEach((el)=>{
    el.addEventListener('click', markIncompleteTodo)
})

Array.from(delTodo).forEach((el)=>{
    el.addEventListener('click', delTodoFn)
})

async function markCompleteTodo() {
    const todoId = this.getAttribute('data-id')

    console.log(todoId)
    try{
        const response = await fetch('/games/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncompleteTodo() {
    const todoId = this.getAttribute('data-id')

    console.log(todoId)
    try{
        const response = await fetch('/games/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function delTodoFn () {
    const todoId = this.getAttribute('data-id')
    console.log(todoId)
    try{
        const res = await fetch('/games/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = res.json()
        console.log(data)
        console.log('deleted to do')
        location.reload()
    }
    catch (err) {
        console.log(err)
    }
}