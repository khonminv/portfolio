### 🍞SPC
기존 SPC 사이트를 리뉴얼 하여 React 기반으로 제작 하였으며 Javascript를 이용한 동적인 페이지를 구성 하였으며 Swiper.js를 통해 여러 이미지를 슬라이드로 구현한 반응형 웹사이트 입니다.

### ⚡Tech 
![HTML](https://img.shields.io/badge/-HTML-F05032?style=flat-square&logo=html5&logoColor=ffffff)
![CSS](https://img.shields.io/badge/-CSS-007ACC?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-dc8d2d?style=flat-square&logo=javascript&logoColor=ffffff)
![Swiper](https://img.shields.io/badge/swiper-6332F6?style=flat-square&logo=swiper&logoColor=ffffff)
![React](https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white)
![Swiper](https://img.shields.io/badge/GSAP-007ACC?style=flat-square&logo=visualstudio&logoColor=white")


### ⚡View 
| 메인 | 슬라이더 | 모바일 |
| :-: | :-: | :-: |
| <img src="public/images/spc1.PNG" width="200px" height="200px" align="top"> | <img src="public/images/spc3.PNG" width="200px" height="200px" align="top"> | <img src="public/images/spc4.PNG" width="200px" align="top"> |

## 📣Focus
* React, Redux, GSAP (GreenSock Animation Platform) 등을 활용하여 스크롤 애니메이션 및 다양한 UI구현
* 모바일 메뉴 및 페이지 내 네비게이션 구현
* CSS와 Grid 레이아웃을 활용하여 다양한 화면 크기에 최적화된 UI를 제공
* Swiper.js를 활용하여 여러 컨텐츠들을 슬라이드로 구현


### ⚡Code View 
```
//store.js
import { createStore } from 'redux';

// 초기 상태
const initialState = {
    isMobile: window.innerWidth <= 1280,
};

// 리듀서
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOBILE':
            return { ...state, isMobile: action.payload };
        default:
            return state;
    }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
```

> Redux를 활용하여 현재 브라우저가 모바일 상태인지 확인하여 UI에 변화를 주었다. <br>
초기 상태를 1280픽셀 이하로 설정 하고 리듀서가 SET_MOBILE 상태를 받아 변화 가 있다면 SET_MOBILE 상태를 저장을 한다.


<br><br>






```
//UiScript.js
import { useDispatch, useSelector } from "react-redux";

function UiScript() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile);

	//isMobile
    const handleResize = () => {
      const mobile = window.innerWidth <= 1280;
      if (mobile !== isMobile) {
        dispatch({ type: 'SET_MOBILE', payload: mobile });
        if (mobile) {
          	...
          console.log("모바일");
        } else {
			...
			console.log("pc");
        }
      }
    };
}

```
> 스토어에 변경하려는 상태를 보내는 코드이다. 스토어 안에 있는 initialState와 UiScript의 mobile 상태를 비교하여 변화가 있다면 ,dispatch를 통해 스토어에 상태 변화를 보내며 if문 안에 있는 내용을 실행한다.