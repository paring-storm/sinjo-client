import React from 'react'
import { useIsMobile } from '../../src/hooks/responsive'
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material'
import { useRecoilState } from 'recoil'
import { mobileDrawerOpenState } from '../../src/states/global'
import { headerItems } from './Header'
import Link from 'next/link'

const Sidebar: React.FC = () => {
  const isMobile = useIsMobile()
  const [drawer, setDrawer] = useRecoilState(mobileDrawerOpenState)

  return (
    <Drawer
      open={isMobile && drawer}
      onClose={() => setDrawer(false)}
      anchor="right"
    >
      <Toolbar />
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
