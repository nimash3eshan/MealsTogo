/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import {Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';
import Svg, {Path, Circle} from 'react-native-svg';
import {Spacer} from '../../../components/spacer/spacer.component';

const Star = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: 'new 0 0 511.999 511.999',
    }}
    xmlSpace="preserve"
    {...props}>
    <Path
      style={{
        fill: '#ffdc64',
      }}
      d="m452.71 157.937-133.741-12.404L265.843 22.17c-3.72-8.638-15.967-8.638-19.686 0l-53.126 123.362L59.29 157.937c-9.365.868-13.149 12.516-6.084 18.723l100.908 88.646-29.531 131.029c-2.068 9.175 7.841 16.373 15.927 11.572L256 339.331l115.49 68.576c8.087 4.802 17.994-2.397 15.927-11.572l-29.532-131.029 100.909-88.646c7.065-6.207 3.28-17.855-6.084-18.723z"
    />
    <Path
      style={{
        fill: '#fff082',
      }}
      d="M119.278 17.923c6.818 9.47 26.062 50.14 37.064 73.842 1.73 3.726-2.945 7.092-5.93 4.269-18.987-17.952-51.452-49.104-58.27-58.575-5.395-7.493-3.694-17.941 3.8-23.336 7.493-5.395 17.941-3.693 23.336 3.8zM392.722 17.923c-6.818 9.47-26.062 50.14-37.064 73.842-1.73 3.726 2.945 7.092 5.93 4.269 18.987-17.952 51.451-49.105 58.27-58.575 5.395-7.493 3.694-17.941-3.8-23.336-7.493-5.395-17.941-3.693-23.336 3.8zM500.461 295.629c-11.094-3.618-55.689-9.595-81.612-12.875-4.075-.516-5.861 4.961-2.266 6.947 22.873 12.635 62.416 34.099 73.51 37.717 8.778 2.863 18.215-1.932 21.078-10.711 2.863-8.779-1.932-18.215-10.71-21.078zM11.539 295.629c11.094-3.618 55.689-9.595 81.612-12.875 4.075-.516 5.861 4.961 2.266 6.947-22.873 12.635-62.416 34.099-73.51 37.717-8.778 2.863-18.215-1.932-21.078-10.711s1.932-18.215 10.71-21.078zM239.794 484.31c0-11.669 8.145-55.919 13.065-81.582.773-4.034 6.534-4.034 7.307 0 4.92 25.663 13.065 69.913 13.065 81.582 0 9.233-7.485 16.718-16.718 16.718-9.234.001-16.719-7.485-16.719-16.718z"
    />
    <Path
      style={{
        fill: '#ffc850',
      }}
      d="m285.161 67.03-19.319-44.86c-3.72-8.638-15.967-8.638-19.686 0L193.03 145.532 59.29 157.937c-9.365.868-13.149 12.516-6.084 18.723l100.908 88.646-29.531 131.029c-2.068 9.175 7.841 16.373 15.927 11.572l15.371-9.127c25.199-163.12 96.041-282.862 129.28-331.75z"
    />
  </Svg>
);

const Info = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.952 511.952"
    style={{
      enableBackground: 'new 0 0 511.952 511.952',
    }}
    xmlSpace="preserve"
    {...props}>
    <Path
      style={{
        fill: '#f2f2f2',
      }}
      d="M410.643 161.145 43.709 251.811l137.6-230.4 229.334 139.734zm-336 67.2 297.6-73.6-185.6-112-112 185.6z"
    />
    <Path
      style={{
        fill: '#ff7058',
      }}
      d="m510.909 373.411-52.267-212.267c-4.267-17.067-22.4-27.733-39.467-23.467L24.509 235.811c-17.067 4.267-27.733 21.333-23.467 38.4l52.267 213.333c4.267 17.067 22.4 27.733 39.467 23.467l394.667-98.133c17.066-4.267 27.733-21.333 23.466-39.467z"
    />
    <Path
      style={{
        fill: '#fff',
      }}
      d="M168.509 378.745c-6.4 10.667-16 17.067-27.733 20.267-12.8 3.2-23.467 1.067-34.133-4.267-10.667-6.4-17.067-16-20.267-27.733-3.2-12.8-1.067-23.467 5.333-34.133 6.4-10.667 16-17.067 27.733-20.267 12.8-3.2 23.467-1.067 34.133 4.267 10.667 6.4 17.067 16 20.267 27.733 3.201 12.799 1.067 24.533-5.333 34.133zm-13.866-28.8c-2.133-7.467-5.333-13.867-11.733-17.067-6.4-4.267-12.8-5.333-19.2-3.2-7.467 1.067-12.8 5.333-17.067 11.733-3.2 6.4-4.267 13.867-2.133 21.333s5.333 12.8 11.733 17.067c6.4 4.267 12.8 5.333 19.2 3.2 7.467-2.133 11.733-5.333 16-12.8 4.266-6.4 5.333-12.8 3.2-20.266zM238.909 292.345c7.467 3.2 11.733 10.667 14.933 21.333 2.133 10.667 1.067 19.2-3.2 25.6-5.333 6.4-13.867 10.667-25.6 13.867l-10.667 3.2 5.333 23.467-20.267 4.267-20.267-84.267 29.867-7.467c12.802-3.2 22.402-3.2 29.868 0zm-5.333 37.333c2.133-3.2 2.133-7.467 1.067-11.733-1.067-5.333-3.2-7.467-6.4-9.6-3.2-1.067-8.533-1.067-13.867 0l-10.667 2.133 7.467 28.8 12.8-3.2c3.2-1.067 7.467-4.267 9.6-6.4zM321.043 264.611l4.267 17.067-41.6 10.667 4.267 17.067 37.333-9.6 4.267 16-37.333 9.6 4.267 17.067 42.667-10.667 4.267 17.067-61.867 14.933-20.267-84.267 59.732-14.934zM397.843 245.411l19.2-4.267 20.267 84.267-19.2 4.267-53.333-42.667 12.8 53.333-19.2 4.267-20.267-84.267 17.067-4.267 54.4 43.733-11.734-54.399z"
    />
    <Path
      style={{
        fill: '#334a5e',
      }}
      d="M226.109 31.011c5.333 22.4-8.533 43.733-29.867 49.067-21.333 5.333-43.733-7.467-49.067-29.867s7.467-43.733 29.867-49.067c21.334-5.333 43.734 8.534 49.067 29.867z"
    />
    <Circle
      style={{
        fill: '#40596b',
      }}
      cx={186.643}
      cy={40.611}
      r={19.2}
    />
  </Svg>
);

const Title = styled.Text`
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: 'Oswald-Regular';
  font-size: 20px;
  color: ${props => props.theme.colors.ui.primary};
  //l  react context provioder from theme check App.js wrapper
`;

const Address = styled(Text)`
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Row = styled.View`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  top: -10px;
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Card.Content>
        <Title variant="label">{name}</Title>
        <Section>
          <Row>
            {ratingArray.map((_, i) => (
              <Star key={i} style={styles.star} />
            ))}
          </Row>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{color: 'red', fontSize: 13}}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && <Info style={styles.star} />}
            <Spacer variant="left.large" />
            <Image style={{width: 15, height: 15}} source={{uri: icon}} />
          </SectionEnd>
        </Section>

        <Address variant="bodySmall">{address}</Address>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 0,
  },

  list: {
    flex: 1,
    padding: 16,
  },
  star: {
    height: 20,
    width: 20,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 30,
  },
});
