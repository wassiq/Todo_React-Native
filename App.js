import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHnadler(enterdGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterdGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHnadler} />
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => {
            return item.id;
          }}
          data={courseGoals}
          renderItem={(itemData, index) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
