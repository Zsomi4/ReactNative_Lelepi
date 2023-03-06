import { View, Text, StyleSheet } from "react-native-web";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>Feladat 0350</Text>
            <Text>Paralelepitedon Térfogata</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: -1,
        backgroundcolor: "gold",
        alignitems: "center",
        justifyContent: "center",
    },
})