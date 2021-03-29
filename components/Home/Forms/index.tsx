import React, { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import style from '@assets/styles/style.module.css';
import Improver from '@assets/svg/form1.svg';
import Form2 from '@assets/svg/form/form2.svg';
import Form3 from '@assets/svg/form/form3.svg';
import Form4 from '@assets/svg/form/form4.svg';
import Form5 from '@assets/svg/form/form5.svg';
import Form6 from '@assets/svg/form/form6.svg';
import Form7 from '@assets/svg/form/form7.svg';
import Form8 from '@assets/svg/form/form8.svg';
import Form10 from '@assets/svg/form/form10.svg';
import Form14 from '@assets/svg/form/form14.svg';
import Form15 from '@assets/svg/form/form15.svg';
import Form16 from '@assets/svg/form/form16.svg';
import Form18 from '@assets/svg/form/form18.svg';
import Form21 from '@assets/svg/form/form21.svg';
import cn from 'classnames';
import axios from 'axios';
import gate from '@gate/index';
import { useMutation, useQuery } from 'react-query';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    backgroundForm?: string;
    onInputFocus?: (focus: boolean) => void;
}

interface IFormInput {
    username: String;
    email: string;
    phoneNumber: number;
    service: string;
    description: string;
}
const Form: FC<Props> = ({ backgroundForm, onInputFocus }) => {
    const massageSuccess = () =>
        toast.success('😃 SUCCESS!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const massageError = () =>
        toast.error('😲 ERROR!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const { register, handleSubmit, watch, errors, reset } = useForm<IFormInput>();
    const { mutate, isLoading } = useMutation(async (data: IFormInput) => {
        try {
            const res = await gate.contactUs(data);
            res && massageSuccess();
            // console.log(JSON.stringify(res, null, 2))
        } catch (error) {
            error && massageError();
            // alert(JSON.stringify(error, null, 2))
        }
    });

    const onSubmit = (data: IFormInput, e: any) => {
        mutate(data);
        e.target.reset();
    };

    return (
        <>
            <div
                className="relative 3xl:h-90 3xl:w-120 2xl:h-110 3xl:mt-10 lg:h-100 lg:w-100 md:w-46 md:h-90 w-98 h-85  rounded-2xl"
                style={{ backgroundColor: backgroundForm }}
            >
                <div className="">
                    <div className="absolute p-5">
                        {/* form input */}
                        <div className="xs:ml-5">
                            <div className="text-white lg:mt-0 md:mt-0 sm:mt-0 -mt-3">
                                <p className="xl:text-2xl 2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xs">
                                    Bize Ulaşın
                                </p>
                                <p className="lg:text-xl md:text-xl sm:text-lg mt-1 text-xs">
                                    Merak ettiğiniz tum konular hakkında
                                </p>
                                <p className="lg:text-xl md:text-xl sm:text-lg text-xs">
                                    Bilgi alın!
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <div className="3xl:mt-5 lg:mt-4 md:mt-4 sm:mt-4 xs:mt-2 xm:mt-2">
                                    <label
                                        className="block mb-1 text-white 3xl:text-lg lg:text-xs md:text-xs text-xs "
                                        htmlFor="formGridCode_card"
                                    >
                                        AD SOYAD
                                    </label>
                                    <input
                                        name="username"
                                        ref={register({ required: true })}
                                        className={cn(
                                            style.inputScale,
                                            ` ${errors.username && 'border-b-2 border-red-500'} ${
                                                errors.username &&
                                                'placeholder-red-600 placeholder-opacity-60'
                                            } text-white text-base border-b-2 border-white  outline-none placeholder-white placeholder-opacity-40`,
                                        )}
                                        placeholder="Ad Soyad Giriniz"
                                        type="text"
                                        id="formGridCode_card"
                                        style={{ backgroundColor: backgroundForm }}
                                    />
                                </div>
                                <div className="3xl:mt-5 xs:mt-4 xm:mt-2">
                                    <label
                                        className="block mb-1 text-white 3xl:text-lg lg:text-xs md:text-xs text-xs "
                                        htmlFor="formGridCode_card"
                                    >
                                        EMAİL ADRESİ
                                    </label>
                                    <input
                                        name="email"
                                        ref={register({
                                            required: 'Enter your e-mail',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: 'Enter a valid e-mail address',
                                            },
                                        })}
                                        className={cn(
                                            style.inputScale,
                                            ` ${errors.email && 'border-b-2 border-red-500'} ${
                                                errors.email &&
                                                'placeholder-red-600 placeholder-opacity-60'
                                            } text-white 3xl:w-97 2xl:w-97 xl:w-97 lg:w-97 md:w-95 sm:w-97 w-72 text-base border-b-2 border-white  outline-none placeholder-white placeholder-opacity-40`,
                                        )}
                                        placeholder="Email Adresi Giriniz"
                                        type="text"
                                        id="formGridCode_card"
                                        style={{ backgroundColor: backgroundForm }}
                                    />
                                </div>
                                <div className="3xl:mt-5  xs:mt-2 xm:mt-2">
                                    <label
                                        className="block mb-1 text-white 3xl:text-lg lg:text-xs md:text-xs text-xs "
                                        htmlFor="formGridCode_card"
                                    >
                                        TELEFON NUMARASI
                                    </label>
                                    <input
                                        name="phoneNumber"
                                        ref={register({
                                            validate: (value) => value.length > 10,
                                        })}
                                        className={cn(
                                            style.inputScale,
                                            `${errors.phoneNumber && 'border-b-2 border-red-500'} ${
                                                errors.phoneNumber &&
                                                'placeholder-red-600 placeholder-opacity-60'
                                            } text-white 3xl:w-97 2xl:w-97 xl:w-97 lg:w-97 md:w-95 sm:w-97 w-72 text-base border-b-2 border-white  outline-none placeholder-white placeholder-opacity-40`,
                                        )}
                                        placeholder="Telefon Numarası Giriniz"
                                        type="number"
                                        id="formGridCode_card"
                                        style={{ backgroundColor: backgroundForm }}
                                    />
                                </div>
                                <div className="3xl:mt-5 xs:mt-2 xm:mt-2">
                                    <label className="block mb-1 text-white 3xl:text-lg lg:text-xs md:text-xs text-xs ">
                                        HİZMETLER
                                    </label>
                                    <select
                                        name="service"
                                        ref={register({ required: true })}
                                        className={`${
                                            errors.service && 'border-b-2 border-red-500'
                                        } ${
                                            errors.service &&
                                            'placeholder-red-600 placeholder-opacity-60'
                                        }  text-white placeholder-white placeholder-opacity-40 3xl:w-97 2xl:w-97 xl:w-97 lg:w-97 md:w-95 sm:w-97 w-72 border-white border-b-2 outline-none text-xs`}
                                        style={{ backgroundColor: backgroundForm }}
                                        placeholder="Hizmet Seçiniz"
                                    >
                                        <option className={` py-1`}></option>
                                        <option className={`py-1`}>Department</option>
                                        <option className="py-1">uygulama yazilimi</option>
                                        <option className="py-1">web yazilim</option>
                                        <option className="py-1">dijital reklam</option>
                                        <option className="py-1">seo/aso optimizasyon</option>
                                    </select>
                                </div>
                                <div className="3xl:mt-5  xs:mt-2 xm:mt-2">
                                    <label className="block mb-1 text-white 3xl:text-lg lg:text-xs md:text-xs text-xs">
                                        MESAJ
                                        <textarea
                                            onBlur={() => onInputFocus && onInputFocus(true)}
                                            onFocus={() => onInputFocus && onInputFocus(false)}
                                            name="description"
                                            ref={register({ required: true })}
                                            className={cn(
                                                style.inputScale,
                                                `${
                                                    errors.description &&
                                                    'border-b-2 border-red-500'
                                                } ${
                                                    errors.description &&
                                                    'placeholder-red-600 placeholder-opacity-60'
                                                } resize-none shadow form-textarea mt-1 block border-2 border-white rounded 3xl:w-97 2xl:w-97 xl:w-97 lg:w-97 md:w-95 sm:w-97 w-72 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-gray-50 text-sm placeholder-opacity-60`,
                                            )}
                                            placeholder="Mesajınızı Yazınız"
                                            style={{ backgroundColor: backgroundForm }}
                                        />
                                    </label>
                                </div>
                                <div className="flex justify-end absolute z-10 right-5">
                                    <input
                                        type="submit"
                                        value="Gönder"
                                        className={cn(
                                            style.btn,
                                            'bg-white rounded-full w-32 mt-3 mr-5 text-blue-400 p-1 cursor-pointer',
                                        )}
                                    />
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="lg:h-auto md:h-auto xs:h-auto h-80"></div>
                    </div>
                    {/* cadr */}
                    <div
                        className="lg:block md:block hidden absolute p-3 z-10 shadow-2xl lg:-right-16 md:-right-4 rounded-2xl 3xl:h-91 3xl:w-96 xl:h-27 lg:w-80 lg:h-85 md:w-72 md:h-27 mt-6"
                        style={{ backgroundColor: backgroundForm }}
                    >
                        <div className="mt-10 mb-16">
                            <div>
                                <Improver />
                            </div>
                            <h1 className="text-white ml-10">YAZILIM HİZMETLERİ</h1>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-white text-xl">ADRES</h1>
                            <p className="text-white">
                                Gümüşpala Mh, Manolya Sk, No:2/1A D:1 Avcılar/İstanbul
                            </p>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-white text-xl">EMAiL</h1>
                            <p className="text-white"> info@improver.com.tr</p>
                        </div>
                        <div className="mt-6">
                            <h1 className="text-white text-xl">TELEFON</h1>
                            <p className="text-white"> +90 850 840 3346</p>
                        </div>
                    </div>
                    {/* svg */}
                    <div>
                        <div className="relative">
                            <div className="z-10 absolute -right-20 mt-52 lg:block md:hidden sm:hidden hidden">
                                <Form2 className="" />
                            </div>
                            <div className="z-10 absolute -right-16 mt-16  lg:block md:hidden sm:hidden  hidden">
                                <Form8 className="opacity-30" />
                            </div>
                            <div className="z-10 absolute -right-20 mt-8 lg:block md:hidden sm:hidden  hidden">
                                <Form7 className="" />
                            </div>
                            <div className="z-10 absolute -left-20 mt-10 lg:block md:block sm:hidden  hidden">
                                <Form3 className="" />
                            </div>
                            <div className="z-10 absolute mt-72 -left-14 lg:block md:block sm:hidden  hidden">
                                <Form6 className="" />
                            </div>
                            <div className="z-10 absolute mt-16 left-28">
                                <Form7 className="" />
                            </div>
                            <div className="z-10 absolute mt-10 left-80 lg:block md:block sm:hidden  hidden">
                                <Form15 className="right-11" />
                            </div>
                            <div className="z-10 absolute mt-10 left-52">
                                <Form16 className="" />
                            </div>
                            <div className="z-10 absolute mt-44 lg:left-52 md:left-52 left-40 lg:block md:block sm:block hidden">
                                <Form18 className="" />
                            </div>
                            <div className="right-10 mt-28 z-10 absolute  lg:block md:block sm:hidden  hidden">
                                <Form10 />
                            </div>
                        </div>
                        <div className="">
                            <div className="ml-72 -bottom-5 z-10 absolute lg:block md:block sm:block hidden">
                                <Form4 />
                            </div>
                            <div className="ml-10 -bottom-0 z-10 absolute">
                                <Form5 />
                            </div>
                            <div className="lg:right-5 md:right-5 right-20 -bottom-0 z-10 absolute lg:block md:block sm:block hidden">
                                <Form14 />
                            </div>
                            <div className="left-44 -bottom-0 z-10 absolute lg:block md:block hidden">
                                <Form21 />
                            </div>
                            <div className="left-0 -bottom-0 z-10 absolute lg:block md:block sm:block hidden">
                                <Form10 />
                            </div>
                            <div className="left-2 bottom-28 z-10 absolute">
                                <Form10 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
