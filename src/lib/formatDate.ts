export function formatDate(date: string | Date, locale = 'vi-VN') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
