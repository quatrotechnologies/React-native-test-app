import { StyleSheet } from "react-native";
export default StyleSheet.create({
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
       flex: 1,
        justifyContent: 'center',
        overflow: 'visible',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
    clearButton: {
        position: 'absolute',
        top: 60,
        right: 20,
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        zIndex: 1,
    },
    clearButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },



    image: {
        
      },
      text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      },
});
