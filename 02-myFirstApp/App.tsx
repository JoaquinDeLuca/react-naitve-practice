import {SafeAreaView } from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen'
import {CounterScreen} from './src/presentation/screens/CounterScreen'
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen'
import {DimensionScreen} from './src/presentation/screens/DimensionScreen'
import {PositionScreen} from './src/presentation/screens/PositionScreen'
import {FlexScreen} from './src/presentation/screens/FlexScreen'
import {FlexDirecctionScreen} from './src/presentation/screens/FlexDirecctionScreen'
import {HomeWorkSrceen} from './src/presentation/screens/HomeWorkSrceen'

// PaperProvider and icons
import { PaperProvider } from 'react-native-paper';
import IonIcons from 'react-native-vector-icons/Ionicons'


export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcons {...props} />
      }}
    >
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Joaquin de luca' /> */}
        {/* <CounterScreen/> */}
        {/* <CounterM3Screen/> */}
        {/* <DimensionScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen/> */}
        {/* <FlexDirecctionScreen/> */}
        <HomeWorkSrceen />
      </SafeAreaView>
    </PaperProvider>  
  );
}