import { Button, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const Cadastro = ({ navigation, route }) => {

  const [frase, setFrase] = useState(" ")

  return (

    <View>
      <TextInput
        style={estilos.input}
        placeholder="Digite uma frase."
        defaultValue={frase}
        onChangeText={(textoDigitado) => setFrase(textoDigitado)}
      />

      <TextInput
        style={estilos.input}
        placeholder="Digite uma frase."
        defaultValue={frase}
        onChangeText={(textoDigitado) => setFrase(textoDigitado)}
      />

      <TextInput
        style={estilos.input}
        placeholder="Digite uma frase."
        defaultValue={frase}
        onChangeText={(textoDigitado) => setFrase(textoDigitado)}
      />


      <Button
        title="OK"
        onPress={() => navigation.navigate('Perfil')}
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

export default Cadastro