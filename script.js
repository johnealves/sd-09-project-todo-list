const buttonCriarTarefa = document.querySelector("#criar-tarefa");

function checkInput(){
    let textoTarefa = document.querySelector("#texto-tarefa").value;
    let adicionaTarefa = document.querySelector("#lista-tarefas");
    let criaTarefa = document.querySelector("li");

    adicionaTarefa.appendChild(criaTarefa).innerText = textoTarefa;
    document.querySelector("#texto-tarefa").value = "";
}

buttonCriarTarefa.addEventListener("click", checkInput);

const pushColour = document.querySelector("#lista-tarefas");

function backgroundColour(colorize){
    let deleteBackgroundColour = document.querySelectorAll("li");

    for (let index=0; index < deleteBackgroundColour.length; index += 1){
        deleteBackgroundColour[index].style.backgroundColor = "white";}

    let listaDeItens = colorize.target;
    listaDeItens.style.backgroundColor = "rgb(128, 128, 128)";
}

pushColour.addEventListener("click", backgroundColour);

