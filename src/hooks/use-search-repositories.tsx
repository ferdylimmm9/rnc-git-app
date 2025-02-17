import React from "react";
import { TextInputSubmitEditingEventData } from "react-native";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useDispatch } from "react-redux";
import { searchReposRequest } from "../redux/actions/github-actions";
import useGithubSelector from "./use-github-selector";
import { SearchType } from "../types/model.type";
import { SearchHistory } from "../repositories/search-history";
import { Toast } from "toastify-react-native";
import useDebounce from "./use-debounce";

export default function useSearchRepositories() {
  const [search, setSearch] = React.useState("");
  const q = useDebounce(search);
  const [recent, setRecent] = React.useState<SearchType["items"]>([]);
  const dispatch = useDispatch();
  const { loadingSearch, errorSearch, searchResult, refreshingSearch } =
    useGithubSelector();
  const items = searchResult?.items;

  const isSetRecent = React.useRef(false);

  const onChange = React.useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const name = e.nativeEvent.text;
      setSearch(name);
    },
    []
  );

  const onSubmitEditing = React.useCallback(
    (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      const name = e.nativeEvent.text;
      setSearch(name);
    },
    []
  );

  const onTapItem = React.useCallback(
    (item: SearchType["items"][0]) => {
      SearchHistory.set(item);
      setRecent((prev) => {
        return [item, ...prev];
      });
    },
    [setRecent]
  );

  const onRemoveItem = React.useCallback(
    (item: SearchType["items"][0]) => {
      SearchHistory.remove(item);
      setRecent((prev) => {
        return prev.filter((prev) => prev.name !== item.name);
      });
    },
    [setRecent]
  );

  const onRefresh = React.useCallback(() => {
    dispatch(searchReposRequest(q));
  }, [dispatch]);

  React.useEffect(() => {
    if (q === "") return;
    dispatch(searchReposRequest(q));
  }, [q]);

  React.useEffect(() => {
    if (isSetRecent.current) return;
    const recent = SearchHistory.get();
    setRecent(recent);
    isSetRecent.current = true;
  }, []);

  React.useEffect(() => {
    if (errorSearch) {
      Toast.error(errorSearch, "top");
    }
  }, [errorSearch]);

  return {
    search,
    onChange,
    onSubmitEditing,
    errorSearch,
    loadingSearch,
    items,
    recent,
    onTapItem,
    onRemoveItem,
    onRefresh: q === "" ? undefined : onRefresh,
    refreshingSearch,
  };
}
