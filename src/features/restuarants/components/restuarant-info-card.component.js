import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { mycolors } from "../../../utils/colors";
import styled from "styled-components/native";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const Title = styled.Text`
    color: black;
    padding: 10px;
  `;
  const {
    name = "kwaXhosa Cuisine",
    icon,
    photos = [
      "https://image-prod.iol.co.za/16x9/800/Food-has-historically-been-a-catalyst-for-human-connection-bringing-people-together-through-the-universal-language-of-taste-and-flavour-Picture-Supplied?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/b6e71e5d-2ac6-5f50-b0d3-4b595f1217a4&operation=CROP&offset=0x126&resize=2400x1348",
      "https://images.immediate.co.uk/production/volatile/sites/30/2015/04/Cape-Malay-curry-f938908.jpg",
      "https://inafricaandbeyond.com/wp-content/uploads/2020/03/IMG_8191-1.jpg",
    ],
    address = "100 Main Road Observatory",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restuarant; //restuarant is an object
  return (
    <ScrollView>
      <Card style={styles.card} elevation={5}>
        <Card.Cover
          key={name}
          source={{ uri: photos[1] }}
          style={styles.cover}
        />
        <Title>{name}</Title>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: mycolors.white },
  cover: { padding: 20, backgroundColor: mycolors.white },
});
