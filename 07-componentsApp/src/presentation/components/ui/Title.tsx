import { Text } from 'react-native';
import { globalStyles } from '../../../config/theme/themeGlobals';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text?: string;
    safe?: boolean;
    white?: boolean;
}

export const Title = ({ safe = false, text, white = false }: Props) => {

    const { top } = useSafeAreaInsets()
    const { colors } = useContext(ThemeContext);

    return (
        <>
            <Text
                style={{
                    ...globalStyles.title,
                    marginTop: safe ? top : 0,
                    marginBottom: 10,
                    paddingVertical: 5,
                    color: white ? "white" : colors.text,
                    fontWeight: 400,
                }}
            >{text}</Text>
        </>
    );
};