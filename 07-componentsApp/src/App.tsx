// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigatorStack } from './presentation/navigator/NavigatorStack';
import { ThemeProvider } from './presentation/context/ThemeContext';


export const App = () => {
  return (
    <ThemeProvider>
      <NavigatorStack />
    </ThemeProvider>
  );
};