import React from "react";
import { TextInputSubmitEditingEventData } from "react-native";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export default function useSearchRepositories() {
  const [q, setQ] = React.useState("");
  const [search, setSearch] = React.useState("");

  const onChange = React.useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const name = e.nativeEvent.text;
      setSearch(name);
      debounce(() => {
          setQ(name);
      }, 1000)();
    },
    []
  );

  const onSubmitEditing = React.useCallback(
    (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      const name = e.nativeEvent.text;
      setSearch(name);
      setQ(name);
    },
    []
  );

  return {
    q,
    search,
    onChange,
    onSubmitEditing,
  };
}
