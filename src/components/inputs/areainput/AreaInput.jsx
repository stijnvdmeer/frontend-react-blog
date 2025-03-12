import "./areainput.css";

export default function AreaInput({fieldName, fieldText}) {
    return (
        <div className="areainput">
            <label htmlFor={fieldName}>{fieldText + ":"}</label>
            <textarea id={fieldName} />
        </div>
    )
}