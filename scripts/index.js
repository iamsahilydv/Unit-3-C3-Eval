// function search(){
//     let que = document.getElementById("query").value
// const url =` https://masai-mock-api.herokuapp.com/hotels/search?city=${que}`
// console.log(url)
// }

const url ="https://masai-mock-api.herokuapp.com/hotels/search?city="
// function search(){
//     let que = document.getElementById("query").value
//     // let searchurl = que
//     console.log(searchurl)
// }
async function search(){
    
    let que = document.getElementById("query").value
    // let searchurl= `${url}${que}`
    // console.log(searchurl)
    try{
        let res= await fetch(`${url}${que}`)
        let data = await res.json()
        data = data.hotels
        console.log(data)
        append(data)
        
    }
    catch(err){
        console.log(err)
    }
}

function append(data){
    let container = document.getElementById("container");
    data.forEach(function (el){
        let img= document.createElement("img")
        img.src=el.Images.one
        img.style.height="50%"
        img.style.width="100%"
        let price=document.createElement("p")
        price.innerText=el.Price
        let name = document.createElement("h4")
        name.innerText=el.Title
        let rating= document.createElement("p")
        rating.innerText=el.Rating
        let div= document.createElement("div")
        let button=document.createElement("button")
        button.innerText="Book This Hotel"
        button.addEventListener("click", bookTheRoom)
        div.append(img,name,price,rating,button)
        div.style.height="400px"
        div.style.width="100%"
        container.append(div)
    })

}
function sort_lth(data){
    data.sort(function(a, b){
        return a.price -b.price
    })
}
function bookTheRoom(){
    let BookRoom = JSON.parse(localstorage.getItem(""))
}