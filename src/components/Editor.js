import { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import { Box } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex
`

const Editor = ({ heading, icon, color, value, onChange }) => {

  const [open, setOpen] = useState(true)

  const handleChange = (editor, data, value)=>{
    onChange(value)
  }


  return (
    <Container style={open ? null : {flexGrow: 0}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              color: '#000',
              display: 'flex',
              placeContent: 'center',
              paddingBottom: 2
            }}
          >{icon}</Box>
          {heading}
        </Heading>
        <CloseFullscreen 
           fontSize='small'
           style={{alignSelf:'center', cursor:'pointer'}}
           onClick={()=>setOpen(prevState => !prevState )}
        />
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineNumbers: true,
          theme: 'material'
        }}
      />
    </Container>
  )
}

export default Editor;