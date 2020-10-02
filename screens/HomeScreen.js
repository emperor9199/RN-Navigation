import React from "react";
import { Text, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => <Button title="Save" onPress={() => alert("Saved")} />,
  });

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Goto Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default HomeScreen;
