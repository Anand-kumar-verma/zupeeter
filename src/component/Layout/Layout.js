import { Box } from "@mui/material"
import Footer from "./component/Footer/Footer"

function Layout(props) {
  const { header = true, footer = true, children } = props
  return (
    <Box sx={{ background: '#202020' }}>
      {children}
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout