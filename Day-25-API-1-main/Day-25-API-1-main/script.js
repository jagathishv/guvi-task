
(async () => {
    try {
        const res = await fetch("https://ws-public.interpol.int/notices/v1/red")
        const aqst = await res.json()
        const wanted = aqst._embedded.notices

        wanted.map((u) => {
            (async () => {
                var selfbtn = u._links.self.href
                var ptoid = u._links.images.href
                var ptoidl = await fetch(ptoid)
                var ptoidli = await ptoidl.json()
                var ptoimg = ptoidli._embedded.images[0]._links.self.href
                var why = await fetch(selfbtn);
                var reason = await why.json()
                var reason1 = reason.arrest_warrants[0].charge


                const div = document.createElement("div")
                div.className = "col-lg-3 col-md-4 col-sm-6";
                div.innerHTML = `<a href=${selfbtn}
                <div class="card style="max-width: 10rem;"">
                <img height="150" src=${ptoimg} class="card-img-top" alt="..."> </a>
                <div class="card-body">
                <h6 class="card-title">Name: ${u.name}</h6>
                <h6 class="card-title">Forename: ${u.forename}</h6>
                <h6 class="card-title">Entity ID: ${u.entity_id}</h6>
                <!-- <h6 class="card-title">Reason: ${reason1}</h6> -->
                </div>
                </div></br>`
                const row = document.getElementById("row")
                row.appendChild(div)

            })()
        });
    }
    catch (err) {
        console.error(error)
    }
})()