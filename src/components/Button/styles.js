import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
        alignSelf: 'center',
        color: 'teal',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 2,
        marginRight: 2,
        borderRadius: 30,
        textTransform : 'uppercase'
    },
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16
    }
});

export default styles;

