import {
  ApiErrorType,
  OrganizationType,
  RepositoryDetailType,
  RepositoryType,
  SearchType,
} from "../../types/model.type";

export const FETCH_REPOS_REQUEST = "FETCH_REPOS_REQUEST";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE";

export const SEARCH_REPOS_REQUEST = "SEARCH_REPOS_REQUEST";
export const SEARCH_REPOS_SUCCESS = "SEARCH_REPOS_SUCCESS";
export const SEARCH_REPOS_FAILURE = "SEARCH_REPOS_FAILURE";

export const FETCH_REPO_DETAILS_REQUEST = "FETCH_REPO_DETAILS_REQUEST";
export const FETCH_REPO_DETAILS_SUCCESS = "FETCH_REPO_DETAILS_SUCCESS";
export const FETCH_REPO_DETAILS_FAILURE = "FETCH_REPO_DETAILS_FAILURE";

export const FETCH_ORGANIZATION_REQUEST = "FETCH_ORGANIZATION_REQUEST";
export const FETCH_ORGANIZATION_SUCCESS = "FETCH_ORGANIZATION_SUCCESS";
export const FETCH_ORGANIZATION_FAILURE = "FETCH_ORGANIZATION_FAILURE";

export const fetchReposRequest = (page: number) => {
  return {
    type: FETCH_REPOS_REQUEST,
    page,
  };
};

export const fetchReposSuccess = (data: RepositoryType[]) => ({
  type: FETCH_REPOS_SUCCESS,
  payload: data,
});

export const fetchReposFailure = (error: ApiErrorType) => ({
  type: FETCH_REPOS_FAILURE,
  payload: error,
});

export const searchReposRequest = (query: string) => ({
  type: SEARCH_REPOS_REQUEST,
  query,
});

export const searchReposSuccess = (data: SearchType) => ({
  type: SEARCH_REPOS_SUCCESS,
  payload: data,
});

export const searchReposFailure = (error: ApiErrorType) => ({
  type: SEARCH_REPOS_FAILURE,
  payload: error,
});

export const fetchRepoDetailsRequest = (repoName: string) => ({
  type: FETCH_REPO_DETAILS_REQUEST,
  repoName,
});

export const fetchRepoDetailsSuccess = (data: RepositoryDetailType) => ({
  type: FETCH_REPO_DETAILS_SUCCESS,
  payload: data,
});

export const fetchRepoDetailsFailure = (error: ApiErrorType) => ({
  type: FETCH_REPO_DETAILS_FAILURE,
  payload: error,
});

export const fetchOrganizationRequest = () => ({
  type: FETCH_ORGANIZATION_REQUEST,
});

export const fetchOrganizationSuccess = (data: OrganizationType) => ({
  type: FETCH_ORGANIZATION_SUCCESS,
  payload: data,
});

export const fetchOrganizationFailure = (error: ApiErrorType) => ({
  type: FETCH_ORGANIZATION_FAILURE,
  payload: error,
});
