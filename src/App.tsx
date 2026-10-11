import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, MobileCallBar } from "./components/Sections";
import { EdgeFoliage, StickyTool } from "./components/DecorBits";
import GutterLoader from "./components/GutterLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceAreas from "./pages/ServiceAreas";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <BrowserRouter>
      {loading && !reducedMotion && <GutterLoader onDone={() => setLoading(false)} />}
      <div
        id="top"
        className="min-h-screen bg-cream pb-[calc(3.75rem+env(safe-area-inset-bottom))] md:pb-0"
      >
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallBar />
        <StickyTool />
        <EdgeFoliage />
      </div>
    </BrowserRouter>
  );
}
