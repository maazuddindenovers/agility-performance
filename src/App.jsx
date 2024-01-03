import './App.css'

import { Box, Container } from '@mui/material';
import SectionTabs from './components/section/sectionTabs';
import PerformanceDashboard from './views/PerformanceDashboard';



function App() {


  return (
    <Container maxWidth="xl" sx={{paddingLeft:[0,0,0,1],paddingRight:[0,0,0,1]}}  >
      <SectionTabs tabHeads={['Team agility', 'Structural Agility', 'Enterprise Agility', 'Performance dashboard']}>
        <Box>

        </Box>
        <Box>
            
        </Box>
        <Box>
        
        </Box>
        <Box>
            <PerformanceDashboard />
        </Box>
      </SectionTabs>
    </Container>
  )
}

export default App
