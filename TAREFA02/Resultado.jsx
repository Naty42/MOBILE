import { Button, Text, View, TextInput, StyleSheet, Pressable, Image } from "react-native";
import { useState } from "react";

const Resultado = ({ navigation, route }) => {

    const [frase, setFrase] = useState(" ")

    return (

        <View>

           <Text>RESULTADO EM 24HR</Text>


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

export default Resultado