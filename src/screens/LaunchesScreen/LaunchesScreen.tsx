import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Card from "@/shared components/Card/Card";
import Layout from "@/shared components/Layout/Layout";
import { RootState } from "@/store/store";

import HeroSection from "./components/HeroSection/HeroSection";
import { fetchLaunches } from "@/api/api";
import {
  setLaunchesListStart,
  setLaunchesListSuccess,
  setLaunchesListError,
} from "@/store/launchSlice/launchesListSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

function LaunchesScreen() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        // redirect to login page
        router.push("/login");
        return;
      }
      const data = await fetchLaunches();

      dispatch(setLaunchesListSuccess(data));
    };
    fetchData();
  }, [token, router, dispatch]);

  const { launches, loading } = useSelector(
    (state: RootState) => state.launchesList
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout loggedIn={isAuthenticated}>
      <HeroSection />
      <section className="sm:flex sm:flex-wrap bg-black">
        {launches &&
          launches.map((launch) => (
            <Link
              key={launch.flight_number}
              href={`/launches/[launchId]`}
              as={`/launches/${launch.id}`}
            >
              <div className="sm:w-1/2 p-4 cursor-pointer ">
                <Card
                  flikr_image={launch.links.flickr.original[0]}
                  mission_name={launch.name}
                  launch_date_local={launch.date_local}
                />
              </div>
            </Link>
          ))}
      </section>
    </Layout>
  );
}

export default LaunchesScreen;
