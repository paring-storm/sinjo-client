import React from 'react'
import { useRecoilState } from 'recoil'
import { searchMenuOpenState } from '../../src/states/global'
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  InputBase,
} from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchMenu: React.FC = () => {
  const [search, setSearch] = useRecoilState(searchMenuOpenState)

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={search}
      onClose={() => setSearch(false)}
    >
      <DialogContent>
        <Box
          sx={{
            border: (theme) => `2px solid ${theme.palette.primary.main}`,
            borderRadius: 2,
            padding: 1,
            gap: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Search
            sx={{ marginLeft: 1, color: (theme) => theme.palette.primary.main }}
          />
          <InputBase fullWidth placeholder="검색어를 입력해 주세요..." />
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default SearchMenu
