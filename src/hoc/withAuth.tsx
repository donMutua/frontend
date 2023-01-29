import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const authenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    );

    useEffect(() => {
      if (!authenticated) {
        Router.push("/login");
      }
    }, [authenticated]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
