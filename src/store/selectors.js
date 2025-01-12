import { createSelector } from 'reselect';

const selectGrid = (state) => state.grid;

export const selectGridData = createSelector(
  [selectGrid],
  (grid) => ({
    columngap: grid.columngap,
    rowgap: grid.rowgap,
    colArr: grid.colArr,
    rowArr: grid.rowArr,
    columns: grid.columns,
    rows: grid.rows,
    childarea: grid.childarea,
    rowTemplate: grid.rowTemplate,
    colTemplate: grid.colTemplate,
  })
);
