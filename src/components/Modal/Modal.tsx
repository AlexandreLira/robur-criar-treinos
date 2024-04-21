import { ReactNode } from 'react'
import Modalbox, { ModalProps } from 'react-native-modalbox'
import { theme } from '../../theme'

interface Modal extends ModalProps {
    children: ReactNode
}

export function Modal(props: Modal) {
    const { children, ...rest } = props
    return (
        <Modalbox
            {...rest}
            backdrop={true}
            position='bottom'
            style={{
                height: '50%',
                borderTopRightRadius: 16,
                borderTopLeftRadius: 16,
                paddingTop: 38,
                backgroundColor: theme.colors.background

            }}
            coverScreen
            swipeToClose
            swipeArea={50}
            backButtonClose
            useNativeDriver


        >
            {children}
        </Modalbox>
    )
}