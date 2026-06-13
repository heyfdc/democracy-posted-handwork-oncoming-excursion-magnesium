function formatDays(days) {
  if (!days || days.length === 0) return '';
  const sorted = [...days].sort((a, b) => a - b);
  const ranges = [];
  let start = sorted[0], end = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      ranges.push(start === end ? `Aug ${start}` : `Aug ${start}–${end}`);
      start = end = sorted[i];
    }
  }
  ranges.push(start === end ? `Aug ${start}` : `Aug ${start}–${end}`);
  return ranges.join(', ');
}

if (typeof module !== 'undefined') module.exports = { formatDays };
