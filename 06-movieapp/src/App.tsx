import 'react-native-gesture-handler';

import { NavigationStack } from './presentation/navigation';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};