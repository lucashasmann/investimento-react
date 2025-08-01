import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  title: {
    fontSize: 26,
    color: "#281eedff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {
  const [aporte, setAporte] = useState("");
  const [taxa, setTaxa] = useState("");
  const [meses, setMeses] = useState("");
  const [resultado, setResultado] = useState("");

  const calcInvestimento = () => {
    const C = Number(aporte);
    const i = Number(taxa) / 100;
    const t = Number(meses);

    const montanteS = C * t;
    const montanteR = C * ((Math.pow(1 + i, t) - 1) / i);

    setResultado(
      `Total sem juros: R$ ${montanteS.toFixed(2)}\n` +
      `Total com juros compostos: R$ ${montanteR.toFixed(2)}`
    );
  };

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Simulador de Investimentos</Text>
      <TextInput
        placeholder="Aporte Mensal (R$)"
        style={styles.input}
        value={aporte}
        onChangeText={setAporte}
      />
      <TextInput
        placeholder="Taxa Mensal (%)"
        style={styles.input}
        value={taxa}
        onChangeText={setTaxa}
      />
      <TextInput
        placeholder="Número de Meses"
        style={styles.input}
        value={meses}
        onChangeText={setMeses}
      />
      <Button
        title="Calcular Investimento"
        onPress={calcInvestimento}
      />
      <Text style={styles.text}>{resultado}</Text>
    </View>
  );
}