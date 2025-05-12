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