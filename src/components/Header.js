import React from 'react'
import { Button, StyleSheet, Text, TextInput, View , ScrollView} from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
}
const styles =StyleSheet.create({
    header:{
        backgroundColor:'black',
        padding: 15
    },
    headerTitle:{
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color:'white'
    }
});
export default Header;