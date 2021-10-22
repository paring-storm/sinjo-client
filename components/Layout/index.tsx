import React from 'react'
import Header from './Header'
import { Box, Container, Toolbar } from '@mui/material'
import Sidebar from './Sidebar'
import SearchMenu from './SearchMenu'
import { GlobalHotKeys } from 'react-hotkeys'
import { useSetRecoilState } from 'recoil'
import { searchMenuOpenState } from '../../src/states/global'

const keyMap = {
  FOCUS_SEARCH: 'command+k',
}

const Layout: React.FC = ({ children }) => {
  const setSearch = useSetRecoilState(searchMenuOpenState)

  const handlers = {
    FOCUS_SEARCH: () => {
      setSearch(true)
    },
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
          <Header />
          <Sidebar />
          <SearchMenu />
          <Box sx={{ my: 2 }}>
            <Container>
              <Toolbar />
              {children}
            </Container>
          </Box>
        </GlobalHotKeys>
      </Box>
      <Box
        sx={{
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Copyright 2021 Sinjo all rights reserved.
      </Box>
    </Box>
  )
}

export default Layout
