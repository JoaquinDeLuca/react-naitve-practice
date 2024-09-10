import prompt, { PromptOptions } from "react-native-prompt-android";

interface Options {
    title: string;
    description?: string;
    buttons: PromptButton[];
    promptType?: 'default' | 'plain-text' | 'secure-text';
    placeHolder?: string;
    defaultValue?: string;
}

interface PromptButton {
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'default' | 'destructive';
}


export const showPromt = ({
    title,
    description,
    buttons,
    promptType = 'default',
    placeHolder = "test",
    defaultValue
}: Options) => {

    prompt(
        title,
        description,
        buttons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeHolder
        }
    );

}