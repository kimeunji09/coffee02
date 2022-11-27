
# 프로젝트 명 : EDIYA Clone coding

## 제작기간 : 3일

## 사용언어 : HTML, CSS, Javascript

## 사용기술

### 1. Swiper slider 

이디야 프로모션 버튼을 누르면 나오는 
슬라이드 영역을 swiper slider 를 사용

1-1. 이디야 프로모션 슬라이드

```javascript
/프로모션 슬라이드---------------

var swiper = new Swiper(".mySwiper", {
	navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
	},
});

### 2.  상단하단으로 가기 버튼

상단&하단가기 버튼을 이용하여 편리한 스크롤 가능

2-1.  상단하단으로 가기 버튼 영역

```javascript
$(document).ready(function() {
    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".up").offset().top
        }, 1500);
    });
    });
    
    $(document).ready(function() {
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $(".down").offset().top
        }, 1000);
    });
    });

### 3, 스크롤바 디자인 

스크롤바의 너비와 색상,길이 등을 홈페이지 디자인과 
조화롭게 리디자인

3-1) 스크롤바 디자인 영역

```css
/* 스크롤 영역 */
body::-webkit-scrollbar {
  width: 8px;  /* 스크롤바의 너비 */
}

body::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #3b7bd4; /* 스크롤바의 색상 */
  
  border-radius: 10px;
}

body::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
}



