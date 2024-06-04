import './Checkbox.scss';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className={`checkbox-custom ${checked ? 'selected' : 'unselected'}`}></span>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;