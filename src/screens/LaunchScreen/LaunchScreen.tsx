import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@/SharedComponents/Layout/Layout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLaunch } from "@/api/api";
import { setLaunchSuccess } from "@/store/launchSlice/launchSlice";
import { RootState } from "@/store/store";
import { convertDate } from "@/util/covertDate";
import { withAuth } from "@/hoc/withAuth";

const fallBackImage =
  "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80";

const LaunchScreen: React.FC = () => {
  const isAuthenticated = true;
  const router = useRouter();
  const { launchId } = router.query;

  const dispatch = useDispatch();

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLaunch(launchId as string);
      dispatch(setLaunchSuccess(response));
    };

    fetchData();
  }, [launchId, dispatch]);

  const { launch, loading } = useSelector((state: RootState) => state.launch);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout loggedIn={isAuthenticated}>
      <div
        className="bg-black"
        style={{
          height: "100vh",
        }}
      >
        <section>
          <div
            className="cursor-pointer"
            style={{ width: "50%", margin: "0 auto" }}
            onClick={handleBack}
          >
            <p className="text-white mb-3 font-light text-xs">
              {" < "}
              BACK TO LAUNCHES
            </p>
          </div>

          <div
            className="overflow-hidden bg-no-repeat bg-cover "
            style={{
              backgroundImage: `url(${
                launch && launch.links.flickr.original.length > 0
                  ? launch.links.flickr.original[0]
                  : fallBackImage
              })`,
              height: "50vh",
              width: "50%",
              margin: "0 auto",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="h-full text-white"
            style={{
              width: "50%",
              margin: "0 auto",
              backgroundPosition: "center",
            }}
          >
            <p className="mt-8 mb-8">
              {convertDate(launch?.date_local ?? "loading...")}
            </p>
            <h2 className="text-2xl mb-10 uppercase font-semibold">
              {launch?.name}
            </h2>
            <p className="font-light tracking-wider text-sm">
              {launch?.details}
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default withAuth(LaunchScreen);
