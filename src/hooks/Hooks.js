const apiCall = (method, path, data) => {
    const url = "http://localhost:3000"
    let response = null
    debugger
    if (method === "get") {
        fetch(`${url}/${path}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            response = data})
    }

    return response
}

export default apiCall