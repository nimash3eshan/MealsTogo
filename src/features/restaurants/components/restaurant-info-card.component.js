import React from 'react';
import styled from 'styled-components/native';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const Title = styled.Text`
  padding: 16px;
  color: black;
`;

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
        <Title variant="bodyMedium">Card content</Title>
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
