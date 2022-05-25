import SocialCard from "./SocialCard";

const SocialCardsList = () => {

    const cardList = [];
    const cardInformation = {
        aliases: ['@nathanf', '@nathanf', '@realnathanf', 'Nathan F.'],
        followerCount: [1987, 1044, 11000, 8239],
        followText: ['FOLLOWERS', 'FOLLOWERS', 'FOLLOWERS', 'FOLLOWERS'],
        followerGain: [12, 99, 1099, -144],
        borderColor: ['bg-facebook-blue', 'bg-twitter-blue', 'bg-gradient-to-r from-instagram-yellow to-instagram-pink', 'bg-youtube-red']
    };

    for( let i = 0; i < 4; i++ ){
        cardList.push(<SocialCard
            key={`c-${i}`}
            alias={cardInformation.aliases[i]} 
            followers={cardInformation.followerCount[i]} 
            text={cardInformation.followText[i]} 
            gains={cardInformation.followerGain[i]}
            borderColor={cardInformation.borderColor[i]}
            />);
    }

    return(
        <ul className="text-desaturated-blue dark:text-dark-grayish-blue max-w-7xl m-auto p-4 flex gap-8 flex-wrap">
            { cardList }
        </ul>
    );
}

export default SocialCardsList;