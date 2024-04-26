import { StyleSheet, View, Text, TextInput, Button} from "react-native";
import { useState } from "react";

const Screen1 = ({navigation}) => {
    const [name, setName] = useState('');
    return (
        <View styles={styles.container}>
            <Text style= {styles.text}>
                Chat Demo Screen1
            </Text>
            <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder='Type your username here.'
            />
            <Button
                title="Go to Screen2"
                onPress={() => navigation.navigate('Screen2', {name:name})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
       fontSize: 26,
       color: 'steelblue',
    },
    textInput: {
        width: '88%',
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,

    }
});

export default Screen1;