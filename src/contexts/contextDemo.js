import React, { useReducer, createContext } from 'react';

const DemoContext = createContext({
  demoData: null,
  fetchDemoData: (res) => {}
});

function demoReducer(state, action) {
  switch(action.type) {
    case 'FETCH_DEMO_DATA':
      return {
        ...state,
        demoData: action.payload
      };
    case 'CLEAR_DEMO_DATA':
        return {
          ...state,
          demoData: null
        };
    default:
      return state;
  }
}

function DemoDataProvider(props) {
  const [state, dispatch] = useReducer(demoReducer, { demoData: null });
  const fetchDemoData = demoData => {
    dispatch({ type: 'FETCH_DEMO_DATA', payload: demoData });
  };

  return (
    <DemoContext.Provider value={{
      demoData: state.demoData,
      fetchDemoData,
    }} {...props} />
  );
}

export { DemoContext, DemoDataProvider };

