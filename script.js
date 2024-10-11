// Variáveis necessárias para o resto do código
var active = "home";
var loading = false;
var dogStatus = false;
var catStatus = false;
var foxStatus = false;

// Função para mudar a página para a seção Home
function toHome() {
    // Não permite mudança de página se o conteúdo está carregando
    // Mostra um aviso avisando sobre isto
    if (loading == true) {
        document.getElementById(`warning`).style.display = `block`;  
    }
    if (loading == false) {
        // Torna todo o resto invisível
        active = "home"
        document.getElementById(`warning`).style.display = `none`; 
        document.getElementById(`intro`).style.display = `block`;
        document.getElementById(`homebutton`).className = "active";
        document.getElementById(`catbutton`).className = "inactive";
        document.getElementById(`foxbutton`).className = "inactive";
        document.getElementById(`dogbutton`).className = "inactive";
        document.getElementById(`statusbutton`).className = "inactive";
        // Executa função que atualiza a página
        update();
    }
}

// Função para mudar a página para a seção Cachorros
function toDog() {
    if (loading == true) {
        document.getElementById(`warning`).style.display = `block`;  
    }
    if (loading == false) {
        active = "dog"
        document.getElementById(`warning`).style.display = `none`; 
        document.getElementById(`intro`).style.display = `none`;
        document.getElementById(`homebutton`).className = "inactive";
        document.getElementById(`catbutton`).className = "inactive";
        document.getElementById(`foxbutton`).className = "inactive";
        document.getElementById(`dogbutton`).className = "active";
        document.getElementById(`statusbutton`).className = "inactive";
        update();
    }
}

// Função para mudar a página para a seção Gatos
function toCat() {
    if (loading == true) {
        document.getElementById(`warning`).style.display = `block`;  
    }
    if (loading == false) {
        active = "cat"
        document.getElementById(`warning`).style.display = `none`;  
        document.getElementById(`intro`).style.display = `none`;
        document.getElementById(`homebutton`).className = "inactive";
        document.getElementById(`catbutton`).className = "active";
        document.getElementById(`foxbutton`).className = "inactive";
        document.getElementById(`dogbutton`).className = "inactive";
        document.getElementById(`statusbutton`).className = "inactive";
        update();
    }
}

// Função para mudar a página para a seção Raposas
function toFox() {
    if (loading == true) {
        document.getElementById(`warning`).style.display = `block`;  
    }
    if (loading == false) {
        active = "fox"
        document.getElementById(`warning`).style.display = `none`;  
        document.getElementById(`intro`).style.display = `none`;
        document.getElementById(`homebutton`).className = "inactive";
        document.getElementById(`catbutton`).className = "inactive";
        document.getElementById(`foxbutton`).className = "active";
        document.getElementById(`dogbutton`).className = "inactive";
        document.getElementById(`statusbutton`).className = "inactive";
        update();
    }
}

// Função para mudar a página para a seção Status
function toStatus() {
    if (loading == true) {
        document.getElementById(`warning`).style.display = `block`;  
    }
    if (loading == false) {
        active = "status"
        document.getElementById(`warning`).style.display = `none`;  
        document.getElementById(`intro`).style.display = `none`;
        document.getElementById(`homebutton`).className = "inactive";
        document.getElementById(`catbutton`).className = "inactive";
        document.getElementById(`foxbutton`).className = "inactive";
        document.getElementById(`dogbutton`).className = "inactive";
        document.getElementById(`statusbutton`).className = "active";
        update();
    }
}

// Função de fetch para obter imagens de cachorros
async function getDog(number) {
    try {
        // Executa o fetch de acordo com o número pedido
        for (let i = 0; i < number; i++) {
            let imagef = await fetch(`https://dog.ceo/api/breeds/image/random`);
            let image = await imagef.json();
            // Insere a imagem na página
            document.getElementById("images").innerHTML += `<img src="${image.message}">`;
        }
    }
    finally {
        // Avisa que o carregamento finalizou
        loading = false;
    }
}

// Função de fetch para obter imagens de gatos
async function getCat(number) {
    try {
        for (let i = 0; i < number; i++) {
            let imagef = await fetch(`https://api.thecatapi.com/v1/images/search`);
            let image = await imagef.json();
            document.getElementById("images").innerHTML += `<img src="${image[0].url}">`;
        }
    }
    finally {
        loading = false
    }
}

// Função de fetch para obter imagens de raposas
async function getFox(number) {
    try{
        for (let i = 0; i < number; i++) {
            let imagef = await fetch(`https://randomfox.ca/floof/`);
            let image = await imagef.json();
            document.getElementById("images").innerHTML += `<img src="${image.image}">`;
        }
    }
    finally {
        loading = false
    }
}

// Funções de fetch para checar o status da API
async function getDogStatus() {
    try{
        await fetch(`https://dog.ceo/api/breeds/image/random`);
    }
    catch {
        dogStatus = false;
    }
    finally {
        dogStatus = true;
        update();
    }
}
async function getCatStatus() {
    try{
        await fetch(`https://api.thecatapi.com/v1/images/search`);
    }
    catch {
        catStatus = false;
    }
    finally {
        catStatus = true;
        update();
    }
}
async function getFoxStatus() {
    try{
        await fetch(`https://randomfox.ca/floof/`);
    }
    catch {
        foxStatus = false;
    }
    finally {
        foxStatus = true;
        update();
    }
}

// Função que atualiza a página de acordo com a seção escolhida pelo usuário
function update() {
    if (active == 'home') {
        document.getElementById("status").innerHTML = ``;
        document.getElementById("images").innerHTML = ``;
        getDog(1)
        getCat(1)
        getFox(1)
    }
    if (active == 'dog') {
        document.getElementById("status").innerHTML = ``;
        document.getElementById("images").innerHTML = ``;
        loading = true;
        getDog(20);
    }
    if (active == 'cat') {
        document.getElementById("status").innerHTML = ``;
        document.getElementById("images").innerHTML = ``;
        loading = true;
        getCat(20);
    }
    if (active == 'fox') {
        document.getElementById("status").innerHTML = ``;
        document.getElementById("images").innerHTML = ``;
        loading = true;
        getFox(20);
    }
    if (active == 'status') {
        document.getElementById("images").innerHTML = ``;
        document.getElementById("status").innerHTML = ``;
        if (dogStatus == true) {
            document.getElementById("status").innerHTML += `<div id="goodstatus">API Cachorro</div>`;
        }
        if (dogStatus == false) {
            document.getElementById("status").innerHTML += `<div id="badstatus">API Cachorro</div>`;
        }
        if (catStatus == true) {
            document.getElementById("status").innerHTML += `<div id="goodstatus">API Gato</div>`;
        }
        if (catStatus == false) {
            document.getElementById("status").innerHTML += `<div id="badstatus">API Gato</div>`;
        }
        if (foxStatus == true) {
            document.getElementById("status").innerHTML += `<div id="goodstatus">API Raposa</div>`;
        }
        if (foxStatus == false) {
            document.getElementById("status").innerHTML += `<div id="badstatus">API Raposa</div>`;
        }
    }
}

// Chama funções para inicializar a página
getDogStatus();
getCatStatus();
getFoxStatus();
update()
