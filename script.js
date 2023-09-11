var songNumber=0;
var clickCount=true;
var audio;
var music=[
    {title:"Rewrite The Stars",artist:"James Arthur,Anne-Marie",url:"songs/Anne-Marie_James_Arthur_-_Rewrite_The_Stars.mp3",pic:"images/rewrite the stars.jpg"},
    {title:"Stay",artist:"The Kid LAROI & Justin Bieber",url:"songs/Stay(PaglaSongs).mp3",pic:"images/stay.jpg"},
    {title:"Blinding Lights",artist:"The Weeknd",url:"songs/The_Weeknd_-_Blinding_Lights.mp3",pic:"images/blinding lights.jpg"},
    {title:"Heat Waves",artist:"Glass Animals",url:"songs/Glass_Animals_-_Heat_Waves.mp3",pic:"images/heat waves.jpg"},
    {title:"Heartbreak Anniversary",artist:"Giveon",url:"songs/Heartbreak Anniversary - Giveon.mp3",pic:"images/heartbreak Anniversary.jpg"},
    {title:"Butter",artist:"BTS",url:"songs/Butter bts.mp3",pic:"images/butter.jpg"},
    {title:"Perfect",artist:"Ed Sheeran",url:"songs/Ed_Sheeran_-_Perfect.mp3",pic:"images/perfect.jpg"},
    {title:"Senorita",artist:"Shawn Mendes,Camila Cabello",url:"songs/Shawn_Mendes_Camila_Cabello_-_Se_orita.mp3",pic:"images/senorita.jpg"},
    {title:"Love Me Like You Do",artist:"Ellie Goulding",url:"songs/Love-Me-Like-You-Do(PaglaSongs).mp3",pic:"images/love me like you do.jpg"},
    {title:"Make Yoy Mine",artist:"Public",url:"songs/PUBLIC - Make You Mine Put your hand in mine .mp3",pic:"images/blank space.jpg"},
    {title:"Closer",artist:"The Chainsmokers ft. Halsey",url:"songs/The_Chainsmokers_ft_Halsey_-_Closer.mp3",pic:"images/closer.jpg"},
    {title:"Enchanted",artist:"Taylor Swift",url:"songs/Enchanted.mp3",pic:"images/bad blood.jpg"},
    {title:"Faded",artist:"Alan Walker",url:"songs/Alan_Walker_-_Faded.mp3",pic:"images/faded.jpg"},
    {title:"What Makes You Beautiful",artist:"One Direction",url:"songs/Harry_Styles_-_What_Makes_You_Beautiful_(Jesusful.com).mp3",pic:"images/what makes you beautiful.jpg"},
    {title:"We Don't Talk Anymore",artist:"Charlie Puth ft. Selena Gomez",url:"songs/We-Don't-Talk-Anymore---Charlie-Puth(musicdownload.cc).mp3",pic:"images/we dont talk anymore.jpg"},
    {title:"Hymn For the Weekend",artist:"Coldplay",url:"songs/Hymn-For-The-Weekend(PaglaSongs).mp3",pic:"images/hymn for the weekend.jpg"},
    {title:"A Thousand Years",artist:"Christina Perri",url:"songs/Christina_Perri_-_A_Thousand_Years_(Jesusful.com).mp3",pic:"images/a thousand year.jpg"},
    {title:"Tattoo",artist:"Loreen",url:"songs/Tattoo Song Loreen.mp3",pic:"images/tattoo.jpg"},
    {title:"Anti-Hero",artist:"Taylor Swift",url:"songs/Anti-Hero.mp3",pic:"images/cruel summer.jpg"},
    {title:"Stuck With You",artist:"Ariana Grande, Justin Beiber",url:"songs/Stuck with U Ft. Justin Bieber-Ariana Grande-VlcMusic.CoM.mp3",pic:"images/stuck with you.jpg"}
];

$("#play").click(function()
{
    if(clickCount)
    {
        clickCount=false;
        playSong();
    }
    else
    {
        pauseSong();
    }
});

$("#forward").click(function()
{
    pauseSong();
    songNumber++;
    if (songNumber==music.length)
    {
        songNumber=0
    }
    playSong();
    clickCount=false;
});

$("#backward").click(function()
{
    pauseSong();
    songNumber--;
    if (songNumber==-1)
    {
        songNumber=music.length-1;
    }
    playSong();
    clickCount=false;
});

function playSong()
{
    if(audio)
    {
        audio.pause();
    }
    audio=new Audio(music[songNumber].url);
    audio.play();
    $("#image").attr("src",music[songNumber].pic);
    $("#name").text(music[songNumber].title);
    $("#singer").text(music[songNumber].artist);
    // var audio1=new Audio();
    // audio1.addEventListener("timeupdate",()=>{
    //     var ct=Math.floor(audio1.currentTime);
    //     var cm=Math.floor(ct/60);
    //     var cs=ct%60;

    //     var dt=Math.floor(audio1.duration);
    //     var dm=Math.floor(dt/60);
    //     var ds=dt%60;

    //     $("#current-time").text=cm+":"+cs;
    //     $("#duration-time").text=dm+":"+ds; 
    //     $("#range").value=(audio1.currentTime/audio1.duration)*100;      
        
    // });
    $("#current-time").text(audio.currentTime);
    $("#duration-time").text(audio.duration);
    $("#range").value(audio.currentTime);
}

function pauseSong()
{
    if(audio)
    {
        audio.pause();
    }
    clickCount=true;
}

