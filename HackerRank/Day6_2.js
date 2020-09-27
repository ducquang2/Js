function getDayName(dateString) {
    let dayName = new Date(dateString).toString().slice(0, 3);
    switch (dayName) {
        case 'Sun':
            dayName = 'Sunday';
            break;
        case 'Mon':
            dayName = 'Monday';
            break;
        case 'Tue':
    }
}