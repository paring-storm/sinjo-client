import React from 'react'
import { useIsMobile } from '../../src/hooks/responsive'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  mobileDrawerOpenState,
  searchMenuOpenState,
} from '../../src/states/global'
import { headerItems } from './Header'
import Link from 'next/link'
import { Search } from '@mui/icons-material'

const Sidebar: React.FC = () => {
  const isMobile = useIsMobile()
  const [drawer, setDrawer] = useRecoilState(mobileDrawerOpenState)
  const setSearch = useSetRecoilState(searchMenuOpenState)

  return (
    <Drawer
      open={isMobile && drawer}
      onClose={() => setDrawer(false)}
      anchor="right"
    >
      <Toolbar />
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={() => setSearch(true)}>
          <Search />
        </IconButton>
      </Toolbar>
      <List>
        {headerItems.map((x, i) => (
          <Link key={i} passHref href={x.link}>
            <ListItem button component="a">
              <ListItemText primary={x.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
