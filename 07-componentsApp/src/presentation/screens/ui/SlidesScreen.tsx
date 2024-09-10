import { Image, ImageSourcePropType, NativeScrollEvent, Text, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '../../../config/theme/themeGlobals';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components';
import { NativeSyntheticEvent } from 'react-native';
import { useContext, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/slide-3.png'),
    },
];

export const SlidesScreen = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const flatListRef = useRef<FlatList>(null)
    const navigation = useNavigation();
    const { colors } = useContext(ThemeContext);



    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        const { contentOffset, layoutMeasurement } = event.nativeEvent;

        // Para determinar en que pagina estoy
        const currtentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

        setCurrentSlideIndex(currtentIndex > 0 ? currtentIndex : 0)
    };


    // Navegar sig slide
    const scrollToSlide = (index: number) => {
        if (!flatListRef.current) return;

        flatListRef.current.scrollToIndex({
            index: index,
            animated: true,
        })
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background
            }}
        >
            <FlatList
                ref={flatListRef}
                data={items}
                keyExtractor={(item) => item.title}

                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled // Como para agregar breackPoint digamos entre images
                scrollEnabled={false}
                onScroll={onScroll}
            />

            {currentSlideIndex === items.length - 1 ? (
                <Button
                    text='Finalizar'
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        right: 30,
                        width: 100
                    }}
                    onPress={() => navigation.goBack()}
                />)
                :
                (<Button
                    text='Siguiente'
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        right: 30,
                        width: 100
                    }}
                    onPress={() => scrollToSlide(currentSlideIndex + 1)}
                />)
            }
        </View>
    );
};

interface SlideItemProps {
    item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {

    const { width } = useWindowDimensions();
    const { desc, img, title } = item;

    const { colors } = useContext(ThemeContext);


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.cardBackground,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
                width: width,
            }}
        >
            <Image
                source={img}
                style={{
                    width: width * 0.7, // Basicamente sería el 70% de la pantalla
                    height: width * 0.7,
                    resizeMode: "center",
                    alignSelf: "center",
                }}
            />

            <Text
                style={[
                    globalStyles.title,
                    {
                        color: colors.primary
                    }
                ]}
            >{title}</Text>
            <Text
                style={{
                    color: colors.text,
                    marginTop: 20
                }}
            >{desc}</Text>
        </View>
    )
}