import Layout from "./components/Layout";
import Home from "./page/Home"
import { Routes, Route } from "react-router-dom";
import { Vins } from "./page/Vins";
import { Biere } from "./page/Biere";
import { GrandsVins } from "./page/GrandsVins";
import { Champagnes } from "./page/Champagne";
import Contact from "./page/Contact";
import About from "./page/About";






export default function App() {

  return (
    <Layout>
<Routes>      
                <Route exact path="/" element={<Home />} />
                <Route path="/vins" element={<Vins />} />
                <Route path="/grands-vins" element={<GrandsVins />} />
                <Route path="/biere" element={<Biere />} />
                <Route path="/champagnes" element={<Champagnes />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        
      
    </Layout>
   
  );
}
