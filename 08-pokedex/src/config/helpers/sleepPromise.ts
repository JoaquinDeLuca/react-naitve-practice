

interface Props {
    time: number
}

export const sleep = async ({ time = 2000 }: Props) => {
    return new Promise(resolve => setTimeout(resolve, time));
}
