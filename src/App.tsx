import MainLayout from "./components/layout/MainLayout";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

function App() {
  return (
    <div className=" min-h-screen w-full  ">
      <ScrollToTopButton />
      <MainLayout />
    </div>
  );
}

export default App;
