import { View, Text } from 'react-native'
import { HamburMenu } from '../../components/share'
import { IonIcons } from '../../components/share/IonIcons'

export const Tab1Screen = () => {

  return (
    <View>
      <HamburMenu />
      <Text>Tab1Screen</Text>
      <IonIcons name='rocket-outline' />
    </View>
  )
}
