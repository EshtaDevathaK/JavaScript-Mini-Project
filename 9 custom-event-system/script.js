// Custom EventEmitter class
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // Emit an event
  emit(eventName, data) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach(callback => callback(data));
    }
  }

  // Remove a specific listener
  off(eventName, callbackToRemove) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        cb => cb !== callbackToRemove
      );
    }
  }
}

// 📦 Create instance
const emitter = new EventEmitter();

// 🎯 Listener function
function greetHandler(data) {
  alert('👋 Hello from Event System! Data: ' + data);
}

// ✅ Register the listener
emitter.on('greet', greetHandler);

// 👇 Trigger 'greet' on button click
document.getElementById('trigger').addEventListener('click', () => {
  emitter.emit('greet', 'User123');
});

// ❌ Unsubscribe example after 5 sec (optional)
// setTimeout(() => {
//   emitter.off('greet', greetHandler);
//   console.log('Listener removed');
// }, 5000);
