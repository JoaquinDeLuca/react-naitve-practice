import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

export const ProductScreen = () => {


    // Forma de destructurar las props
    // const {name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params

    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params
    console.log(params);

    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({
            title: `Hola ${params.name}`
        })
    }, [])


    return (
        <View>
            <Text
                style={{ marginHorizontal: 10, fontSize: 30 }}
            >ProductScreen</Text>

            <Text
                style={{ marginHorizontal: 10, fontSize: 20, }}
            >{params.id} -{params.name}</Text>
        </View>
    );
};