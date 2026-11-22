import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppMain from "./components/AppMain";

// Export - Modalità breve
export default function App() {
  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
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