/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-04-07 23:03:32
 * @LastEditTime: 2024-04-08 22:30:18
 * @LastEditors: hechengnan
 */
class RedPackage {
    constructor(money, count) {
        this.money = money;
        this.count = count;
        this._remain = money;
    }
    openRedPackage() {
        if (this.count <= 0) {
            console.log('hong bao');
            return;
        }

        if (this.count === 1) {
            this.count--;
            console.log(this._remain);
        }
        const ratio = Math.random() * (this._remain / this.money);
        let youGet = (this.money * ratio).toFixed(2);
        const tempRemain = +(this._remain - youGet).toFixed(2);
        const allLeast = this.count * 0.01;
        if (tempRemain < allLeast) {
            youGet = +(this._remain - allLeast).toFixed(2);
            this._remain = allLeast;
        } else {
            this._remain = tempRemain;
        }
        this.count--;
    }
}
