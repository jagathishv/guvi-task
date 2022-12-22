(async () => {
    const data = await fetch("https://finalspaceapi.com/api/v0/character/?limit=20")
    const res = await data.json()
    console.log(res)
    const users=res.map(({id,name,gender,img_url,species,abilities,origin}) => {
        return(`<tr>
            <td>${id}</td>
            <td><img width="90px" src=${img_url} class="avatar"/></td>
            <td>${name}</td>
            <td>${gender}</td>
            <td>${species}</td>
            <td>${origin}</td>
            <td>${abilities}</td>
        </tr>`)            
    });
    document.getElementById("content").innerHTML = users.join("")
})()