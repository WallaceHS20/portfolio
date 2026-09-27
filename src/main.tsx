import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import "./styles/global.css"
import { ThemeProvider } from "./contexts/ThemeContext"

createRoot(document.getElementById("root")!).render(
      <ThemeProvider>
            <RouterProvider router={router} />
      </ThemeProvider>
      
)
