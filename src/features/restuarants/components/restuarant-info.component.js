import React from "react";
import { Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

export const RestuarantInfo = ({ restuarant = {} }) => {
  const {
    name = "Thina Sonke",
    icon,
    photos = [
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.eatout.co.za%2Fwp-content%2Fuploads%2F2016%2F03%2Fsa-foods.jpg&tbnid=L3KFLVi2tutFAM&vet=12ahUKEwjs-9S75P2EAxVrTKQEHVwIC7UQMygBegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.eatout.co.za%2Farticle%2F21-iconic-south-african-foods-ultimate-guide-visitors%2F&docid=ISQaPpMExBJtDM&w=600&h=450&q=south%20africa%20food&ved=2ahUKEwjs-9S75P2EAxVrTKQEHVwIC7UQMygBegQIARBz",
    ],
    address = "100 Main Road Observatory",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restuarant; //restuarant is an object
  return <Text>info</Text>;
};
