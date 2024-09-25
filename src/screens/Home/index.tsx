import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import { useState } from "react"

export function Home() {


  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState<string>("")

  function handlePartipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existente", "Já exite um participante com esse nome")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  function handlePartipantRemove(name: string) {
    Alert.alert(`Remover`, `Remover o participante ${name}?`, [
      { 
        text: 'Não', 
        style: 'cancel' 
      },
      { 
        text: "Sim", 
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== name))
          Alert.alert("Participante deletado")
        }
      },
    ])
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda, 23 de Setembro de 2024</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#BCBCBC"
          onChangeText={(event) => setParticipantName(event)}
          value={participantName}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handlePartipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            name={item} 
            key={item} 
            onRemove={()=> handlePartipantRemove(item)} 
          />
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={{
              fontSize: 14,
              color: "#BCBCBC",
              textAlign: "center",
          }}>
            Ninguém chegou ao evento ainda
          </Text>
        )}
      />
    </View>
  )
}