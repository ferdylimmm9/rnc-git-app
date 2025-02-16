import * as Clipboard from "expo-clipboard";
import { Toast } from "toastify-react-native";

export default function useCopyClipboard() {
  const copyToClipboard = async (text: string) => {
    try {
      await Clipboard.setStringAsync(text);
      Toast.success("Copied to clipboard", "top");
    } catch (e) {
      Toast.error((e as Error).message, "top");
    }
  };

  return copyToClipboard;
}
