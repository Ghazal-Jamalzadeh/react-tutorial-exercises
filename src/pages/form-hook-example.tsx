
import {SubmitHandler, useForm} from "react-hook-form";
import {PostModel} from "../model/post-model.tsx";

enum GenderEnum {
    female="female",
    male="male",
    other="other"
}

//Create Model
interface IFFormInput {
    firstName:string
    gender: GenderEnum
}

function FormHookExample() {



    const postFormHook = useForm<PostModel>();
    const {
        register  ,
        setFocus  ,
        getValues  ,
        formState: { errors  },
        handleSubmit ,
        reset ,
    } = postFormHook;

    const submitHandler: SubmitHandler<PostModel> = (data) => {
        console.log(data)
    };


    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>First Name</label>
                <input {...register("title")} />
                <label>Gender Selection</label>
                <select {...register("description")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>
        </>
    )
}

export default FormHookExample
