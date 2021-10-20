import React from 'react'
import { AppBar, Box, styled, Toolbar } from '@mui/material'
import Logo from '@assets/Logo.svg'
import Link from 'next/link'

const LinkItem = styled('a')({
  color: '#3C4044',
  fontSize: 24,
  paddingLeft: 20,
  paddingRight: 20,
  textDecoration: 'none',
  transition: 'all ease .2s',
  fontWeight: 700,
  ':hover': {
    color: '#000',
  },
})
const Header: React.FC = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        color: '#000',
        background: '#fff',
      }}
    >
      <Toolbar
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            width: `calc(100vw - 10px)`,
            height: 0,
            top: '100%',
            position: 'absolute',
            borderBottom: '1px solid #E3E6EB',
            left: 5,
          },
        }}
      >
        <Link href="/" passHref>
          <Box
            component="a"
            sx={{
              width: (theme) => theme.mixins.toolbar.minHeight,
              height: (theme) => theme.mixins.toolbar.minHeight,
            }}
          >
            <img
              src={Logo.src}
              alt=""
              width="100%"
              height="100%"
              onDragStart={(e) => e.preventDefault()}
            />
          </Box>
        </Link>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link href={'/about'} passHref>
            <LinkItem>소개</LinkItem>
          </Link>
          <Link href={'/recent'} passHref>
            <LinkItem>최근 작성</LinkItem>
          </Link>
          <Link href={'/discussion'} passHref>
            <LinkItem>토론</LinkItem>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
