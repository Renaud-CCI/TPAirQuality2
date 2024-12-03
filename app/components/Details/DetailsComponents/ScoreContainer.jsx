import React from 'react';
import {Box, Center, Circle, Text} from 'native-base';
import {PieChart} from 'react-native-gifted-charts';

const ScoreContainer = ({aqi, bgColor}) => {
  const hexaColor = color => {
    switch (color) {
      case 'primary.500':
        return '#06b6d4';
      case 'lime.700':
        return '#4d7c0f';
      case 'yellow.400':
        return '#facc15';
      case 'orange.400':
        return '#fb923c';
      case 'red.700':
        return '#b91c1c';
      case 'purple.800':
        return '#6b21a8';
      case 'yellow.900':
        return '#713f12';
      default:
        return '#06b6d4';
    }
  };

  const calculatedHexaColor = hexaColor(bgColor);
  const pieData = [
    {value: aqi / 2, color: calculatedHexaColor},
    {value: 100 - aqi / 2, color: 'white'},
  ];

  return (
    <Center>
      <Box>
        <PieChart
          donut
          radius={80}
          data={pieData}
          centerLabelComponent={() => {
            return (
              <Circle
                size="80px"
                shadow={4}
                alignItems="center"
                backgroundColor="gray.100">
                <Text fontSize="sm">indice</Text>
                <Text fontSize="2xl">{aqi}</Text>
              </Circle>
            );
          }}
        />
      </Box>
    </Center>
  );
};

export default ScoreContainer;
