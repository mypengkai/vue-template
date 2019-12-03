// 待办事项标题

function current(code, newDate = new Date()) {
    let year = newDate.getFullYear();
    let mounth = (newDate.getMonth() + 1) > 9 ? `${newDate.getMonth() + 1}` : `0${newDate.getMonth() + 1}`;
    let day = newDate.getDate() > 9 ? `${newDate.getDate()}` : `0${newDate.getDate()}`;
    let hour = newDate.getHours() > 9 ? `${newDate.getHours()}` : `0${newDate.getHours()}`;
    let minute = newDate.getMinutes() > 9 ? `${newDate.getMinutes()}` : `0${newDate.getMinutes()}`;
    let second = newDate.getSeconds() > 9 ? `${newDate.getSeconds()}` : `0${newDate.getSeconds()}`;
    if (code == null) {
        return `${year}-${mounth}-${day}`
    } else {
        return `${code}${year}-${mounth}-${day} ${hour}:${minute}:${second}`
    }
}

export default current