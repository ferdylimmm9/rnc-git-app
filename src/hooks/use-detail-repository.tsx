import { useDispatch } from "react-redux";
import useGithubSelector from "./use-github-selector";
import React from "react";
import { fetchRepoDetailsRequest } from "../redux/actions/github-actions";
import { Toast } from "toastify-react-native";

export default function useDetailRepository(name: string) {
  const dispatch = useDispatch();
  const { repoDetails, loadingRepoDetail, refreshingDetail, errorRepoDetail } =
    useGithubSelector();

  const onRefresh = () => {
    dispatch(fetchRepoDetailsRequest(name));
  };

  React.useEffect(() => {
    dispatch(fetchRepoDetailsRequest(name));
  }, [dispatch, name]);

  React.useEffect(() => {
    if (typeof errorRepoDetail === "string") {
      Toast.error(errorRepoDetail, "top");
    }
  }, [errorRepoDetail]);

  return {
    repoDetails,
    loadingRepoDetail,
    refreshingDetail,
    onRefresh,
    errorRepoDetail,
  };
}
