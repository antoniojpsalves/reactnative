import { styles } from "./style"

import { View, Text, TouchableOpacity } from 'react-native'

export interface ParticipantProps {
  nome: string,
  onRemove: (name: string) => void
}

export function Participant({ nome, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{nome}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onRemove(nome)}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  )
}