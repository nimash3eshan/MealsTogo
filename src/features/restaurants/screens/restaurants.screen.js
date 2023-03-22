import React, {useContext} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

export const RestaurantScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={{position: 'absolute', top: '50%', left: '50%'}}>
          <ActivityIndicator
            style={{marginLeft: -25}}
            size={50}
            animating={true}
            color={MD2Colors.orange800}
          />
        </View>
      )}
      <View style={styles.search}>
        <Searchbar style={styles.sbar} placeholder="Search" elevation={5} />
      </View>
      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    paddingTop: 0,
  },
  list: {
    flex: 1,
    padding: 16,
  },
  sbar: {
    backgroundColor: 'white',
  },
});
