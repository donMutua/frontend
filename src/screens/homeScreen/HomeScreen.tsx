import Layout from "@/shared components/Layout/Layout";
import HeroSection from "./components/HeroSection/HeroSection";

function LandingPage() {
  return (
    <Layout loggedIn>
      <HeroSection />
    </Layout>
  );
}

export default LandingPage;
