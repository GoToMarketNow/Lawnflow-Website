import { Routes, Route } from "react-router-dom"
import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import HomePage from "./pages/HomePage"
import HowItWorksPage from "./pages/HowItWorksPage"
import ForOwnersPage from "./pages/ForOwnersPage"
import ForCrewsPage from "./pages/ForCrewsPage"
import ForCustomersPage from "./pages/ForCustomersPage"
import AgentsPage from "./pages/AgentsPage"
import ComparePage from "./pages/ComparePage"
import ScreensPage from "./pages/ScreensPage"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-owners" element={<ForOwnersPage />} />
          <Route path="/for-crews" element={<ForCrewsPage />} />
          <Route path="/for-customers" element={<ForCustomersPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/screens" element={<ScreensPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
