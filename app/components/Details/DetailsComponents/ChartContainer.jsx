import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {Center} from 'native-base';

const ChartContainer = ({data, bgColor}) => {
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];
  return (
    <Center mt="6">
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </Center>
  );
};

export default ChartContainer;
