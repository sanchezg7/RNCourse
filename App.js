import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import WorkingWithStyleSheets from "./WorkingWithStyleSheets";
import LayoutsAndFlexbox from "./LayoutsAndFlexbox";

export default function App() {
  return (
      <LayoutsAndFlexbox />
  );
}

const styles = StyleSheet.create({
  appContainer: {
      padding: 50
  }
});
