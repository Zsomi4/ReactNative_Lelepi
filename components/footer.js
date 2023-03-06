import { View, Text, StyleSheet } from "react-native-web";

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text>Gubis Zsombor Dániel</Text>
            <Text>Szoft_II, 2023-03-06</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 0,
        backgroundColor: "green",
        alignitems: "center",
        justifyContent: "center",
    },
})