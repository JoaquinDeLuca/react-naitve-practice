import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/share';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';


const products = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
    { id: 4, name: "Producto 4" },
    { id: 5, name: "Producto 5" },
    { id: 6, name: "Producto 6" }
]

export const ProductsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>()


    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 6, fontSize: 30, fontWeight: '600' }}>Products Screen</Text>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton
                        TextBtn={item.name}
                        onPress={() => navigation.navigate('Product', item)}
                    />
                )}
            />



            <Text style={{ marginBottom: 6, fontSize: 30, fontWeight: '600' }}>Ajustes </Text>
            <PrimaryButton
                TextBtn='Ajustes'
                onPress={() => navigation.navigate('Setting')}
            />
        </View>
    );
};