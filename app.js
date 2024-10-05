let lista = [];
let numerosPossiveis = 100;
let tentativas = 1;
let numero = gerarNumero();

function mudarTexto(tag , texto) {
    let mudar = document.querySelector(tag);
    mudar.innerHTML = texto;
    //parametros na função para poder usar mais uma vez para coisas diferentes
    responsiveVoice.speak(texto, 'Brazigitlian Portuguese Female', {rate:1.2});
    //linha que faz o html falar graças ao import do html linha 7
}

telaInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    //.value utilizado no final para voltar o valor e nao a string colocada
    if( chute > 10 | chute <= 0 ){
        mudarTexto('p', 'Por favor chute um numero entre 1 e 10');
    }
    else{
        if(chute == numero) {
            mudarTexto('h1', 'acertou');
            let Palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagem = `voce descobriu o numero secreto em ${tentativas} ${Palavratentativa}!`;
            mudarTexto('p', mensagem);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if (chute > numero){
                mudarTexto('p','o numero secreto é menor');
            }else{
                mudarTexto('p', 'o numero secreto é maior');
            }
            tentativas ++;
            limpar();
        }
    }
}

function telaInicial(){
    mudarTexto('h1', 'jogo do numero misterioso');
    mudarTexto('p', 'escolha um numero de 1 a 100');
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //desabilita o botão
}

function gerarNumero() {
    let numeroAleatorio = parseInt(Math.random() * numerosPossiveis + 1);
    // gera o numero aleartorio e o parseInt é para retornar numero inteiro
    let tamanhoLista = lista.length;
    if (tamanhoLista == numerosPossiveis){
        lista = [];
    }
    if(lista.includes(numeroAleatorio)){
        return gerarNumero();
    }
   else{
       lista.push(numeroAleatorio);
       console.log(lista);
       return numeroAleatorio;
    }
}

function limpar(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numero = gerarNumero();
    limpar();
    telaInicial();
    tentativas = 1;
}
