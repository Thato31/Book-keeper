import { useState } from 'react'
import React, { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'

export const Add = () => {

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [genre, setGenre] = useState();
    const [nop, setNop] = useState();

    //const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: 'Fiction' },
        { key: '2', value: 'Autobiography' },
        { key: '3', value: 'Biography' },
        { key: '4', value: 'Novel' },
        { key: '5', value: 'Romance' },
        { key: '6', value: 'History' },
        { key: '7', value: 'Literature' },
    ]

    const navigation = useNavigation();
    function CancelBook() {
        navigation.navigate('Home')
    }
    function AddingBook() {
        console.log('Title: ' + title);
        console.log('Author: ' + author);
        console.log('Genre ' + genre);
        console.log('Pages: ' + nop);
        //SetData();
        navigation.navigate('Home', {
            Title: title,
            Author: author,
            Genre: genre,
            Pages: nop
        })
    }

    return (
        <View style={styles.container}>
            <Text>This is the Adding Page</Text>
            <TextInput style={styles.InputTitle} placeholder={'Name of Title'} value={title} onChangeText={text => setTitle(text)} />
            <TextInput style={styles.InputAuthor} placeholder={'Name of Author'} value={author} onChangeText={text => setAuthor(text)} />
            <SelectList
                setSelected={(val) => setGenre(val)}
                data={data}
                save="value"
            />
            <TextInput style={styles.InputPages} placeholder={'Number of Pages'} value={nop} onChangeText={text => setNop(text)} />
            <View style={styles.BtnWrapper}>
                <Button style={styles.Btns} title='cancel' onPress={() => CancelBook()} />
                <Button style={styles.Btns} title='Add' onPress={() => AddingBook()} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        padding: 8,
    },
    InputTitle: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    InputAuthor: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    InputPages: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    BtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20
    },
    Btns: {
        width: 30,
        padding: 10
    }
})