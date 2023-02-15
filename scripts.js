let page = 1;

let pages = [
    {
        pageon : `
            <div id="root" class="personal">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="e.g. Stephen King">
                <label for="email">Email Address</label>
                <input type="email" name="email" id="email" placeholder="e,g, stephenking@lorem.com">
                <label for="phone--number">Phone Number</label>
                <input type="tel" name="tel" id="phone--number" placeholder="e.g. +1 234 567 890">
            </div>`, 
        value : {username:"", email:"", phoneNumber:""},
        title:"Personal Info", 
        subTitle:"Please provide ypur name, email address, and phone number."
    },
    {
        pageon : `
            <div id="root" class="plan--choice">
                <div class="plan arcade" onclick="choosePlan(0)">
                    <img src="./assets/images/icon-arcade.svg" alt="">
                    <div class="plan--info">
                    <p class="plan--name">Arcade</p>
                    <p class="cost">$9/mo</p>
                    </div>
                </div>
                <div class="plan advanced" onclick="choosePlan(1)">
                    <img src="./assets/images/icon-advanced.svg" alt="">
                    <div class="plan--info">
                    <p class="plan--name">Advanced</p>
                    <p class="cost">$12/mo</p>
                    </div>
                </div>
                <div class="plan pro" onclick="choosePlan(2)">
                    <img src="./assets/images/icon-pro.svg" alt="">
                    <div class="plan--info">
                    <p class="plan--name">Pro</p>
                    <p class="cost">$15/mo</p>
                    </div>
                </div>
                <div class="monYear">
                    <p class="choseTime">Monthly</p>
                    <div class="toggle" onclick="handleDurationChange()">
                    <div class="toggleBar"></div>
                    </div>
                    <p>Yearly</p>
                </div>
            </div>`,
        value:[0, true],
        title:"Select your plan", 
        subTitle:"You have the option of monthly or yearly billing."
    },
    {
        pageon : `
            <div id="root" class="add--ons">
                <div class="online--service" onclick="choseAddon(0)">
                <div class="addon--checkbox">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </div>
                <div class="add--ons--info">
                    <p class="addon--name">Online Service</p>
                    <p class="addon--desc">Access to multiplayer games</p>
                </div>
                <p class="addon--cost">+1$/mo</p>
                </div>
                <div class="larger--storage" onclick="choseAddon(1)">
                <div class="addon--checkbox">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </div>
                <div class="add--ons--info">
                    <p class="addon--name">Larger Storage</p>
                    <p class="addon--desc">Extra 1TB of cloud save</p>
                </div>
                <p class="addon--cost">+2$/mo</p>
                </div>
                <div class="custom--profile" onclick="choseAddon(2)">
                <div class="addon--checkbox">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </div>
                <div class="add--ons--info">
                    <p class="addon--name">Customizable Profile</p>
                    <p class="addon--desc">Custom theme on your profile</p>
                </div>
                <p class="addon--cost">+2$/mo</p>
                </div>
            </div>`,
        value:[false, false, false],
        title:"Pick add-ons", 
        subTitle:"Add-ons help enhance your gaming experience."
    },
    {
        pageon :`
            <div id="root" class="summary">
                <div class="choice--preview">
                <div class="choice--list">
                    <div class="choice">
                    <p class="type--name">Arcade (Monthly)</p>
                    <p class="change">Change</p>
                    </div>
                    <p class="cost">$9/mo</p>
                </div>
                <hr>
                <div class="choice--list">
                    <p class="addon--service">Online service</p>
                    <p class="cost">$1/mo</p>
                </div>
                <div class="choice--list">
                    <p class="addon--service">Larger Storage</p>
                    <p class="cost">$2/mo</p>
                </div>
                </div>
                <div class="total">
                <p class="total--name">Total (Per Month)</p>
                <p class="cost">$12/mo</p>
                </div>
            </div>`,
        value:[],
        title:"Finishing up", 
        subTitle:"Double-check everything looks OK before confirming."
    }
]

$("form #form--desc").after(pages[0].pageon)

let cost = [[9, 12, 15], [90, 120, 150]]

$("form").submit(function(e) {
    e.preventDefault();
});

function checkState(e) {
    if(page === 1) {
        $(".form .go--back").hide();
    } else {
        $(".form .go--back").show();
    }

    if(page === 4) {
        $(".form .next--step").hide();
        $(".form button[type='submit']").show();
    } else {
        $(".form .next--step").show();
        $(".form button[type='submit']").hide();
    }

    switch (e) {
        case 1:
            console.log("this is page one")
            $(".personal #name").val(pages[0].value.username)
            $(".personal #email").val(pages[0].value.email)
            $(".personal #phone--number").val(pages[0].value.phoneNumber)
            break;
        case 2:
            console.log("this is page two")
            handleDurationChange("e")
            choosePlan(pages[1].value[0])
            break;
        case 3:
            console.log("this is page three")
            break;
        case 4:
            console.log("this is page four")
            break;
    }

}

function pageChange(e){
    page +=e;

    $("form h1").text(pages[page-1].title);
    $("form>p").text(pages[page-1].subTitle);

    $(".navigation li .order").css("background-color","transparent");
    $(`.navigation li .order p`).css("color","white");
    $(`.navigation li:nth-of-type(${page}) .order`).css("background-color","hsl(206, 94%, 87%)");
    $(`.navigation li:nth-of-type(${page}) .order p`).css("color","hsl(213, 96%, 18%)");

    $("form #form--desc").next().remove();
    $("form #form--desc").after(pages[page-1].pageon)

    checkState(page);
}

function handleDurationChange(e){
    if(!e){pages[1].value[1] = !pages[1].value[1]}
    if(pages[1].value[1]){
        $("#root .plan .ad").remove()
        $("#root .arcade .cost").text(`$${cost[0][0]}/mo`)
        $("#root .advanced .cost").text(`$${cost[0][1]}/mo`)
        $("#root .pro .cost").text(`$${cost[0][2]}/mo`)
        $(".toggle .toggleBar").removeClass("left")
        $("#root .monYear p").removeClass("choseTime")
    } else {
        $("#root .plan").append('<p class="ad">2 months free</p>')
        $("#root .arcade .cost").text(`$${cost[1][0]}/yr`)
        $("#root .advanced .cost").text(`$${cost[1][1]}/yr`)
        $("#root .pro .cost").text(`$${cost[1][2]}/yr`)
        $(".toggle .toggleBar").addClass("left")
        $("#root .monYear p").addClass("choseTime")
    }
}

function choosePlan(id){
    $(`#root .plan`).css("border-color","hsl(229, 24%, 87%)")
    $("#root .plan").css("background-color","transparent")
    $(`#root .plan:nth-of-type(${id+1})`).css("border-color","hsl(243, 100%, 62%)")
    $(`#root .plan:nth-of-type(${id+1})`).css("background-color","hsl(217, 100%, 97%)")

    pages[1].value[0] = id
    console.log(pages[1])
}

function choseAddon(id){
    pages[2].value[id] = !pages[2].value[id]
    $(`#root>div:nth-of-type(${id+1}) input`).attr("checked",pages[2].value[id])
    $(`#root>div:nth-of-type(${id+1})`).css("border-color", pages[2].value[id]?"hsl(243, 100%, 62%)":"hsl(229, 24%, 87%)")
    $(`#root>div:nth-of-type(${id+1})`).css("background-color", pages[2].value[id]?"hsl(217, 100%, 97%)":"transparent")
    console.log(pages[2].value)
}