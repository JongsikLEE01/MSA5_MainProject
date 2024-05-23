// 이미지 슬라이드
$(function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',         
        loop: true,                         
        autoplay: {                         
            delay: 4000,
            disableOnInteraction: false,        
        },
        speed: 1000,                        
        slidesPerView: 1,                   
        spaceBetween: 0,                    

        pagination: {
            el: '.swiper-pagination',
            type:   'bullets',
            clickable: true,
        },
      });
})

// 부트스트랩
window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// 날씨
// 날씨 api - fontawesome 아이콘 사용
var weatherIcon = {
    '01' : 'fa-solid fa-sun',
    '02' : 'fa-solid fa-cloud-sun',
    '03' : 'fa-solid fa-cloud',
    '04' : 'fa-solid fa-cloud-meatball',
    '09' : 'fa-solid fa-cloud-sun-rain',
    '10' : 'fa-solid fa-cloud-showers-heavy',
    '11' : 'fa-solid fa-cloud-bolt',
    '13' : 'fa-solid fa-snowflake',
    '50' : 'fa-solid fa-smog'
}

// 날씨 api
// 사용자의 위치를 가져오는 함수
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                weatherData(latitude, longitude)
            },
            error => {
                console.error('위치 정보 로드 중 에러 발생 : ', error)
            }
        )
    } else {
        console.error('해당 브라우저는 위치 정보를 가져올 수 없습니다.')
    }
}

// 페이지 로드 시 함수 실행
window.addEventListener('load', getLocation);

// api key
// 위치 정보를 바탕으로 날씨 데이터를 가져오는 함수
function weatherData(latitude, longitude) {
    const API_KEY = 'ef8952bfbab9356b5066de2f01ab56c1'
    const apiURI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;

    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        async: false,

        // 성공
        success: function(response) {
            console.log( response)

            // JSON 데이터 가져오기
            var $weather_description =  response.weather[0].description
            var $Temp = Math.floor( response.main.temp) + 'º'
            var $humidity = '습도 : ' +  response.main.humidity + ' %'
            var $wind = '바람 : ' +  response.wind.speed + ' m/s'
            var $city =  response.name
            var $cloud = '구름 : ' +  response.clouds.all + "%"
            var $temp_min = '최저 온도 : ' + Math.floor( response.main.temp_min) + 'º'
            var $temp_max = '최고 온도 : ' + Math.floor( response.main.temp_max) + 'º'
            var $Icon = ( response.weather[0].icon).substr(0,2)
            
            console.log($Icon)
            var iconClass = weatherIcon[$Icon];
            console.log(iconClass)

            // 가져온 데이터 화면에 출력
            $('.weather_icon').html('<i class="' + iconClass + '"></i>');
            $('.weather_description').text($weather_description);
            $('.current_temp').text($Temp)
            $('.humidity').text($humidity)
            $('.wind').text($wind)
            $('.city').text($city)
            $('.cloud').text($cloud)
            $('.temp_min').text($temp_min)
            $('.temp_max').text($temp_max)
        },
        // 실패
        error: function(error) {
            console.error('날씨 데이터 로드 중 오류 발생 :', error)
        }
    })
}

// 페이지 로드 시 사용자의 위치 기반으로 날씨 데이터 가져오기
$(document).ready(function() {
    getLocation();
})




// 버튼 박스
function showService(option) {
    // 모든 출력 요소를 숨김
    document.querySelectorAll('.output').forEach(function(el) {
        el.style.display = 'none';
    });
    // 해당하는 출력 요소를 표시
    document.getElementById('output' + option.charAt(option.length - 1)).style.display = 'block';
}
