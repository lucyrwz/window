var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7; 
var song8;
var song9;
var song10; 
var song11;
var song12;
var song13;
var song14;
var songA1;
var songA2;
var songA3;
var songA4;
var songA5;
var songA6;
var songA7;
var songA8;
var songA9;
var songA10;
var songA11;
var songA12;
var songA13;
var bg;


function preload() {
  song1 = loadSound("1.mp3");
  song2 = loadSound("2.mp3"); 
  song3 = loadSound("3.mp3");
  song4 = loadSound("4.mp3"); 
  song5 = loadSound("5.mp3"); 
  song6 = loadSound("6.mp3"); 
  song7 = loadSound("7.mp3"); 
  song8 = loadSound("8.mp3"); 
  song9 = loadSound("9.mp3"); 
  song10 = loadSound("10.mp3"); 
  song11 = loadSound("11.mp3");
  song12 = loadSound("12.mp3");
  song13 = loadSound("13.mp3"); 
  song14 = loadSound("14.mp3"); 
  song15 = loadSound("15.mp3");
  song16 = loadSound("16.mp3"); 
  songA1 = loadSound("A1.mp3");
  songA2 = loadSound("A2.mp3"); 
  songA3 = loadSound("A3.mp3");
  songA4 = loadSound("A4.mp3");
  songA5 = loadSound("A5.mp3");
  songA6 = loadSound("A6.mp3");
  songA7 = loadSound("A7.mp3");
  songA8 = loadSound("A8.mp3");
  songA9 = loadSound("A9.mp3");
  songA10 = loadSound("A10.mp3");
  songA11 = loadSound("A11.mp3");
  songA12 = loadSound("A12.mp3");
  songA13 = loadSound("A13.mp3");
  bg = loadImage ("HKMAP.jpg");
  
  
  songs = [song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song125,song13,song14,song15,song16,songA1,songA2,songA3,songA4,songA5,songA6,songA7,songA8,songA9,songA10,songA11,songA12,songA13];
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.doubleClicked(stopAllSongs);
  frameRate(10);
}

function translateX(position) {
  ratio = position/1512
  return ratio * windowWidth
}

function stopAllSongs() {
  songs.forEach(function(song) {
    if (song.isPlaying())
        {
          song.stop();
        } 
  })
  
}
function translateY(position) {
  ratio = position/982
  return ratio * windowHeight
}

function draw() {

  background(bg);

//1
  
  if (mouseX < translateX(332) && mouseX > translateX(319) && mouseY < translateY(192) && mouseY > translateY(144)){
    
    
    text("♫", mouseX, mouseY)
    if (!song1.isPlaying()){
      song1.play();
    }
  }
 
//2

  if (mouseX < translateX(87) && mouseX > translateX(38) && mouseY < translateY(406) && mouseY > translateY(373)){
    text("♫", mouseX, mouseY)
    if (!song2.isPlaying()){
      song2.play();
    }
  }
      

//3
 
  if (mouseX < translateX(225) && mouseX > translateX(218) && mouseY < translateY(525) && mouseY > translateY(528))
    {
    text("♫", mouseX, mouseY)
    if (!song3.isPlaying()){
      song3.play();
    }
  }
      
    
//4
  
  if (mouseX < translateX(293) && mouseX > translateX(249) && mouseY < translateY(965) && mouseY > translateX(938)){
    
    text("♫", mouseX, mouseY)
    if (!song4.isPlaying()){
      song4.play();
    }
  }
  
  
//5

  if (mouseX < translateX(658) && mouseX > translateX(608) && mouseY < translateY(909) && mouseY > translateY(873)){
    text("♫", mouseX, mouseY)
    if (!song5.isPlaying()){
      song5.play();
    }
  }
      
  
//6

  if (mouseX < translateX(683) && mouseX > translateX(637) && mouseY < translateY(557) && mouseY > translateY(519)){
    text("♫", mouseX, mouseY)
    if (!song6.isPlaying()){
      song6.play();
    }
  }
      
    
//7

  if (mouseX < translateX(656) && mouseX > translateX(629) && mouseY < translateY(316) && mouseY > translateY(275)){
    text("♫", mouseX, mouseY)
    if (!song7.isPlaying()){
      song7.play();
    }
  }
      
//8

  if (mouseX < translateX(856) && mouseX > translateX(824) && mouseY < translateY(155) && mouseY > translateY(118)){
    text("♫", mouseX, mouseY)
    if (!song8.isPlaying()){
      song8.play();
    }
  }
  
//9
  
  if (mouseX < translateX(892) && mouseX > translateX(845) && mouseY < translateY(490) && mouseY > translateY(466)){
    text("♫", mouseX, mouseY)
    if (!song9.isPlaying()){
      song9.play();
    }
  }
      
//10
  
  if (mouseX < translateX(894) && mouseX > translateX(847) && mouseY < translateY(867) && mouseY > translateY(834)){
    text("♫", mouseX, mouseY)
    if (!song10.isPlaying()){
      song10.play();
    }
  }      
     
//11
  
  if (mouseX < translateX(988) && mouseX > translateX(941) && mouseY < translateY(968) && mouseY > translateY(932)){
    text("♫", mouseX, mouseY)
    if (!song11.isPlaying()){
      song11.play();
    }
  }
  

//12
  
  if (mouseX < translateX(1129) && mouseX > translateX(1111) && mouseY < translateY(575) && mouseY > translateY(536)){
    text("♫", mouseX, mouseY)
    if (!song12.isPlaying()){
      song12.play();
    }
  }
      

 //13

  if (mouseX < translateX(1317) && mouseX > translateX(1272) && mouseY < translateY(747) && mouseY > translateY(712)){
    text("♫", mouseX, mouseY)
    if (!song13.isPlaying()){
      song13.play();
    }
  }
      
 
//14
  
  if (mouseX < translateX(1360) && mouseX > translateX(1310) && mouseY < translateY(288) && mouseY > translateY(274)){
    text("♫", mouseX, mouseY)
    if (!song14.isPlaying()){
      song14.play();
    }
  }
      

      
//15
  
  if (mouseX < translateX(1456) && mouseX > translateX(1431) && mouseY < translateY(181) && mouseY > translateY(136)){
    text("♫", mouseX, mouseY)
    if (!song15.isPlaying()){
      song15.play();
    }
  }
 
    
//16
  
  if (mouseX < translateX(1482) && mouseX > translateX(1440) && mouseY < translateY(688) && mouseY > translateY(658)){
    text("♫", mouseX, mouseY)
    if (!song16.isPlaying()){
      song16.play();
    }
  }

    //A1

  if (mouseX < translateX(241) && mouseX > translateX(61) && mouseY < translateY(236) && mouseY > translateY(70)){
    text("♫", mouseX, mouseY)
    if (!songA1.isPlaying()){
      songA1.play();
    }
  }

  
    //A2

  if (mouseX < translateX(697) && mouseX > translateX(432) && mouseY < translateY(214) && mouseY > translateX(69)){
    text("♫", mouseX, mouseY)
    if (!songA2.isPlaying()){
      songA2.play();
    }
  }

  
    //A3

  if (mouseX < translateX(1313) && mouseX > translateX(970) && mouseY < translateY(245) && mouseY > translateY(115)){
    text("♫", mouseX, mouseY)
    if (!songA3.isPlaying()){
      songA3.play();
    }
  }

    //A4

  if (mouseX < translateX(611) && mouseX > translateX(170) && mouseY < translateY(465) && mouseY > translateY(311)){
    text("♫", mouseX, mouseY)
    if (!songA4.isPlaying()){
      songA4.play();
    }
  }
  
    //A5

  if (mouseX < translateX(868) && mouseX > translateX(684) && mouseY < translateY(432) && mouseY > translateY(243)){
    text("♫", mouseX, mouseY)
    if (!songA5.isPlaying()){
      songA5.play();
    }
  }

  
    //A6

  if (mouseX < translateX(1117) && mouseX > translateX(927) && mouseY < translateY(515) && mouseY > translateY(325)){
    text("♫", mouseX, mouseY)
    if (!songA6.isPlaying()){
      songA6.play();
    }
  }

    //A7

  if (mouseX < translateX(1407) && mouseX > translateX(1240) && mouseY < translateY(645) && mouseY > translateY(316)){
    text("♫", mouseX, mouseY)
    if (!songA7.isPlaying()){
      songA7.play();
    }
  }

    //A8

  if (mouseX < translateX(207) && mouseX > translateX(59) && mouseY < translateY(830) && mouseY > translateY(549)){
    text("♫", mouseX, mouseY)
    if (!songA8.isPlaying()){
      songA8.play();
    }
  }
      
    //A9

  if (mouseX < translateX(498) && mouseX > translateX(300) && mouseY < translateY(712) && mouseY > translateY(519)){
    text("♫", mouseX, mouseY)
    if (!songA9.isPlaying()){
      songA9.play();
    }
  }

    //A10

  if (mouseX < translateX(714) && mouseX > translateX(572) && mouseY < translateY(838) && mouseY > translateY(612)){
    text("♫", mouseX, mouseY)
    if (!songA10.isPlaying()){
      songA10.play();
    }
  }
      
    //A11

  if (mouseX < translateX(1098) && mouseX > translateX(835) && mouseY < translateY(745) && mouseY > translateY(596)){
    text("♫", mouseX, mouseY)
    if (!songA11.isPlaying()){
      songA11.play();
    }
  }
      
    //A12

  if (mouseX < translateX(521) && mouseX > translateX(275) && mouseY < translateY(911) && mouseY > translateY(825)){
    text("♫", mouseX, mouseY)
    if (!songA12.isPlaying()){
      songA12.play();
    }
  }

  
   //A13

  if (mouseX < translateX(1364) && mouseX > translateX(1128) && mouseY < translateY(907) && mouseY > translateY(781)){
    text("♫", mouseX, mouseY)
    if (!songA13.isPlaying()){
      songA13.play();
    }
  }
           
       
}