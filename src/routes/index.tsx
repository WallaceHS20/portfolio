import { createBrowserRouter } from "react-router-dom"
import { PageRoutesKeys } from "@/Interfaces/Routes"
import HomePage from "@/pages/HomePage"
import { RootErrorBoundary } from "@/components/RootErrorBoundary"

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: PageRoutesKeys.HOME,
        element: <HomePage />
      }
    ],
  },
])
