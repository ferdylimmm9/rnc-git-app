import axios, { AxiosResponse } from "axios";
import {
  ApiErrorType,
  OrganizationType,
  RepositoryDetailType,
  RepositoryType,
  SearchType,
} from "../types/model.type";

const API = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000, // Adjust timeout as necessary
});

export const fetchRepos = async (page: number = 1) => {
  const response = (await API.get(
    `/orgs/react-native-community/repos?per_page=10&page=${page}`
  )) as AxiosResponse<RepositoryType[], ApiErrorType>;
  return response.data;
};

export const fetchSearchRepos = async (query: string) => {
  const response = (await API.get(
    `/search/repositories?q=${query}+org:react-native-community`
  )) as AxiosResponse<SearchType, ApiErrorType>;
  return response.data;
};

export const fetchRepoDetails = async (repoName: string) => {
  const response = (await API.get(
    `/repos/react-native-community/${repoName}`
  )) as AxiosResponse<RepositoryDetailType, ApiErrorType>;
  return response.data;
};

export const fetchReactNativeCommunity = async () => {
  const response = (await API.get(
    "/orgs/react-native-community"
  )) as AxiosResponse<OrganizationType, ApiErrorType>;
  return response.data;
};
