import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import WorkingWithStyleSheets from "./WorkingWithStyleSheets";

export default function LayoutsAndFlexbox() {
    return (
        <View style={styles.appContainer}>
            <View>
                <TextInput placeholder="Your course goal!"/>
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
    }
});
