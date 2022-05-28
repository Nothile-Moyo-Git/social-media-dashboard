const OverviewCard = (props) => {

    return(
        <li className="bg-light-grayish-blue dark:bg-dark-desaturated-blue shadow-custom py-6 px-4 basis-[100%] md:basis-[calc(50%_-_1rem)] md:max-w-[calc(50%_-_1rem)] xl:max-w-[calc(25%_-_1.5rem)] xl:basis-[calc(25%_-_1.5rem)] rounded-[6px] text-center shrink-0">
            <div className="flex justify-between text-dark-grayish-blue dark:text-desaturated-blue pb-6">
                <p><b>{props.title}</b></p>
                {props.logo}
            </div>
            <div className="flex justify-between">
                <p className="text-very-dark-blue dark:text-white text-[2rem]"><b>{props.gains}</b></p>
                <span className="flex justify-center items-center font-bold">
                    {props.growth.arrow}
                    <p className={`text-${props.growth.color} ml-1`}>{props.growth.percent}</p>
                </span>
            </div>
        </li>
    );
}

export default OverviewCard;