import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite'
import { useState, useEffect } from 'react';
import { Book } from './Book';
import { Component } from 'react';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const db = SQLite.openDatabase('main.db');

//<Book title={'On One'} author={'John Cena'} genre={'Fiction'} pages={'23'} />
/*const createDb = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXITS"
            + "BOOKS"
            + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, Author TEXT, Genre TEXT, Pages INTEGER);"
        )
    })
}
const getData= () =>{
    db.transaction((tx) => {
        tx.executeSql('SELECT * Title, Author, Genre, Pages FROM BOOKS', [], (tx, results) => {
            console.log("Query completed");

            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
              return books.map((book) => {
                <Book title={book.title} author={book.author} genre={book.genre} pages={book.page} />
            })
            }
          });
      });
}
const SetData = async (title, author, genre, nop) => {
    try {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO BOOKS (Title, Author, Genre, Pages) VALUES ('" + title + "','" + author + "','" + genre + "','" + nop + "') "
            )
        })
    } catch (error) {
        console.log(error);
    }
}
*/


export const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    //createDb();
    //getData();


    useEffect(() => {
        //SetData();

        if (route.params?.Author) {

            setBooks([...books, {
                title: route.params.Title,
                author: route.params.Author,
                genre: route.params.Genre,
                page: route.params.Pages
            }])
            console.log('working in the useEffect hook')
            console.log(route.params.Author)
        }
    }, [])

    const [books, setBooks] = useState([])

    /*
        const [title, setTitle] = useState('Can not see me');
        const [author, setAuthor] = useState('John Cena');
        const [genre, setGenre] = useState('Fiction');
        const [page, setPage] = useState('23');
    */


    const [isLoading, setIsLoading] = useState(false);




    if (isLoading) {
        return (
            <View style={styles.container}>
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Book List</Text>
                    <View style={styles.items}>
                        <ScrollView>
                            <Text>Loading books</Text>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.addBtn}>
                    <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const showBooks = () => {
        return books.map((book) => {
            <Book title={book.title} author={book.author} genre={book.genre} pages={book.page} />
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Book List</Text>
                <View style={styles.items}>
                    <ScrollView>
                        {showBooks()}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.addBtn}>
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
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
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    sectionTitle: {
        fontSize: 34,
        fontWeight: 'bold'
    },
    items: {
        paddingTop: 15
    },
    addBtn: {
        position: 'absolute',
        bottom: 30,
        paddingRight: 10,
        width: '100%',
        alignItems: 'flex-end'
    },
    addWrapper: {
        width: 80,
        height: 80,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 28
    },
})
