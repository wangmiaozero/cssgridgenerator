import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: 5,
  rows: 5,
  columngap: 0,
  rowgap: 0,
  colArr: [],
  rowArr: [],
  childarea: []
};

const createArr = (direction) =>
  Array.from({ length: direction }, () => ({ unit: "1fr" }));

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    initialArrIndex(state, action) {
      const payload = action.payload;
      if (payload !== "") {
        const queryParams = new URLSearchParams(payload);
        for (const key in state) {
          if (queryParams.has(key)) {
            const paramValue = queryParams.get(key);
            if (typeof state[key] === "number") {
              state[key] = Number(paramValue);
            } else if (typeof state[key] === "object") {
              state[key] = JSON.parse(paramValue);
            }
          }
        }
      } else {
        state.colArr = createArr(state.columns);
        state.rowArr = createArr(state.rows);
        state.colTemplate = state.colArr.map(col => col.unit).join(' ');
        state.rowTemplate = `repeat(${state.rows}, 1fr)`;
      }
    },
    adjustArr(state, action) {
      const { newVal, oldVal, direction } = action.payload;
      const newCount = Math.max(Number(newVal), 0);
      const oldCount = Math.max(Number(oldVal), 0);
      const diff = newCount - oldCount;

      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          state[direction].push({ unit: "1fr" });
        }
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          state[direction].pop();
        }
      }

      // Update template based on direction
      if (direction === 'colArr') {
        state.colTemplate = state.colArr.map(col => col.unit).join(' ');
      } else if (direction === 'rowArr') {
        state.rowTemplate = `repeat(${state.rows}, 1fr)`;
      }
    },

    updateColumnUnit(state, action) {
      const { index, unit } = action.payload;
      state.colArr[index].unit = unit;
      state.colTemplate = state.colArr.map(col => col.unit).join(' ');
    },
    updateRowUnit(state, action) {
      const { index, unit } = action.payload;
      state.rowArr[index].unit = unit;
      state.rowTemplate = state.rowArr.map(row => row.unit).join(' ');
    },
    setColArr(state, action) {
      state.colArr = action.payload;
      state.colTemplate = state.colArr.map(col => col.unit).join(' ');
    },
    setRowArr(state, action) {
      state.rowArr = action.payload;
      state.rowTemplate = state.rowArr.map(row => row.unit).join(' ');
    },
    addChildren(state, action) {
      if (!state.childarea.includes(action.payload)) {
        state.childarea.push(action.payload);
      }
    },
    removeChildren(state, action) {
      state.childarea.splice(action.payload, 1);
    },
    updateColumns(state, action) {
      state.columns = action.payload;
    },
    updateRows(state, action) {
      state.rows = action.payload;
    },
    updateColumnGap(state, action) {
      state.columngap = action.payload;
    },
    updateRowGap(state, action) {
      state.rowgap = action.payload;
    },
    resetGrid(state) {
      state.childarea = [];
    }
  }
});

export const {
  initialArrIndex,
  adjustArr,
  addChildren,
  removeChildren,
  updateColumns: setColumns,
  updateRows: setRows,
  updateColumnGap: setColumnGap,
  updateRowGap: setRowGap,
  resetGrid,
  updateColumnUnit,
  updateRowUnit
} = gridSlice.actions;

export default gridSlice.reducer;
