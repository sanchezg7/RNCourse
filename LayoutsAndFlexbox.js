import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import WorkingWithStyleSheets from "./WorkingWithStyleSheets";

export default function LayoutsAndFlexbox() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!"/>
                <Button title="Add goal" />
            </View>
            <View>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 5,
        margin: 10,
        width: "80%"
    }
});
