/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-19 20:57:52
 * @LastEditTime: 2024-03-19 21:38:55
 * @LastEditors: hechengnan
 */
class EventEmitter {
    constructor() {
        this.event = {};
    }

    on(eventName, callback) {
        const callbacks = this.event[eventName] || [];
        callback.push(callback);
        this.event[eventName] = callbacks;
    }

    emit(eventName, ...args) {
        const callbacks = this.event[eventName];
        callbacks.forEach(cb => {
            cb(...args);
        });
    }

    off(eventName, callback) {
        const index = this.event[eventName].indexOf(callback);
        if (index !== -1) {
            this.event[eventName].splice(index, 1);
        }
    }

    once(eventName, callback) {
        const one = (...args) => {
            callback(...args);
            this.off(eventName, one);
        };
        this.on(eventName, one);
    }
}
