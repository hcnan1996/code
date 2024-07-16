/**
 * @param {number} capacity
 */
// var LRUCache = function(capacity) {
//     this.map = new Map();
//     this.capacity = capacity;
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if (this.map.has(key)) {
//        let value = this.map.get(key);
//         this.map.delete(key)
//         this.map.set(key, value)
//         return value
//     } else {
//         return -1
//     }
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//      if(this.map.has(key)){
//         this.map.delete(key);
//         this.map.set(key, value);
//     } else {
//        if (this.map.size > this.capacity -1)  this.map.delete(this.map.keys().next().value)
//        this.map.set(key, value);
//     }

//     //  if (this.map.size > this.capacity) {
//     //      this.map.delete(this.map.keys().next().value)
//     //  }
// };

var LRUCache = function (capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const value = this.map.get(key);
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    } else return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const size = this.map.size;
    const curvalue = this.map.get(key);
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key, value);
    } else {
        if (size === this.capacity) {
            const nextKey = this.map.keys().next().value;
            this.map.delete(nextKey);
            this.map.set(key, value);
        } else {
            this.map.set(key, value);
        }
    }
    // if (size === this.capacity) {
    //     const nextKey = this.map.keys().next().value
    //     this.map.delete(nextKey)
    //     this.map.set(key, value)
    // } else {
    //     const value = this.map.get(key)
    //     if (value) {
    //            this.map.delete(key)
    //     this.map.set(key, value)
    //     } else {
    //        this.map.set(key, value)
    //     }
    // }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
