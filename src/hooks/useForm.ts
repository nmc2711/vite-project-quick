
import { useReducer, ChangeEvent } from 'react';

function useForm<T>(initialState: T) {
  const reducer = (state: T, payload: Partial<any>) => {
    if (payload.reset === 'clear') {
      return initialState;

    } else {
      return {
        ...state,
        [payload.field]: payload.value,
      };
    }
  };

  const [state, dispatchForm] = useReducer(reducer, initialState);

  const formChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    dispatchForm({ field: e.target.name, value: e.target.value });
  };

  const reset = () => {
    dispatchForm({ reset: 'clear' });
  };

  const forceUpdate = (updateList: any[]) => {
    for (let i = 0; i < updateList.length; i++) {
      dispatchForm({ field: updateList[i].target, value: updateList[i].value });
    }
  };

  return {
    state,
    reset,
    dispatchForm,
    forceUpdate,
    bind: {
      onChange: formChange,
    },
  };
}
export default useForm;
