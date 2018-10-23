"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(noOfLike, isSelected) {
        this.noOfLike = noOfLike;
        this.isSelected = isSelected;
    }
    /* get noOfLike() {
        return this._noOfLike;
    }

    set noOfLike(value) {
        this._noOfLike = value;
    }

    incLike() {
        this.noOfLike++;
        console.log('inc noOfLike : ', this.noOfLike);
    }

    decLike() {
        this.noOfLike--;
        console.log('dec noOfLike : ', this.noOfLike);
    }
 */
    Like.prototype.onClickButton = function () {
        /*         if (this.isSelected) {
                    this.decLike();
                    this.isSelected = false;
                } else {
                    this.incLike();
                    this.isSelected = true;
                } */
        this.noOfLike += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    return Like;
}());
exports.Like = Like;
