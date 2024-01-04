import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  const handleParticipantsAdd = () => {
    console.log('Você adicionou um participante!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quarta, 3 de Janeiro de 2024</Text>
      <TextInput
        placeholder='Nome do participant'
        placeholderTextColor='#6B6B6B'
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantsAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
