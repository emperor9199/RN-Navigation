import React from "react";
import { Text, Button, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default ProfileScreen;
