import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar style={styles.sbar} placeholder="Search" elevation={5} />
      </View>
      <FlatList
        data={[
          {id: '1', name: 1},
          {id: '2', name: 2},
          {id: '3', name: 3},
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={item => item.id}
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
  },
  list: {
    flex: 1,
    padding: 16,
  },
  sbar: {
    backgroundColor: 'white',
  },
});
