import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const B7 = () => {
  const [name, setName] = useState('');

  const handlePress = () => {
    alert(`Tên bạn là: ${name}`);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tên của bạn là ?</Text>
      <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        placeholder="Nhập tên của bạn"
        onChangeText={(text) => setName(text)}
      />
      <Button title="Nhập vào tên của bạn" onPress={handlePress} />
    </View>
  );
};

export default B7;
