### 🍞O'kichen
o'kichen을 리뉴얼하였으며 모바일 전용 웹 앱으로
HTML, CSS, JavaScript를 활용하여 반응형 웹 디자인과 모바일 내비게이션 기능을 제공하고 Google Maps API와 Swiper.js를 이용해 동적인 지도 표시와 슬라이더 효과 등을 구현하였습니다.


### ⚡Tech 
![HTML](https://img.shields.io/badge/-HTML-F05032?style=flat-square&logo=html5&logoColor=ffffff)
![CSS](https://img.shields.io/badge/-CSS-007ACC?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-dc8d2d?style=flat-square&logo=javascript&logoColor=ffffff)
![Swiper](https://img.shields.io/badge/swiper-6332F6?style=flat-square&logo=swiper&logoColor=ffffff)
![Googlemaps](https://img.shields.io/badge/Googlemaps-4285F4?style=flat-square&logo=googlemaps&logoColor=ffffff)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=ffffff)


### ⚡View 
| 메인 | 컨텐츠 | 구글 맵 |
| :-: | :-: | :-: |
| <img src="images/o1.PNG" width="200px" height="200px" align="top"> | <img src="images/o2.PNG" width="200px" height="200px" align="top"> | <img src="images/o3.PNG" width="200px" height="200px" align="top"> |

## 📣Focus
* HTML, CSS, JavaScript를 활용한 반응형 웹 디자인 구현
* Swiper.js를 이용한 동적인 이미지 슬라이더 구현
* Google Maps API를 활용한 지도 표시 및 마커 추가
* PAW를 활용하여 설치 가능한 웹 애플리케이션을 구현

### ⚡Code View 
```
//main slide
	let swiper = new Swiper(".main_slider", {
		...
		on: {
			init: function () {

				let current = this.realIndex + 1;
				let total = this.slides.length;

				console.log(current, total)
				document.querySelector(".main_slider .current").textContent = current;
				document.querySelector(".main_slider .total").textContent = total;

			},
			slideChangeTransitionStart: function () {
				let current = this.realIndex + 1;
				console.log(current)
				document.querySelector(".main_slider .current").textContent = current;
			}
		}
	});
 ```
> Swiper 슬라이더의 번호를 표시 하는 코드입니다. <br>
on 속성에 init을 사용 하여 슬라이더가 로드 되었을때 총 슬라이드 개수와 현재 슬라이드 번호를 받아서 숫자로 표시를 하며,
slideChangeTransitionStart를 사용 하여 슬라이드의 교체가 이루어 질 때 현재 슬라이드 번호를 갱신하여 표시 합니다.

<br>
