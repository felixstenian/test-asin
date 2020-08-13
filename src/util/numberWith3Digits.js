export default function (number) {
  const numberWith3Digits = String(number).padStart(3, '0');

  return numberWith3Digits;
}
