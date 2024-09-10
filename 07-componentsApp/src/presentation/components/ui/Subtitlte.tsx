import { Text } from 'react-native';
import { globalStyles } from '../../../config/theme/themeGlobals';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    safe?: boolean;
}

export const SubTitle = ({
    text,
    safe = false,
}: Props) => {

    const { colors } = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();


    return (
        <Text
            style={{
                ...globalStyles.subTitle,
                marginTop: safe ? top : 0,
                paddingVertical: 10,
                marginVertical: 5,
                backgroundColor: colors.background,
                color: colors.text
            }}
        >
            {text}
        </Text>
    );
};