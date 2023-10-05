import { View, Text, SectionList, Button, TouchableOpacity } from "react-native-web";
import comprasDados from "./DadosQ01";
import Questao02 from "./Questão02";
import meuEstilo from "./Estilos";
import { useEffect, useState } from "react";



const Questao01 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCompra, setSelectedCompra] = useState(null);

    const openModal = (compra) => {
        setSelectedCompra(compra);
        setModalVisible(true);
      };
    return (
        <View style={meuEstilo.container}>
            <SectionList
                sections={comprasDados}
                keyExtractor={(item) => "PROVA01" + item.id}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity>
                                <View>
                                    <Button
                                        title={item.icon}
                                        onPress={() => openModal(item)}
                                    />
                                    <Text style={meuEstilo.pays}> {item.loja} {item.valor}</Text>
                                    <Text style={meuEstilo.title}>{item.hora}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <Text style={meuEstilo.title}>{section.title}</Text>
                        )
                    }
                }

            />
            <Questao02 
                 isVisible={modalVisible}
                 compra={selectedCompra}
                 onClose={() => setModalVisible(false)}
            />
        </View>
    )
}

export default Questao01;