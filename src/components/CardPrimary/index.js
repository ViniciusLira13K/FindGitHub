import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CardPrimary = ({ login, avatar_url, name,
    following, followers, public_repos }) => {

    return (
        <View style={styles.containerMain}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: `${avatar_url}` }}
                />
            </View>
            <View style={styles.subContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textNames}>User name: </Text>
                    <Text style={styles.textSubNames}> {login} </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textNames}>Nome: </Text>
                    <Text style={styles.textSubNames}>{name} </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textNames}>Segindo: </Text>
                    <Text style={styles.textSubNames}>{following} </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textNames}>Seguidores: </Text>
                    <Text style={styles.textSubNames}>{followers} </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textNames}>Repositorios public: </Text>
                    <Text style={styles.textSubNames}>{public_repos} </Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#0C1B9C',
        padding: 15,
        borderRadius: 10,

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35
    },
    subContainer:{
        marginLeft: 20
    },
    textNames: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#FDFDFD'
    },
    textSubNames: {
        fontSize: 16,
        color:'#FDFDFD'
    }
})


export default CardPrimary;