import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

interface ButtonProps {
  handler: (event: any) => void;
  text: string;
}

const Button = ({
  handler,
  text,
}: ButtonProps): JSX.Element => {

  return (
    <View>
      <TouchableHighlight
        onPress={handler}
      >
        <View>
          <Text>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
