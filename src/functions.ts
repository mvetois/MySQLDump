export const getDate = (date = new Date) : string => {

    const year : string = String(date.getUTCFullYear());
    const month : string = String(date.getUTCMonth());
    const day : string = String(date.getUTCDay());
    const hours : string = String(date.getUTCHours());

    return (year + "_" + month + "_" + day + "_" + hours);
}