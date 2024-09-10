import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { IonIcons } from './IonIcons';
import { globalColors } from '../../theme/theme';

export const HamburMenu = () => {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{ marginLeft: 4 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <IonIcons name='menu-outline' color={globalColors.primary} />
        </Pressable>
      )
    })
  }, [])


  return (<></>);
};