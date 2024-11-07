import s from './Filter.module.css';
const Filter = ( {value, onFilter} ) => {
    return (
        <div>
            <p className={s.label}>Find contacts by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
        </div>
    )
}
export default Filter;