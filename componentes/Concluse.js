import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Placa_mae(props) {
  return (
    <SafeAreaView style={estilo.container}>
        <View style={estilo.principal}>
            <Text style={estilo.titulo}>Tarefas Concluídas</Text>
            <Text style={estilo.subTitulo}>Você está fazendo um bom trabalho :)</Text>
        </View>

        <View style={estilo.textList}>
            <Text>- Cozinhar e congelar refeições para facilitar os dias seguintes</Text>
            <Text>- Passar uma hora sem redes sociais ou dispositivos móveis</Text>
            <Text>- Escrever três coisas pelas quais você é grato ou refletir sobre o que foi positivo no dia</Text>
            <Text>- Apagar ou organizar imagens e documentos digitais</Text>
        </View>

        <View>
            <TouchableOpacity style={estilo.button} onPress={() => { props.navigation.navigate('Home') }}>
                <Text style={estilo.textButton}>Voltar</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  textList: {
    fontSize: 18,
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 15,
    padding: 15,
    backgroundColor: '#B3E5FC', 
    borderRadius: 8,
    width: '90%',
},

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
  },

  subTitulo: {
    fontSize: 18,
    backgroundColor: '#0288D1',
    marginBottom: 10,
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 10,
  },

  textButton: {
    fontSize: 18,
    color: 'white',  
    fontWeight: 'bold',
},

button: {
    margin: 15,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#039BE5',  
    alignItems: 'center',
},

  principal: {
    alignItems: 'center',
  },
});
