# JavaScript Date-Time methods

## Date-Time methods

- `new Date()` - creates a new date object with the current date and time
- `new Date(year, month, day, hours, minutes, seconds, milliseconds)` - creates a new date object with a specified date and time
- `new Date(milliseconds)` - creates a new date object as zero time plus milliseconds
- `new Date(date string)` - creates a new date object from a date string
- `new Date(ISO Date)` - creates a new date object from an ISO date
- `Date.now()` - returns the number of milliseconds since midnight Jan 1 1970, and a specified date
- `Date.parse()` - parses a date string and returns the number of milliseconds since January 1, 1970
- `Date.UTC()` - same as Date.parse(), but it uses universal time

## Date-Time methods

- `getDate()` - returns the day of the month (from 1-31)
- `getDay()` - returns the day of the week (from 0-6)
- `getFullYear()` - returns the year
- `getHours()` - returns the hour (from 0-23)
- `getMilliseconds()` - returns the milliseconds (from 0-999)
- `getMinutes()` - returns the minutes (from 0-59)
- `getMonth()` - returns the month (from 0-11)
- `getSeconds()` - returns the seconds (from 0-59)
- `getTime()` - returns the number of milliseconds since midnight Jan 1 1970, and a specified date
- `getTimezoneOffset()` - returns the time difference between UTC time and local time, in minutes
- `getUTCDate()` - returns the day of the month, according to universal time (from 1-31)
- `getUTCDay()` - returns the day of the week, according to universal time (from 0-6)
- `getUTCFullYear()` - returns the year, according to universal time
- `getUTCHours()` - returns the hour, according to universal time (from 0-23)
- `getUTCMilliseconds()` - returns the milliseconds, according to universal time (from 0-999)
- `getUTCMinutes()` - returns the minutes, according to universal time (from 0-59)
- `getUTCMonth()` - returns the month, according to universal time (from 0-11)
- `getUTCSeconds()` - returns the seconds, according to universal time (from 0-59)
- `getYear()` - **DEPRECATED**. Use the `getFullYear()` method instead
- `now()` - returns the number of milliseconds since midnight Jan 1, 1970
- `parse()` - parses a date string and returns the number of milliseconds since January 1, 1970
- `setDate()` - sets the day of the month of a date object
- `setFullYear()` - sets the year of a date object
- `setHours()` - sets the hour of a date object
- `setMilliseconds()` - sets the milliseconds of a date object
- `setMinutes()` - sets the minutes of a date object
- `setMonth()` - sets the month of a date object
- `setSeconds()` - sets the seconds of a date object
- `setTime()` - sets a date to a specified number of milliseconds after/before January 1, 1970
- `setUTCDate()` - sets the day of the month of a date object, according to universal time
