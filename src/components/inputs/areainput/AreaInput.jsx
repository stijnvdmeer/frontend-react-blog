import "./areainput.css";

export default function AreaInput({fieldName, fieldText, fieldValue, onChangeFunc}) {
    return (
        <div className="areainput">
            <label htmlFor={fieldName}>{fieldText + ":"}</label>
            <textarea id={fieldName} value={fieldValue} onChange={(e) => onChangeFunc(e.target.value, fieldName)}/>
        </div>
    )
}