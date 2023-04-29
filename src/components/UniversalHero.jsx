import { Box } from '@mui/material'
import React from 'react'
import TopBar from './TopBar'
import './components.css'

function UniversalHero(props) {
  return (
    <Box>
      <Box className="bg-img">
        <Box className="bg-color">
          <TopBar />
          <Box className="uni-intro">
            <Box>
              <h1>{props.title}</h1>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UniversalHero