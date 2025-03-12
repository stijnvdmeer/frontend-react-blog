import TextInput from "../components/inputs/textinput/TextInput.jsx";
import AreaInput from "../components/inputs/areainput/AreaInput.jsx";
import {useState} from "react";
import calculateReadTime from "../helperfunctions/calculateReadTime.js";

export default function CreatePost() {
    const presetInputMap = new Map();
    presetInputMap.set("title", "");
    presetInputMap.set("subtitle", "");
    presetInputMap.set("fullname", "");
    presetInputMap.set("blogpost", "");
    presetInputMap.set("created", "");
    presetInputMap.set("comments", "");
    presetInputMap.set("reactions", "");
    presetInputMap.set("readTime", "");

    const [formData, setFormData] = useState(presetInputMap);

    function handleInputChange(value, target) {

        let newInput = new Map(formData);
        newInput.set(target, value);

        setFormData(newInput);
    }

    function handleSubmit() {
        const date = new Date();
        let newInput = new Map(formData);

        newInput.set("created", date.toISOString());
        newInput.set("comments", 0);
        newInput.set("reactions", 0);
        newInput.set("readTime", calculateReadTime(newInput.get("blogpost")));

        setFormData(newInput);

        console.log(formData)
    }

    return (
        <div>
          <h1>Post Toevoegen</h1>
            <form>
                <TextInput
                    fieldName="title"
                    fieldText="Title"
                    fieldValue={formData.get("title")}
                    onChangeFunc={handleInputChange}
                />
                <TextInput
                    fieldName="subtitle"
                    fieldText="Subtitle"
                    fieldValue={formData.get("subtitle")}
                    onChangeFunc={handleInputChange}
                />
                <TextInput
                    fieldName="fullname"
                    fieldText="First and last name"
                    fieldValue={formData.get("fullname")}
                    onChangeFunc={handleInputChange}
                />
                <AreaInput
                    fieldName="blogpost"
                    fieldText="Blogpost"
                    fieldValue={formData.get("blogpost")}
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