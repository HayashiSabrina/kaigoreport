import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {

   return (
      <header>
         <div className="container"> </div>

            <div><Link to="/"><h1>ほうれんそう</h1></Link> 
             <Link to="/add-report">Add New Report</Link> </div>
               <span><LanguageSelector /></span>
         
      </header>

   )
}

export default Navbar