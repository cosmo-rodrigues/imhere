import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#131016',
        flex: 1,
        padding: 24,
      }}
    >
      <Text
        style={{
          color: '#FDFCFE',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48,
        }}
      >
        Nome do Evento
      </Text>
      <Text
        style={{
          color: '#6B6B6B',
          fontSize: 16,
        }}
      >
        Quarta, 3 de Janeiro de 2024
      </Text>
    </View>
  );
}
