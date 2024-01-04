import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant/Participant';
import { useState } from 'react';

export default function Home() {
  const [participantName, setParticipantName] = useState('');
  const [participantsList, setParticipantsList] = useState<string[]>([]);
  const handleParticipantsAdd = (name: string) => {
    if (participantsList.includes(name)) {
      return Alert.alert('Existente', 'Participante já cadastrado(a) na lista');
    }
    Alert.alert('Sucesso', `${name} foi adicionado(a) com sucesso à lista!`);
    setParticipantsList((prev) => [...prev, name]);
    setParticipantName('');
  };

  const handleParticipantsRemove = (name: string) => {
    Alert.alert('Remover', `Deseja realmente remover ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => {
          const filteredList = participantsList.filter(
            (participant) => participant != name
          );
          setParticipantsList(filteredList);
          Alert.alert('Removido!', `${name} removido(a) com sucesso!`);
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quarta, 3 de Janeiro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Nome do participant'
          placeholderTextColor='#6B6B6B'
          style={styles.input}
          value={participantName}
          onChangeText={setParticipantName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantsAdd(participantName)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantsList}
        keyExtractor={(item, index) => `${item}-${Math.random() * index}`}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda? Adicione participantes à sua lista de
            presença.
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleParticipantsRemove} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
