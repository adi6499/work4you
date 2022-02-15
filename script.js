let data= [
    {
        "img": "https://images.pexels.com/photos/1717934/pexels-photo-1717934.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "para": "RealEstate",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/6025765/pexels-photo-6025765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "para": "Commercial ",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/208584/pexels-photo-208584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "para": "Governmental",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/4541397/pexels-photo-4541397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "para": "HealthCare",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "para": "travel and leisure",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "para": "financial institution",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/8170126/pexels-photo-8170126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "para": "recreational/ Events",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/672460/pexels-photo-672460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "para": "industrial and manufacture",
        "content":"really nice to see this animation"
    },
    {
        "img": "https://images.pexels.com/photos/9070122/pexels-photo-9070122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "para": "retail shopping",
        "content":"really nice to see this animation"
    },
]
let galleryBox= document.querySelector(".galleryBox")
for(let i=0;i< data.length;i++){
    galleryBox.innerHTML+=`
    <div class="box">
    
    <img src=${data[i].img} alt="image"/>
    <h1>${data[i].para}</h1>
    <p>${data[i].content}</p>
    </div>`
}

let open = document.querySelector(".open")
let firstStick = document.querySelector(".firstStick")
let secondStick = document.querySelector(".secondStick")
let navBar = document.querySelector(".navBar")

open.addEventListener("click",()=>{
    firstStick.classList.toggle("firstStickToggle")
    secondStick.classList.toggle("secondStickToggle")
    navBar.classList.toggle("heightToggle")
})