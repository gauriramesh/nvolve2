export class Notification {
  constructor(title, content, rso) {
    this.title = title;
    this.content = content;
    this.rso = rso;
  }
}

let notifications = [
  new Notification(
    "Event Denied",
    "The event 'Trip to the Dairy Store' was denied. " +
      "Reason: Any request to use SOFS funds must be submitted at least three business days in advance. " +
      "Please pick an alternate date for the event and file an Event Planning Request form again.",
    "Nebraskans for Cheese"
  ),
  new Notification(
    "Event Approved",
    "The event 'Weekly Meeting' was approved. " +
      "Please notify Student Involvement as soon as possible should any event details change.",
    "Scott Frost Appreciation Club"
  )
];

export function getNotifications() {
  return notifications;
}

export function addNotification(notification) {
  notifications.push(notification);
}

export function clearNotifications() {
  notifications.clear();
}

export function removeNotification(notification) {
  notifications = notifications.filter(n => n !== notification);
}
