const renderProducts = async () => {
  await fetch("http://localhost:3333/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      creatProduct(res);
    });
};

function creatProduct(products) {
  console.log(products);

  products.forEach((product) => {
    const list = document.querySelector(".products");
    const item = document.createElement("li");
    const img = document.createElement("img");
    const name = document.createElement("h3");
    const price = document.createElement("p");

    img.src = product.imagem;
    name.innerText = product.nome_do_produto;
    price.innerText = product.preco;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);
    list.appendChild(item);
  });
}

/* async function addProduct() {
  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome_do_produto: "O iluminado",
      descricao_do_produto: "Filme por Stanley Kubrick",
      preco: 30.0,
      quantidade_em_estoque: 10,
      imagem:
        "https://www.planocritico.com/wp-content/uploads/2018/10/o_iluminado_1980_plano_critico.jpg",
    }),
  })
    .then((res) => res.json())
    .catch((erro) => console.error(erro));
}
addProduct(); */

async function modifyInfo() {
  await fetch(
    "http://localhost:3333/products/02882bca-2f98-4208-8a0d-28cfde4a1965",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome_do_produto: "101 daumatas",
        descricao_do_produto: "Filme por Stanley Kubrick",
        preco: 18.0,
        quantidade_em_estoque: 30,
        imagem:
          "https://www.planocritico.com/wp-content/uploads/2018/10/o_iluminado_1980_plano_critico.jpg",
      }),
    }
  )
    .then((res) => res.json())
    .catch((erro) => console.error(erro));
}
await modifyInfo();

/*  async function deleteInfo() {
  await fetch(
    "http://localhost:3333/products/6b0f0590-78a7-4a04-be4a-2991928f0a72",
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .catch((erro) => console.error(erro));
} */

await renderProducts();
