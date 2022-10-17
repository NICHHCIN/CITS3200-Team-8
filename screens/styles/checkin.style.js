import {StyleSheet} from 'react-native';
import base from './base.style';


export default StyleSheet.create({
    colourBox: {
        backgroundColor: base.PRIMARY_COLOR,
    },
    
    title: {
        fontSize: base.FONT_SIZE_LARGE,
        alignItems: 'center',
        padding: 10,
        fontWeight: base.FONT_WEIGHT_BOLD,
    },
  
    container: {
        flex: 1,
        backgroundColor: base.BACKGROUND_COLOR_LIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    },
  
    bodyText: {
        fontSize: base.FONT_SIZE_MEDIUM,
        marginBottom: 20,
        alignItems: 'center',
        color: '#78909C',
        textAlign: 'center',
    },

    boldText: {
        fontWeight: base.FONT_WEIGHT_BOLD,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    checkmark: {
        textAlign: 'center',
        marginLeft: 25,
        fontSize: 250,
    },

    button: {
        elevation: 3,
    }
});