import { SearchType } from "../types/model.type";
import { storage } from "./storage";

type ItemsType = SearchType["items"];
type ItemType = ItemsType[0];

export class SearchHistory {
  static readonly key = "search-history";
  static get() {
    const value = storage.getString(SearchHistory.key);
    return (value ? JSON.parse(value) : []) as ItemsType;
  }
  static set(value: ItemType) {
    const history = [
      value,
      ...SearchHistory.get().filter((item) => {
        return item.name !== value.name;
      }),
    ];
    storage.set(SearchHistory.key, JSON.stringify(history));
  }
  static remove(value: ItemType) {
    const history = SearchHistory.get().filter((item) => {
      return item.name !== value.name;
    });
    storage.set(SearchHistory.key, JSON.stringify(history));
  }
}
