import "./textinput.css";

export default function TextInput({fieldName, fieldText, fieldValue, onChangeFunc}) {

    return (
        <div className="textinput">
            <label htmlFor={fieldName}>{fieldText + ":"}</label>
            <input type="text" id={fieldName} value={fieldValue} onChange={(e) => onChangeFunc(e.target.value, fieldName)} />
        </div>
    )
}