import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
    return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.principal}>
                <Text style={estilo.titulo}>SimpleTask</Text>
                <Text style={estilo.subTitulo}>Organizando suas tarefas</Text>
            </View>

            <View>
                <Text style={estilo.subSubTitulo}>Tarefas Pendentes:</Text>
            </View>

            <View style={estilo.textList}>
                <Text>- Responder e-mails de trabalho</Text>
                <Text>- Estudar para a prova de matemática</Text>
                <Text>- Limpar o quarto</Text>
                <Text>- Fazer exercícios</Text>
                <Text>- Ajustar configurações no celular</Text>
            </View>

            <View>
                <TouchableOpacity style={estilo.button} onPress={() => { props.navigation.navigate('Concluse') }}>
                    <Text style={estilo.textButton}>Concluídas</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E0F7FA',  // Usando um azul mais suave como cor de fundo
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',  // Torna o título mais destacado
        color: '#1E3A8A',   // Um tom de azul mais escuro
    },

    subTitulo: {
        fontSize: 16,
        backgroundColor: '#0288D1', // Azul mais intenso
        marginBottom: 10,
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        color: 'white',
        borderRadius: 10,
    },

    subSubTitulo: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 50,  
    },

    button: {
        margin: 15,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#039BE5',  
        alignItems: 'center',
    },

    textButton: {
        fontSize: 18,
        color: 'white',  
        fontWeight: 'bold',
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

    principal: {
        alignItems: 'center',
    }
});
