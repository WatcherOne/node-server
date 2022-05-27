function getUserList () {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/api/getUserList')
    xhr.send()

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            const result = JSON.parse(xhr.response)
            setTableData(result.data)
        }
    }
}

function setTableData (data) {
    let result = ''
    const tbody = document.getElementById('tbody')
    data.forEach(item => {
        result += `<tr>
                <td>${item.userId}</td>
                <td>${item.userName}</td>
            </tr>`
    })
    tbody.innerHTML = result
}
