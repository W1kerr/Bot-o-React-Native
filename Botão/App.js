import React, {useState} from "react";
import {Button, View, Text} from "react-native"

export default isso => {
  const [soma, valor] = useState(0);
function executar() {
  
  valor(soma + 1)
}
  return (
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}> 
  <Text> Você apertou o botão {soma}  vezes </Text>
  <Button title="Clique aqui" onPress={executar} />
  </View>
  )


}