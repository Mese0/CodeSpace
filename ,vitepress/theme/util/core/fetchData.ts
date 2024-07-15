type URLTypes = "update-log";

const urlMap: { "update-log": string } = {
    "update-log": "https://cn-sy1.rains3.com/codespace/update/update-log.json"
}

export const FootnoteRawURL = "https://cn-sy1.rains3.com/codespace/footnote/"
export const UpdateLogURL = "https://cn-sy1.rains3.com/codespace/update/update-log.json";

export async function fetchData(URL: URLTypes | string) {
    return new Promise((resolve, reject) => {
        fetch(urlMap[URL]).then((res) => {
            res.json().then((data) => {
                resolve(data);
            });
        }).catch(err => {
            reject(err);
        })
    })
}