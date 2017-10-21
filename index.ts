const regex = /^(?!BG|GB|NK|KN|TN|NT|ZZ)((?![DFIQUV])([A-Z])(?![DFIQUVO])([A-Z]))[0-9]{6}[A-D ]$/;

export default (value: string) => {
    return regex.test(value);
}