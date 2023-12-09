import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles'

export function Home() {

  function handleParticipantAdd() {
    // return console.log('oi')
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
    </View>
  );
}