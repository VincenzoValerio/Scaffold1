import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import AppMain from "./components/AppMain"
import React from "react"

// Export - Modalità breve
export default function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </React.Fragment>
  )
}

// // Export - Modalità estesa
// function App() {
//   return (
//     <>
//       <div>Hello React</div>
//     </>
//   )
// }

// export default App