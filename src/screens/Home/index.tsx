import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>sexta feira, 08 de novembro de 2023</Text>
    </View>
  );
}