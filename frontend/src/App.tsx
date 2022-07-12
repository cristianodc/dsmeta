import Header from "./assets/img/components/Header"
import NotificationButton from "./assets/img/components/NotificatinButton"
import SalesCard from "./assets/img/components/SalesCard"


function App() {
 return(
    <>
     <Header/>
     <main>
      <section id="sales">
               <div className="dsmeta-container">
                  <SalesCard/>
               </div>
         </section>
      </main>
    </>
 
 )
}

export default App
