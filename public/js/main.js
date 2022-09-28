const markComplete = document.querySelectorAll('.incomplete')
const markIncomplete = document.querySelectorAll('.complete')

Array.from(markComplete).forEach((el)=>{
    el.addEventListener('click', markCompleteTodo)
})

Array.from(markIncomplete).forEach((el)=>{
    el.addEventListener('click', markIncompleteTodo)
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