import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { PageTransitionProvider } from "./contexts/PageTransitionContext";
import { PageTransitionLoader } from "./components/PageTransitionLoader";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <PageTransitionProvider>
            {/* Le BrowserRouter a été supprimé d'ici. Le HashRouter dans main.tsx gère maintenant tout. */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
            <PageTransitionLoader />
          </PageTransitionProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;
