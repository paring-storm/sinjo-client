import React from 'react'
import { Box } from '@mui/material'

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 4,
        fontSize: 50,
        fontWeight: 900,
      }}
    >
      Page Not Found
    </Box>
  )
}

export default NotFound
