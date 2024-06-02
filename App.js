import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CartaoProduto from './components/ProductCard';

const produtos = [
  {
    marca: 'Nike',
    descricao: 'Tênis confortável para corrida',
    preco: 'R$120',
    imagem: require('./assets/sneackered.jpg'),
  },
  {
    marca: 'Adidas',
    descricao: 'Tênis estiloso',
    preco: 'R$100',
    imagem: require('./assets/Tenisadidas.jpg'),
  },
  {
    marca: 'Puma',
    descricao: 'Roupas esportivas duráveis',
    preco: 'R$80',
    imagem: require('./assets/TenisPuma.jpg'),
  },
  {
    marca: 'Reebok',
    descricao: 'Equipamento fitness clássico',
    preco: 'R$90',
    imagem: require('./assets/TenisRebook.jpg'),
  },
];

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState('inicio');
  const [carrinho, setCarrinho] = useState([]);

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
  };

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <View style={estilos.container}>
      <Navbar navegarPara={navegarPara} adicionarAoCarrinho={() => adicionarAoCarrinho(produtos[0])} />
      <ScrollView style={estilos.conteudo}>
        <Banner />
        <View style={estilos.conteudoPagina}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={estilos.rolagemHorizontal}>
            {produtos.map((produto, indice) => (
              <CartaoProduto
                key={indice}
                marca={produto.marca}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.imagem}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudoPagina: {
    padding: 10,
  },
  rolagemHorizontal: {
    flexDirection: 'row',
  },
});

