import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quarta, 3 de Janeiro de 2024</Text>
    </View>
  );
}
