import React, { useState } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  ButtonProps as RNButtonProps,
} from 'react-native';

interface ButtonProps extends React.Component<RNButtonProps> {
  handler: (event: any) => void;
  text: string;
  variant?: 'primary' | 'secondary';
  disabled: boolean;
}

const Button = ({
  handler,
  text,
  disabled,
  variant = 'primary',
}: ButtonProps): JSX.Element => {

  const containerStyle = variant === 'primary' ? {
    ...styles.buttonContainer,
    ...styles.buttonPrimaryContainer,
  } : {
    ...styles.buttonContainer,
    ...styles.buttonSecondaryContainer,
  };

  const textStyle = variant === 'primary' ? {
    ...styles.buttonText,
    ...styles.buttonPrimaryText,
  } : {
    ...styles.buttonText,
    ...styles.buttonSecondaryText,
  };

  const [pressed, setPressed] = useState(false);

  return (
    <View style={pressed ? styles.buttonContainerPressed : {}}>
      <TouchableHighlight
        onPress={(event) => {
          setPressed(true);
          handler(event);
        }}
        underlayColor='rgba(203, 235, 230, 0.95)'
        style={!pressed ? containerStyle : {
          ...containerStyle,
          ...styles.buttonContainerPressed,
        }}
        disabled={disabled}
      >
        <View>
          <Text style={textStyle}>
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonPrimaryContainer: {
    backgroundColor: '#a3e5da',
  },
  buttonSecondaryContainer: {
    borderWidth: 1,
    borderColor: '#a3e5da',
  },
  buttonContainerPressed: {
    borderWidth: 2,
    borderColor: '#a3e5da',
    padding: 2,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonPrimaryText: {
    color: '#090821',
  },
  buttonSecondaryText: {
    color: '#a3e5da',
  },
});

export default Button;
