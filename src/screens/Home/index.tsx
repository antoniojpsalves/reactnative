import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { Participant } from '../../components/Participant'





export function Home() {

  const participantes = [
    'Antonio',
    'Rodrigo',
    'Diego',
    'Antonio',
    'Rodrigo',
    'Diego',
    'Antonio',
    'Rodrigo',
    'Diego',
    'Antonio',
    'Rodrigo',
    'Diego',
  ]


  function handleParticipantAdd() {
    console.log('Adicionando um novo participante')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Tentando remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
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

      <ScrollView showsVerticalScrollIndicator={false}>

        {
          participantes.map((participante, index) => <Participant key={index} nome={participante} onRemove={() => handleParticipantRemove(participante)} />)
        }
      </ScrollView>




    </View>
  );
}