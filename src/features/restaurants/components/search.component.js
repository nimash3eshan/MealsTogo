import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import {LocationContext} from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: 16px;
  padding-top: 0;
`;

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        style={styles.sbar}
        elevation={5}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

const styles = StyleSheet.create({
  sbar: {
    backgroundColor: 'white',
  },
});
