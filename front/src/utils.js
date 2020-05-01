import {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE
} from 'react-native-secure-storage'

export const SecureStorageConfig = {
  accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
  accessible: ACCESSIBLE.WHEN_UNLOCKED,
  authenticationPrompt: 'auth with yourself',
  service: 'example',
  authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
}

export const STORAGE_KEYS = {
  AUTHENTICATION_TOKEN: 'authentication_token'
}