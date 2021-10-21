import { atom } from 'recoil'

export const mobileDrawerOpenState = atom<boolean>({
  key: 'global:mobileDrawerOpen',
  default: false,
})

export const searchMenuOpenState = atom<boolean>({
  key: 'global:searchMenuOpen',
  default: false,
})
