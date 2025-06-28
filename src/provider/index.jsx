import Antdp from './antd'
import {BrowserRouter as Router} from 'react-router-dom'

export default function Providers({children}) {
  return (
    <Router>
        <Antdp>
            {children}
        </Antdp>
    </Router>
  )
}
