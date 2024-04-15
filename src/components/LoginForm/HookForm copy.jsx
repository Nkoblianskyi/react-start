
import { useForm } from "react-hook-form";


const HookForm = () => {
    const {
        handleSubmit,
        register,
        } 
        = useForm(
            {defaultValues: {
                login: 'Login',
            },}
    );
    
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>Login</span>
                <input type="text"{...register("login", { required: true })}/>
            </label>
            <label>
                <span>Password</span>
                <input type="password" {...register("password", { required: true })}/>
            </label>

            <button type='submit'>login</button>
        </form>
    );
};

export default HookForm;