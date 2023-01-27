import Layout from "@/shared components/Layout/Layout";
import HeroSection from "./components/HeroSection/HeroSection";

function LandingPage() {
  const loggedIn = false;
  return (
    <Layout loggedIn={loggedIn}>
      <HeroSection />
    </Layout>
  );
}

export default LandingPage;
