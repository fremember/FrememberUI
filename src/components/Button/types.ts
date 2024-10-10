export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'small' | 'normal' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    loading?: boolean;
    nativeType?: NativeType;
    autofocus?: boolean;
    icon?: string;
}
// 使用
// import { ButtonProps } from './types'
// defineProps<ButtonProps>()

export interface ButtonInstance {
    ref: HTMLButtonElement
}





import { PropType } from "vue"
export const buttonProps = {
    type: {
        type: String as PropType<ButtonType>
    },
    size: {
        type: String as PropType<ButtonSize>
    },
    plain: {
        type: Boolean
    },
    round: {
        type: Boolean
    },
    circle: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    },
    loading: {
        type: Boolean
    }
}
// 使用
// import { buttonProps } from './types'
// defineProps(buttonProps)