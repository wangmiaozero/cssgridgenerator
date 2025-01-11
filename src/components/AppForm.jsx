import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/AppForm.scss';
import {
  setColumns,
  setRows,
  setColumnGap,
  setRowGap,
  resetGrid,
  adjustArr
} from '../store/slices/gridSlice';
import AppModal from './AppModal';
import AppCode from './AppCode';
import AppExplain from './AppExplain';

function AppForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [columns, setLocalColumns] = useState(5);
  const [rows, setLocalRows] = useState(5);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showExplainModal, setShowExplainModal] = useState(false);
  const { columngap, rowgap } = useSelector((state) => state.grid);

  const handleColumnsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setLocalColumns(value);
    dispatch(setColumns(value));
    dispatch(adjustArr({
      newVal: value,
      oldVal: columns,
      direction: 'colArr'
    }));
  };

  const handleRowsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setLocalRows(value);
    dispatch(setRows(value));
    dispatch(adjustArr({
      newVal: value,
      oldVal: rows,
      direction: 'rowArr'
    }));
  };

  const handleColumnGapChange = (e) => {
    dispatch(setColumnGap(parseInt(e.target.value, 10)));
  };

  const handleRowGapChange = (e) => {
    dispatch(setRowGap(parseInt(e.target.value, 10)));
  };

  const handleReset = () => {
    dispatch(resetGrid());
    setLocalColumns(5);
    setLocalRows(5);
  };

  return (
    <aside className="form">
      <div className="formGroup">
        <label htmlFor="columns">{t('form.columns')}</label>
        <input
          type="number"
          id="columns"
          value={columns}
          onChange={handleColumnsChange}
          min="1"
          max="12"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="rows">{t('form.rows')}</label>
        <input
          type="number"
          id="rows"
          value={rows}
          onChange={handleRowsChange}
          min="1"
          max="12"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="columngap">
          {t('form.columngap')}{' '}
          <span className="labelExtraInfo">{t('form.units')}</span>
        </label>
        <input
          type="number"
          id="columngap"
          value={columngap}
          onChange={handleColumnGapChange}
          min="0"
          max="50"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="rowgap">
          {t('form.rowgap')}{' '}
          <span className="labelExtraInfo">{t('form.units')}</span>
        </label>
        <input
          type="number"
          id="rowgap"
          value={rowgap}
          onChange={handleRowGapChange}
          min="0"
          max="50"
        />
      </div>
      <button onClick={() => setShowCodeModal(true)}>
        {t('form.codebutton')}
      </button>
      <button type="button" onClick={handleReset}>
        {t('form.reset')}
      </button>

      <p className="wat" onClick={() => setShowExplainModal(true)}>
        {t('form.project')}
      </p>

      {showCodeModal && (
        <AppModal onClose={() => setShowCodeModal(false)}>
          {{
            header: <h3>{t('modal.header.yourcode')}</h3>,
            body: <AppCode />
          }}
        </AppModal>
      )}

      {showExplainModal && (
        <AppModal onClose={() => setShowExplainModal(false)}>
          {{
            header: <h3>{t('modal.header.what')}</h3>,
            body: <AppExplain />
          }}
        </AppModal>
      )}
    </aside>
  );
}

export default AppForm;
