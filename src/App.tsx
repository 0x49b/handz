import React from 'react'
import './App.css'
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Icon
} from '@blueprintjs/core'
import { APP_ICON, APP_NAME } from './Config'

function App() {
  return (
    <div className="content">
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <Icon icon={APP_ICON} className='hdz-app-icon'/>
            {APP_NAME}
            </NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
          <Button className={Classes.MINIMAL} icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>
    </div>
  )
}

export default App
