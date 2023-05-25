export function getJsonData(url) {
    return fetch(url)
    .then((resp) => {
        return resp.json()
        .then((data) => {
            console.log(data)            
        }).catch((err) => {
            console.log(err)
        })
    });
}
