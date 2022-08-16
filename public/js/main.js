const delaytay = document.querySelectorAll('.fa-trash')
const updateCompletion = document.querySelectorAll('.fa-check')
const replay = document.querySelectorAll('.fa-backward')
const playing = document.querySelectorAll('.fa-play')
const favorite = document.querySelectorAll('.fa-star')
const unfavorite = document.querySelectorAll('.fa-star-half')

Array.from(delaytay).forEach( (el) => {
    el.addEventListener('click', delaytayItem)
})

Array.from(updateCompletion).forEach(
    (el) => el.addEventListener('click', markCompletion)
)

Array.from(replay).forEach(
    el => el.addEventListener('click', replayGame)
)

Array.from(playing).forEach(
    el => el.addEventListener('click', markPlaying)
)

Array.from(favorite).forEach(
    el => el.addEventListener('click', markFavorite)
)

Array.from(unfavorite).forEach(
    el => el.addEventListener('click', markUnfavorite)
)

async function delaytayItem() {
    console.log('click')
    console.log(this.parentNode.childNodes[3].innerText)
    const gameName = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('delaytayItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameToDelaytay': gameName,
            })
        })
        const data = await res.json()
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}

async function markCompletion(){
    console.log('click update')
    const gameName = this.parentNode.childNodes[3].innerText
    console.log(gameName)
    try{
        const res = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameToUpdate': gameName
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}

async function markPlaying(){
    console.log('click playing')
    const gameName = this.parentNode.childNodes[3].innerText
    console.log(gameName)
    try{
        const res = await fetch('markPlaying', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameToPlay': gameName
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}

async function replayGame(){
    console.log('click replay')
    const gameName = this.parentNode.childNodes[3].innerText
    console.log(gameName)

    try{
        const res = await fetch('replayGame', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameToReplay': gameName
            })
        })
        const data = res.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markFavorite(){
    console.log('click favorite')
    const gameName = this.parentNode.childNodes[3].innerText
    console.log(gameName)

    try{
        const res = await fetch('favoriteGame', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameToFavorite': gameName
            })
        })
        const data = res.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markUnfavorite(){
    console.log('click unfavorite')
    const gameName = this.parentNode.childNodes[3].innerText
    console.log(gameName)

    try{
        const res = await fetch('unfavoriteGame', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameToUnfavorite': gameName
            })
        })
        const data = res.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}