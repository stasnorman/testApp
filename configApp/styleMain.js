import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 'auto',
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      color: '#000',
      marginBottom: 4,
      marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
      backgroundColor: '#fff',
      width: 0,
      height: 40,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      color: '#000',
      borderColor: '#FFB800',
      height: 70,
      borderRadius: 5,
      margin: 5,
      paddingLeft: '4%',
      width: 300,
      alignSelf: 'center',
      textAlign: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10
    },
    centerBLock: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: '50%'
    },
    styleOR:{
        fontSize: 26,
        alignSelf:'center',
        margin: 20
    }
  });