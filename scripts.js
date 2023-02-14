let page = 1;
let mon = true;
let chosePlan;
let addons = [false, false, false] 

let pagesInfo = [
    {title:"Personal Info", subTitle:"Please provide ypur name, email address, and phone number."},
    {title:"Select your plan", subTitle:"You have the option of monthly or yearly billing."},
    {title:"Pick add-ons", subTitle:"Add-ons help enhance your gaming experience."},
    {title:"Finishing up", subTitle:"Double-check everything looks OK before confirming."}
]

let cost = [[9, 12, 15], [90, 120, 150]]

$("form").submit(function(e) {
    e.preventDefault();
});

function checkState() {
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
}

function pageChange(e){
    page +=e;

    $("form h1").text(pagesInfo[page-1].title);
    $("form>p").text(pagesInfo[page-1].subTitle);

    $(".navigation li .order").css("background-color","transparent");
    $(`.navigation li .order p`).css("color","white");
    $(`.navigation li:nth-of-type(${page}) .order`).css("background-color","hsl(206, 94%, 87%)");
    $(`.navigation li:nth-of-type(${page}) .order p`).css("color","hsl(213, 96%, 18%)");
    checkState();
}

function handleDurationChange(){
    mon = !mon;
    if(mon){
        $("#root .plan .ad").remove()
        $("#root .arcade .cost").text(`$${cost[0][0]}/mo`)
        $("#root .advanced .cost").text(`$${cost[0][1]}/mo`)
        $("#root .pro .cost").text(`$${cost[0][2]}/mo`)
    } else {
        $("#root .plan").append('<p class="ad">2 months free</p>')
        $("#root .arcade .cost").text(`$${cost[1][0]}/yr`)
        $("#root .advanced .cost").text(`$${cost[1][1]}/yr`)
        $("#root .pro .cost").text(`$${cost[1][2]}/yr`)
    }

    $(".toggle .toggleBar").toggleClass("left")
    $("#root .monYear p").toggleClass("choseTime")
    
}

function choosePlan(id){
    $(`#root .plan`).css("border-color","hsl(229, 24%, 87%)")
    $("#root .plan").css("background-color","transparent")
    $(`#root .plan:nth-of-type(${id+1})`).css("border-color","hsl(243, 100%, 62%)")
    $(`#root .plan:nth-of-type(${id+1})`).css("background-color","hsl(217, 100%, 97%)")

    chosePlan = id
}

function choseAddon(id){
    addons[id] = !addons[id]
    $(`#root>div:nth-of-type(${id+1}) input`).attr("checked",addons[id])
    $(`#root>div:nth-of-type(${id+1})`).css("border-color", addons[id]?"hsl(243, 100%, 62%)":"hsl(229, 24%, 87%)")
    $(`#root>div:nth-of-type(${id+1})`).css("background-color", addons[id]?"hsl(217, 100%, 97%)":"transparent")
}