import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchOrganizationRequest,
  fetchReposRequest,
} from "../redux/actions/github-actions";
import { Toast } from "toastify-react-native";
import useGithubSelector from "./use-github-selector";

export default function useHomeData() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const dispatch = useDispatch();
  const {
    repos,
    loadingRepos,
    loadingOrganization,
    refreshing,
    organization,
    endPage,
    errorOrganization,
    errorRepos,
  } = useGithubSelector();

  React.useEffect(() => {
    dispatch(fetchReposRequest(currentPage));
  }, [dispatch, currentPage]);

  React.useEffect(() => {
    if (typeof errorRepos === "string") {
      Toast.error(errorRepos, "top");
    }
  }, [errorRepos]);

  React.useEffect(() => {
    if (typeof errorOrganization === "string") {
      Toast.error(errorOrganization, "top");
    }
  }, [errorOrganization]);

  React.useEffect(() => {
    dispatch(fetchOrganizationRequest());
  }, [dispatch]);

  const handleLoadMore = React.useCallback(() => {
    if (loadingRepos) return;
    if (endPage) return;
    setCurrentPage((prevPage) => prevPage + 1);
  }, [loadingRepos, endPage, setCurrentPage]);

  const handleRefresh = React.useCallback(() => {
    setCurrentPage(1);
    dispatch(fetchReposRequest(1));
    dispatch(fetchOrganizationRequest());
  }, [dispatch]);

  return {
    repos,
    refreshing,
    organization,
    loadingOrganization,
    loadingRepos,
    errorOrganization,
    errorRepos,
    handleLoadMore,
    handleRefresh,
  };
}
