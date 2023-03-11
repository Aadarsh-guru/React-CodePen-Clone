import { Box, styled } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
    height : 41vh;
`

const Result = () => {

    const [src, setSrc] = useState('')

    const { html, css, javaScript } = useContext(DataContext)

    const sourceCode = `
        <html>
           <body>${html}</body>
           <style>${css}</style>
           <script>${javaScript}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(sourceCode)
        }, 1000)

        return () => clearTimeout(timeout)

    }, [html, css, javaScript])

    return (
        <Container>
            <iframe srcDoc={src} frameborder={0} title='Output' sandbox='allow-scripts' width='100%' height='100% ' ></iframe>
        </Container>
    )
}

export default Result