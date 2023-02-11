#  - Lidia Yamamura - 
### Veja o site: 
[**🚀 LabEcommerce** - pelo vercel](https://projeto-frontendreact-eight-rho.vercel.app/)

# projeto-frontendreact
Esse é o projeto de front-end de um E-Commerce, para introdução aos fundamentos do React da Labenu. Foi praticado algumas estrutura do React:

- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage

Atenção:
- Foi utilizado Routes para direcionamento das páginas
- Foi utilizado user Context
- Foi utilizado Tailwind pra estização de algums elementos da página, como alert, modal e ranger.


## Foram escolhidos os temas para o E-commerce:

```
- Camisetas com estampas divertidas relacionadas ao espaço;
- Brinquedos e produtos infantis temáticos;
```

# LabEcommerce

O projeto consiste em:

1. Home
    - Onde mostra todos os produtos
    - É possivel ordenar os preços por ordem Crescente e Decrescente,  procurar pelo nome do produto, escolher o preço pelo range ou digitando o valor min e max desejado de preço, filtrar as categorias e marcas dos produtos.
    - Na parte superior contém um cupom "conway", que pode ser adicionado aos itens no carrinho, o valor do desconto muda: o valor é salvo no LocalStorade e carregado, ou é gerado um novo valor se a data do dia não for o mesmo em que a primeira vez que o cupom foi gerado.
    - Na parte superior contém um timer com a contagem regressiva pro dia acabar
    - Produtos:
        - Você pode adicioná-los ao carrinho
        - Contém o nome, categoria, marca, preço e imagem em um card
        - É possível clicar no ícone olho e ver mais detalhes do produto ou clicar no nome do produto e ir pra página com os detalhes do produto, você pode adicionar o produto ao carrinho também, você pode setar como item favorito no coração e ver o rating do produto.        
2. Carrinho
    - Mostra todos os produtos e quantidades adicionadas
    - É possível adicionar ou remover mais itens do mesmo item
    - Capacidade de remover itens do carrinho
    - Mostrar o valor total do carrinho
    - Você pode aplicar um cupom aos itens do carrinho uma vez por dia.
3. Filtros
    - Por valor mínimo e máximo
    - Por nome do produto
    - Por  odem Crescente e Decrescente
    - Por categoria
    - Por marca
    - Reset de filtros
 4. Local Storage
    - Valores do carrinho foram salvos
    - Valores de todas as buscas
    - Valor do "desconto" gerado por dia
    - Cupom já utilizado
    - Favoritado ♡

 5. Pages
    - Home
    - Detalhes do Produto
    - Busca especial
 
Exemplo de estruturação de **UM** produto da lista JSON:

```jsx
 {
    "title": "Foguete de Brinquedo",
    "id": 1,
    "category": "Brinquedos",    
    "price": 29.99,
    "marca": "NASA",
    "rating": 4.5,
    "numReviews": 1234,
    "estoque": 10,
    "description": "Este foguete de brinquedo é altamente detalhado e vem com uma variedade de acessórios, incluindo adesivos de planetas e estrelas."
  },
```




## O layout da página:


![](https://github.com/RinoaYK/projeto-frontendreact/blob/main/LabEcommerceP.gif)
https://github.com/RinoaYK/projeto-frontendreact/blob/main/LabEcommerce.mp4





