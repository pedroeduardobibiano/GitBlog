import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/Default";
import { Home } from "./pages/home";
import { PostPublished } from "./Post/components/PostPublished";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/PostPublished/:id" element={<PostPublished/>} />
      </Route>
    </Routes>
  );
}
