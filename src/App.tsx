import MainLayout from "./components/layout/MainLayout";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import ErrorBoundary from "./error-boundary";

function App() {
  return (
    <ErrorBoundary>

    <div className=" min-h-screen w-full  ">
      <ScrollToTopButton />
      <MainLayout />
    </div>
   </ErrorBoundary>
  );
}

export default App;
