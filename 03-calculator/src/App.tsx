import {
  StatusBar,
  View,
} from 'react-native';
import {CaculatorScreen} from './presentation/screens/CaculatorScreen'
import { globalStyle } from './config/theme/app-theme';

function App(){

  return (
    <View style={globalStyle.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={"black"}
      />
      <CaculatorScreen/>
    </View>
  );
}

export default App;
