import { Platform, Text, View } from 'react-native';
import { Button, CustomView, Title } from '../../components';
import { Modal } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);
    const { colors } = useContext(ThemeContext);


    return (
        <CustomView margin>
            <Title text='ModalScreen' safe />

            <Button
                text='Abrir modal'
                onPress={() => setIsVisible(true)}
            />

            <Modal
                visible={isVisible}
                animationType='slide'
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Title text='Modal content' safe />
                    </View>

                    <View style={{ flex: 1 }} />

                    <Button
                        text='Cerra modal'
                        onPress={() => setIsVisible(false)}
                        style={{
                            height: Platform.OS === 'android' ? 50 : 60,
                            borderTopStartRadius: 25,
                            borderTopRightRadius: 25,
                            borderBottomEndRadius: 0,
                            borderBottomStartRadius: 0,
                            justifyContent: 'center'
                        }}
                    />
                </View>
            </Modal>
        </CustomView>
    );
};