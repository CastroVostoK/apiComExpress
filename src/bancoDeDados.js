const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}

/*function salvarProduto(produto) {
    if(!produtos.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}*/ // Código antigo errado

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    if (produto.id - sequence._id == 0) sequence._id++
    if (produto.id > sequence._id) produto.id = sequence._id++
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }