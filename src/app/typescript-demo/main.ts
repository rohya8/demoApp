import { Like } from './like';


const like = new Like(100, false);
like.onClickButton();
console.log(`Total like : ${like.noOfLike} , selected : ${like.isSelected}`);
