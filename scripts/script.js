let aga;
let api;
axios.defaults.headers.common['Authorization'] = 'rcg0ihEtBcNC4sgSDCii16ma';
const pro = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', {
    name: "Guts"
  });

pro.then(x => {
    console.log(x);
    chamaGetPrtcp();
    chamaGet();
})

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

function chamaGet(){
    guet = axios.get('https://mock-api.driven.com.br/api/vm/uol/');
    guet.then(y => {
        api = y;
        console.log(y);
    })
}
