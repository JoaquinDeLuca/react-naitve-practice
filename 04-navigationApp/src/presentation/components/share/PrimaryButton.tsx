import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
    TextBtn: string;
    onPress?: () => void;
}

export const PrimaryButton = ({ TextBtn = 'BTN', onPress }: Props) => {

    return (

        <Pressable
            onPress={() => onPress && onPress()}
            style={({ pressed }) => ({
                ...globalStyles.primaryButton,
                opacity: pressed ? 0.81 : 1
            })}
        >
            <Text style={globalStyles.buttonText}>{TextBtn}</Text>
        </Pressable>
    );
};