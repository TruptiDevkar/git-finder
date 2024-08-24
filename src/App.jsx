import { BrowserRouter as Router,Route ,Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Users from "./pages/Users"
import Navbar from "./componenets/layouts/Navbar"
import Footer from "./componenets/layouts/Footer"
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./componenets/layouts/Alert"

function App() {


  return (
   <GithubProvider>
    <AlertProvider>
    <Router>
     <div className="flex flex-col justify-between   inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Navbar/>
      <main className="container min-h-screen mx-auto px-3 pb-12 ">
      <Alert/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/users/:login" element={<Users />} />
        <Route path='/NotFound' element={<NotFound/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      </main>
      <Footer/>
     </div>

    </Router>
    </AlertProvider>
    </GithubProvider>
  )
}

export default App
