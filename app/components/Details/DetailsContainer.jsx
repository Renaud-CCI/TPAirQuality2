import * as React from 'react';
import {VStack} from 'native-base';
import CitySearch from './DetailsComponents/CitySearchComponent';
import AirQualityCard from './DetailsComponents/AirQualityCard';
import {ScrollView} from 'react-native';

function DetailsContainer() {
  const [city, setCity] = React.useState('');

  return (
    <ScrollView>
      <VStack safeArea flex={1} p="2" w="90%" mx="auto">
        <CitySearch onCityChange={setCity} />
        <AirQualityCard city={city} />
      </VStack>
    </ScrollView>
  );
}

export default DetailsContainer;
