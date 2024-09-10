import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/themeGlobals';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
    text: string;
    style?: StyleProp<ViewStyle>;

    onPress: () => void;
}

export const Button = ({ text, style, onPress }: Props) => {

    const { colors } = useContext(ThemeContext);


    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ([
                globalStyles.btnPrimary,
                {
                    opacity: pressed ? 0.7 : 1,
                    backgroundColor: colors.primary
                },
                style
            ])}
        >
            <Text
                style={[
                    {
                        color: colors.buttonTextColor
                    }
                ]}
            >{text}</Text>
        </Pressable>
    );
};