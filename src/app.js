class App {
    loadPlayers (){
        event.preventDefault()
        let name = document.querySelector("input[name='name']").value
        let age = document.querySelector("input[name='age']").value
        let team = document.querySelector("input[name='team']").value
        let titular = document.querySelector("select[name='titular']").value
        let player = new Player(name,age,team,titular)
        this.loadList(player)
    }

    loadList(player){
        let list = document.createElement("li")
        let text = ` - Name: ${ player.name} \n - Idade: ${ player.age} \n - Time: ${ player.team}`
        let mark = document.createElement("span")
        if(player.titular == "yes"){
            mark.style.color = "white"
            mark.style.backgroundColor = "green"
            mark.innerText = "Titular"
            list.appendChild(mark)
        }
        else{
            mark.style.color = "white"
            mark.style.backgroundColor = "red"
            mark.innerText = "Reserva"
            list.appendChild(mark)
        }
        
        list.innerHTML += text
        document.getElementById("player-list").appendChild(list) 
    }

    cleanForm(){
        let name = document.querySelector("input[name='name']").value = ""
        let age = document.querySelector("input[name='age']").value = ""
        let team = document.querySelector("input[name='team']").value = ""
        let titular = document.querySelector("select[name='titular']").value = "yes"
    }
}