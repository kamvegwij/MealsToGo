import React from "react";
import { ScrollView, Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestuarantInfo = ({ restuarant = {} }) => {
  const {
    name = "Thina Sonke",
    icon,
    photos = [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.willflyforfood.net%2Fsouth-african-food%2F&psig=AOvVaw2-eGGzjxYu8bjMZGWbPFPZ&ust=1710857852318000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOj056aA_oQDFQAAAAAdAAAAABAZ",
    ],
    address = "100 Main Road Observatory",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restuarant; //restuarant is an object
  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{ uri: { photos } }} />
        <Card.Content>
          <Text variant="titleLarge">{name}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
