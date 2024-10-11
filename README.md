# POC 4: Fetch
### Um código que demonstra a função assíncrona Fetch em Javascript.

## Descrição
Este é um código simples HTML com CSS e JS que demonstra as propriedades principais de fetch.

### fetch
Fetch é uma função assíncrona que chama uma API e retorna o que a API retorna.

fetch ("url da api")

Utilizado dentro de uma função, a função será assíncrona (async) e a chamada do método terá uma espera (await).

    async function() {
      await fetch(url)
    }

Para garantir que erros no chamado serão detectados, utilizamos o método try{}, dentro do qual colocamos o código principal, incluindo o fetch.
Depois, utilizamos o método catch{}, para qual a execução será direcionada se houver algum erro durante execução dos conteúdos de try.
Podemos também garantir uma execução final independente de erros com finally{}, que sempre executará após try e catch.

    async function() {
      try {
        await fetch(url)
      }
      catch {
        alert("erro")
      }
      finally {
        console.log("Fim")
      }
    }

## Linguagem
Este projeto utiliza um arquivo em HTML (index.html), um arquivo em CSS (style.css) e um arquivo em JavaScript (script.js). No repositório está também este arquivo explicativo em Markdown (README.md).

## Design
O design do arquivo é simples para garantir que seja fácil de abrir e executar, e para fácil compreensão e demonstração dos itens relevantes. 

## Como executar
Para executar este código, utilize a opção do Github que permite baixar o repositório em um arquivo compactado .zip.

[Imagem mostrando onde está o botão](https://prnt.sc/w8KYZsB4wUDH)

Quando o arquivo estiver baixado, extraia seu conteúdo em uma nova pasta ou uma pasta vazia. Confira que todos os itens do repositório estão na pasta com o arquivo principal (index.html, style.css e script.js).

*Extrair o arquivo em uma pasta vazia ou nova garante que nenhum arquivo exterior irá impedir a execução do código ou atrapalhar seu funcionamento*

Finalmente, abra o arquivo __index.html__ em um navegador como Edge ou Chrome. Se os passos anteriores foram seguidos corretamente, a página irá abrir no navegador selecionado.
