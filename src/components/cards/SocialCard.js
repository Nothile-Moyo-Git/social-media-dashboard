const SocialCard = (props) => {

    return(
        <li className="basis-[100%] sm:basis-[calc(50%_-_1rem)] xl:basis-[calc(25%_-_1.5rem)] rounded-[14px] text-center">
            <div className={`h-1 w-[100%] rounded-t-[14px] ${props.borderColor} `}></div>        
            <div>{props.alias}</div>
            <p>{props.followers}</p>
            <p>{props.text}</p>
            <div>{props.gains}</div>
        </li>
    );
}

export default SocialCard;