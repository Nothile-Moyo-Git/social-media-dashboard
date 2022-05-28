import { useState } from "react";

const Header = (props) => {

    const [isChecked, setIsChecked] = useState(props.themeColor === 'dark');

    const toggleDarkMode = () => {

        if(props.themeColor === 'light'){
            props.setThemeColor('dark');
            setIsChecked(true);
        }else{
            props.setThemeColor('light');
            setIsChecked(false);
        }

    }

    return(
        <header className="bg-very-pale-blue dark:bg-very-dark-blue-top rounded-b-[14px] pb-[5rem] sm:pb-[8rem]">
            <section className="max-w-7xl m-auto p-4 flex justify-between flex-col sm:flex-row gap-4">

                <div>
                    <h2 className="text-dark-desaturated-blue dark:text-white text-xl font-bold">Social Media Dashboard</h2>
                    <strong className="dark:text-desaturated-blue text-dark-grayish-blue">{ `Total Followers: ${'23,004'}` }</strong>
                </div>

                <hr className="sm:hidden my-4 border-dark-grayish-blue dark:border-desaturated-blue"/>

                <div className="flex flex-row justify-between items-center pb-5 sm:pb-0">
                    <strong className="dark:text-desaturated-blue text-dark-grayish-blue mr-2 text-lg">Dark Mode</strong>
                    <label className="relative inline-block w-15 h-7 ml-2">
                        <input className="opacity-0 w-0 h-0" onChange={toggleDarkMode} checked={isChecked} type="checkbox"/>
                        <span className={`
                        min-w-[3.75rem] absolute cursor-pointer inset-0 rounded-[34px] ${ isChecked ? 'bg-gradient-to-r from-dark-theme-blue to-dark-theme-green' : 'bg-gradient-to-r from-dark-grayish-blue to-dark-grayish-blue' }
                        before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:left-1 before:bottom-1 before:bg-white before:rounded-[50%]  ${ isChecked ? 'before:translate-x-0' : 'before:translate-x-8' } before:transition before:ease-linear before:duration-50
                        `}></span>
                    </label>
                </div>

            </section>
        </header>
    )
}

export default Header;