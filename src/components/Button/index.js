import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ onPress, children }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
          {children}
      </Text>
    </TouchableOpacity>
  );
};



// const width = Dimensions.get('window').width


// const Button = ({ text, onPress, type = 'filled', bordered = false, size = 'small' }) => {
//   const large = width / 1.3
//   const small = width / 2
//   const btnSize = size === 'large' ? large : small
//   const btnBgColor = type === 'filled' ? '#3f51b5' : 'transparent'
//   const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2'
//   const btnBorderRadius = bordered ? 30 : 5

//   const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }

//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
//       <View style={styles.buttonStyle}>
//         <Text style={styles.textStyle}> {text} </Text>
//       </View>
//     </TouchableOpacity>
//   )
// }

Button.propTypes = {
    color: PropTypes.string,
    borderColor: PropTypes.string,
    bordered: PropTypes.bool,
    background: PropTypes.string,
    disabled: PropTypes.bool,
    fontSize: PropTypes.number,
  };
  
  Button.defaultProps = {
    bordered: false,    
    disabled: false,
    fontSize: 16,
  };

export default Button;
