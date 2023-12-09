import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {

  const participantes = [
    'Antonio',
    'Rodrigo',
    'Diego',
  ]


  function handleParticipantAdd() {
    // console.log('Adicionando um novo participante')

    if (participantes.includes("Antonio")) {
      return Alert.alert("Atenção", "Já existe um participante com esse nome na lista de espera!")
    }

  }

  function handleParticipantRemove(name: string) {
    // console.log(`Tentando remover o participante ${name}`)

    Alert.alert("Excluir", `Deseja remover o participante: ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Mensagem", "Participante removido!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>sexta feira, 08 de novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
          keyboardType='default'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={participantes}
        keyExtractor={(item) => item}
        renderItem={
          ({ item }) => (
            <Participant nome={item} onRemove={() => handleParticipantRemove(item)} />
          )
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />






    </View>
  );
}