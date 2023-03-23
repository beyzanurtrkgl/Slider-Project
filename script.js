//sliderı obje haline getirdik
var cars =
[
    {
        name: 'BMW',
        img: 'img/bmw.jpg',
        link: 'https://www.bmw.com.tr/tr/index.html?tl=sea-goog-seao-pro-ccy-.-sear-.-.-brandbmw&gclid=Cj0KCQjwwtWgBhDhARIsAEMcxeCSUdAUsmzuiYEeA2lA7k2pobwcpT5E8E5UYjsqXCchOT2tkngqQdoaAmGVEALw_wcB'


    },

    {
        name: 'Honda',
        img: 'img/honda.jpg',
        link: 'https://www.honda.com.tr'
    },

    {
        name: 'Mazda',
        img: 'img/mazda.jpg',
        link: 'https://www.mazda.com.tr'
    },

    {
        name: 'Skoda',
        img: 'img/skoda.jpg',
        link: 'https://skoda.com.tr/fiyat-listesi/fiyat-listesi?utm_source=google&utm_medium=cpc&utm_campaign=model_fabia&utm_content=search&gclid=Cj0KCQjwwtWgBhDhARIsAEMcxeAZzCr8dOeNyhFFcKtM6y3-P7loE9IlAXpPGTip8RDrPhYVZIDcfesaAlqUEALw_wcB'
    },

    {
        name: 'Volvo',
        img: 'img/volvo.jpg',
        link: 'https://www.volvocars.com/tr/'
    }


];

//Geçmesini istediğimiz süreyi ve randomu belirledik
var settings= 
{
    duration:1500,
    random : false
};


var carsIndex=0;
var indexControl = cars.length;
var interval;

init(settings);

//İleri geri tuşlarına eriştik ve bunlara click eventi atadık

document.querySelector(".fa-arrow-circle-left").addEventListener('click',function(){
    carsIndex--;
    slider(carsIndex);
})
document.querySelector(".fa-arrow-circle-right").addEventListener('click',function(){
    carsIndex++;
    slider(carsIndex);
})


//burada ileri geri tuşlarına gelindiğinde slider ın durmsını sağladık
//önce ileri ve geriye aynı class ismiyle ulaştık. daha sonra clearınterval ile durmasını sağladık 

document.querySelectorAll(".arrow").forEach(function(item)
{
    item.addEventListener('mouseenter',function()
    {
        clearInterval(interval);
    })
})



//burada ileri geri tuşlarından çıkıldığında slider ın devam etmesini sağladık
//önce ileri ve geriye aynı class ismiyle ulaştık. daha sonra init ile devame etmesini sağladık 
document.querySelectorAll(".arrow").forEach(function(item)
{
    item.addEventListener('mouseleave',function()
    {
        init(settings);
    })
})

//slider'ımızı yazdırmak için objeye ulaşıp içindeki bilgileri değiştirdik

function slider(index)
{

    if(index>=0 && index<indexControl)
    {
        document.querySelector(".card-img-top").src = cars[index].img;
        document.querySelector(".card-title").innerHTML = cars[index].name;
        document.querySelector(".card-link").href = cars[index].link;
        
    }
    else if(index<=0)
    {
        carsIndex = 4;
        slider(carsIndex);
    }
    else 
    {
        carsIndex = 0;
        slider(carsIndex);
    }
}

//random ve artan index e göre yazdırmasını sağladık

function init(settings)
{   
    var prev;

    interval = setInterval(function()
    {    
        //random
        if(settings.random)   
        {
            //randomla aynı sayıyı üretmesini engelledik
            do
            {
                carsIndex = Math.floor(Math.random()*indexControl)

            }while(prev == carsIndex)

            prev= carsIndex;
                
        }
        
       //artan index
        else
        {   
            if(indexControl-1 == carsIndex)
            {
                carsIndex=-1;
            }
            slider(carsIndex)
            console.log(carsIndex);
            carsIndex++;
        }
        
        slider(carsIndex);


    },settings.duration)
}