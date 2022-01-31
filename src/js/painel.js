/* 
quando clicar na seta avançar temos que esconder todas imagens que estão aparecendo
e mostrar a proxima imagem

a imagem atual começa em 0 pq é a primeira imagem 
assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
pra poder saber que agora vou mostrar a segunda imagem

esconder todas as imagens 
    pegar todas as imagens usando o DOM e remover a classe mostrar
mostrar  a proxima imagem 
    pegar todas imagens descobrir qual a proxima e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
/* use o console.log(algumacoisa) para ver se está funcionando normalmente dentro do devtools*/
let imagemAtual = 0;

/* Refaturação do codigo (parte em comum que iria ter varias copias)*/
function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')

    })
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/* Refaturação do codigo (parte em comum que iria ter varias copias)*/

/* 
quando clicar na seta avançar temos que esconder todas imagens que estão aparecendo
e mostrar a proxima imagem */

setaAvancar.addEventListener('click', function( ){ 
    
     /* testa se o contador de imagemAtual é igual ao total de imagens*/
     const totalDeImagens = imagensPainel.length - 1;
     if(imagemAtual === totalDeImagens) {
         console.log('não pode avançar mais');
         return;
     }

    /*a imagem atual começa em 0 pq é a primeira imagem 
    assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    pra poder saber que agora vou mostrar a segunda imagem*/

    imagemAtual++;
    
    /*esconder todas as imagens 
    pegar todas as imagens usando o DOM e remover a classe mostrar*/

    esconderImagens();

    /*pegar todas imagens descobrir qual a proxima e colocar a classe mostrar nela
    */

    mostrarImagem();
    
});

setaVoltar.addEventListener('click', function(){

    if(imagemAtual=== 0){
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--;

    /*esconder todas as imagens 
    pegar todas as imagens usando o DOM e remover a classe mostrar*/

    esconderImagens();

    /*pegar todas imagens descobrir qual a anterior e colocar a classe mostrar nela
    */

    mostrarImagem();

})




