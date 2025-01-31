import { RouterProvider } from "react-router-dom";
import DarkMode from "./components/DarkMode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./routes";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <div className="bg-primary relative">
        <div className="fixed bottom-4 left-4 bg-red-500 p-4 z-10 rounded-full">
          <DarkMode />
        </div>
        <RouterProvider router={router} />
      </div>
      {/* React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
