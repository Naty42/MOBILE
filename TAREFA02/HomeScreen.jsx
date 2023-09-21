import { Button, Text, View, TextInput, StyleSheet } from "react-native";
//import { useState } from "react";
import Cadastro from "./Cadastro";
import IMC from "./IMC";

const HomeScreen = ({ navigation, route }) => {
    return (
        <>
            <Button
                title="Cadastro"
                onPress={() =>
                    navigation.navigate('Cadastro', { name: 'Jane' })
                }
            />

            <Button
                title="IMC"
                onPress={() =>
                    navigation.navigate('IMC')
                }
            />

            <Button
                title="Sobre"
                onPress={() =>
                    navigation.navigate('Sobre')
                }
            />

        </>

        
    );
};

<Cadastro />
//<IMC/>


// const IMC = ({ navigation, route }) => {
//     return (
//         <View>
//             <Text> jkfbbajkbdkabkabdkjabjkdbjkabdk</Text>

//         </View>

//     )
// }

const Sobre = ({ navigation, route }) => {
    return <Text> bla bla bla bla
    bla bla bla bla
    bla bla...
    </Text>;
}

export { HomeScreen, IMC, Cadastro, Sobre }