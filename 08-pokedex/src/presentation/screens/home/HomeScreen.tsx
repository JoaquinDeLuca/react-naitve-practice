import { StyleSheet, View, FlatList } from 'react-native';
import { getPokemons } from '../../../actions/pokemons';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { PokeBallBg } from '../../components/ui/PokeBallBg';
import { ActivityIndicator, FAB, Text } from 'react-native-paper';
import { globalStyle } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> { }

export const HomeScreen = ({ navigation }: Props) => {

    const { top } = useSafeAreaInsets();
    const queryClient = useQueryClient();
    const { isDark, theme } = useContext(ThemeContext);

    // Esto es una forma tradicional de hacer una peteción
    // const { isLoading, data: pokemons = [] } = useQuery({
    //     queryKey: ['pokemons'], // indentificador,
    //     queryFn: () => getPokemons(0), // fn fetch
    //     staleTime: 1000 * 60 * 60, // mantenga la data (cache) por 60min, antes de volver a hacer un fetch
    // })


    const { isLoading, data, fetchNextPage } = useInfiniteQuery({
        queryKey: ['pokemons', 'infinite'], // indentificador,
        initialPageParam: 0, // pagina inicial va ser 0
        staleTime: 1000 * 60 * 60, // mantenga la data (cache) por 60min, antes de volver a hacer un fetch
        queryFn: async (params) => {
            const pokemons = await getPokemons(params.pageParam)
            // Hacer el set data datos para pokemosById, setea en cache pera no hacer el fetch nuevamente
            pokemons.forEach(pokemon => {
                queryClient.setQueryData(["pokemon", pokemon.id], pokemon)
            });

            return pokemons;
        }, // fn fetch
        getNextPageParam: (lastPage, pages) => pages.length,
    })


    return (
        <View style={globalStyle.globalMargin}>
            <PokeBallBg style={styles.imgPosition} />


            <FlatList
                data={data?.pages.flat() ?? []}
                keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
                numColumns={2}
                style={{ paddingTop: top + 10 }}
                ListHeaderComponent={() => (
                    <Text variant='displayMedium'>Pokédex</Text>
                )}
                renderItem={({ item: pokemon }) => (
                    <PokemonCard pokemon={pokemon} />
                )}
                onEndReachedThreshold={0.7} // Cuando lleguemos al 80% del scroll
                onEndReached={() => fetchNextPage()}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (
                    <View style={{ height: 120, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={'large'} color='orange' />
                    </View>
                )}
            />

            {!isLoading && <FAB
                label="Buscar"
                style={[globalStyle.fab, { backgroundColor: theme.colors.primary }]}
                mode='elevated'
                color={isDark ? 'black' : 'white'}
                onPress={() => navigation.push("SearchScreen")}

            />}
        </View>
    );
};


const styles = StyleSheet.create({
    imgPosition: {
        position: "absolute",
        top: -100,
        right: -100
    }
});