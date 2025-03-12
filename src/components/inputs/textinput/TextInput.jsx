import "./textinput.css";

export default function TextInput({fieldName, fieldText}) {
    return (
        <div className="textinput">
            <label htmlFor={fieldName}>{fieldText + ":"}</label>
            <input type="text" id={fieldName} />
        </div>
    )
}