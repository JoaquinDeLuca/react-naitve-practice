import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { useState } from 'react';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { Separator } from '../../components/ui/Separator';
import { Title } from '../../components/ui/Title';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    return (
        <CustomView margin>
            <Title text='Swtches' />
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    onChange={(value) => setState({ ...state, isActive: value })}
                    text='¿Está activo?'
                />

                <Separator />

                <CustomSwitch
                    isOn={state.isHungry}
                    onChange={(value) => setState({ ...state, isHungry: value })}
                    text='¿Tiene hambre?'
                />

                <Separator />

                <CustomSwitch
                    isOn={state.isHappy}
                    onChange={(value) => setState({ ...state, isHappy: value })}
                    text='¿Es feliz?'
                />
            </Card>
        </CustomView>
    );
};