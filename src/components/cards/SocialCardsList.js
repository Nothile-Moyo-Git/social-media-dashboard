import SocialCard from "./SocialCard";

const SocialCardsList = () => {

    const upArrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>;
    const downArrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z"/></svg>;

    const cardList = [];
    const cardInformation = {
        aliases: ['@nathanf', '@nathanf', '@realnathanf', 'Nathan F.'],
        followerCount: [1987, 1044, '11k', 8239],
        followText: ['FOLLOWERS', 'FOLLOWERS', 'FOLLOWERS', 'FOLLOWERS'],
        followerGain: [12, 99, 1099, -144],
        borderColor: ['bg-facebook-blue', 'bg-twitter-blue', 'bg-gradient-to-r from-instagram-yellow to-instagram-pink', 'bg-youtube-red'],
        icon: ['facebook','twitter','instagram','youtube'],
        growth: [[upArrow, 'increase'], [upArrow, 'increase'], [upArrow, 'increase'], [downArrow, 'decrease']]
    };

    for( let i = 0; i < 4; i++ ){
        cardList.push(<SocialCard
            key={`c-${i}`}
            alias={cardInformation.aliases[i]} 
            followers={cardInformation.followerCount[i]} 
            text={cardInformation.followText[i]} 
            gains={cardInformation.followerGain[i]}
            borderColor={cardInformation.borderColor[i]}
            icon={cardInformation.icon[i]}
            growth={cardInformation.growth[i]}
            />);
    }

    return(
        <ul className="text-desaturated-blue dark:text-dark-grayish-blue max-w-7xl m-auto p-4 flex gap-8 flex-wrap relative">
            { cardList }
        </ul>
    );
}

export default SocialCardsList;