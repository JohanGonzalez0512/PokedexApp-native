import React from 'react'
import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBg}
      />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10,
              color: 'black'
            }}
            >
              Pokedex</Text>
          )}

          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}

          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color={'grey'}
            />
          )}
        />

      </View>

    </>
  )
}

