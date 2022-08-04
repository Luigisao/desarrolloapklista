import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginLeft:50,
        padding: 20,
        borderRadius:4,
        height:65,
        width:250,
        shadowColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#c59d5d',

        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    item: {
        fontSize: 18,
        color: 'white'
    },
    delete: {
        color : 'white',
        fontSize: 18,
    },
});