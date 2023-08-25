import { StyleSheet, View } from 'react-native';
//import HelloRN from './components/01HelloRN';
//import HelloRNV2 from './components/02HelloRNV2';
//import MyCat from './components/03MyCat';
import Questao1 from './components/TAREFAS/TAREFA01/01Questao';
import Questao3 from './components/TAREFAS/TAREFA01/03Questao';
import Parent from './components/05Nested/05Parent';
import State from './components/06State';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Questao3 color="red"/> */}
      <Questao1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 50
  },

  // titulo: {
  //   fontSize:50,
  //   fontWeight: "bold",
  //   color: "blue"
  // },
});


