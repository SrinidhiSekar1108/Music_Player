var songNumber=0;
var clickCount=true;
var audio;
var music=[
    {title:"Rewrite The Stars",artist:"James Arthur,Anne-Marie",url:"Anne-Marie_James_Arthur_-_Rewrite_The_Stars.mp3",pic:"rewrite the stars.jpg",vdo:"Anne-Marie & James Arthur - Rewrite The Stars [from The Greatest Showman Reimagined].mp4"},
    {title:"Stay",artist:"The Kid LAROI & Justin Bieber",url:"Stay(PaglaSongs).mp3",pic:"stay.jpg",vdo:"The Kid LAROI, Justin Bieber - STAY (Official Video).mp4"},
    {title:"Blinding Lights",artist:"The Weeknd",url:"The_Weeknd_-_Blinding_Lights.mp3",pic:"blinding lights.jpg",vdo:"The Weeknd - Blinding Lights (Official Video).mp4"},
    {title:"Heat Waves",artist:"Glass Animals",url:"Glass_Animals_-_Heat_Waves.mp3",pic:"heat waves.jpg",vdo:"Glass Animals - Heat Waves (Official Video).mp4"},
    {title:"Heartbreak Anniversary",artist:"Giveon",url:"Heartbreak Anniversary - Giveon.mp3",pic:"heartbreak Anniversary.jpg",vdo:"Giveon - Heartbreak Anniversary (Official Music Video).mp4"},
    {title:"Butter",artist:"BTS",url:"Butter bts.mp3",pic:"butter.jpg",vdo:"BTS (방탄소년단) 'Butter' Official MV.mp4"},
    {title:"Perfect",artist:"Ed Sheeran",url:"Ed_Sheeran_-_Perfect.mp3",pic:"perfect.jpg",vdo:"Ed Sheeran - Perfect (Official Music Video).mp4"},
    {title:"Senorita",artist:"Shawn Mendes,Camila Cabello",url:"Shawn_Mendes_Camila_Cabello_-_Se_orita.mp3",pic:"senorita.jpg",vdo:"Shawn Mendes, Camila Cabello - Señorita.mp4"},
    {title:"Love Me Like You Do",artist:"Ellie Goulding",url:"Love-Me-Like-You-Do(PaglaSongs).mp3",pic:"love me like you do.jpg",vdo:"Ellie Goulding - Love Me Like You Do (Official Video).mp4"},
    {title:"Make You Mine",artist:"Public",url:"PUBLIC - Make You Mine Put your hand in mine .mp3",pic:"make you mine.jpeg",vdo:"PUBLIC - Make You Mine (Put Your Hand in Mine) [Official Video].mp4"},
    {title:"Closer",artist:"The Chainsmokers ft. Halsey",url:"The_Chainsmokers_ft_Halsey_-_Closer.mp3",pic:"closer.jpg",vdo:"The Chainsmokers - Closer (Official Video) ft. Halsey.mp4"},
    {title:"Enchanted",artist:"Taylor Swift",url:"Enchanted.mp3",pic:"blank space.jpg",vdo:"Taylor Swift - Enchanted (Taylor's Version) (Lyric Video).mp4"},
    {title:"Faded",artist:"Alan Walker",url:"Alan_Walker_-_Faded.mp3",pic:"faded.jpg",vdo:"Alan Walker - Faded.mp4"},
    {title:"What Makes You Beautiful",artist:"One Direction",url:"Harry_Styles_-_What_Makes_You_Beautiful_(Jesusful.com).mp3",pic:"what makes you beautiful.jpg",vdo:"One Direction - What Makes You Beautiful (Official Video).mp4"},
    {title:"We Don't Talk Anymore",artist:"Charlie Puth ft. Selena Gomez",url:"We-Don't-Talk-Anymore---Charlie-Puth(musicdownload.cc).mp3",pic:"we dont talk anymore.jpg",vdo:"Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez) [Official Video].mp4"},
    {title:"Hymn For the Weekend",artist:"Coldplay",url:"Hymn-For-The-Weekend(PaglaSongs).mp3",pic:"hymn for the weekend.jpg",vdo:"Coldplay - Hymn For The Weekend (Official Video).mp4"},
    {title:"A Thousand Years",artist:"Christina Perri",url:"Christina_Perri_-_A_Thousand_Years_(Jesusful.com).mp3",pic:"a thousand year.jpg",vdo:"Christina Perri - A Thousand Years [Official Music Video].mp4"},
    {title:"Tattoo",artist:"Loreen",url:"Tattoo Song Loreen.mp3",pic:"tattoo.jpg",vdo:"Loreen - Tattoo (Official Lyric Video).mp4"},
    {title:"Anti-Hero",artist:"Taylor Swift",url:"Anti-Hero.mp3",pic:"cruel summer.jpg",vdo:"Taylor Swift - Anti-Hero (Official Music Video).mp4"},
    {title:"Stuck With You",artist:"Ariana Grande, Justin Beiber",url:"Stuck with U Ft. Justin Bieber-Ariana Grande-VlcMusic.CoM.mp3",pic:"stuck with you.jpg",vdo:"Justin Bieber & Ariana Grande  - Stuck with U (Prom Scenes).mp4"}
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
    $("#bgvdo").attr("src",music[songNumber].vdo);
    
    audio.addEventListener("timeupdate",()=>{
        var ct=Math.floor(audio.currentTime);
        var cm=Math.floor(ct/60);
        var cs=ct%60;

        var dt=Math.floor(audio.duration);
        var dm=Math.floor(dt/60);
        var ds=dt%60;

        var formattedCurrentTime = cm.toString().padStart(2, '0') + ":" + cs.toString().padStart(2, '0');
        var formattedDurationTime = dm.toString().padStart(2, '0') + ":" + ds.toString().padStart(2, '0');

        // Update the elements with the new values
        $("#current-time").text(formattedCurrentTime);
        $("#duration-time").text(formattedDurationTime);

        // Update the range input value to reflect the progress
        $("#range").val((audio.currentTime / audio.duration) * 100);      
        
        if(audio.currentTime==audio.duration)
        {
            songNumber++;
            playSong();
        }
    });

    
}

function pauseSong()
{
    if(audio)
    {
        audio.pause();
    }
    clickCount=true;
}

