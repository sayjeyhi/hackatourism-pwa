const englishNumber = string =>
  `${string}`
    .replace(/[\u0660-\u0669]/g, c => c.charCodeAt(0) - 0x0660)
    .replace(/[\u06f0-\u06f9]/g, c => c.charCodeAt(0) - 0x06f0);

function getMonthNumber(name) {
  const normalizedName = name.trim().substr(0, 3);
  const mapMonths = {
    فرو: '01',
    ارد: '02',
    خرد: '03',
    تیر: '04',
    مرد: '05',
    شهر: '06',
    مهر: '07',
    آبا: '08',
    آذر: '09',
    دی: '10',
    بهم: '11',
    اسف: '12',
  };

  return parseInt(mapMonths[normalizedName], 10);
}
function getDateFromString(string) {
  const temp = ` ${string} `;
  const year = temp.match(/ [۰-۹0-9]{4} /)[0];
  const [toDay, fromDay] = temp.match(/ [\u06F0-\u06F90-9]{1,2} /g) || [];
  const [fromMonth, toMonth] = temp
    .replace(/[\u06F0-\u06F90-9]/g, '')
    .trim()
    .split('-');

  const englishYear = parseInt(englishNumber(year), 10);
  if (fromDay) {
    return {
      structure: {
        from: {
          year: englishYear,
          month: getMonthNumber(fromMonth.trim()),
          day: parseInt(englishNumber(fromDay), 10),
        },
        to: {
          year: englishYear,
          month: getMonthNumber(toMonth),
          day: parseInt(englishNumber(toDay), 10),
        },
      },
      string: `از ${fromDay} ${fromMonth.trim()} تا ${toDay} ${toMonth.trim()} ${year}`,
    };
  }
  return {
    structure: {
      year: englishYear,
      month: getMonthNumber(fromMonth),
      day: parseInt(englishNumber(toDay), 10) || 1,
    },
    string: `${toDay || ''} ${fromMonth.trim()} ${year}`,
  };
}

export { getDateFromString };
