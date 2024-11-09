import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, StyleSheet } from 'react-native';
import { HumanSciences, Languages, NatureSciences, SocialScienceAndMath, LiteraryWorks } from '../data/books';

const BookRow = ({ slug }) => {
    const [expandedItem, setExpandedItem] = useState(null);

    const handleViewMore = (index) => {
        setExpandedItem(index);
    };

    const handleViewLess = () => {
        setExpandedItem(null);
    };

    const allBooks = [
        ...LiteraryWorks,
        ...SocialScienceAndMath,
        ...Languages,
        ...HumanSciences,
        ...NatureSciences
    ].sort();

    const bookdata = {
        'ciencias-humanas': HumanSciences,
        'linguagens': Languages,
        'ciencias-da-natureza': NatureSciences,
        'ciencias-sociais-e-matematica': SocialScienceAndMath,
        'obras-literarias': LiteraryWorks,
        'home': allBooks,
    };

    const books = bookdata[slug];

    const renderBook = (book, index) => {
        return (
            <View key={index} style={styles.bookContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(book.src)}>
                    <Image source={{ uri: book.cover }} style={styles.bookImage} />
                </TouchableOpacity>
                <View style={styles.cardBody}>
                    <Text style={styles.bookTitle}>{book.title}</Text>
                    <Text style={styles.bookCategory}>{book.category}</Text>
                    <Text style={styles.bookDescription}>
                        {book.desc.length > 200
                            ? expandedItem === index
                                ? book.desc
                                : `${book.desc.slice(0, 200)}...`
                            : book.desc}
                        {book.desc.length > 200 && (
                            <Text style={styles.toggleText} onPress={() => expandedItem === index ? handleViewLess() : handleViewMore(index)}>
                                {expandedItem === index ? ' Ler Menos' : ' Ler Mais'}
                            </Text>
                        )}
                    </Text>
                    <TouchableOpacity style={styles.viewMoreButton} onPress={() => Linking.openURL(book.src)}>
                        <Text style={styles.viewMoreText}>Ver Mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                {books.map((book, index) => renderBook(book, index))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    bookContainer: {
        width: '48%',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    bookImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBody: {
        padding: 12,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    bookCategory: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    bookDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    toggleText: {
        color: '#007BFF',
        fontSize: 14,
    },
    viewMoreButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    viewMoreText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default BookRow;
