class Despesa {
  constructor(ano, mes, dia, tipo, descricao, valor) {
    this.ano = ano;
    this.mes = mes;
    this.dia = dia;
    this.tipo = tipo;
    this.descricao = descricao;
    this.valor = valor;
  }
}

//banco de dados

class Bd {
  constructor() {
    //procurar item "id"
    let id = localStorage.getItem('id');
    //se for igual a null(não existir)
    if (id === null) {
      //set(inserir) item id, com o valor 0
      localStorage.setItem('id', 0);
    }
  }

  getProximoId() {
    //variavel que vai recuperar o valor contido no id = 0
    let proximo = localStorage.getItem('id');
    return parseInt(proximo) + 1; //vai sempre adicionar um novo número de id
  }
  gravar(d) {
    let id = this.getProximoId();
    //o id é valor retornado do id é setado, e logo depois a despesa

    localStorage.setItem(id, JSON.stringify(d)); //transforma o objeto d em JSON
    // seta a key id, com o valor do id retirado do let id(getProximoId)
    localStorage.setItem('id', id);
  }
}

let bd = new Bd();

function cadastrar() {
  let ano = document.getElementById('ano');
  let mes = document.getElementById('mes');
  let dia = document.getElementById('dia');
  let tipo = document.getElementById('tipo');
  let descricao = document.getElementById('descricao');
  let valor = document.getElementById('valor');

  let despesa = new Despesa(
    ano.value,
    mes.value,
    dia.value,
    tipo.value,
    descricao.value,
    valor.value
  );

  bd.gravar(despesa);
}

function gravar(d) {
  localStorage.setItem('despesa', JSON.stringify(d)); //transforma o objeto d em JSON
}