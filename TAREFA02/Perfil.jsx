import { Button, Text, View, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { useState } from "react";

const Perfil = ({ navigation, route }) => {

    const [frase, setFrase] = useState(" ")

    return (

        <View>
            <Image
                source={{ uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Wlademir-Araujo-Tavares1-225x300.png' }}
                style={{ width: 200, height: 200 }}
            />

           <Text>Wladimir</Text>
           <Text>20 anos</Text>
           <Text>wlads.bavares@ufc.com.br</Text>

           <Button
                title="OK"
                onPress={() =>
                    navigation.navigate('HomeScreen')
                }
            />
        </View>
    )
};


// const botao = () => {
//   return (
//     <Button
//       title="OK"
//       onPress={() =>
//         navigation.navigate('HomeScreen')
//       }
//     />
//   )
// }


const estilos = StyleSheet.create(
    {
        input: {
            height: 80,
            width: 400,
            borderColor: "black",
            borderWidth: 1,
            fontSize: 60,
            fontWeight: "bold",
            padding: 30,
            marginTop: 30,
        },
    }
)

export default Perfil