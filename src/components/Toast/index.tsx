import Toast from 'react-native-toast-message';

type Props = {
  message: string;
  type: 'success' | 'error'
}

export function showToast({ message, type }: Props) {
  Toast.show({
    type: `${type}`,
    text1: `${message}`
  })
}