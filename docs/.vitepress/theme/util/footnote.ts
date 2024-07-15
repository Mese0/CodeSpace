type cardContentType = {
    en?: {
        title: string,
        content: string,
    },
    ch?: {
        title: string,
        content: string,
    },
    status?: 0 | 1,
}

export class footNote {
    /*
    public static async getCardContents(type: string, languageType): Promise<cardContentType> {
        const _languageType = (languageType as string).toLowerCase();
        const resultURL = RAW_URL + _languageType;

        return new Promise<cardContentType>((resolve, reject) => {
            this.fetchData(`${resultURL}/${_languageType}-footnote.json`).then((data) => {
                if(!data[type]){
                    reject("Invalid Type");
                    return;
                }

                this.fetchData(`${resultURL}/${data[type]}`).then((data: cardContentType) => {
                    if(!data.en){
                        resolve({...data, status: 1});
                    }

                    resolve({...data, status: 1});
                })
            })
        });
    }

     */
}