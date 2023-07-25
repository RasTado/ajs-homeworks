export default function phoneCorrector(phoneNumber) {
  return phoneNumber
    .replace(/[\s-]/g, "")
    .replace(/^[8]/g, "+7")
    .replace(/[\D+]/g, "")
    .replace(/^[\d]/g, "+$&");
}
