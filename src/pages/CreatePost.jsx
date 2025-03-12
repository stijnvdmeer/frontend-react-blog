import TextInput from "../components/inputs/textinput/TextInput.jsx";
import AreaInput from "../components/inputs/areainput/AreaInput.jsx";
import {useState} from "react";

export default function CreatePost() {
    const presetInputMap = new Map();
    presetInputMap.set("title", "");
    presetInputMap.set("subtitle", "");
    presetInputMap.set("fullname", "");
    presetInputMap.set("blogpost", "");

    const [input, setInput] = useState(presetInputMap);

    function handleInputChange(value, target) {

        let newInput = new Map(input);
        newInput.set(target, value);

        setInput(newInput);
    }

    return (
        <div>
          <h1>Post Toevoegen</h1>
            <form>
                <TextInput
                    fieldName="title"
                    fieldText="Title"
                    fieldValue={input.get("title")}
                    onChangeFunc={handleInputChange}
                />
                <TextInput
                    fieldName="subtitle"
                    fieldText="Subtitle"
                    fieldValue={input.get("subtitle")}
                    onChangeFunc={handleInputChange}
                />
                <TextInput
                    fieldName="fullname"
                    fieldText="First and last name"
                    fieldValue={input.get("fullname")}
                    onChangeFunc={handleInputChange}
                />
                <AreaInput
                    fieldName="blogpost"
                    fieldText="Blogpost"
                    fieldValue={input.get("blogpost")}
                    onChangeFunc={handleInputChange}
                />
                <input type="submit" value="Toevoegen" onClick={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }} />
            </form>
        </div>
    )
}