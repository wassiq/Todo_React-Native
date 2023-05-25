import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Keyboard } from "react-native";

function GoalInput(props) {
  const [enterdGoalText, setEnterdGoalText] = useState("");

  function goalInputHandler(enterdText) {
    setEnterdGoalText(enterdText);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enterdGoalText}
        style={styles.textInput}
        placeholder="Your Course Goal!"
        onChangeText={goalInputHandler}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          props.onAddGoal(enterdGoalText);
          setEnterdGoalText("");
          Keyboard.dismiss();
        }}
      />
    </View>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});
