//para mostrar apenas uma variavel, tipo o titulo = .titulo
//para voce comentar uma variavel no arquivo para html usa ${dados[0].titulo}

function pesquisar() {
    //console.log(dados);
    //document.getElementById = dentro do arquivo html buscar pelo id ("")
    // Busca a seção onde os resultados serão exibidos.
    // O elemento com o ID "resultados-pesquisa" será o container para os resultados.
    let section = document.getElementById("resultados-pesquisa")
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = ""
    // Itera sobre cada item (dado) da lista de dados (provavelmente um array).
    // Para cada dado, cria um novo elemento HTML com as informações do resultado.
    //para cada dado dentro da lista de dados.
    for (let dado of dados) {
        // Constrói uma string de HTML para cada resultado, incluindo:
        // - Um título (h2) com um link para mais informações.
        // - Uma descrição (p) com a classe "descricao-meta".
        // - Um link para mais informações.
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> ${dado.titulo} </a>
            </h2>
            <p class="descricao-meta">${dado.descricao} </p>
            <a href=${dado.link}  target="_blank">Mais informações</a>
        </div> 
        `
    }
    // Atribui a string com todos os resultados ao conteúdo HTML da seção.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados.
    section.innerHTML = resultados
}







    

