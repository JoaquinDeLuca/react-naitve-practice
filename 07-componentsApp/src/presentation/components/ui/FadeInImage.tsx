import { useState } from 'react';
import { StyleProp, ImageStyle, View, Animated, ActivityIndicator } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ style, uri }: Props) => {

    const { FadeIn, animatedOpacity } = useAnimation()
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color={'grey'}
                    size={30}
                />
            }

            <Animated.Image
                source={{ uri }}
                style={[style, { opacity: animatedOpacity }]}
                onLoadEnd={() => {
                    FadeIn({ duration: 600 }),
                        setIsLoading(false);
                }}
            />

        </View>
    );
};