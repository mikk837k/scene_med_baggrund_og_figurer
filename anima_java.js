var catchCounter = 0;
var myTimer;
//elementer:
//#main_char_container
//#main_char_sprite
//bird1_container
//bird1_sprite
//bird2_container
//bird2_sprite
//bird3_container
//bird3_sprite
//birdfeeder_container
//birdfeeder_sprite
//villain_container
//villain_sprite
//lightbulb_container
//lightbulb_sprite
//animation:
//.man_move_in
//.manWalkcycle
//.man_posiiton_in
//.manStand
//.manJumps
//.feedBirds
//.manAngry
//.manThinking
//manIdea
//man_move_out
//man_move_birdfeeder
//birdfeederWalkcycle
//man_with_birdfeeder
//man_move_away
//man_happy_position
//manHappy
//birdSinging
//birdsEating
//birdsFlee
//birds_move_up
//birdsFlyUp
//birds_position_in
//birds_move_out
//birdsFlyOut
//birds_move_in
//birdsFlyIn
//birds_move_down
//birdsFlyDown
//birds_move_slow
//birdsLand
//birds_position_landed
//squirrel_move_in
//squirrelWalkcycle
//squirrel_move_scare
//squirrel_position_scare
//squirrelStand
//squirrelScare
//squirrel_move_jump
//squirrelJump
//squirrel_jumps_birdfeeder
//squirrelJumpsBirdfeeder
//move_Birdfeeder
//place_Birdfeeder
//placeLightbulb

//Når siden er loadet: sidenVises
$(window).on("load", setScene);

function setScene() {
    console.log("siden er loadet!");
    $("#credits").addClass("credits_out");
    $("#sky1_container").addClass("sky1_move");
    $("#sky2_container").addClass("sky2_move");
    $("#sky3_container").addClass("sky3_move");
    $("#sky1_sprite").addClass("skyChangeCycle");
    $("#sky2_sprite").addClass("skyChangeCycle");
    $("#sky3_sprite").addClass("skyChangeCycle");
    $("#bird1_sprite").addClass("birdSinging");
    $("#bird2_sprite").addClass("birdSinging");
    $("#bird3_sprite").addClass("birdSinging");
    $("#main_char_container").addClass("man_start_pos");
    $("#villain_container").addClass("villain_start_pos");

    $("#lightbulb_container").addClass("lightbulb_start_pos");
    $("#birdfeeder_container").addClass("birdfeeder_start_pos");

    $("#build_container").addClass("catch_start_pos");
    $("#catch_container").addClass("catch_start_pos");

    $("#background_lyd")[0].play();
    $("#background_lyd")[0].volume = 0.5;
    $("#nynner_lyd")[0].play();
    $("#nynner_lyd")[0].volume = 0.4;

    setTimeout(manMoves, 2000);
    //    $(".startScene").on("click", manMoves)
}

function manMoves() {
    console.log("mand bevæger sig");
    $("#main_char_container").removeClass("man_start_pos");
    $("#main_char_container").addClass("man_move_in");
    $("#main_char_sprite").addClass("manWalkcycle");

    //    $(".fodreFugle").on("click", feedBirds);
    $("#bird_container").off("animationend", manMoves);
    $("#main_char_container").on("animationend", feedBirds);
}

function feedBirds() {
    console.log("fodrer fugle");
    $("#main_char_container").removeClass("man_move_in");
    $("#main_char_sprite").removeClass("manWalkcycle");
    $("#main_char_container").addClass("man_position_in");
    $("#main_char_sprite").addClass("feedBirds");

    //    $(".fugleSpiser").on("click", birdsEating);
    $("#main_char_container").off("animationend", feedBirds);
    $("#nynner_lyd")[0].volume = 0;
    $("#fuglefroe_lyd")[0].play();
    $("#fuglefroe_lyd")[0].volume = 0.4;

    setTimeout(birdsEating, 3000);
}

function birdsEating() {
    console.log("fugle spiser");
    $("#bird1_sprite").removeClass("birdSinging");
    $("#bird2_sprite").removeClass("birdSinging");
    $("#bird3_sprite").removeClass("birdSinging");
    $("#bird1_sprite").addClass("birdsEating");
    $("#bird2_sprite").addClass("birdsEating");
    $("#bird3_sprite").addClass("birdsEating");

    $("#villain_container").addClass("squirrel_move_in");
    $("#villain_sprite").addClass("squirrelWalkcycle");

    //    $(".mandHopper").on("click", manJump);
    $("#villain_container").on("animationend", manJump);
}

function manJump() {
    console.log("mand hopper");
    $("#main_char_sprite").removeClass("feedBirds");
    $("#main_char_sprite").addClass("manJumps");

    $("#villain_container").removeClass("squirrel_move_in");
    $("#villain_sprite").removeClass("squirrelWalkcycle");

    //    $(".egernForskraekker").on("click", squirrelScare);
    $("#villain_container").off("animationend", manJump);
    $("#main_char_sprite").on("animationend", squirrelScare);

    $("#happy_lyd")[0].play();
    $("#happy_lyd")[0].volume = 0.4;
}

function squirrelScare() {
    console.log("egern forskrækker")
    $("#villain_container").addClass("squirrel_move_scare");
    $("#villain_sprite").addClass("squirrelWalkcycle");

    //    $(".fugleFlygter").on("click", birdsFlee);
    $("#main_char_sprite").off("animationend", squirrelScare);
    $("#villain_container").on("animationend", birdsFlee);

    $("#background_lyd")[0].volume = 0;
    $("#suspense_lyd")[0].play();
    $("#suspense_lyd")[0].volume = 0.1;
}

function birdsFlee() {
    console.log("fugle flygter");
    $("#villain_container").removeClass("squirrel_move_scare");
    $("#villain_sprite").removeClass("squirrelWalkcycle");

    $("#villain_container").removeClass("villain_start_pos");
    $("#villain_container").addClass("squirrel_position_scare");
    $("#villain_sprite").addClass("squirrelScare");

    $("#bird1_sprite").removeClass("birdsEating");
    $("#bird2_sprite").removeClass("birdsEating");
    $("#bird3_sprite").removeClass("birdsEating");
    $("#bird1_sprite").addClass("birdsFlee");
    $("#bird2_sprite").addClass("birdsFlee");
    $("#bird3_sprite").addClass("birdsFlee");

    //    $(".fugleFlyverOp").on("click", birdsFlyUp);
    $("#villain_container").off("animationend", birdsFlee);
    setTimeout(birdsFlyUp, 500);
}

function birdsFlyUp() {
    console.log("fugle flyver op");
    $("#bird1_sprite").removeClass("birdsFlee");
    $("#bird2_sprite").removeClass("birdsFlee");
    $("#bird3_sprite").removeClass("birdsFlee");
    $("#bird1_sprite").addClass("birdsFlyUp");
    $("#bird2_sprite").addClass("birdsFlyUp");
    $("#bird3_sprite").addClass("birdsFlyUp");
    $("#bird1_container").addClass("birds_move_up");
    $("#bird2_container").addClass("birds_move_up");
    $("#bird3_container").addClass("birds_move_up");

    $("#main_char_sprite").removeClass("manJumps");
    $("#main_char_sprite").addClass("manStand");
    setTimeout(squirrelAttack, 800);

    //    $(".egernAngriber").on("click", squirrelAttack);
}

function squirrelAttack() {
    console.log("egern angriber");
    $("#villain_container").removeClass("squirrel_position_scare");
    $("#villain_sprite").removeClass("squirrelScare");
    $("#villain_container").addClass("squirrel_move_jump");
    $("#villain_sprite").addClass("squirrelJump");

    $("#bird1_sprite").removeClass("birdsFlyUp");
    $("#bird2_sprite").removeClass("birdsFlyUp");
    $("#bird3_sprite").removeClass("birdsFlyUp");
    $("#bird1_container").removeClass("birds_move_up");
    $("#bird2_container").removeClass("birds_move_up");
    $("#bird3_container").removeClass("birds_move_up");
    $("#bird1_sprite").addClass("birdsFlyOut");
    $("#bird2_sprite").addClass("birdsFlyOut");
    $("#bird3_sprite").addClass("birdsFlyOut");
    $("#bird1_container").addClass("birds_move_out");
    $("#bird2_container").addClass("birds_move_out");
    $("#bird3_container").addClass("birds_move_out");

    //    $(".mandSur").on("click", manAngry);
    $("#villain_container").on("animationend", manAngry);
}

function manAngry() {
    console.log("mand bliver sur");
    $("#villain_container").removeClass("squirrel_move_jump");
    $("#villain_sprite").removeClass("squirrelJump");
    $("#villain_container").addClass("squirrel_position_scare");
    $("#villain_sprite").addClass("squirrelStand");

    $("#main_char_sprite").removeClass("manStand");
    $("#main_char_sprite").addClass("manAngry");

    //    $(".mandTaenker").on("click", manThinking);
    $("#villain_container").off("animationend", manAngry);
    $("#main_char_sprite").on("animationend", manThinking);

    $("#angry_lyd")[0].play();
    $("#angry_lyd")[0].volume = 0.4;

}

function manThinking() {
    console.log("mand tænker");
    $("#main_char_sprite").removeClass("manAngry");
    $("#main_char_sprite").addClass("manThinking");

    //    $(".mandFaarIde").on("click", manIdea);

    $("#angry_lyd")[0].volume = 0;
    $("#thinking_lyd")[0].play();
    $("#thinking_lyd")[0].volume = 0.4;

    $("#main_char_sprite").off("animationend", manThinking);
    setTimeout(manIdea, 3000);
}


function manIdea() {
    console.log("mand får idé");
    $("#main_char_sprite").removeClass("manThinking");
    $("#main_char_sprite").addClass("manIdea");
    $("#lightbulb_container").addClass("placeLightbulb");

    $("#thinking_lyd")[0].volume = 0;
    $("#idea_lyd")[0].play();
    $("#idea_lyd")[0].volume = 0.4;

    setTimeout(choosePath, 500);
}

function choosePath() {
    console.log("choosePath loadet");
    $("#build_container").removeClass("catch_start_pos");
    $("#catch_container").removeClass("catch_start_pos");
    $("#build_container").addClass("build_choice_position");
    $("#catch_container").addClass("catch_choice_position");
    $("#build_sprite").addClass("choiceBuild");
    $("#catch_sprite").addClass("choiceCatch");

    $("#build_container").on("click", manBuildBirdfeeder);
    $("#catch_container").on("click", manGetNet);


    //     $(".mandGaarUd").on("click", manMoveOut);
}

//HØJREBEN AF HISTORIEN

function manGetNet() {
    console.log("getNet loadet");
    $("#main_char_sprite").removeClass("manIdea");
    $("#main_char_container").removeClass("man_position_in");
    $("#build_sprite").removeClass("choiceBuild");
    $("#catch_sprite").removeClass("choiceCatch");
    $("#build_container").off("click", manBuildBirdfeeder);
    $("#catch_container").off("click", manGetNet);
    $("#build_container").addClass("build_start_pos");
    $("#catch_container").addClass("catch_start_pos");
    $("#build_container").removeClass("build_choice_position");
    $("#catch_container").removeClass("catch_choice_position");
    $("#lightbulb_container").removeClass("placeLightbulb");
    $("#main_char_container").addClass("man_move_out");
    $("#main_char_sprite").addClass("manWalkcycle");
    $("#main_char_container").on("animationend", moveToSquirrel);

    $("#suspense_lyd")[0].volume = 0;
}

function moveToSquirrel() {
    console.log("moveToSquirrel loadet");
    $("#build_sprite").removeClass("choiceBuild");
    $("#catch_sprite").removeClass("choiceCatch");
    $("#build").off("click", manBuildBirdfeeder);
    $("#catch").off("click", manGetNet);
    $("#build_container").addClass("build_start_pos");
    $("#catch_container").addClass("catch_start_pos");

    $("#lightbulb_container").removeClass("placeLightbulb");

    $("#main_char_container").removeClass("man_move_out");
    $("#main_char_sprite").removeClass("manWalkcycle");
    $("#main_char_container").addClass("man_with_net_move");
    $("#main_char_sprite").addClass("manNetWalkcycle");

    $("#main_char_container").off("animationend", moveToSquirrel);

    $("#main_char_container").on("animationend", atSquirrel);
}

function atSquirrel() {
    console.log("ved egernet");
    $("#main_char_container").removeClass("man_with_net_move");
    $("#main_char_sprite").removeClass("manNetWalkcycle");
    $("#villain_container").removeClass("squirrel_position_scare");
    $("#main_char_container").addClass("man_position_catch");
    $("#main_char_sprite").addClass("manCatchStand");

    $("#villain_container").addClass("squirrelPuls");


    $("#main_char_container").off("animationend", atSquirrel);
    myTimer = setTimeout(timetUd, 10000);

    computerbestemmer();
}

function computerbestemmer() {
    console.log("computerbestemmer loadet");
    var tilfaeldigtTal = Math.random();
    if (tilfaeldigtTal >= 0.5) {
        console.log("her er mit tilfældige tal " + tilfaeldigtTal);
        canClick();
    } else {
        console.log(tilfaeldigtTal);
        harFangetEgernet();
    }
}

function canClick() {
    console.log("Can Click!");
    $("#main_char_sprite").addClass("manCatch");
    $("#main_char_sprite").removeClass("manCatchStand");

    $("#villain_container").on("click", catchSquirrel);
    $("#suspense_lyd")[0].volume = 0.1;
}

function catchSquirrel() {
    console.log("catchSquirrel loadet");
    $("#main_char_sprite").removeClass("manCatchStand");
    $("#villain_container").off("click");
    catchCounter++;
    console.log("du har klikket " + catchCounter);
    if (catchCounter == 5) {
        console.log("Super du har fanget egernet " + catchCounter);
        harFangetEgernet();
    } else {
        console.log("catchCounter er ikke 5");
        canClick();
        if (catchCounter <= 4) {
            var move = Math.random() * 10 + 75;
            $("#villain_container").css('left', move + 'vw');
        } else {
            $("#villain_container").css('left', '65vw');
        }
    }

    $("#netlyd_lyd")[0].play();
    $("#netlyd_lyd")[0].volume = 0.4;

}

function harFangetEgernet() {
    console.log("harFangetEgernet er loadet");
    $("#main_char_sprite").removeClass("manCatch");
    $("#villain_sprite").removeClass("squirrelStand");
    $("#villain_container").removeClass("squirrelPuls");
    $("#main_char_sprite").addClass("manJumps");
    $("#villain_sprite").addClass("squirrelCaged");
    $("#villain_container").addClass("squirrel_position_scare");

    $("#happy_lyd")[0].play();
    $("#happy_lyd")[0].volume = 0.4;
    $("#suspense_lyd")[0].volume = 0;
    $("#background_lyd")[0].volume = 0.5;

    $("#main_char_sprite").on("animationend", gårUdMedEgernet);
    clearTimeout(myTimer);
}

function gårUdMedEgernet() {
    console.log("gårUdMedEgernet er loadet");
    $("#main_char_sprite").removeClass("manJumps");
    $("#villain_container").removeClass("squirrel_position_scare");
    $("#main_char_container").addClass("man_move_with_squirrel");
    $("#main_char_sprite").addClass("birdfeederWalkcycle");
    $("#villain_container").addClass("squirrel_move_caged");

    $("#nynner_lyd")[0].play();
    $("#nynner_lyd")[0].volume = 0.4;


    setTimeout(credits, 2000);
    //    $("#main_char_container").on("animationend", credits);
}

function timetUd() {
    console.log("timetUd er loadet");
    $("#main_char_sprite").removeClass("manCatch");
    $("#villain_container").removeClass("squirrelPuls");
    $("#villain_container").addClass("squirrel_position_scare");
    $("#main_char_container").addClass("man_move_gives_up");
    $("#main_char_sprite").addClass("manNetWalkcycle");

    $("#suspense_lyd")[0].volume = 0;

    $("#main_char_container").on("animationend", buildingBirdfeeder);
}

function manBuildBirdfeeder() {
    console.log("mand går ud");
    $("#main_char_sprite").removeClass("manIdea");
    $("#lightbulb_container").removeClass("placeLightbulb");
    $("#main_char_container").removeClass("man_position_in");


    $("#main_char_container").addClass("man_move_out");
    $("#main_char_sprite").addClass("manWalkcycle");
    $("#build_container").removeClass("build_choice_position");
    $("#catch_container").removeClass("catch_choice_position");
    $("#build_container").addClass("build_start_pos");
    $("#catch_container").addClass("catch_start_pos");
    $("#villain_container").addClass("squirrel_position_scare");

    $("#build").off("click", manBuildBirdfeeder);
    $("#catch").off("click", manGetNet);

    $("#suspense_lyd")[0].volume = 0;
    $("#nynner_lyd")[0].play();
    $("#nynner_lyd")[0].volume = 0.4;

    $("#main_char_container").on("animationend", buildingBirdfeeder);
}

function buildingBirdfeeder() {
    console.log("bygger foderbræt");
    $("#main_char_sprite").removeClass();
    $("#main_char_container").removeClass();
    $("#main_char_container").addClass("man_start_pos");
    $("#main_char_container").off("animationend", buildingBirdfeeder);

    $("#byggelyde_lyd")[0].play();
    $("#byggelyde_lyd")[0].volume = 0.4;
    $("#nynner_lyd")[0].volume = 0;
    //    HUSK! her skal det være lydanimationen som sender os videre!

    $("#byggelyde_lyd").on("ended", walkWithBirdfeeder);
}

function walkWithBirdfeeder() {
    console.log("mand går ind med foderbræt");
    $("#main_char_container").removeClass("man_start_pos");
    $("#main_char_container").addClass("man_move_birdfeeder");
    $("#main_char_sprite").addClass("birdfeederWalkcycle");

    $("#birdfeeder_container").addClass("move_Birdfeeder");

    //    $(".placererFoderbraet").on("click", placingBirdfeeder);
    $("#main_char_container").on("animationend", placingBirdfeeder);

}

function placingBirdfeeder() {
    console.log("mand placere foderbræt");
    $("#birdfeeder_container").removeClass("move_Birdfeeder");
    $("#birdfeeder_container").addClass("place_Birdfeeder");

    $("#main_char_container").removeClass("man_move_birdfeeder");
    $("#main_char_sprite").removeClass("birdfeederWalkcycle");
    $("#main_char_container").addClass("man_with_birdfeeder");
    $("#main_char_sprite").addClass("manStand");

    $("#background_lyd")[0].volume = 0.5;

    //    $(".mandGårVæk").on("click", walkAway);
    $("#main_char_container").off("animationend", placingBirdfeeder);
    setTimeout(walkAway, 1000);
}

function walkAway() {
    console.log("mand går væk");
    $("#main_char_container").removeClass("man_with_birdfeeder");
    $("#main_char_sprite").removeClass("manStand");
    $("#main_char_container").addClass("man_move_away");
    $("#main_char_sprite").addClass("manWalkcycle");

    //    $(".nyderDyrene").on("click", enjoyAnimals);
    $("#main_char_container").on("animationend", enjoyAnimals);
}

function enjoyAnimals() {
    console.log("mand ser på dyr");
    $("#main_char_container").removeClass("man_move_away");
    $("#main_char_sprite").removeClass("manWalkcycle");
    $("#main_char_container").addClass("man_happy_position");
    $("#main_char_sprite").addClass("manHappy");

    //    $(".fugleFlyverind").on("click", birdsComesBack);
    $("#main_char_container").off("animationend", enjoyAnimals);
    setTimeout(birdsComesBack, 1000);

}

function birdsComesBack() {
    console.log("fugle kommer tilbage");
    $("#bird1_sprite").removeClass("birdsFlyOut");
    $("#bird2_sprite").removeClass("birdsFlyOut");
    $("#bird3_sprite").removeClass("birdsFlyOut");
    $("#bird1_container").removeClass("birds_move_out");
    $("#bird2_container").removeClass("birds_move_out");
    $("#bird3_container").removeClass("birds_move_out");
    $("#bird1_sprite").addClass("birdsFlyIn");
    $("#bird2_sprite").addClass("birdsFlyIn");
    $("#bird3_sprite").addClass("birdsFlyIn");
    $("#bird1_container").addClass("birds_move_in");
    $("#bird2_container").addClass("birds_move_in");
    $("#bird3_container").addClass("birds_move_in");

    //    $(".fugleFlyverNed").on("click", birdsFliesDown);
    $("#bird1_container").on("animationend", birdsFliesDown);
}

function birdsFliesDown() {
    console.log("fugle flyver ned");
    $("#bird1_sprite").removeClass("birdsFlyIn");
    $("#bird2_sprite").removeClass("birdsFlyIn");
    $("#bird3_sprite").removeClass("birdsFlyIn");
    $("#bird1_container").removeClass("birds_move_in");
    $("#bird2_container").removeClass("birds_move_in");
    $("#bird3_container").removeClass("birds_move_in");
    $("#bird1_sprite").addClass("birdsFlyDown");
    $("#bird2_sprite").addClass("birdsFlyDown");
    $("#bird3_sprite").addClass("birdsFlyDown");
    $("#bird1_container").addClass("birds_move_down");
    $("#bird2_container").addClass("birds_move_down");
    $("#bird3_container").addClass("birds_move_down");

    //    $(".fugleLander").on("click", birdsLand);
    $("#bird1_container").off("animationend", birdsFliesDown);
    $("#bird1_container").on("animationend", birdsLand);
}

function birdsLand() {
    console.log("fugle lander");
    $("#bird1_sprite").removeClass("birdsFlyDown");
    $("#bird2_sprite").removeClass("birdsFlyDown");
    $("#bird3_sprite").removeClass("birdsFlyDown");
    $("#bird1_container").removeClass("birds_move_down");
    $("#bird2_container").removeClass("birds_move_down");
    $("#bird3_container").removeClass("birds_move_down");
    $("#bird1_sprite").addClass("birdsLand");
    $("#bird2_sprite").addClass("birdsLand");
    $("#bird3_sprite").addClass("birdsLand");
    $("#bird1_container").addClass("birds_position_landed");
    $("#bird2_container").addClass("birds_position_landed");
    $("#bird3_container").addClass("birds_position_landed");

    //    $(".egernkravler").on("click", squirrelCrawl);
    $("#bird1_container").off("animationend", birdsLand);
    setTimeout(squirrelCrawl, 1500);
}

function squirrelCrawl() {
    console.log("egern hopper op på foderbræt");
    $("#bird1_sprite").removeClass("birdsLand");
    $("#bird2_sprite").removeClass("birdsLand");
    $("#bird3_sprite").removeClass("birdsLand");
    $("#villain_container").removeClass("squirrel_position_scare");
    $("#bird1_sprite").addClass("birdSinging");
    $("#bird2_sprite").addClass("birdSinging");
    $("#bird3_sprite").addClass("birdSinging");
    $("#villain_container").addClass("squirrel_jumps_birdfeeder");
    $("#villain_sprite").addClass("squirrelJumpsBirdfeeder");

    //    $(".mandHopper").on("click", manJumps);
    $("#villain_container").on("animationend", manJumps);
}

function manJumps() {
    console.log("mand hopper");
    $("#main_char_sprite").removeClass("manHappy");
    $("#main_char_sprite").addClass("manJumps");

    //    $(".theEnd1").on("click", theEnd1);
    $("#villain_container").off("animationend", manJumps);
    $("#main_char_sprite").on("animationend", theEnd1);
}

function theEnd1() {
    console.log("mand går ud");
    $("#main_char_container").removeClass("man_happy_position");
    $("#main_char_sprite").removeClass("manJumps");
    $("#main_char_container").addClass("man_move_out");
    $("#main_char_sprite").addClass("manWalkcycle");
    $("#main_char_sprite").off("animationend", theEnd1);
    $("#main_char_container").on("animationend", credits);
}

function credits() {
    console.log("credits loadet");
    $("#credits").removeClass("credits_out");
    $("#credits").addClass("credits_in");
    $("#nynner_lyd")[0].volume = 0;
    $("#background_lyd")[0].volume = 0;
}
