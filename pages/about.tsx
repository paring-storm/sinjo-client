import React from 'react'
import { Typography } from '@mui/material'

const About: React.FC = () => {
  return (
    <div>
      <Typography variant="h3" fontWeight={700} sx={{ marginTop: 4 }}>
        트렌드를 더욱 쉽게.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        무슨 뜻인지 모르겠는 유행어, 검색하느라 시간 걸리신 적 있으신가요?
      </Typography>
      <Typography variant="h6">
        <Typography color="primary" variant="h6" component="span">
          신조
        </Typography>
        는 유행어를 쉽게 찾기 위해 제작된 {"'"}유행어 오픈사전{"'"}입니다.
      </Typography>
      {/*--------------*/}
      <Typography variant="h3" fontWeight={700} sx={{ marginTop: 8 }}>
        검색
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        검색창에 단어를 입력한 후, 원하는 단어 문서를 클릭하세요.
      </Typography>
      <Typography variant="h6">원하는 신조어를 쉽게 배워보세요!</Typography>
      {/*--------------*/}
      <Typography variant="h3" fontWeight={700} sx={{ marginTop: 8 }}>
        토론과 기여
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        가입한 모든 유저들은 단어를 편집할 수 있으며, 해당 제작자의 승인 후 해당
        단어에 반영됩니다.
      </Typography>
      <Typography variant="h6">
        올바르지 않은 단어는 토론을 통해 관리자에게 전달할 수 있습니다.
      </Typography>
      {/*--------------*/}
      <Typography variant="h3" fontWeight={700} sx={{ marginTop: 8 }}>
        투표
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        단어의 대한 만족도를 투표로 나타내세요.
      </Typography>
      <Typography variant="h6">
        투표값은 단어 페이지에 보여지며, 검색 결과의 우선순위에 반영됩니다.
      </Typography>
    </div>
  )
}

export default About
