var typed = new Typed(".post", {
    strings: ["FRONTEND DEVELOPER",
    "BACKEND DEVELOPER"],
    typeSpeed : 100 ,
    backSpeed : 100 ,
    backDelay : 1000 ,
    loop: true
})

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')


    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }



    });


    
// smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        
        $('html,body').animate({
            scrollTop : $($(this).attr('href')).offset().top-100,
        },
        1000,
        'linear',
        );
    })

});

document.addEventListener('DOMContentLoaded', function() {
    var datetimeElement = document.getElementById('datetime');

    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    function updateDateTime() {
        var today = new Date();
        var day = days[today.getDay()];

        var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        var timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

        var formattedDate = today.toLocaleDateString('tr-TR', dateOptions);
        var formattedTime = today.toLocaleTimeString('tr-TR', timeOptions);

        datetimeElement.textContent =   '  ' + formattedDate +  '  ' +  day + ' - Saat ' + formattedTime;
    }

    setInterval(updateDateTime, 1000); // Her 1000 milisaniyede bir (1 saniye), updateDateTime fonksiyonunu çağır

    // Sayaç başlangıcında çağrılıyor
    updateDateTime();
});






var orijinalArkaPlanRengi = "#1a1a1a"; // Orijinal arka plan rengini sakla 
var yeniArkaPlanRengi = "#404040"; // Yeni arka plan rengini sakla
var buton = document.getElementById('renkDegistir'); // Buton elementini al
var arkaPlanDegisti = false; // Arka plan rengi değişti mi?

buton.addEventListener('click', function() {
    if (arkaPlanDegisti) {
        document.body.style.backgroundColor = orijinalArkaPlanRengi; // Eğer arka plan zaten değiştiyse orijinal rengi geri getir
        arkaPlanDegisti = false; // Arka plan değiştiğini işaretle
        buton.innerText = 'YENİ ARKA PLAN';
    } else {
        document.body.style.backgroundColor = yeniArkaPlanRengi; // Değişmediyse yeni rengi ayarla
        arkaPlanDegisti = true; // Arka plan değiştiğini işaretle
        buton.innerText = 'ORJİNAL ARKA PLAN';
    }
});
