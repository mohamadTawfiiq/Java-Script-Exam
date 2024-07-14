// /////////////////////////////////////// open and Close Navbar /////////////////////////////////////////////////////////////////

$(".openClose").on('click', () => {

    if ($(".openClose").hasClass('fa-align-justify')) {

        AnimationOfH3OfNan()

        $(".openClose").removeClass('fa-align-justify').addClass('fa-x');
        $('.Mynav').animate({ left: "0" }, 700);
    }
    else {
        $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
        $('.Mynav').animate({ left: "-22%" }, 700);

        HideH3OfNav()
    }

});

function AnimationOfH3OfNan() {

    for (let i = 0; i < 5; i++) {
        $(".Animaat").eq(i).animate({
            top: "0px"
        }, (i + 10) * 70)

    }

};

function HideH3OfNav() {

    for (let i = 0; i < 5; i++) {
        $(".Animaat").eq(i).animate({
            top: "350px"
        }, 800)

    }

};

function closeX() {

    $('.Details .fa-x').on('click', () => {
        $('.Details').addClass('d-none')
        $('.SearchSec').removeClass('d-none')

    })
};

function CloseSections() {
    $('.Details').addClass('d-none')
    $('.SearchSec').removeClass('d-none')
};
/********************************************************************************************************************** */

///////////////////////////////////////////////// Default Meals  /////////////////////////////////////////////////////////
(async function DefaultMeals() {

    $(".loading").removeClass('d-none');



    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);

    let finalRes = await res.json();

    allMails = finalRes.meals;

    // console.log(allMails);


    $(".loading").addClass('d-none');
    $("body").removeClass('overflow-hidden');

    DisplayAllMeals(allMails);

})();


function DisplayAllMeals(allMails) {

    let mailBox = '';

    for (const mail of allMails) {
        mailBox += `<div  MealId="${mail.idMeal}"  class=" My-Meal col-lg-3 col-md-6">
        <div class="inner position-relative rounded overflow-hidden">
          <div>
            <img class="w-100" src="${mail.strMealThumb}" alt="">
          </div>
          <div class="layer position-absolute start-0 end-0 px-2 d-flex align-items-center" ">
            <h2 ">${mail.strMeal}</h2>
          </div>
        </div>

      </div>`

    }


    $('#MainMeals').html(mailBox);

    showDetails();

};
/********************************************************************************************************************** */

///////////////////////////////////////////////// display Categories ///////////////////////////////////////////////////////////////
$('#categories').on('click', function () {

    CloseSections();

    $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
    $('.Mynav').animate({ left: "-22%" }, 700);
    HideH3OfNav()

    $('.MainSecForMeals').removeClass('d-none');
    $('.SearchedCon').addClass('d-none');

    if ($('.ContactSec').hasClass('d-none')) { }
    else { $('.ContactSec').addClass('d-none') }

    (async function () {

        $(".loading").removeClass('d-none');

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

        let finalRes = await res.json();

        allCategre = finalRes.categories;

        // console.log(allMails);

        displayCategories(allCategre);

        $(".loading").addClass('d-none');

    })();

});

function displayCategories(allCategre) {

    let CategoriesBoxx = '';

    for (const cat of allCategre) {
        CategoriesBoxx += `<div Cat-Id="${cat.strCategory}" class="col-lg-3 col-md-6 CategoriesSec">
        <div class="inner position-relative rounded overflow-hidden">
          <div>
            <img class="w-100" src="${cat.strCategoryThumb}" alt="">
          </div>
          <div class="layer position-absolute start-0 end-0 py-4 px-2 text-center   ">
            <h2>${cat.strCategory}</h2>
            <p>${cat.strCategoryDescription.split(" ").slice(0, 15).join(" ")}</p>
          </div>
        </div>

      </div>`

    }


    $('#MainMeals').html(CategoriesBoxx);
    showAllCategre();


};
/********************************************************************************************************************** */


// ///////////////////////////////////////////////// display area ////////////////////////////////////////////////////////////
$('#area').on('click', function () {

    CloseSections();

    $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
    $('.Mynav').animate({ left: "-22%" }, 700);
    HideH3OfNav()

    $('.MainSecForMeals').removeClass('d-none');
    $('.SearchedCon').addClass('d-none');

    if ($('.ContactSec').hasClass('d-none')) { }
    else { $('.ContactSec').addClass('d-none') }

    (async function () {

        $(".loading").removeClass('d-none');

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);

        let finalRes = await res.json();

        allarray = finalRes.meals;

        // console.log(allMails);


        displayarea(allarray)

        $(".loading").addClass('d-none');

    })();

});

function displayarea(allarray) {

    let areaBox = '';

    for (const area of allarray) {
        areaBox += `<div Area-Id="${area.strArea}" class="col-lg-3 col-md-6 AreaSec">
        <div class="inner d-flex justify-content-center align-items-center flex-column text-white">

          <i class="fa-solid fa-house-laptop fa-4x"></i>

          <h2>${area.strArea}</h2>

        </div>

      </div>`
    }

    $('#MainMeals').html(areaBox);

    showAllArea()

};
/********************************************************************************************************************** */


// //////////////////////////////////////////////// display Ingrediensts ///////////////////////////////////////////////////////////////////
$('#ingrediensts').on('click', function () {

    CloseSections();

    $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
    $('.Mynav').animate({ left: "-22%" }, 700);
    HideH3OfNav()

    $('.MainSecForMeals').removeClass('d-none');
    $('.SearchedCon').addClass('d-none');

    if ($('.ContactSec').hasClass('d-none')) { }
    else { $('.ContactSec').addClass('d-none') }

    (async function () {

        $(".loading").removeClass('d-none');

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);

        let finalRes = await res.json();

        allingrediensts = finalRes.meals;

        // console.log(allMails);

        displayIngrediensts(allingrediensts)

        $(".loading").addClass('d-none');

    })();

});

function displayIngrediensts(allingrediensts) {

    let ingredienstsBox = '';

    for (const ingrediensts of allingrediensts) {
        ingredienstsBox += `<div Ingredient-Id="${ingrediensts.strIngredient}"   class="col-lg-3 col-md-6  IngrediendSec" >
          
          <div class="inner text-center text-white">
  
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h2>${ingrediensts.strIngredient}</h2>
              <p>${ingrediensts.strDescription ? ingrediensts.strDescription.split(' ').slice(0, 20).join(" ") : `There Is Not have a Description`}</p>
  
          </div>

        </div>`

    }

    $('#MainMeals').html(ingredienstsBox);

    showAllIngrediensts();

};
/********************************************************************************************************************** */


// //////////////////////////////////////////////////// show All Details//////////////////////////////////////////////////////////////
function showDetails() {
    let allCards = $('.My-Meal')

    for (const card of allCards) {

        let idofMeal = $(card).attr('MealId');

        $(card).on('click', function () {
            $('.SearchSec').addClass('d-none');
            $('.Details').removeClass('d-none');

            (async function GetDetailsForMeal() {

                $(".loading").removeClass('d-none');

                let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idofMeal}`);
                let response = await meal.json();

                let infoo = response.meals[0]

                cartoonaLi = ``;

                for (let i = 1; i <= 20; i++) {

                    let addres = infoo[`strIngredient${i}`];
                    let det = infoo[`strMeasure${i}`];

                    if (addres != "" && det != "") {

                        cartoonaLi += `
                        
                        <li class="bg-info-subtle text-black rounded m-2 p-2">${det} ${addres}</li>
    
                        `
                    }
                    else {
                        break;
                    }

                }

                DisplayAllMealsbyid(infoo)

                $(".loading").addClass('d-none');

            })();


        })

    }
};

function DisplayAllMealsbyid(Meal) {
    let BoxxOfFilterdMeal = `
       <div class="container Details  position-relative">
       <i class="fa-solid fa-x fa-2x position-absolute text-white"></i>
       <div class="row py-5 g-4 text-white ">
        <div class="col-md-4">
          <img class="w-100 rounded-3" src="${Meal.strMealThumb}" alt="">
          <h2>${Meal.strMeal}</h2>
        </div>
        <div class="col-md-8">
          <h2>Instructions</h2>
          <p>${Meal.strInstructions}</p>
          <h3><span class="fw-bolder">Area : </span>${Meal.strArea}</h3>
          <h3><span class="fw-bolder">Category : </span>${Meal.strCategory}</h3>
          <h3>Recipes :</h3>
          <ul class="my-ul list-unstyled d-flex g-3 flex-wrap">${cartoonaLi}</ul>

          <h3>Tags :</h3>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
  
            <li class="bg-info rounded text-black fw-semibold m-2 p-2">${Meal.strTags}</li>
          </ul>
  
          <a target="_blank" href="${Meal.strSource}" class="btn btn-success me-2">Source</a>
          <a target="_blank" href="${Meal.strYoutube}" class="btn btn-danger">Youtube</a>
        </div>
      </div>
    </div>`

    $('.DetailsSec').html(BoxxOfFilterdMeal);

    closeX()
};
/********************************************************************************************************************** */


// ///////////////////////////////////////////////// show All Categre ////////////////////////////////////////////////////
function showAllCategre() {
    let allCategre = $('.CategoriesSec');

    for (const cate of allCategre) {

        let nameCate = $(cate).attr('Cat-Id');

        console.log(nameCate);

        $(cate).on('click', function () {

            (async function () {

                $(".loading").removeClass('d-none');

                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCate}`);

                let finalRes = await res.json();

                allcatbyname = finalRes.meals;

                DisplayAllMeals(allcatbyname)

                $(".loading").addClass('d-none');

            })();
        })

    }

};
/********************************************************************************************************************** */


// ///////////////////////////////////////////////// show All Area ////////////////////////////////////////////////////
function showAllArea() {

    let allarray = $('.AreaSec');

    for (const aryea of allarray) {

        let AreaName = $(aryea).attr('Area-Id');

        // console.log(AreaName);

        $(aryea).on('click', function () {

            (async function () {
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaName}`);

                let finalRes = await res.json();

                AllArea = finalRes.meals;

                DisplayAllMeals(AllArea)()

            })();
        })

    }

};
/********************************************************************************************************************** */

// //////////////////////////////////////////////// show All Ingrediensts /////////////////////////////////////////////////////
function showAllIngrediensts() {

    let allarray = $('.IngrediendSec');

    for (const aryea of allarray) {

        let IngredientName = $(aryea).attr('Ingredient-Id');

        // console.log(IngredientName);

        $(aryea).on('click', function () {

            (async function () {

                $(".loading").removeClass('d-none');

                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientName}`);

                let finalRes = await res.json();

                allIngredienst = finalRes.meals;

                DisplayAllMeals(allIngredienst)

                $(".loading").addClass('d-none');

            })();
        })

    }

};
/********************************************************************************************************************** */


// ////////////////////////////////      ////// Search By (Name and F-litter) //////////////////////////////////////////
$('#Search').on('click', () => {

    CloseSections();

    $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
    $('.Mynav').animate({ left: "-22%" }, 700);
    HideH3OfNav()

    $('.SearchedCon').removeClass('d-none');
    $('.MainSecForMeals').addClass('d-none');

    if ($('.ContactSec').hasClass('d-none')) { }
    else { $('.ContactSec').addClass('d-none') }

    $('#InputForSearchByName').on('input', () => {

        let InputValue = $('#InputForSearchByName').val();

        SearchedMealsByName(InputValue)

        if (InputValue == '') {
            $('.MainSecForMeals').addClass('d-none');

            InputValue = 'a'

        } else {
            $('.MainSecForMeals').removeClass('d-none');

        }

    });

    $('#InputForSearchByLitter').on('input', () => {

        let InputValue = $('#InputForSearchByLitter').val();

        SearchedMealsByLetter(InputValue)

        if (InputValue == '') {
            $('.MainSecForMeals').addClass('d-none');
            InputValue = 'a'

        } else {
            $('.MainSecForMeals').removeClass('d-none');

        }

    });
});

async function SearchedMealsByName(InputValue) {

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${InputValue}`);

    let finalRes = await res.json();

    allMails = finalRes.meals;

    DisplayAllMeals(allMails);

};

async function SearchedMealsByLetter(InputValue) {

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${InputValue}`);

    let finalRes = await res.json();

    allMails = finalRes.meals;

    DisplayAllMeals(allMails);

};
/********************************************************************************************************************** */


// //////////////////////////////////////////// Contact Section ////////////////////////////////////////////////////////
$('#Contact').on('click', () => {

    $('.MainSecForMeals').addClass('d-none');
    $('.ContactSec').removeClass('d-none');

    $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
    $('.Mynav').animate({ left: "-22%" }, 700);


    if ($(".SearchedCon").hasClass('d-none')) { }
    else { $('.SearchedCon ').addClass('d-none'); }

    CloseSections()

});



// ********************************  Validate Name **********************************************************

function ValidationName(NameInputvalue) {

    let nameRegex = /^[a-z]{3,30}$/mig;

    return nameRegex.test(NameInputvalue)

};

$('#nameInput').on('input', () => {

    let NameInputvalue = $('#nameInput').val();

    if (ValidationName(NameInputvalue)) {

        if ($("#wrongName").hasClass('d-none')) { }

        else { $("#wrongName").addClass('d-none') }
        $('#nameInput').css({color : "black" , 'background-color': 'rgb(124, 245, 130)'})

    }

    else {
        $("#wrongName").removeClass('d-none');
        $('#nameInput').css({color : "red", 'background-color': 'rgb(238, 164, 155)'})
    }

});

// ******************************** End Validate Name **********************************************************

// ********************************  Validate Email ************************************************************

function ValidationEmai(emailInputvalue) {

    let emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

    return emailRegex.test(emailInputvalue)

};

$('#emailInput').on('input', () => {

    let emailInputvalue = $('#emailInput').val();

    if (ValidationEmai(emailInputvalue)) {

        if ($("#wrongEmail").hasClass('d-none')) { }

        else { $("#wrongEmail").addClass('d-none') }
        $('#emailInput').css({color : "black" , 'background-color': 'rgb(124, 245, 130)'})

    }
    else {
        $("#wrongEmail").removeClass('d-none')
        $('#emailInput').css({color : "red", 'background-color': 'rgb(238, 164, 155)'})

    }


});

// ******************************** End Validate Email **********************************************************

// ********************************  Validate Password *************************************************************

function ValidationPasswoed(passwordInputvalue) {

    var passRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]?).{6,})\S$/;

    return passRegex.test(passwordInputvalue)

};

$('#passwordInput').on('input', () => {

    let passwordInputvalue = $('#passwordInput').val();

    if (ValidationPasswoed(passwordInputvalue)) {

        if ($("#wrongPassword").hasClass('d-none')) { }

        else { $("#wrongPassword").addClass('d-none') }
        $('#passwordInput').css({color : "black" , 'background-color': 'rgb(124, 245, 130)'})

    }
    else {
        $("#wrongPassword").removeClass('d-none')
        $('#passwordInput').css({color : "red", 'background-color': 'rgb(238, 164, 155)'})

    }


});

// ******************************** End Validate Password **********************************************************

// ********************************  Validate Phone **********************************************************

function ValidationPhone(PhoneInputvalue) {

    var PhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    return PhoneRegex.test(PhoneInputvalue)

};

$('#PhoneInput').on('input', () => {

    PhoneInputvalue = $('#PhoneInput').val();

    if (ValidationPhone(PhoneInputvalue)) {

        if ($("#wrongPhone").hasClass('d-none')) { }

        else { $("#wrongPhone").addClass('d-none') }
        $('#PhoneInput').css({color : "black" , 'background-color': 'rgb(124, 245, 130)'})

    }
    else {
        $("#wrongPhone").removeClass('d-none')
        $('#PhoneInput').css({color : "red", 'background-color': 'rgb(238, 164, 155)'})

    }

});

// ******************************** End Validate Phone **********************************************************

// ********************************  Validate Age **********************************************************

function ValidationAge(ageInputvalue) {

    var AgeRegex = /^([1-9][0-9]?)$/;

    return AgeRegex.test(ageInputvalue)

};

$('#ageInput').on('input', () => {

    let ageInputvalue = $('#ageInput').val();

    if (ValidationAge(ageInputvalue)) {

        if ($("#wrongAge").hasClass('d-none')) { }

        else { $("#wrongAge").addClass('d-none') }
        $('#ageInput').css({color : "black" , 'background-color': 'rgb(124, 245, 130)'})

    }
    else {
        $("#wrongAge").removeClass('d-none')
        $('#ageInput').css({color : "red", 'background-color': 'rgb(238, 164, 155)'})


    }

});

// ******************************** End Validate Age **********************************************************

// ********************************  Validate Repassword **********************************************************

$('#rePasswordInput').on('input', () => {

    let passwordInputvalue = $('#passwordInput').val();
    let rePasswordInputvalue = $('#rePasswordInput').val();

    if (rePasswordInputvalue == passwordInputvalue) {

        if ($("#wrongrePassword").hasClass('d-none')) { }

        else { $("#wrongrePassword").addClass('d-none') }
        $('#rePasswordInput').css({color : "black" , 'background-color': 'rgb(124, 245, 130)'})


    }
    else {
        $("#wrongrePassword").removeClass('d-none')
        $('#rePasswordInput').css({color : "red", 'background-color': 'rgb(238, 164, 155)'})

    }

});

// ******************************** End Validate Repassword **********************************************************

// ******************************** Enable The Submit btn **********************************************************

$("input").on('input', () => {

    let NameInputvalue = $('#nameInput').val();
    let emailInputvalue = $('#emailInput').val();
    let PhoneInputvalue = $('#PhoneInput').val();
    let ageInputvalue = $('#ageInput').val();
    let passwordInputvalue = $('#passwordInput').val();
    let rePasswordInputvalue = $('#rePasswordInput').val();


    if (ValidationName(NameInputvalue) &&
        ValidationEmai(emailInputvalue) &&
        ValidationPasswoed(passwordInputvalue) &&
        ValidationPhone(PhoneInputvalue) &&
        ValidationAge(ageInputvalue) &&
        rePasswordInputvalue == passwordInputvalue) {

        $("#SubmitBtn button").removeClass('disabled btn-outline-danger').addClass('btn-outline-success');

        // console.log('sa7777777777');

    }
    else {
        if($("#SubmitBtn button").hasClass('disabled')){}
        else{ $("#SubmitBtn button").removeClass('btn-outline-success').addClass('disabled btn-outline-danger');  }
        // console.log('8alttttttt');
    }

}

)

// ******************************** End Enable The Submit btn **********************************************************




// let NameInputvalue = $('#nameInput').val();
// let emailInputvalue = $('#emailInput').val();
// let PhoneInputvalue = $('#PhoneInput').val();
// let ageInputvalue = $('#ageInput').val();
// let passwordInputvalue = $('#passwordInput').val();
// let rePasswordInputvalue = $('#rePasswordInput').val();



// let NameTrue = false;
// let EmailTrue = false;
// let PhoneTrue = false;
// let AgeTrue = false;
// let PassTrue = false;
// let RePassTrue = false;




// console.log(NameTrue,
//     EmailTrue,
//     PhoneTrue,
//     AgeTrue,
//     PassTrue,
//     RePassTrue

// );


























