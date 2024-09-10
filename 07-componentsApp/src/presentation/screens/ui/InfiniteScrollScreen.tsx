import { ActivityIndicator, View } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);


    const loadMore = () => {
        console.log("loading more");

        setTimeout(() => {
            const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)
            setNumbers([...numbers, ...newArray])
        }, 2000);
    };

    return (
        <View style={{ backgroundColor: 'black' }}>

            <FlatList
                data={numbers}
                onEndReached={loadMore} // Cuando llega al último item de la lista
                onEndReachedThreshold={0.7} // Ajustar cuando esta llegando al final de la lista
                renderItem={({ item: number }) => <ListItem number={number} />}
                keyExtractor={(item) => item.toString()}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (
                    <View style={{ height: 150, justifyContent: 'center' }}>
                        <ActivityIndicator size={40} color={'orange'} />
                    </View>
                )}
            />

        </View>
    );
};

interface ListItemProps {
    number: number;
}

const ListItem = ({ number }: ListItemProps) => {

    return (

        <FadeInImage
            uri={`https://picsum.photos/id/${number}/500/400`}
            style={{
                height: 400,
                width: '100%',
                marginVertical: 5,
                borderRadius: 10
            }}
        />
    )
};