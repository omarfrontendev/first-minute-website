import Select from "react-select";
import './selectDropdown.css';
import { Controller } from "react-hook-form";

const SelectDropdown = ({ options, name, label, error, placeholder, control, value, formatOptionLabel, isLoading }) => {

    return (
        <div className='select__container w-100 position-relative'>
            <label className="label" htmlFor={name}>{label}</label>

            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        isLoading={isLoading}
                        isDisabled={isLoading}
                        value={options.find(option => option.value === value)}
                        placeholder={placeholder}
                        options={options}
                        onChange={e => field.onChange(e.value)}
                        classNamePrefix="my-select"
                        classNames={{
                            control: ({ isFocused }) => `my-control ${isFocused ? "focused" : ""}`,
                            option: ({ isFocused, isSelected }) =>
                                `my-option ${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`,
                        }}
                        formatOptionLabel={formatOptionLabel}
                        isSearchable
                    />
                )}
            />
            {error && <p className='error_msg position-absolute'>{error}</p>}
        </div>
    );
};

export default SelectDropdown;