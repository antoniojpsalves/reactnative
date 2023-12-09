import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

import { useState } from 'react'

export function Home() {

  const [participantes, setParticipantes] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    // console.log('Adicionando um novo participante')
    setParticipantName('')

    if (participantes.includes(participantName)) {
      return Alert.alert("Atenção", `Já existe um participante com o nome: ${participantName} na lista de espera!`)
    }
    setParticipantes(prevState => [...prevState, participantName])
  }

  function handleParticipantRemove(name: string) {
    // console.log(`Tentando remover o participante ${name}`)

    Alert.alert("Excluir", `Deseja remover o participante: ${name}?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => removeItemFromParticipantList(name)
      },
    ])
  }

  function removeItemFromParticipantList(name: string) {
    setParticipantes(prevState => prevState.filter(participante => participante !== name))
    Alert.alert("Mensagem", "Participante removido!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta feira, 08 de dezembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
          keyboardType='default'
          onChangeText={setParticipantName}
          value={participantName}
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