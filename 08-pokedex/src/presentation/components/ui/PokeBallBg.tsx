import { useContext } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ImageStyle>

}

export const PokeBallBg = ({ style }: Props) => {

    const { isDark } = useContext(ThemeContext);


    const pokemonBallImg = isDark
        ? require("../../../assets/pokeball-light.png")
        : require("../../../assets/pokeball-dark.png");

    return (
        <Image
            source={pokemonBallImg}
            style={[
                style,
                {
                    width: 300,
                    height: 300,
                    opacity: 0.3
                }
            ]}
        />
    );
};