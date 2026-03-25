const apiKey="cBJJOWOTlg0eyhCOqXT1EzOKzcBBxAN5Nk6Y8Efd4duKyCUK01xPJd4u"

const getPhotos= async() =>{
    try {
const rawData = await fetch("https://api.pexels.com/v1/search?query=sea",{
    headers:{
        "Authorization":apiKey
    }
})
const data=await rawData.json()
return data
    } catch (error){
        console.log(error)
    }
}

// getPhotos()
// .then(res=>console.log(res))

const photoForCard = async () => {

  const res = await getPhotos()

  const container = document.getElementById("cardPhoto")

  res.photos.forEach(photo => {

    container.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${photo.src.medium}" class="card-img-top" alt="card">
  <div class="card-body">
    <h5 class="card-title">${photo.photographer}</h5>
    <p class="card-text">${photo.alt}</p>
    <a href="#" id="downloadBtn" class="btn btn-primary">Download</a>
  </div>
</div>`

  })

}

photoForCard()