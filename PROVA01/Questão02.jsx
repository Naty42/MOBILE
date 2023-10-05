import React from "react";
import { View, Text, Modal, Button } from "react-native";
import meuEstilo from "./Estilos";

const Questao02 = ({ isVisible, compra, onClose }) => {
    function exibir(){
        console.log(compra)
    }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}
    >
        <View>
            <Text>MODAL AQUI {exibir()}</Text>
        </View>
       
    </Modal>
  );
};


export default Questao02;
