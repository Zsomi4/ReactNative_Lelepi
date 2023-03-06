import { View, Text, StyleSheet } from "react-native-web";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>Gubis Zsombor Dániel</Text>
            <Text>Szoft_II, 2023-03-06</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    footer: {
        width: "100%",
        flex: 0,
        backgroundColor: "yellow",
        alignitems: "center",
        justifyContent: "center",
    },
})