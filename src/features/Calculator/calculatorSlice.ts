import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  calc: number;
}

const initialState: CalculatorState = {
  calc: 3,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    multiply3: (state, action: PayloadAction<number>) => {
      state.calc = action.payload * 3;
    },
    divide5: (state, action: PayloadAction<number>) => {
      state.calc = action.payload / 5;
    },
  },
});

// Action creators are generated for each case reducer function
export const { multiply3, divide5 } = calculatorSlice.actions;

export default calculatorSlice.reducer;
