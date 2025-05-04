import { useEffect, useRef } from 'react';
import AboutUsImage from '../../../assets/about-us.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from '../../common/Input';
import { useCountryCodes } from '../../../context/CountriesContext';
import SelectDropdown from '../../common/SelectDropdown';

import './contact-us.css';

const options = [
    {
        value: '1',
        label: 'Service 1',
        img: "country.flag",
        code: "countryCode",
    },
    {
        value: '2',
        label: 'Service 2',
        img: "country.flag",
        code: "countryCode",
    },
    {
        value: '3',
        label: 'Service 3',
        img: "country.flag",
        code: "countryCode",
    }
]


const schema = yup.object().shape({
    name: yup
        .string()
        .required("الاسم مطلوب"),
    phone: yup
        .string()
        .min(11, "رقم الهاتف غير صحيح")
        .matches(
            /^(?:\(?\d{1,4}\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4}$/,
            "validation.phoneNumberInvalid"),
    email: yup
        .string()
        .trim()
        .email("البريد الإلكتروني غير صحيح")
        .matches(
            /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
            "البريد الإلكتروني غير صحيح")
        .required("البريد الإلكتروني مطلوب"),
    message: yup.
        string()
        .required("الرسالة مطلوب")
        .min(10, "يجب الا تقل الرسالة عن 10 أحرف"),
    service_id: yup
        .string()
        .required("لابد من تحديد الخدمة اولا!")
});

const ContactUs = () => {
    const { countryCodes, isLoading } = useCountryCodes();
    const sectionRef = useRef(null);


    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
        defaultValues: {
            code: "+20",
            service_id: "1"
        }
    });


    const onSubmit = async (data) => {
        console.log(data)
        // const result = await dispatch(createUser(data));
        // if (result.meta.requestStatus === "fulfilled") {
        //     reset();
        //     toast.success(result.payload.message);
        //     return null;
        // } else {
        //     toast.error(result.payload.message);
        // }
    };

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Scroll بعد وقت معين لما العنصر يبقى ظاهر
                    setTimeout(() => {
                        section?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 500); // وقت التمرير بعد التقاطع
                }
            },
            {
                threshold: [0.001],
            }
        );

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);


    return (
        <section className='_fm-contact-us main_bg_color' ref={sectionRef}>
            <div className='contact-us-form-box d-flex flex-column' id="contact-us">
                <h3 className='contact-us-title'>نحن دائمًا هنا لدعمك،<br /> يسعدنا تواصلك معنا.</h3>
                <form
                    className='contact-us-form'
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='d-flex align-items-center flex-column flex-md-row justify-content-center gap-3'>
                        <Input register={register} name="name" error={errors?.name?.message} placeholder="يا هلا، ممكن نعرف اسمك؟" label="الاسم بالكامل" />
                        <Input dir="ltr" register={register} name="email" error={errors?.email?.message} placeholder="user@domain.com" label="البريد الإلكتروني" />
                    </div>
                    <div className='d-flex align-items-center flex-column flex-md-row justify-content-center gap-3'>
                        {/* {!isLoading && */}
                        <SelectDropdown
                            options={countryCodes}
                            isLoading={isLoading}
                            label="كود الدولة"
                            placeholder="code"
                            control={control}
                            name="code"
                            error={errors?.code?.message}
                            value={watch("code")}
                            formatOptionLabel={assignee => (
                                <div className="option__label__box">
                                    <img src={assignee.img} alt="user-image" className='avatar avatar-sm rounded-5' />
                                    <div className='option__label'>
                                        <span>{assignee.label}</span>
                                        ({assignee.value})
                                    </div>
                                </div>
                            )}
                        />
                        {/* } */}
                        <Input dir="ltr" register={register} name="phone" type='number' error={errors?.phone?.message} placeholder="500080009" label="رقم الجوال" />
                    </div>
                    <SelectDropdown
                        options={options}
                        label="الخدمة"
                        placeholder="اختر الخدمة"
                        control={control}
                        name="service_id"
                        error={errors?.service_id?.message}
                        value={watch("service_id")}
                    />
                    <Input register={register} type='textarea' name="message" error={errors?.message?.message} placeholder="اكتب رسالتك هنا  ^_^" label="رسالتك" />
                    <button type='submit' className='contact-us-submit-btn'>ارسل رسالتك</button>
                </form>
            </div>
            <div className='contact-us-left-boxes'>
                <div className='contact-us-box d-flex align-items-center gap-4 mb-3'>
                    <img src={AboutUsImage} alt="" />
                    <div>
                        <h5 className='contact-us-title mb-2'>من نحن؟</h5>
                        <p className='contact-us-text'>نحن منصّة إبداعية سعودية، تبتكر المحتوى وتجسّد حيوية البدايات.</p>
                    </div>
                </div>
                <div className='contact-us-box d-flex align-items-center gap-4'>
                    <img src={AboutUsImage} alt="" />
                    <div>
                        <h5 className='contact-us-title mb-2'>من نحن؟</h5>
                        <p className='contact-us-text'>نحن منصّة إبداعية سعودية، تبتكر المحتوى وتجسّد حيوية البدايات.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;