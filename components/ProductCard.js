import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CartaoProduto = ({ marca, descricao, preco, imagem }) => {
  return (
    <View style={estilos.cartao}>
      <Image source={imagem} style={estilos.imagem} />
      <Text style={estilos.marca}>{marca}</Text>
      <Text style={estilos.descricao}>{descricao}</Text>
      <Text style={estilos.preco}>{preco}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 150, // Largura reduzida
  },
  imagem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  marca: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 12,
    color: '#555',
  },
  preco: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CartaoProduto;
