// zrob liste z img_img
const icons_img_src = ['graphics/icon_profile.png','graphics/icon_heart.png','graphics/icon_bag.png'];

//------------
const icons_img_header = document.querySelectorAll(".img_icon"); //obrazki w ikonach
const icons_header = document.querySelectorAll(".icon"); //ikony cale a

function zmien_kolor_ikony(id_icon){
    console.log(icons_header[id_icon]);
    console.log("alo");

    icons_img_header[id_icon].src = 'graphics/figma.jpg';
}

function zmien_kolor_ikony_powrotny(id_icon){
    icons_img_header[id_icon].src = icons_img_src[id_icon]; // zmienia na powrtne ikony z czrnym kolorem
}

icons_header.forEach((img,key)=>{
    img.addEventListener('mouseenter',() => {zmien_kolor_ikony(key)});
    img.addEventListener('mouseleave',() => {zmien_kolor_ikony_powrotny(key)})
})

console.log(icons_header);