import alertify from "alertifyjs";

export default (type: string, message: string) => {
  alertify.set("notifier", "position", "top-right");
  return alertify[type](message);
};
