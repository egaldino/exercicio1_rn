/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Button, Text, TouchableHighlight} from 'react-native';

const App = () => {
  const [contador, setContador] = useState(0);

  const somar = () => {
    setContador(contador + 1);
  };

  const subtrair = () => {
    setContador(contador - 1);
  };

  return (
    <View>
      <Text>{contador}</Text>
      <Button title="+" onPress={somar} />
      <Button title="-" onPress={subtrair} />
    </View>
  );
};

export default App;
