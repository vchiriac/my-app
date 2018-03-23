export class Model {
  user;
  items;

  constructor() {
    this.user = 'Valentin';
    this.items = [new TodoItem('Buy Flowers', false),
                  new TodoItem('Call Paula', false),
                  new TodoItem('Go Vacation', false),
                  new TodoItem('Have Fun', false)];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
