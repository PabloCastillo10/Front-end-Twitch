import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import routes from "./routes.jsx"
import videoBg from "./assets/video4.mp4"
import './index.css'
export const App = () => {

  let element = useRoutes(routes)
  return (
    <div className="app-container">
    
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoBg} type="video/mp4" />
      </video>

    
      <div className="content-overlay">
        {element}
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
}
export default App
