import { useState } from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function LayoutsAndFlexbox() {
    const [wipGoal, setWipGoal] = useState("");
    const [goals, setGoals] = useState([]);
    function handleOnGoalInputChanged(input) {
        console.log("handleOnGoalInputChange", input);
        setWipGoal(input)
    };

    function handleOnAddGoal() {
        console.log("handleOnAddGoal");
        // By using the function form, React guarantees that the inner function receives the latest state value at the time of execution.
        // This ensures that state updates are based on the most recent state, even in scenarios where updates are scheduled asynchronously.
        setGoals((existingGoals) => [
            ...existingGoals,
            wipGoal
            ]
        );
    };
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={wipGoal}
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={handleOnGoalInputChanged}
                    onBlur={(e) => {
                        console.log("unblurred", e);
                    }}
                />
                <Button title="Add goal" onPress={handleOnAddGoal} />
            </View>
            <View style={styles.goalsContainer}>
                <View>
                <Text>Goals</Text>
                {goals.map((goal, index) => {
                    return <Text key={index}>Goal: {goal}</Text>
                })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        // have to force this container to take all of the height of the viewport
        // 1 of 1 will take all of it and then child components can divide
        flex: 1
    },
    inputContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 5,
        margin: 10,
        width: "80%",
    },
    goalsContainer: {
        flex: 4
    }

});
