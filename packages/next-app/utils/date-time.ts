
export function getCurrentDateTime() {
    const dateStr = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();

    const timeStr = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    
    return dateStr + ' ' + timeStr; 
  }