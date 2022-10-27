import { createSlice } from "@reduxjs/toolkit";
import { menuItemsType } from "../../../utils/Things";

// initial state
const initialState = {
  headerText: "Welcome to Kegeland",
};

const headerSlice = createSlice({
    name: "headerText",
    initialState: initialState,
    reducers: {
        setHeaderText: (state, {payload}) => {
            state.headerText = payload
        }
    }
})

export const patientsMenuItems: menuItemsType = {
    allpatients: 'All my patients',
    more: 'More...',
  };
  
 export const patientMenuItems: menuItemsType = {
    overview: "Overview",
    allexcersies: "All Excercises",
    femfitexcersies: "Femfit Excercises",
};

export const exerciseMenuItems: menuItemsType = {
    graph: 'Graphs',
    questionnaries: 'Questionnaries',
};

const sidePanelInitialState = {
    activePage: patientsMenuItems.allpatients,
    back: false,
    backPath: undefined
}

const sidePanelSlice = createSlice({
    name: "sidePanel",
    initialState: sidePanelInitialState,
    reducers: {
        setSidePanelProps: (state, {payload}) => {
            console.log(payload)
            state.activePage = payload.activePage
            state.back = payload.back
            state.backPath = payload.backPath
            console.log(state)
        },

        setSidePanelPath: (state, {payload}) => {
            state.activePage = payload
        },
    }
})


export const {setSidePanelPath, setSidePanelProps} = sidePanelSlice.actions
export const {setHeaderText} = headerSlice.actions
export const headerReducer = headerSlice.reducer
export const sidePanelReducer = sidePanelSlice.reducer