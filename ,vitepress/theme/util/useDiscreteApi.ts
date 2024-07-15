import {createDiscreteApi, darkTheme, DialogApi, lightTheme, MessageApi, NotificationApi} from "naive-ui";
import {getTheme} from "./compExtra/theme";

export function useDiscreteApi(type: "message" | "dialog" | "notification"): MessageApi | DialogApi | NotificationApi {
    const isDark = getTheme();

    return createDiscreteApi([type], {
        configProviderProps: {
            theme: isDark.value ? darkTheme : lightTheme
        }
    })[type];
}