import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = ({ navigateTo, adicionarAoCarrinho }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={toggleModal} style={styles.iconContainer}>
          <Icon name="bars" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Loja de produtos</Text>
        <TouchableOpacity onPress={adicionarAoCarrinho} style={styles.cartContainer}>
          <Icon name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.menuItem} onPress={() => { navigateTo('home'); toggleModal(); }}>
                <Text style={styles.menuText}>Início</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => { navigateTo('contact'); toggleModal(); }}>
                <Text style={styles.menuText}>Contato</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => { navigateTo('about'); toggleModal(); }}>
                <Text style={styles.menuText}>Sobre</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    justifyContent: 'space-between',
  },
  
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  cartContainer: {
    paddingHorizontal: 10,
  },
  rightSpacer: {
    width: 34, // Largura semelhante ao ícone para manter o título centralizado
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  menuItem: {
    marginBottom: 10,
  },
  menuText: {
    fontSize: 18,
  },
});

export default Navbar;


