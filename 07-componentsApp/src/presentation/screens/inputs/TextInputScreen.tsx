import { Text, TextInput, View } from 'react-native';
import { Card, CustomView, Title } from '../../components';
import { globalStyles } from '../../../config/theme/themeGlobals';
import { useContext, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const { colors, currentTheme } = useContext(ThemeContext);


    return (
        <ScrollView
            style={{
                backgroundColor: colors.background
            }}
        >
            <CustomView margin>
                <Title text='Text inputs' />

                <Card
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <TextInput
                        style={[globalStyles.input]}
                        placeholder='Nombre completo'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={(value => setForm({ ...form, name: value }))}
                    />
                    <TextInput
                        style={[globalStyles.input]}
                        placeholder='Correo electrónico'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        autoCorrect={false}
                        onChangeText={(value => setForm({ ...form, email: value }))}
                    />
                    <TextInput
                        style={[globalStyles.input]}
                        placeholder='Teléfono'
                        keyboardType='phone-pad'
                        onChangeText={(value => setForm({ ...form, phone: value }))}
                    />
                </Card>

                <View style={{ height: 50 }} />

                <Card
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <View style={{ height: 50 }} />

                <Card
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>
                <View style={{ height: 50 }} />

                <Card
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>
                <View style={{ height: 50 }} />
                <Card
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>

                <View style={{ height: 50 }} />
                <Card
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <Text>{JSON.stringify(form, null, 2)}</Text>
                </Card>
                <View style={{ height: 50 }} />


                <Card
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <TextInput
                        style={[globalStyles.input]}
                        placeholder='Id'
                        keyboardType='numeric'
                        onChangeText={(value => setForm({ ...form, phone: value }))}
                    />
                </Card>

                <View style={{ height: 20 }} />

            </CustomView>
        </ScrollView>
    );
};