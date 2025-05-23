import { Moon, Sun } from "lucide-react"
import { useTheme } from "../lib/theme"

export function Settings() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="space-y-0.5">
            <h2 className="text-lg font-medium">Theme</h2>
            <p className="text-sm text-muted-foreground">
              Choose between light and dark mode
            </p>
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-accent"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {/* Funny GIF below the settings */}
      <div className="flex justify-center mt-10">
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Funny dancing cat"
          className="rounded-lg shadow-lg w-64 h-auto"
        />
      </div>
    </div>
  )
} 