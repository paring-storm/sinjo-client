import { atom } from 'recoil'

export const mobileDrawerOpenState = atom<boolean>({
  key: 'global:mobileDrawerOpen',
  default: false,
})
