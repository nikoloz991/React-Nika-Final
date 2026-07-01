import { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary/ErrorBoundary";
import { Layout } from "./components/layout/Layout/Layout";
import { Spinner } from "./components/common/Spinner/Spinner";
import { AppRoutes } from "./routes/AppRoutes";
import { SurpriseModal } from "./components/cocktail/SurpriseModal/SurpriseModal";

export function App() {
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <Layout onSurprise={() => setSurpriseOpen(true)}>
              <Suspense fallback={<Spinner label="Loading page" />}>
                <AppRoutes />
              </Suspense>
            </Layout>
            <SurpriseModal
              isOpen={surpriseOpen}
              onClose={() => setSurpriseOpen(false)}
            />
          </ErrorBoundary>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
