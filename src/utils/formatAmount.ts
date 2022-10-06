export default function formatAmount(
  number: number,
  {
    maximumSignificantDigits,
    isWithoutSign = false,
  }: { maximumSignificantDigits?: number; isWithoutSign?: boolean } = {}
) {
  const formattedNumber = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumSignificantDigits,
  }).format(number);

  return isWithoutSign
    ? formattedNumber.replace("€", "").trimEnd()
    : formattedNumber;
}
