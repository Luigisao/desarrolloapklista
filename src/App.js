import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView } from 'react-native';
import { CustomModal, CustomInput, AddItem } from './components/index';

export default function App() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const inputvalue = item.trim();


  const onChangeText = (text) => {
    setItem(text)
  }

  const addItem = () => {
      if (inputvalue) {
        setItemList([
          ...itemList,
          {
            id: itemList.length + 1,
            value: item
          } 
        ])
        setItem('');
      }
  }

  const onDeleteItem = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }


  const renderItem = ({ item }) => (
    <AddItem item={item} onHandlerModal={onHandlerModal} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput item={item} onChangeText={onChangeText} placeholder='Agregar Articulo' onPressButton={addItem} inputValue={inputvalue} buttonText='Add Item'/>
     <View style={styles.itemList}>
      <FlatList 
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        
      />
     </View>
     <CustomModal animationType='slide' modalVisible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalTitle}>Detalle de Lista</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalMessage}> ¿Desea eliminar el Item Seleccionado?</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title='Eliminar' onPress={() => onDeleteItem(itemSelected.id)} color='#c59d5d' />
            <Button title='Cancelar' onPress={() => setModalVisible(!modalVisible)} color='#cccccc' />
          </View>
        </View>
     </CustomModal>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  itemList: {
    backgroundColor: 'white',
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    color:'#c59d5d'
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom:160,
    marginTop:70
  },
  modalItem: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  modal: {
    flex: 1,
    marginTop: 30
  },

});
