type Handler<T> = (event: T) => void;

export class DomainEventDispatcher {
  private static handlers: { [eventName: string]: Handler<any>[] } = {};

  static register<T>(eventName: string, handler: Handler<T>) {
    if (!this.handlers[eventName]) this.handlers[eventName] = [];
    this.handlers[eventName].push(handler);
  }

  static dispatch<T>(eventName: string, event: T) {
    const handlers = this.handlers[eventName] || [];
    handlers.forEach(handler => handler(event));
  }

  static clearHandlers() {
    this.handlers = {};
  }
}
