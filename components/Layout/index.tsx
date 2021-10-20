import React from 'react'
import Header from './Header'
import { Box, Container, Toolbar } from '@mui/material'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Box sx={{ my: 2 }}>
        <Container>
          <Toolbar />
          {children}
        </Container>
      </Box>
    </div>
  )
}

export default Layout
