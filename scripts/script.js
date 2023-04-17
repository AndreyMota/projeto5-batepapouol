let aga;
let api;
let nome;
let arma;
let amar;
axios.defaults.headers.common['Authorization'] = 'rcg0ihEtBcNC4sgSDCii16ma';


function validaNome(){
    nome = prompt('Seu nome');
    const pro = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', {
        name: nome
    });

    pro.then(x => {
        console.log(`Deu certo STATUS: ${x.status}`)
        chamaGetPrtcp();
        //chamaGet();
        setInterval(manterConexao, 5000);
        setInterval(buscaMensagens, 3000);

        
    })

    pro.catch(x => {

        if (x.status === 400) {
            alert('nome já existente');
        }
        validaNome();
    })
}

function manterConexao() {
    const pro = axios.post('https://mock-api.driven.com.br/api/vm/uol/status', {
        name: nome
    })
    console.log(`ainda conectado com ${nome}`);
}

validaNome();

function chamaGetPrtcp(){
    guet = axios.get('https://mock-api.driven.com.br/api/vm/uol/participants')
    guet.then(y => {
        aga = y;
        console.log(y.data);
        aga.data.forEach(element => {
            console.log(element.name);
        });
    })
}

/* function chamaGet(){
    guet = axios.get('https://mock-api.driven.com.br/api/vm/uol/');
    guet.then(y => {
        api = y;
        console.log(y);
    })
} */


function buscaMensagens() {
    arma = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages');
    arma.then(x => {
        console.log('ARMA')
        console.log(x);
        amar = x;
    });
    imprimeMsg();
}

function imprimeMsg() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    amar.data.forEach(x => {
        main.innerHTML += `<li data-test="message" class="msg ${x.type}">
        <div class="time">(${x.time})</div>
        <div class="remetente"><strong>${x.from}</strong> para <strong>${x.to}:</strong></div>
        <div class="conteudo">${x.text}</div>
    </li>`
    })
}

function criaArMsg() {
    let texto = document.querySelector('.qual');
    const msg = {
        from: nome,
	    to: "Todos",
	    text: texto,
	    type: "message"
    }
    return msg;
}

function enviaMsg() {
    console.log('ENVIA MENSAAAGEMMMMMMM')
    pro = axios.post('https://mock-api.driven.com.br/api/vm/uol/messages', criaArMsg());
    pro.then(x => {
        console.log(x);
    });
    pro.catch(x => {
        console.log(x);
    });
}