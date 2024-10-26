import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import WorkingWithStyleSheets from "./WorkingWithStyleSheets";

export default function LayoutsAndFlexbox() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!"/>
                <Button title="Add goal" />
            </View>
            <View style={styles.goalsContainer}>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,
        // have to force this container to take all of the height of the viewport
        flex: 1 // 1 of 1 will take all of it and then child components can divide
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "#cccccc"
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
