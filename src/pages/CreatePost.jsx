import TextInput from "../components/inputs/textinput/TextInput.jsx";
import AreaInput from "../components/inputs/areainput/AreaInput.jsx";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

import calculateReadTime from "../helperfunctions/calculateReadTime.js";

export default function CreatePost({data, changeDataFunction}) {
    const presetInputMap = new Map();
    presetInputMap.set("title", "");
    presetInputMap.set("subtitle", "");
    presetInputMap.set("fullname", "");
    presetInputMap.set("blogpost", "");

    const nav = useNavigate();
    const [formData, setFormData] = useState(presetInputMap);


    function handleInputChange(value, target) {

        let newInput = new Map(formData);
        newInput.set(target, value);

        setFormData(newInput);
    }

    function handleSubmit() {
        const date = new Date();

        setFormData(formData.set("created", date.toISOString()));
        setFormData(formData.set("readTime", calculateReadTime(formData.get("blogpost"))));
        setFormData(formData.set("comments", 0));
        setFormData(formData.set("shares", 0));

        console.log(formData);

        const newData = data;
        newData.push({id: 18,
            title: formData.get("title"),
            subtitle: formData.get("subtitle"),
            content: formData.get("blogpost") ,
            created: formData.get("created"),
            author: formData.get("fullname"),
            readTime: formData.get("readTime"),
            comments: formData.get("comments"),
            shares: formData.get("shares"), });

        changeDataFunction(newData);

        nav("/posts");
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