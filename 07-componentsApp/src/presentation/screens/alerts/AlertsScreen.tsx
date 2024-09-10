import { Alert } from 'react-native';
import { Button, CustomView, Separator, Title } from '../../components';
import { showPromt } from '../../../config/adapters/Prompt.adapter'


export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const showPromptPress = () => {

        // Libreria que funciona para ambos sistemas 
        showPromt({
            title: 'Name',
            description: 'Enter your name',
            buttons: [
                { text: 'Ok', onPress: () => console.log('Pressed ok') },
            ],
            placeHolder: "juan"
        })

        // Codigo nativo pero que en android no anda
        // Alert.prompt(
        //     "Corro Electronico",
        //     "Ingrese su correo electronico",
        //     (value: string) => console.log(value),
        //     'secure-text',
        //     "Texto default",
        //     "number-pad"
        // )
    };


    return (
        <CustomView margin>
            <Title text='Alertas' />

            <Button
                text='Alerta - 2 botones'
                onPress={createTwoButtonAlert}
            />

            <Separator />

            <Button
                text='Alerta - 3 botones'
                onPress={createThreeButtonAlert}
            />

            <Separator />

            <Button
                text='Propm - Input'
                onPress={showPromptPress}
            />

        </CustomView>
    );
};
