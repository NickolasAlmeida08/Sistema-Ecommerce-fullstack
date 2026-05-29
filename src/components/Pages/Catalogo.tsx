import { Search, ShoppingCart, Star } from "lucide-react";

/*
  Esta lista simula produtos vindos de um banco de dados.
  Como voce pediu apenas front-end, os dados ficam fixos aqui no arquivo.

  Cada objeto representa um produto.
  Exemplo:
  - nome: titulo do produto
  - categoria: tipo do produto
  - preco: preco exibido no card
  - nota: avaliacao visual
  - cor: classes Tailwind para criar uma "imagem" simples do produto
*/
const produtos = [
  {
    id: 1,
    nome: "Camiseta Basica",
    categoria: "Roupas",
    preco: "R$ 59,90",
    nota: "4.8",
    cor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    nome: "Tenis Urbano",
    categoria: "Calcados",
    preco: "R$ 199,90",
    nota: "4.6",
    cor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 3,
    nome: "Mochila Casual",
    categoria: "Acessorios",
    preco: "R$ 129,90",
    nota: "4.9",
    cor: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    nome: "Relogio Minimalista",
    categoria: "Acessorios",
    preco: "R$ 249,90",
    nota: "4.7",
    cor: "bg-rose-100 text-rose-700",
  },
  
];

function Catalogo() {
  return (
    /*
      <main> representa o conteudo principal da pagina.

      bg-slate-50  -> fundo cinza bem claro
      min-h-screen -> altura minima igual a tela inteira
      px-6         -> espaco nas laterais
      py-10        -> espaco em cima e embaixo
    */
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      {/*
        Esta div limita a largura do conteudo.

        max-w-6xl -> largura maxima
        mx-auto   -> centraliza na tela
      */}
      <div className="mx-auto max-w-6xl">
        {/*
          Cabecalho do catalogo.
          Aqui colocamos titulo, texto curto e uma barra visual de busca.
        */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-semibold text-blue-600">
            Catalogo
          </p>

          <h1 className="text-3xl font-bold text-slate-900">
            Produtos em destaque
          </h1>

          <p className="mt-2 text-slate-600">
            Escolha um produto e veja como os cards podem ser montados com React e Tailwind.
          </p>
        </section>

        {/*
          Area de busca e categorias.
          Por enquanto e apenas visual, ainda nao filtra os produtos.
        */}
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/*
            Campo de busca visual.
            flex items-center -> deixa icone e texto alinhados lado a lado
            gap-2             -> espaco entre icone e input
          */}
          <div className="flex items-center gap-2 rounded bg-white px-4 py-3 shadow">
            <Search size={18} />
            <input
              type="text"
              placeholder="Buscar produto"
              className="outline-none"
            />
          </div>

          {/*
            Botoes de categoria.
            Eles ainda nao filtram; servem para treinar layout.
          */}
          <div className="flex gap-2">
            <button className="rounded bg-black px-4 py-2 text-white">
              Todos
            </button>
            <button className="rounded bg-white px-4 py-2 text-slate-700 shadow">
              Roupas
            </button>
            <button className="rounded bg-white px-4 py-2 text-slate-700 shadow">
              Acessorios
            </button>
          </div>
        </section>

        {/*
          Grade de produtos.

          grid              -> cria uma grade
          gap-6             -> espaco entre os cards
          md:grid-cols-2    -> em telas medias, 2 colunas
          lg:grid-cols-4    -> em telas grandes, 4 colunas
        */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/*
            map percorre a lista de produtos e cria um card para cada item.
            O key ajuda o React a identificar cada card.
          */}
          {produtos.map((produto) => (
            <article key={produto.id} className="rounded bg-white p-4 shadow">
              {/*
                Esta div simula a imagem do produto.
                A cor muda porque vem da propriedade produto.cor.
              */}
              <div className={`mb-4 flex h-36 items-center justify-center rounded ${produto.cor}`}>
                <span className="text-4xl font-bold">
                  {produto.nome[0]}
                </span>
              </div>

              <p className="text-sm text-slate-500">
                {produto.categoria}
              </p>

              <h2 className="mt-1 font-bold text-slate-900">
                {produto.nome}
              </h2>

              <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
                <Star size={16} fill="currentColor" />
                <span>{produto.nota}</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <strong className="text-lg text-slate-900">
                  {produto.preco}
                </strong>

                <button className="flex items-center gap-2 rounded bg-black px-3 py-2 text-sm text-white transition hover:bg-slate-700">
                  <ShoppingCart size={16} />
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Catalogo;
