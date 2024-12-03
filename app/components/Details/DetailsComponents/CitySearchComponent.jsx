import React, { useState, useEffect } from 'react';
import { Box, Input, Text, SearchIcon, HStack, FlatList, Pressable, Center } from 'native-base';

const CitySearch = ({ onCityChange }) => {
  const [inputedCity, setInputedCity] = useState('Roanne, France');
  const [city, setCity] = useState('Roanne, France');
  const [errorMessage, setErrorMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const AQICN_TOKEN = '00cf2c57afa2b16119f3a817d55cd49df5c5453c';

  useEffect(() => {
    let timeoutId;

    if (inputedCity) {
      const fetchCities = async () => {
        try {
          const response = await fetch(
            `https://api.waqi.info/search/?token=${AQICN_TOKEN}&keyword=${inputedCity}`,
          );
          const result = await response.json();
          setSuggestions(result.data);
          setErrorMessage(null);
        } catch (error) {
          setSuggestions([]);
          setErrorMessage('pas de données pour la ville saisie.');
        }
      };

      // Clear the previous timeout if there is one
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set a new timeout
      timeoutId = setTimeout(fetchCities, 500);
    }

    // Clean up function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [inputedCity]);

  useEffect(() => {
    // Set the default city when the component mounts
    onCityChange(city);
  }, [city, onCityChange]);

  const handleCitySelect = (selectedCity) => {
    setInputedCity(selectedCity);
    setCity(selectedCity);
    setSuggestions([]);
    onCityChange(selectedCity);
  };

  return (
    <Center>
      <Box w="90%">
        <HStack>
          <Input
            placeholder="Rechercher une ville"
            value={inputedCity}
            onChangeText={setInputedCity}
            InputLeftElement={<SearchIcon />}
          />
        </HStack>
        {suggestions.length > 0 && (
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.uid}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleCitySelect(item.station.name)}>
                <Box p="2" borderBottomWidth="1" borderColor="gray.200">
                  <Text>{item.station.name}</Text>
                </Box>
              </Pressable>
            )}
          />
        )}
        {errorMessage && <Text color="red.500">{errorMessage}</Text>}
      </Box>
    </Center>
  );
};

export default CitySearch;
