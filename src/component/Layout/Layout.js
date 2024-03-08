import { Box } from "@mui/material"
import Footer from "./component/Footer/Footer"

function Layout(props) {
  const { header = true, footer = true, children } = props
  return (
    <Box 
    // background: '#202020',
    sx={{ 
      background: '#202020',
    // backgroundImage: 'url("https://res.cloudinary.com/do7kimovl/image/upload/v1709834065/mobielTheme1_dbtwmp.jpg")',
    backgroundSize: 'cover', // You can adjust the background size as needed
    backgroundPosition: 'center', // You can adjust the background position as needed
    backgroundRepeat: 'no-repeat', // You can adjust the background repeat as needed
    // Other styles for the container
     }} >
      {children}
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout