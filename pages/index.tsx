import type { NextPage } from 'next'
import SearchImg from '@assets/Search.png'
import { Box, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexDirection: 'row-reverse',
        '@media (max-width: 768px)': {
          flexDirection: 'column-reverse',
          mt: 8,
        },
      }}
    >
      <Box sx={{ flexGrow: 1, boxSizing: 'content-box' }}>
        <img src={SearchImg.src} width="100%" alt="" />
      </Box>
      <Box
        sx={{
          width: '60%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          '@media (max-width: 768px)': {
            textAlign: 'center',
            width: '100%',
          },
        }}
      >
        <Typography variant="h3" fontWeight={700}>
          유행어 찾기,
        </Typography>
        <Typography variant="h3" fontWeight={700}>
          이제 힘들이지 마세요.
        </Typography>
      </Box>
    </Box>
  )
}

export default Home
