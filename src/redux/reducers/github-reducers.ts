import {
  OrganizationType,
  RepositoryDetailType,
  RepositoryType,
  SearchType,
} from "../../types/model.type";
import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  SEARCH_REPOS_REQUEST,
  SEARCH_REPOS_SUCCESS,
  SEARCH_REPOS_FAILURE,
  FETCH_REPO_DETAILS_REQUEST,
  FETCH_REPO_DETAILS_SUCCESS,
  FETCH_REPO_DETAILS_FAILURE,
  FETCH_ORGANIZATION_REQUEST,
  FETCH_ORGANIZATION_SUCCESS,
  FETCH_ORGANIZATION_FAILURE,
} from "../actions/github-actions";

interface GithubState {
  repos: RepositoryType[];
  searchResult: SearchType | null;
  repoDetails: RepositoryDetailType | null;
  organization: OrganizationType | null;

  loadingOrganization: boolean;
  loadingSearch: boolean;
  loadingRepos: boolean;
  loadingRepoDetail: boolean;

  errorRepos: string | null;
  page: number;
  refreshing: boolean;
  endPage: boolean;

  errorOrganization: string | null;
  errorSearch: string | null;
  errorRepoDetail: string | null;

  refreshingSearch: boolean;
  refreshingDetail: boolean;
}

const initialState: GithubState = {
  repos: [],
  searchResult: null,
  repoDetails: null,
  organization: null,

  errorOrganization: null,
  errorSearch: null,
  errorRepoDetail: null,
  errorRepos: null,

  loadingOrganization: false,
  loadingRepoDetail: false,
  loadingRepos: false,
  loadingSearch: false,
  refreshingDetail: false,
  refreshingSearch: false,

  page: 1,
  refreshing: false,
  endPage: false,
};

const githubReducer = (state = initialState, action: any): GithubState => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loadingRepos: true,
        refreshing: action.page === 1,
        repos: action.page === 1 ? [] : state.repos,
        errorRepos: null,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        errorRepos: null,
        loadingRepos: false,
        repos: [...state.repos, ...action.payload],
        endPage: action.payload.length === 0,
        refreshing: false,
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        loadingRepos: false,
        errorRepos: action.payload.message,
        refreshing: false,
      };

    case SEARCH_REPOS_REQUEST:
      return { ...state, loadingSearch: true, errorSearch: null };
    case SEARCH_REPOS_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
        searchResult: action.payload,
        errorSearch: null,
      };
    case SEARCH_REPOS_FAILURE:
      return {
        ...state,
        loadingSearch: false,
        errorSearch: action.payload.message,
      };

    case FETCH_REPO_DETAILS_REQUEST:
      return { ...state, loadingRepoDetail: true, errorRepoDetail: null };
    case FETCH_REPO_DETAILS_SUCCESS:
      return {
        ...state,
        loadingRepoDetail: false,
        repoDetails: action.payload,
        errorRepoDetail: null,
      };
    case FETCH_REPO_DETAILS_FAILURE:
      return {
        ...state,
        loadingRepoDetail: false,
        errorRepoDetail: action.payload.message,
      };

    case FETCH_ORGANIZATION_REQUEST:
      return { ...state, loadingOrganization: true, errorOrganization: null };
    case FETCH_ORGANIZATION_SUCCESS:
      return {
        ...state,
        loadingOrganization: false,
        organization: action.payload,
        errorOrganization: null,
      };
    case FETCH_ORGANIZATION_FAILURE:
      return {
        ...state,
        loadingOrganization: false,
        errorOrganization: action.payload.message,
      };

    default:
      return state;
  }
};

export default githubReducer;
