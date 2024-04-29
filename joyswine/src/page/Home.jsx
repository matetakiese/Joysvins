import { Navbar } from "@/components/navbar"
import { Articls } from "@/components/Artlicles"
import Siderbar  from "@/components/sidebar"


export default function Home () {
    return(
        <main className="">
         <Navbar />
         <Articls/>
         <Siderbar />
         
        </main>
    )
}