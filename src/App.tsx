import { ThemeProvider } from "./lib/theme"
import { Settings } from "./components/Settings"
import "./App.css"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Settings />
    </ThemeProvider>
  )
}

export default App
