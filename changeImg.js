
let imgBox = document.querySelector('.imgBox')
let textBox = document.querySelector('.text')

const imgUrlArr = [
    './images/25.jpg','./images/24.jpg','./images/23.jpg','./images/22.jpg','./images/21.jpg',
    './images/20.jpg','./images/19.jpg','./images/18.jpg','./images/17.jpg','./images/16.jpg','./images/16-2.jpg',
    './images/15.jpg','./images/14.jpg','./images/13.jpg','./images/12.jpg','./images/11.jpg',
    './images/10.jpg','./images/09.jpg','./images/08.jpg','./images/07.jpg','./images/06.jpg',
    './images/05.jpg','./images/04.jpg','./images/03.jpg','./images/02.jpg','./images/01.jpg','./images/00.jpg',
]

var length = imgUrlArr.length // 27
var index = 0


var imgUrl = imgUrlArr[index];
var scale = 1
var opacity = 0.4

function changeImg(){
    index += 1
    if(index >= length)
    {
        setTimeout(() => {
            textBox.style.display = 'flex'
        }, 2000);
        return
    }
    imgUrl = (imgUrlArr[index])
}

var timeAnimate = 0;
function getAnimate(){

    if(index >= length){
        {
            setTimeout(() => {
                textBox.style.display = 'flex'
            }, 2000);
            return
        }
    }

    if(timeAnimate >= 5000){
        changeImg()
        if(index >= length)
        {
            opacity = 0.5
            return
        }
        timeAnimate = 0
        scale = 1
        opacity = 0.4
    }

    setTimeout(()=>{
        
        let style = {
            backgroundImage : `url('${imgUrl}')`,
            transform: `scale(${scale})`,
            opacity : opacity
        }
        
       Object.keys(style).forEach(element => {
            imgBox.style[element] = style[element]
        });
        
        timeAnimate += 10
        scale += 0.001
        opacity += 0.002
        console.log(opacity , scale)
        getAnimate()
    } , 10)
    
}

getAnimate()


