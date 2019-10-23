export class Notification {
  constructor(title, content, rso) {
    this.title = title;
    this.content = content;
    this.rso = rso;
  }
}

const NOTIFICATION_KEY = "notifications";

const DEFAULT_NOTIFICATIONS = [
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
  const json = localStorage.getItem(NOTIFICATION_KEY);

  if (!json) {
    localStorage.setItem(
      NOTIFICATION_KEY,
      JSON.stringify(DEFAULT_NOTIFICATIONS)
    );
  }

  return JSON.parse(localStorage.getItem(NOTIFICATION_KEY));
}

export function addNotification(notification) {
  const notifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY));
  notifications.push(notification);
  localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notifications));
}

export function removeNotification(notification) {
  let notifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY));
  notifications = notifications.filter(
    n =>
      !(
        n.title === notification.title &&
        n.content === notification.content &&
        n.rso === notification.rso
      )
  );
  localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notifications));
}
