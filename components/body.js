import { View, Text, StyleSheet } from "react-native-web";

export default function Body() {
    return (
        <View style={styles.container}>
            <Text>Térfogat</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundcolor: "white",
        alignitems: "center",
        justifyContent: "center",
    },
})