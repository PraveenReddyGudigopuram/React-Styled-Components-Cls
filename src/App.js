import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => (
  <>
    <Heading className="heading">Hello World</Heading>
    <CustomButton type="button" color="#fff" bColor="#007cbb">
      Click Here
    </CustomButton>
    <CustomButton type="button" color="#007cbb" bColor="#fff">
      Click Here
    </CustomButton>
  </>
)

export default App
