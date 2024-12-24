const link_1 = document.querySelector('.link_1');
console.log(link_1);
const link_2 = document.querySelector('.link_2');
console.log(link_2);
const link_3 = document.querySelector('.link_3');
console.log(link_3);
const link_4 = document.querySelector('.link_4');
console.log(link_4);
const image = document.querySelector('.viewer__img');
console.log(image);


link_1.addEventListener('click', function(){ 
    setImage('./img/sj100 air.jpg') 
})

link_2.addEventListener('click', function(){
    setImage('./img/sj100 front.jpg')

})

link_3.addEventListener('click', function(){
    setImage('./img/sj100 left.jpg')
})

link_4.addEventListener('click', function(){
    setImage('./img/sj100 top.jpg')

})



function setImage(linkImage){
    image.src = linkImage;

}
    










