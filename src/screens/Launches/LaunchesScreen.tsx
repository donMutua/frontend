import Card from "@/shared components/Card/Card";
import Layout from "@/shared components/Layout/Layout";
import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";

function LaunchesScreen() {
  const loggedIn = false;
  return (
    <Layout loggedIn={loggedIn}>
      <HeroSection />
      <section className="sm:flex sm:flex-wrap bg-black">
        <div className="sm:w-1/2 p-4">
          <Card
            flikr_image="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80"
            mission_name="STARLINK MISSION"
            launch_date_local="2021-05-22T00:00:00Z"
          />
        </div>

        <div className="sm:w-1/2 p-4">
          <Card
            flikr_image="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80"
            mission_name="STARLINK MISSION"
            launch_date_local="2021-05-22T00:00:00Z"
          />
        </div>
      </section>
    </Layout>
  );
}

export default LaunchesScreen;
