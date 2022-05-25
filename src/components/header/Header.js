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
        <header className="flex justify-between flex-col sm:flex-row">

            <div>
                <h2 className="text-bright-red dark:text-lime-green">Social Media Dashboard</h2>
                <p>{ `Total Followers: ${'10000'}` }</p>
            </div>

            <div className="flex flex-row justify-between items-center">
                <strong className="text-desaturated-blue mr-2 text-lg">Dark Mode</strong>
                <label className="relative inline-block w-15 h-7 ml-2">
                    <input className="opacity-0 w-0 h-0" onChange={toggleDarkMode} checked={isChecked} type="checkbox"/>
                    <span className={`
                    absolute cursor-pointer inset-0 rounded-[34px] ${ isChecked ? 'bg-gradient-to-r from-dark-theme-blue to-dark-theme-green' : 'bg-gradient-to-r from-dark-grayish-blue to-dark-grayish-blue' }
                    before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:left-1 before:bottom-1 before:bg-white before:rounded-[50%]  ${ isChecked ? 'before:translate-x-0' : 'before:translate-x-8' } before:transition before:ease-linear before:duration-50
                    `}></span>
                </label>
            </div>

        </header>
    )
}

export default Header;