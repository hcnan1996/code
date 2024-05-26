/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-19 21:16:57
 * @LastEditTime: 2024-04-04 14:28:28
 * @LastEditors: hechengnan
 */
// 观察者模式
class Obsever {
    update(data) {
        console.log(data);
    }
}

class Notifier {
    constructor() {
        this.observers = [];
    }
    add(Observer) {
        this.observers.push(Observer);
    }

    remove(Observer) {
        this.observers = this.observers.filter(ob => ob !== Observer);
    }

    notify() {
        this.observers.forEach(s => {
            s.update();
        });
    }
}
const ob1 = new Observer('J1');
const ob2 = new Observer('J2');
const notifier = new Notifier();
notifier.add(ob1);
notifier.add(ob2);

notifier.notify();
