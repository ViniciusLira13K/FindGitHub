import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default cardGitHub => {
    // console.log('data = ' + JSON.stringify(props))

    return (
        <>
            {/* <Image 
            source={{uri:`${data.avatar_url}`}}
            style={styles.image}
            /> */}
            <Text style={styles.text}> Login:  </Text>
            <Text style={styles.text}> Nome:  </Text>
            {/* <Text style={styles.text}> Seguidores: {followesCount.length} </Text>
            <Text style={styles.text}> Seguindo: {data.following_url} </Text>
            <Text style={styles.text}> Repositorios: {data.repos_url} </Text> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        width: 300,
        height: 200,
        borderRadius: 20,
        padding: 10,
    },
    image: {
        width: 200,
        height: 200
    },
    text: {
        color: '#FFFFFF',

    },
})