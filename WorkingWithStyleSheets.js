import {Button, StyleSheet, Text, View} from 'react-native';

export default function WorkingWithStyleSheets() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.dummyText}>text</Text>
            </View>
            <Text style={styles.dummyText}>Yo! Hello world!</Text>
            <Button title={"me"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyText: {
        fontSize: 50,
        margin: 16,
        borderWidth: 2,
        borderColor: 'blue',
        padding: 16
    }
});
