let page = 1;

let pages = [
    {
        pageon : `
            <div id="root" class="personal">
                <div>
                    <label for="name">Name</label>
                    <input onchange="handleChange('name')" type="text" id="name" placeholder="e.g. Stephen King">
                    <p class="name--error error"></p>
                </div>
                <div>
                    <label for="email">Email Address</label>
                    <input onchange="handleChange('email')" type="text" name="email" id="email" placeholder="e,g, stephenking@lorem.com">
                    <p class="email--error error"></p>
                </div>
                <div>
                    <label for="phone--number">Phone Number</label>
                    <input onchange="handleChange('phone--number')" type="text" name="tel" id="phone--number" placeholder="e.g. +1 234 567 890">
                    <p class="phone--error error"></p>
                </div>
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
        value:[{id:0,planName:"Arcade",price: [9, 90]}, true],
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
        value:[
            {addonName: "Online service", chose:false, price:[1, 10]}, 
            {addonName: "Larger storage", chose:false, price:[2, 20]},
            {addonName: "Custom profile", chose:false, price:[2, 20]}],
        title:"Pick add-ons", 
        subTitle:"Add-ons help enhance your gaming experience."
    },
    {
        pageon :`
            <div id="root" class="summary">
                <div class="choice--preview">
                <div class="choice--list">
                    <div class="choice">
                    <p class="type--name"></p>
                    <p class="change" onclick="pageChange(-2)">Change</p>
                    </div>
                    <p class="cost">$9/mo</p>
                </div>
                <hr>
                
                </div>
                <div class="total">
                <p class="total--name"></p>
                <p class="cost">$12/mo</p>
                </div>
            </div>`,
        value:[],
        title:"Finishing up", 
        subTitle:"Double-check everything looks OK before confirming."
    },
    {
        pageon: `
        <div class="thanks">
            <img src="./assets/images/icon-thank-you.svg" alt="">
            <p class="thank--you">Thank you!</p>
            <p class="thank--desc">Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.</p>
        </div>
        `
    }
]

$("form #form--desc").after(pages[0].pageon)

let cost = [[9, 12, 15], [90, 120, 150]]

let plan = [
    {   
        id:0,
        planName:"Arcade",
        price: [9, 90]
    },
    {
        id:1,
        planName:"Advanced",
        price: [12, 120]
    },
    {
        id:2,
        planName:"Pro",
        price: [15, 150]
    }]

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
            choosePlan(pages[1].value[0].id)
            break;
        case 3:
            console.log("this is page three")
            $(".add--ons .online--service .addon--cost").text(`+$${pages[1].value[1]?pages[2].value[0].price[0]+"/mo":pages[2].value[0].price[1]+"/yr"}`)
            $(".add--ons .larger--storage .addon--cost").text(`+$${pages[1].value[1]?pages[2].value[1].price[0]+"/mo":pages[2].value[1].price[1]+"/yr"}`)
            $(".add--ons .custom--profile .addon--cost").text(`+$${pages[1].value[1]?pages[2].value[2].price[0]+"/mo":pages[2].value[2].price[1]+"/yr"}`)
            if(pages[2].value[0].chose)choseAddon(0, "e");
            if(pages[2].value[1].chose)choseAddon(1, "e");
            if(pages[2].value[2].chose)choseAddon(2, "e");
            break;
        case 4:
            let sum = 0;
            console.log("this is page four")
            $('.summary .choice--list .type--name').text(`${pages[1].value[0].planName} ${pages[1].value[1]?"(Monthly)":"(Yearly)"}`)
            $('.summary .choice--list .cost').text(`$${pages[1].value[1]? pages[1].value[0].price[0]+"/mo":pages[1].value[0].price[1]+"/yr"}`)
            let list = pages[2].value.filter((val)=>val.chose==true)
                        .map(each=>{
                            sum+=each.price[pages[1].value[1]?0:1]
                            return `
                            <div class="choice--list">
                                <p class="addon--service">${each.addonName}</p>
                                <p class="cost">$${pages[1].value[1]? each.price[0]+"/mo":each.price[1]+"/yr"}</p>
                            </div>
                        `})
            $(".summary .choice--preview").append(list)
            console.log(list)
            $(".summary .total--name").text(`Total ${pages[1].value[1]?"(per month)":"(per year)"}`)
            sum += pages[1].value[1]?pages[1].value[0].price[0]:pages[1].value[0].price[1]
            console.log(sum)
            $('.summary .total .cost').text(`$${pages[1].value[1]? sum+"/mo":sum+"/yr"}`)

            break;
    }

}

function pageChange(e){
    let val1 = $(`.personal #name`).val();
    let val2 = $(`.personal #email`).val();
    let val3 = $(`.personal #phone--number`).val();
    if(page == 1){
        if(!validate("name", val1)) return
        if(!validate("email", val2)) return
        if(!validate("phone--number", val3)) return
    }
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
        $("#root .plan--info .ad").remove()
        $("#root .arcade .cost").text(`$${cost[0][0]}/mo`)
        $("#root .advanced .cost").text(`$${cost[0][1]}/mo`)
        $("#root .pro .cost").text(`$${cost[0][2]}/mo`)
        $(".toggle .toggleBar").removeClass("left")
        $("#root .monYear p").removeClass("choseTime")
    } else {
        $("#root .plan--info").append('<p class="ad">2 months free</p>')
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

    pages[1].value[0] = plan[id]
    console.log(pages[1])
}

function choseAddon(id, id2){
    if(!id2){pages[2].value[id].chose = !pages[2].value[id].chose}
    $(`#root>div:nth-of-type(${id+1}) input`).attr("checked",pages[2].value[id].chose)
    $(`#root>div:nth-of-type(${id+1})`).css("border-color", pages[2].value[id].chose?"hsl(243, 100%, 62%)":"hsl(229, 24%, 87%)")
    $(`#root>div:nth-of-type(${id+1})`).css("background-color", pages[2].value[id].chose?"hsl(217, 100%, 97%)":"transparent")
}

function handleChange(type){
    let val = $(`.personal #${type}`).val();
    if(!validate(type, val))return

    console.log($(`.personal #${type}`).val())
    switch(type){
        case "name":
            pages[0].value.username = val
        case "email":
            pages[0].value.email = val
        case "phone--number":
            pages[0].value.phoneNumber = val
    }
}

function handleSubmit(){
    $("form").remove();
    $(".form").append(pages[4].pageon)
}

function validate(type, val){
    switch(type){
        case "name":
            let regex = /^[a-z]+\s[a-z]+$/i; 
            if(!regex.test(val)){
                $(`.personal #${type}`).css("border-color","hsl(354, 84%, 57%)")
                if(val==""){
                    $(`.personal .name--error`).text("This field is required!")
                    return false
                }
                console.log("It is not valid")
                $(`.personal .name--error`).text("Use a valid name format! (Full-name)")
                return false
            } else {
                $(`.personal #${type}`).css("border-color","hsl(231, 11%, 63%)")
                $(`.personal #${type}`).css("color","hsl(213, 96%, 18%)")
                $(`.personal .name--error`).text("")
                console.log("It is valid")
                return true
            }
        case "email":
            let regex2 = /^[a-z0-9]+@[a-z]+.[a-z]{2,4}$/i;
            if(!regex2.test(val)){
                $(`.personal #${type}`).css("border-color","hsl(354, 84%, 57%)")
                if(val==""){
                    $(`.personal .email--error`).text("This field is required!")
                    return false
                }
                console.log("It is not valid")
                $(`.personal .email--error`).text("Use a valid email format! (abc@example.com)")
                return false
            } else {
                $(`.personal #${type}`).css("border-color","hsl(231, 11%, 63%)")
                $(`.personal #${type}`).css("color","hsl(213, 96%, 18%)")
                $(`.personal .email--error`).text("")
                console.log("It is valid")
                return true
            }
        case "phone--number":
            let regex3 = /^[+][0-9]{1,3}-[0-9]{9}$/i;
            if(!regex3.test(val)){
                $(`.personal #${type}`).css("border-color","hsl(354, 84%, 57%)")
                if(val==""){
                    $(`.personal .phone--error`).text("This field is required!")
                    return false
                }
                console.log("It is not valid")
                $(`.personal .phone--error`).text("Use a valid phone number format! (+251-931213930)")
                return false
            } else {
                $(`.personal #${type}`).css("border-color","hsl(231, 11%, 63%)")
                $(`.personal #${type}`).css("color","hsl(213, 96%, 18%)")
                $(`.personal .phone--error`).text("")
                console.log("It is valid")
                return true
            }
    }   
}