import { View } from 'react-native';
import { globalStyle } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, Text, TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { Pokemon } from '../../../domain/entities/pokemon';
import { useQuery } from '@tanstack/react-query';
import { getPokemonsByIds, getPokemonsWithNamesId } from '../../../actions/pokemons';
import { useMemo, useState } from 'react';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';

export const SearchScreen = () => {

    const { top, bottom } = useSafeAreaInsets();
    const [term, setTerm] = useState('');

    const debouncedValue = useDebouncedValue(term);


    const { data: pokemonsNameList = [], isLoading } = useQuery({
        queryKey: ['pokemons', 'alls'],
        queryFn: () => getPokemonsWithNamesId()
    })


    const pokemonNameIdList = useMemo(() => {
        // Es un número
        if (!isNaN(Number(debouncedValue))) {
            const pokemon = pokemonsNameList?.find(item => item.id === Number(debouncedValue));
            return pokemon ? [pokemon] : [];
        }

        if (debouncedValue.length === 0) return [];
        if (debouncedValue.length < 3) return [];


        return pokemonsNameList?.filter(item => item.name.includes(debouncedValue.toLocaleLowerCase()));
    }, [debouncedValue])


    const { isLoading: isLoadingPokemons, data: pokemons = [] } = useQuery({
        queryKey: ['pokemons', 'by', pokemonNameIdList],
        queryFn: () => getPokemonsByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
        staleTime: 1000 * 60 * 5
    })


    if (isLoading) {
        return (<FullScreenLoader />);
    }

    return (
        <View
            style={[
                globalStyle.globalMargin,
                {
                    paddingTop: top + 10
                }
            ]}
        >
            <TextInput
                placeholder='Búscar pokemon'
                mode='flat'
                autoFocus
                autoCorrect={false}
                onChangeText={setTerm}
                value={term}
            />

            {isLoadingPokemons && <ActivityIndicator size={35} style={{ marginTop: 40 }} />}


            <FlatList
                data={pokemons}
                keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
                numColumns={2}
                style={{ paddingTop: top + 10 }}
                renderItem={({ item: pokemon }) => (
                    <PokemonCard pokemon={pokemon} />
                )}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 100 }} />}
            />
        </View>
    );
};