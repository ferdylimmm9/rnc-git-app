import { useSelector } from "react-redux";
import { RootState } from "../redux/store/stores";

export default function useGithubSelector() {
  const state = useSelector((state: RootState) => state.github);

  return state;
}
