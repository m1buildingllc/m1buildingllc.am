const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});



function setLanguage(lang){

    if(lang === "en"){

        document.getElementById("projectsTitle").innerHTML = "Our Latest Projects";

document.getElementById("project1Title").innerHTML = "Asphalt Paving";
document.getElementById("project2Title").innerHTML = "Landscaping";
document.getElementById("project3Title").innerHTML = "Concrete Works";

        document.getElementById("whyTitle").innerHTML = "Why Choose M1 BUILDING LLC";

document.getElementById("why1").innerHTML = "Quality Materials";
document.getElementById("why2").innerHTML = "Experienced Team";
document.getElementById("why3").innerHTML = "On-Time Delivery";
document.getElementById("why4").innerHTML = "Guaranteed Results";

        document.getElementById("servicesTitle").innerHTML = "Our Services";

document.getElementById("service1").innerHTML = "Asphalt Paving";
document.getElementById("service2").innerHTML = "Concrete Works";
document.getElementById("service3").innerHTML = "Paving Stones";
document.getElementById("service4").innerHTML = "Curbstone Installation";
document.getElementById("service5").innerHTML = "Irrigation Systems";
document.getElementById("service6").innerHTML = "Outdoor Lighting";

        document.getElementById("navHome").innerHTML = "Home";
document.getElementById("navAbout").innerHTML = "About";
document.getElementById("navServices").innerHTML = "Services";
document.getElementById("navProjects").innerHTML = "Projects";
document.getElementById("navGallery").innerHTML = "Gallery";
document.getElementById("navContact").innerHTML = "Contact";

        document.getElementById("heroTitle").innerHTML =
        "Building Quality.<br>Creating Value.";

        document.getElementById("heroText").innerHTML =
        "Professional construction, landscaping and infrastructure solutions delivered with quality, precision and reliability.";

    }

    if(lang === "hy"){

        document.getElementById("projectsTitle").innerHTML = "Մեր իրականացրած նախագծերը";

document.getElementById("project1Title").innerHTML = "Ասֆալտապատման աշխատանքներ";
document.getElementById("project2Title").innerHTML = "Բարեկարգման աշխատանքներ";
document.getElementById("project3Title").innerHTML = "Բետոնային աշխատանքներ";

        document.getElementById("whyTitle").innerHTML = "Ինչու ընտրել M1 BUILDING LLC";

document.getElementById("why1").innerHTML = "Որակյալ նյութեր";
document.getElementById("why2").innerHTML = "Փորձառու թիմ";
document.getElementById("why3").innerHTML = "Ժամանակին իրականացում";
document.getElementById("why4").innerHTML = "Երաշխավորված արդյունք";

        document.getElementById("servicesTitle").innerHTML = "Մեր ծառայությունները";

document.getElementById("service1").innerHTML = "Ասֆալտապատման աշխատանքներ";
document.getElementById("service2").innerHTML = "Բետոնային աշխատանքներ";
document.getElementById("service3").innerHTML = "Սալաքարերի տեղադրում";
document.getElementById("service4").innerHTML = "Բորդյուրների տեղադրում";
document.getElementById("service5").innerHTML = "Ոռոգման համակարգեր";
document.getElementById("service6").innerHTML = "Արտաքին լուսավորություն";

        document.getElementById("navHome").innerHTML = "Գլխավոր";
document.getElementById("navAbout").innerHTML = "Մեր մասին";
document.getElementById("navServices").innerHTML = "Ծառայություններ";
document.getElementById("navProjects").innerHTML = "Նախագծեր";
document.getElementById("navGallery").innerHTML = "Պատկերասրահ";
document.getElementById("navContact").innerHTML = "Կապ";

        document.getElementById("heroTitle").innerHTML =
        "Կառուցում ենք որակ,<br>ստեղծում արժեք։";

        document.getElementById("heroText").innerHTML =
        "Մենք իրականացնում ենք բարձրորակ շինարարական և բարեկարգման աշխատանքներ։";

    }

    if(lang === "ru"){

        document.getElementById("projectsTitle").innerHTML = "Наши проекты";

document.getElementById("project1Title").innerHTML = "Асфальтирование";
document.getElementById("project2Title").innerHTML = "Благоустройство";
document.getElementById("project3Title").innerHTML = "Бетонные работы";

        document.getElementById("whyTitle").innerHTML = "Почему выбирают M1 BUILDING LLC";

document.getElementById("why1").innerHTML = "Качественные материалы";
document.getElementById("why2").innerHTML = "Опытная команда";
document.getElementById("why3").innerHTML = "Своевременное выполнение";
document.getElementById("why4").innerHTML = "Гарантированный результат";
        document.getElementById("servicesTitle").innerHTML = "Наши услуги";

document.getElementById("service1").innerHTML = "Асфальтирование";
document.getElementById("service2").innerHTML = "Бетонные работы";
document.getElementById("service3").innerHTML = "Укладка тротуарной плитки";
document.getElementById("service4").innerHTML = "Установка бордюров";
document.getElementById("service5").innerHTML = "Системы полива";
document.getElementById("service6").innerHTML = "Наружное освещение";

        document.getElementById("navHome").innerHTML = "Главная";
document.getElementById("navAbout").innerHTML = "О нас";
document.getElementById("navServices").innerHTML = "Услуги";
document.getElementById("navProjects").innerHTML = "Проекты";
document.getElementById("navGallery").innerHTML = "Галерея";
document.getElementById("navContact").innerHTML = "Контакты";

        document.getElementById("heroTitle").innerHTML =
        "Строим качество.<br>Создаем ценность.";

        document.getElementById("heroText").innerHTML =
        "Мы выполняем строительные и благоустроительные работы высокого качества.";

    }

}

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainMenu");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.querySelectorAll("#mainMenu a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
