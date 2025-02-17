import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_REPOS_REQUEST,
  fetchReposSuccess,
  fetchReposFailure,
  SEARCH_REPOS_REQUEST,
  searchReposSuccess,
  searchReposFailure,
  FETCH_REPO_DETAILS_REQUEST,
  fetchRepoDetailsSuccess,
  fetchRepoDetailsFailure,
  FETCH_ORGANIZATION_REQUEST,
  fetchOrganizationSuccess,
  fetchOrganizationFailure,
} from "../actions/github-actions";
import {
  fetchRepos,
  fetchSearchRepos,
  fetchRepoDetails,
  fetchReactNativeCommunity,
} from "../../utils/api";
import {
  ApiErrorType,
  OrganizationType,
  RepositoryDetailType,
  RepositoryType,
  SearchType,
} from "../../types/model.type";

function* fetchReposSaga(action: { type: string; page: number }) {
  try {
    const data: RepositoryType[] = yield call(fetchRepos, action.page);
    yield put(fetchReposSuccess(data));
  } catch (error: any) {
    const errorPayload: ApiErrorType = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
      documentation_url: error.response?.data?.documentation_url,
    };
    yield put(fetchReposFailure(errorPayload));
  }
}

function* fetchSearchReposSaga(action: {
  type: string;
  query: string;
  page: number;
}) {
  try {
    const data: SearchType = yield call(
      fetchSearchRepos,
      action.query,
    );
    yield put(searchReposSuccess(data));
  } catch (error: any) {
    const errorPayload: ApiErrorType = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
      documentation_url: error.response?.data?.documentation_url,
    };
    yield put(searchReposFailure(errorPayload));
  }
}

function* fetchRepoDetailsSaga(action: { type: string; repoName: string }) {
  try {
    const data: RepositoryDetailType = yield call(
      fetchRepoDetails,
      action.repoName
    );
    yield put(fetchRepoDetailsSuccess(data));
  } catch (error: any) {
    const errorPayload: ApiErrorType = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
      documentation_url: error.response?.data?.documentation_url,
    };
    yield put(fetchRepoDetailsFailure(errorPayload));
  }
}

function* fetchOrganizationSaga() {
  try {
    const data: OrganizationType = yield call(fetchReactNativeCommunity);
    yield put(fetchOrganizationSuccess(data));
  } catch (error: any) {
    const errorPayload: ApiErrorType = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
      documentation_url: error.response?.data?.documentation_url,
    };
    yield put(fetchOrganizationFailure(errorPayload));
  }
}

export function* watchGithubSagas() {
  yield takeLatest(FETCH_REPOS_REQUEST, fetchReposSaga);
  yield takeLatest(SEARCH_REPOS_REQUEST, fetchSearchReposSaga);
  yield takeLatest(FETCH_REPO_DETAILS_REQUEST, fetchRepoDetailsSaga);
  yield takeLatest(FETCH_ORGANIZATION_REQUEST, fetchOrganizationSaga);
}
