import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Button, TextInput, ActivityIndicator,
    Text,
    TouchableOpacity,
    Alert,
    Keyboard
} from 'react-native';
import api from './services/api';
import Lottie from 'lottie-react-native';

import CardPrimary from './components/CardPrimary';

import loading_hand from '../src/lotties/loading_hand.json';
import github from '../src/lotties/github.json';
import github1 from '../src/lotties/github1.json';
const App = () => {

    const [userName, setUserName] = useState('defunkt')
    const [text, setText] = useState('defunkt')
    const [isfind, setIsFind] = useState(false)
    const [objGitHub, setObjGitHub] = useState({
        data: {
            login: 'n/d',
            avatar_url: 'n/d',
            name: 'n/d',
            following: 0,
            followers: 0,
            public_repos: 0
        }
    })

    useEffect(() => {
        setIsFind(true)
        const fetch = async userName => {
            await api.get(`/users/${userName}`).then(res => {
                setObjGitHub(res)
            }).catch(erro => {
                Alert.alert(`Erro: ${erro}`)
                setObjGitHub({
                    data: {
                        login: 'n/d',
                        avatar_url: 'n/d',
                        name: 'n/d',
                        following: 0,
                        followers: 0,
                        public_repos: 0
                    }
                })
            })
            setIsFind(false)
        }

        setTimeout(() => {
            fetch(userName)
        }, 4000);

        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [userName])

    function confirmation() {
        Keyboard.dismiss()
        setUserName(text)
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container} >
                <View style={styles.container}>
                    <Lottie
                        style={{ height: 300, width: 300 }}
                        resizeMode='contain' autoPlay loop source={github}
                    />

                    <TextInput
                        value={text}
                        onChangeText={old => setText(old)}
                        placeholder={'Pesquise o GitHub...'}
                        style={styles.input}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => confirmation()}
                    >
                        {isfind ?
                            <ActivityIndicator /> :
                            <Text style={styles.buttonText}> Confirmar </Text>
                        }
                    </TouchableOpacity>

                    {isfind
                        ?
                        <Lottie
                            style={{ height: 200, width: 300 }}
                            resizeMode='contain' autoPlay loop source={loading_hand}
                        />
                        : <CardPrimary
                            login={objGitHub.data.login}
                            avatar_url={objGitHub.data.avatar_url}
                            name={objGitHub.data.name}
                            following={objGitHub.data.following}
                            followers={objGitHub.data.followers}
                            public_repos={objGitHub.data.public_repos}
                        />
                    }
                </View>

                <Lottie
                    style={{ height: 300, width: 300 }}
                    resizeMode='contain' autoPlay loop source={github1}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAF5'
    },
    input: {
        width: 300,
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 17,
        marginTop: 10
    },
    button: {
        backgroundColor: '#DFDFDF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 300,
    },
    buttonText: {
        fontSize: 17,
    },
})

export default App;
