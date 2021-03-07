import { createAction, handleActions } from 'redux-actions';

const CHANGENUMBER = 'test/change_number'; // 대문자로 시작하는 변수에 Action에 대한 경로를 담는다. 이 경로값은 중복되지 않아야 한다. 

export const change_number = createAction(CHANGENUMBER); // 앞서 설정한 경로값의 변수를 createAction 함수의 인자로 넣는다. 이제 외부에서 접근할 수 있도록 export한다. 


const initialState = {
    num: 0
}

export default handleActions({
    [CHANGENUMBER] : (state, data) => { 
        let num = state.num;
        // 첫 번째 인자에 기존 state 데이터를 가지고 올 수 있는 값을 담는다.
        // 두 번째 인자에는 컴포넌트에서 함수를 실행할 때 전달받을 수 있는 데이터를 받는다. 
        if (data.payload.bool) {
            num += 1;
        } else {
            num -= 1;
        }

        return {
            ...state,
            num: num
        }
            // Action 작동 시 모든 state가 초기화되는 것을 방지한다. 
        
    }
}, initialState);