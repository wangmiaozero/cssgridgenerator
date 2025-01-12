import { useSelector, useDispatch } from 'react-redux';
import { selectGridData } from '../store/selectors';
import { useState, useEffect, useOptimistic } from 'react';
import { startTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { 
  initialArrIndex,
  addChildren,
  removeChildren,
  updateColumnUnit,
  updateRowUnit
} from '../store/slices/gridSlice';
import "../styles/components/AppGrid.scss";

function AppGrid() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialArrIndex(''));
  }, [dispatch]);

  const [errors, setErrors] = useState({ col: [], row: [] });
  const [child, setChild] = useState({});
  
  const {
    columngap,
    rowgap,
    colArr,
    rowArr,
    columns,
    rows,
    childarea = [],
    rowTemplate,
    colTemplate,
  } = useSelector(selectGridData);

  const [optimisticChildarea, addOptimisticChildarea] = useOptimistic(
    childarea,
    (state, newChild) => [...state, newChild]
  );

  const divNum = columns * rows;

  const debounceValidateUnit = debounce((unit, i, direction) => {
    const check =
      /fr$/.test(unit) ||
      /px$/.test(unit) ||
      /%$/.test(unit) ||
      /em$/.test(unit) ||
      /rem$/.test(unit) ||
      /vw$/.test(unit) ||
      /vh$/.test(unit) ||
      /vmin$/.test(unit) ||
      /q$/.test(unit) ||
      /mm$/.test(unit) ||
      /cm$/.test(unit) ||
      /in$/.test(unit) ||
      /pt$/.test(unit) ||
      /pc$/.test(unit) ||
      /ex$/.test(unit) ||
      /ch$/.test(unit) ||
      /minmax/.test(unit) ||
      ['auto', 'min-content', 'max-content'].includes(unit) ||
      parseInt(unit, 10) === 0;

    setErrors((prev) => ({
      ...prev,
      [direction]: check
        ? prev[direction].filter((index) => index !== i)
        : [...prev[direction], i],
    }));
  }, 500);

  const validateUnit = (e, i, direction) => {
    const unit = e.target.value;
    debounceValidateUnit(unit, i, direction);
  };

  const handleBlur = (e, i, direction, updateAction) => {
    const unit = e.target.value;
    validateUnit(e, i, direction); // 验证
    dispatch(updateAction({ index: i, unit })); // 更新 Redux
  };

  const delegatedTouchPlaceChild = (ev) => {
    const target = document.elementFromPoint(
      ev.changedTouches[0].clientX,
      ev.changedTouches[0].clientY
    );
    const startend = ev.type === 'touchstart' ? 's' : 'e';
    placeChild(target.dataset.id, startend);
  };

  const placeChild = (item, startend) => {
    const newChild = {
      ...child,
      [`${startend}row`]: Math.ceil(item / columns),
      [`${startend}col`]: item - (Math.ceil(item / columns) - 1) * columns,
    };
    setChild(newChild);

    if (startend === 'e') {
      const [startRow, endRow] =
        newChild.srow <= newChild.erow
          ? [newChild.srow, newChild.erow]
          : [newChild.erow, newChild.srow];
      const [startCol, endCol] =
        newChild.scol <= newChild.ecol
          ? [newChild.scol, newChild.ecol]
          : [newChild.ecol, newChild.scol];

      const childstring = `${startRow} / ${startCol} / ${endRow + 1} / ${
        endCol + 1
      }`;

      startTransition(() => {
        addOptimisticChildarea(childstring);
      });

      dispatch(addChildren(childstring));
    }
  };

  const handleRemoveChild = (index) => {
    dispatch(removeChildren(index));
  };

  return (
    <main className="main">
      <section
        className="colunits"
        style={{
          gridTemplateColumns: colTemplate,
          gridTemplateRows: '50px',
          gridColumnGap: `${columngap}px`,
          gridRowGap: `${rowgap}px`,
        }}
      >
        {colArr.map((col, i) => (
          <div key={uuidv4()}>
            <input
              defaultValue={col.unit} // 默认值来自 Redux
              onBlur={(e) =>
                handleBlur(e, i, 'col', updateColumnUnit)
              }
              className={columns > 8 ? 'widthfull' : ''}
              aria-label="Grid Template Column Measurements"
            />
            {errors.col.includes(i) && (
              <div className="errors">Real CSS unit required</div>
            )}
          </div>
        ))}
      </section>

      <section
        className="rowunits"
        style={{
          gridTemplateColumns: '50px',
          gridTemplateRows: rowTemplate,
          gridColumnGap: `${columngap}px`,
          gridRowGap: `${rowgap}px`,
        }}
      >
        {rowArr.map((row, i) => (
          <div key={uuidv4()}>
            <input
              defaultValue={row.unit} // 默认值来自 Redux
              onBlur={(e) =>
                handleBlur(e, i, 'row', updateRowUnit)
              }
              className={rows > 8 ? 'widthfull' : ''}
              aria-label="Grid Template Row Measurements"
            />
            {errors.row.includes(i) && (
              <div className="errors">Real CSS unit required</div>
            )}
          </div>
        ))}
      </section>

      <p className="unitHint">{t("grid.unitHint")}</p>

      <div id="gridcontainer" className="gridcontainer">
        <section
          className="grid"
          style={{
            gridTemplateColumns: colTemplate,
            gridTemplateRows: rowTemplate,
            gridColumnGap: `${columngap}px`,
            gridRowGap: `${rowgap}px`,
          }}
          onTouchStart={delegatedTouchPlaceChild}
          onTouchEnd={delegatedTouchPlaceChild}
        >
          {Array.from({ length: divNum }).map((_, i) => (
            <div
              key={uuidv4()}
              className={`box box${i}`}
              data-id={i + 1}
              onMouseDown={() => placeChild(i + 1, 's')}
              onMouseUp={() => placeChild(i + 1, 'e')}
            />
          ))}
        </section>

        <section
          className="grid gridchild"
          style={{
            gridTemplateColumns: colTemplate,
            gridTemplateRows: rowTemplate,
            gridColumnGap: `${columngap}px`,
            gridRowGap: `${rowgap}px`,
          }}
        >
          {optimisticChildarea.map((child, i) => (
            <div
              key={uuidv4()}
              className={`child child${i}`}
              style={{ gridArea: child }}
            >
              <button onClick={() => handleRemoveChild(i)}>&times;</button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default AppGrid;
