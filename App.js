import { useState } from "react";
import { ModalPassword } from "./src/components/modal";
import Slider from "@react-native-community/slider"
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function App() {
  const [ size, setSize ] = useState(10)
  const [ passwordValue, setPasswordValue ] = useState("")
  const [ modalVisible, setModalVisible ] = useState(false)
  
  function generatePassword() {

    let password = ""

    for (let i = 0, n = charset.length; i < size; i++) {  
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password);
    setModalVisible(true)
    
  }
  
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#FF0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392DE9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={generatePassword}>
        <Text style={styles.btnText}>Gerar Senha</Text>
      </TouchableOpacity>


    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
    </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{
    marginBottom: 60
  },
  title:{
    fontSize: 30,
    fontWeight: "bold"
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFFF",
    borderRadius: 7,
    padding: 8
  },
  btn:{
    backgroundColor: "#392DE9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  btnText:{
    color: "#FFFF",
    fontSize: 20
  }
});
