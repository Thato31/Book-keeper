import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

/**
 <Text style={styles.itemTitle}>{props.author}</Text>
<Text style={styles.itemTitle}>{props.genre}</Text>
 */

export const Book = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemTitle}>{props.title}</Text>

            </View>
            <View style={styles.itemRight}>
                <View style={styles.leftText}>
                    <Text style={styles.itemNum}>{props.pages}</Text>
                    <Text style={styles.itemMumText}>Pages</Text>
                </View>
                <View style={styles.circular}></View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 60,
        height: 75,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemTitle: {
        maxWidth: '60%',
        fontSize: 16,
        fontWeight: '600'
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    leftText: {
        paddingRight: 20,
        flexDirection: 'row'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

