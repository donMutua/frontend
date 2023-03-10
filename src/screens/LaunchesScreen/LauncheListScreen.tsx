import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../SharedComponents/Card/Card";
import Layout from "@/SharedComponents/Layout/Layout";
import HeroSection from "./components/HeroSection/HeroSection";

import { RootState } from "@/store/store";
import { fetchLaunches } from "../../api/api";
import Link from "next/link";
import { withAuth } from "@/hoc/withAuth";
import { setLaunchesListSuccess } from "@/store/launchSlice/launchesListSlice";
import Spinner from "@/SharedComponents/Spinner/Spinner";

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
    return <Spinner />;
  }

  return (
    <Layout loggedIn={isAuthenticated}>
      <HeroSection />
      <section className=" bg-black d-flex flex-wrap">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {launches &&
            launches.map((launch) => (
              <Link
                key={launch.flight_number}
                href={`/launches/[launchId]`}
                as={`/launches/${launch.id}`}
              >
                <div className=" p-4 cursor-pointer ">
                  <Card
                    flikr_image={launch.links.flickr.original[0]}
                    mission_name={launch.name}
                    launch_date_local={launch.date_local}
                  />
                </div>
              </Link>
            ))}
        </div>
      </section>
    </Layout>
  );
}

export default withAuth(LaunchesScreen);
