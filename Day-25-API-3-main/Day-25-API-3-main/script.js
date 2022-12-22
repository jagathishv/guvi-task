(async()=>{
    try{
        const res= await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
    const data= await res.json()
    const ani=data.data
    console.log(ani)
    ani.map((u)=>{
        const div = document.createElement("div")
                div.className = "col-lg-6 col-md-6 col-sm-12";
                div.innerHTML = `
                <div class="card">
                <div class="card style="max-width: 10rem;"">
                <img height="555" src="${u.anime_img}" class="card-img-top" alt="..."> 
                <div class="card-body">
                <h5 class="card-title text-center">${u.anime_name.toUpperCase(0).split('_').join(' ')}</h5>
                </div> 
                </div>
                </div></br>`
                const row = document.getElementById("row")
                row.appendChild(div)
    })
    }
    catch(err){
        console.error(error)
    }
    
})()