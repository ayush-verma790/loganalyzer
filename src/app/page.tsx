import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Input from "./components/Input/Input";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row mt-5 flex-1">
        <Input />
        <Sidebar  />
      </div>
      <Footer />
    </div>
  );
}
