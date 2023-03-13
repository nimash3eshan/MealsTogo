import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <Card.Title title={name} subtitle={address} />
      <Card.Cover style={styles.cover} source={{uri: photos[0]}} />
      <Card.Content style={styles.content}>
        <Text variant="titleLarge">{rating}</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 0,
  },
  content: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
