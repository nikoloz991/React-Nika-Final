import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() =>
  import("../pages/Home/Home").then((m) => ({ default: m.Home })),
);
const Browse = lazy(() =>
  import("../pages/Browse/Browse").then((m) => ({ default: m.Browse })),
);
const Detail = lazy(() =>
  import("../pages/Detail/Detail").then((m) => ({ default: m.Detail })),
);
const Favorites = lazy(() =>
  import("../pages/Favorites/Favorites").then((m) => ({
    default: m.Favorites,
  })),
);
const Styleguide = lazy(() =>
  import("../pages/Styleguide/Styleguide").then((m) => ({
    default: m.Styleguide,
  })),
);
const About = lazy(() =>
  import("../pages/About/About").then((m) => ({ default: m.About })),
);
const NotFound = lazy(() =>
  import("../pages/NotFound/NotFound").then((m) => ({ default: m.NotFound })),
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/drink/:id" element={<Detail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/styleguide" element={<Styleguide />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
