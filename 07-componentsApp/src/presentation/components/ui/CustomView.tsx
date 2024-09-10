import { ReactNode, useContext } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/themeGlobals';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}

export const CustomView = ({ style, children, margin = false }: Props) => {

    const { colors } = useContext(ThemeContext);

    return (
        <View style={[
            globalStyles.mainContainer
            , style
            , margin ? globalStyles.globalMargin : null,
            { backgroundColor: colors.background }
        ]}>
            {children}
        </View>
    );
};