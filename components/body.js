import React from "react";
import { Button, TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native-web";

export default function Body() {
    const [aedge, setAedge] = React.useState('');
    const [bedge, setBedge] = React.useState('');
    const [cedge, setCedge] = React.useState('');
    const [volume, setVolume] = React.useState('');
    function onCalcButton() {
        let volume = aedge * bedge * cedge;
        setVolume(volume)
    }
    return (
        <View style={styles.container}>
            <Text>A oldal</Text>
            <TextInput 
            onChangeText={(res) => (setAedge(res))}
            style={styles.input}/>

            <Text>B oldal</Text>
            <TextInput 
            onChangeText={(res) => (setBedge(res))}
            style={styles.input}/>

            <Text>C oldal</Text>
            <TextInput 
            onChangeText={(res) => (setCedge(res))}
            style={styles.input}/>

            <Button title="Számol"
            onPress={onCalcButton}/>

            <Text>Térfogat</Text>
            <TextInput 
            onChangeText={(res) => (setVolume(res))}
            style={styles.input}
            value={volume}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "lime",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        width: "60%",
        height: "30",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "left",
    },
})