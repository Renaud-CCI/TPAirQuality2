import * as React from 'react';
import {Box, Button, Center, Container, Heading, Text, VStack} from 'native-base';
import { ScrollView } from 'react-native';
import Details from '../Details/DetailsContainer';

const styles = {
  title: {
    textAlign: 'center',
  },
};

function HomeContainer({navigation}) {
  return (
    <ScrollView>
      <VStack safeArea flex={1} p="2" w="90%" mx="auto" my="auto">
        <Center>
          <Container alignItems="center" m="4">
            <Center>
              <Heading
                style={styles.title}
                mt="4"
                bold
                fontSize="5xl"
                color="primary.500">
                Air Quality
              </Heading>
              <Text fontSize="2xl" m="8" textAlign="center">
                L'application qui vous permet de suivre la qualité de l'air
              </Text>
            </Center>

            <Button onPress={() => navigation.navigate('Details')}>
              Voir les prévisions
            </Button>
          </Container>
        </Center>
      </VStack>
    </ScrollView>
  );
}

export default HomeContainer;
