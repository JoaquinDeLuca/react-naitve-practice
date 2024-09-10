import { RefreshControl } from 'react-native';
import { CustomView, Title } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const { colors } = useContext(ThemeContext);


    const { top } = useSafeAreaInsets()


    const onRefresh = () => {
        setIsRefreshing(true)

        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000);
    };

    return (
        <ScrollView
            style={{
                backgroundColor: colors.background
            }}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    onRefresh={onRefresh}
                    colors={[colors.primary, "red", "orange"]}
                />
            }
        >
            <CustomView margin>
                <Title text='Pull to refresh' safe />
            </CustomView>
        </ScrollView>
    );
};