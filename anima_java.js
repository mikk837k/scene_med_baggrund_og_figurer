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
//
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
    $("#bird1_sprite").addClass("birdSinging");
    $("#bird2_sprite").addClass("birdSinging");
    $("#bird3_sprite").addClass("birdSinging");
    //    $("#bird_container").on("animationend", manMoves);
    $(".startScene").on("click", manMoves)
}

function manMoves() {
    console.log("mand bevæger sig");
    $("#main_char_container").addClass("man_move_in");
    $("#main_char_sprite").addClass("manWalkcycle");

    $(".fodreFugle").on("click", feedBirds);
}

function feedBirds() {
    console.log("fodrer fugle");
    $("#main_char_container").removeClass("man_move_in");
    $("#main_char_sprite").removeClass("manWalkcycle");
    $("#main_char_container").addClass("man_position_in");
    $("#main_char_sprite").addClass("feedBirds");

    $(".fugleSpiser").on("click", birdsEating);
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

    $(".mandHopper").on("click", manJump);
}

function manJump() {
    console.log("mand hopper");
    $("#main_char_sprite").removeClass("feedBirds");
    $("#main_char_sprite").addClass("manJumps");

    $("#villain_container").removeClass("squirrel_move_in");
    $("#villain_sprite").removeClass("squirrelWalkcycle");

    $(".egernForskraekker").on("click", squirrelScare);
}

function squirrelScare() {
    console.log("egern forskrækker")
    $("#villain_container").addClass("squirrel_move_scare");
    $("#villain_sprite").addClass("squirrelWalkcycle");

    $(".fugleFlygter").on("click", birdsFlee);
}

function birdsFlee() {
    console.log("fugle flygter");
    $("#villain_container").removeClass("squirrel_move_scare");
    $("#villain_sprite").removeClass("squirrelWalkcycle");
    $("#villain_container").addClass("squirrel_position_scare");
    $("#villain_sprite").addClass("squirrelScare");

    $("#bird1_sprite").removeClass("birdsEating");
    $("#bird2_sprite").removeClass("birdsEating");
    $("#bird3_sprite").removeClass("birdsEating");
    $("#bird1_sprite").addClass("birdsFlee");
    $("#bird2_sprite").addClass("birdsFlee");
    $("#bird3_sprite").addClass("birdsFlee");

    $(".fugleFlyverOp").on("click", birdsFlyUp);
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


    $(".egernAngriber").on("click", squirrelAttack);
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

    $(".mandSur").on("click", manAngry);
}

function manAngry() {
    console.log("mand bliver sur");
    $("#villain_container").removeClass("squirrel_move_jump");
    $("#villain_sprite").removeClass("squirrelJump");
    $("#villain_container").addClass("squirrel_position_scare");
    $("#villain_sprite").addClass("squirrelStand");

    $("#main_char_sprite").removeClass("manStand");
    $("#main_char_sprite").addClass("manAngry");

    $(".mandTaenker").on("click", manThinking);
}

function manThinking() {
    console.log("mand tænker");
    $("#main_char_sprite").removeClass("manAngry");
    $("#main_char_sprite").addClass("manThinking");

    $(".mandFaarIde").on("click", manIdea);
}

function manIdea() {
    console.log("mand får idé");
    $("#main_char_sprite").removeClass("manThinking");
    $("#main_char_sprite").addClass("manIdea");
    $("#lightbulb_sprite").addClass("placeLightbulb");

    $(".mandGaarUd").on("click", manMoveOut);

}

function manMoveOut() {
    console.log("mand går ud");
    $("#main_char_sprite").removeClass("manIdea");
    $("#lightbulb_sprite").removeClass("placeLightbulb");

    $("#main_char_container").addClass("man_move_out");
    $("#main_char_sprite").addClass("manWalkcycle");

    $(".byggerFoderbraet").on("click", buildingBirdfeeder);
}

function buildingBirdfeeder() {
    console.log("bygger foderbræt");

    $(".mandGaarMedFoderbraet").on("click", walkWithBirdfeeder);
}

function walkWithBirdfeeder() {
    console.log("mand går ind med foderbræt");
    $("#main_char_container").removeClass("man_move_out");
    $("#main_char_sprite").removeClass("manWalkcycle");
    $("#main_char_container").addClass("man_move_birdfeeder");
    $("#main_char_sprite").addClass("birdfeederWalkcycle");

    $("#birdfeeder_container").addClass("move_Birdfeeder");

    $(".placererFoderbraet").on("click", placingBirdfeeder);

}

function placingBirdfeeder() {
    console.log("mand placere foderbræt");
    $("#birdfeeder_container").removeClass("move_Birdfeeder");
    $("#birdfeeder_container").addClass("place_Birdfeeder");

    $("#main_char_container").removeClass("man_move_birdfeeder");
    $("#main_char_sprite").removeClass("birdfeederWalkcycle");
    $("#main_char_container").addClass("man_with_birdfeeder");
    $("#main_char_sprite").addClass("manStand");

    $(".mandGårVæk").on("click", walkAway);
}

function walkAway() {
    console.log("mand går væk");
    $("#main_char_container").removeClass("man_with_birdfeeder");
    $("#main_char_sprite").removeClass("manStand");
    $("#main_char_container").addClass("man_move_away");
    $("#main_char_sprite").addClass("manWalkcycle");

    $(".nyderDyrene").on("click", enjoyAnimals);
}

function enjoyAnimals() {
    console.log("mand ser på dyr");
    $("#main_char_container").removeClass("man_move_away");
    $("#main_char_sprite").removeClass("manWalkcycle");
    $("#main_char_container").addClass("man_happy_position");
    $("#main_char_sprite").addClass("manHappy");

    $(".fugleFlyverind").on("click", birdsComesBack);
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

    $(".fugleFlyverNed").on("click", birdsFliesDown);
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

    $(".fugleLander").on("click", birdsLand);
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

    $(".egernkravler").on("click", squirrelCrawl);
}

function squirrelCrawl() {
    console.log("egern hopper op på foderbræt");
    $("#bird1_sprite").removeClass("birdsLand");
    $("#bird2_sprite").removeClass("birdsLand");
    $("#bird3_sprite").removeClass("birdsLand");
    $("#bird1_sprite").addClass("birdSinging");
    $("#bird2_sprite").addClass("birdSinging");
    $("#bird3_sprite").addClass("birdSinging");
    $("#villain_container").addClass("squirrel_jumps_birdfeeder");
    $("#villain_sprite").addClass("squirrelJumpsBirdfeeder");

    $(".mandHopper").on("click", manJumps);
}

function manJumps() {
    console.log("mand hopper");
    $("#main_char_sprite").removeClass("manHappy");
    $("#main_char_sprite").addClass("manJumps");

    $(".theEnd1").on("click", theEnd1);
}

function theEnd1() {
    console.log("mand går ud");
    $("#main_char_container").addClass("man_move_out");
    $("#main_char_sprite").addClass("manWalkcycle");
}
