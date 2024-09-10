import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeContextProvaider } from './presentation/context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient();

export const MyApp = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvaider>
        <StackNavigator />
      </ThemeContextProvaider>
    </QueryClientProvider>
  );
}