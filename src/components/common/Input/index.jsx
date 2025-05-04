const Input = ({ type = "text", name, error, register, label, placeholder, dir = "rtl" }) => {

    if (type === "textarea") return (
        <div className='input-box w-100 position-relative'>
            <label htmlFor={name}>{label}</label>
            <textarea
                id={name}
                placeholder={placeholder}
                {...register(name)}
            />
            {error && <p className='error_msg position-absolute'>{error}</p>}
        </div>
    )

    return (
        <div className='input-box w-100'>
            <label htmlFor={name}>{label}</label>
            <div className='w-100 position-relative'>
                <input
                    dir={dir}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    {...register(name)}
                />
                {error && <p className='error_msg position-absolute'>{error}</p>}
            </div>
        </div>
    );
};

export default Input;