"use strict";
exports.__esModule = true;
var like_1 = require("./like");
var like = new like_1.Like(100, false);
like.onClickButton();
console.log("Total like : " + like.noOfLike + " , selected : " + like.isSelected);
