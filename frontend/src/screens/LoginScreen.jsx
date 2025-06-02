import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    Alert,
    TouchableOpacity
} from 'react-native';
import { login } from "../services/api";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const result = await login(email, password);
        if (result.success) {
            navigation.navigate('Vagas', { user: result.user })
        } else {
            Alert.alert('Erro', result.message)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Login </Text>
            <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword} />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}> Criar Conta </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 200
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 8
    },
    title: {
        fontSize: 40,
        marginBottom: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#AF1717',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    link: {
        marginTop: 20,
        color: 'black',
        textAlign: 'center'
    }
})