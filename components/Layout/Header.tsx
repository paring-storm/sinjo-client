import React from 'react'
import { AppBar, Box, Drawer, IconButton, styled, Toolbar } from '@mui/material'
import Logo from '@assets/Logo.svg'
import Link from 'next/link'
import { useIsMobile } from '../../src/hooks/responsive'
import { Menu } from '@mui/icons-material'
import { useRecoilState } from 'recoil'
import { mobileDrawerOpenState } from '../../src/states/global'

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

export const headerItems = [
  {
    label: '소개',
    link: '/about',
  },
  {
    label: '최근 작성',
    link: '/recent',
  },
  {
    label: '토론',
    link: '/discussion',
  },
]

const Header: React.FC = () => {
  const isMobile = useIsMobile()
  const [drawer, setDrawer] = useRecoilState(mobileDrawerOpenState)

  return (
    <AppBar
      elevation={0}
      sx={{
        color: '#000',
        background: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            // width: `calc(100vw - 10px)`,
            width: '100vw',
            height: 0,
            top: '100%',
            position: 'absolute',
            borderBottom: '1px solid #E3E6EB',
            left: 0,
            // left: 5,
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
        {!isMobile && (
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {headerItems.map((x, i) => (
              <Link key={i} href={x.link} passHref>
                <LinkItem>{x.label}</LinkItem>
              </Link>
            ))}
          </Box>
        )}
        {
          isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton onClick={() => setDrawer(!drawer)}>
                <Menu />
              </IconButton>
            </>
          ) : (
            <></>
          ) // account menu
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header
