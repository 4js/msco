export default (val) => {
  const str = Object.prototype.toString.call(val).split(" ")[1];
  return str.slice(0, str.length - 1);
};

export function isObject(value) {
  return Object.prototype.toString.call(value).split(" ")[1] === "Object]";
}

export const hasField = (obj, field) => {
  return JSON.stringify(obj).includes(field);
};

export const isType = (type) => (data) => {
  return Object.prototype.toString.call(data) === `[object ${type}]`;
};

// 将"true" 字符串转为数字
export const stringToBoolean = (str) => {
  if (typeof str === "string") {
    str = str.trim();
    if (str === "true") {
      return true;
    } else if (str === "false") {
      return false;
    }
  }

  return str;
};

// 将"3.4" 类似的字符串转为数字
export const stringToNumber = (str) => {
  if (typeof str === "string") {
    str = str.trim();
    const num = Number(str);
    if (str !== "" && !Number.isNaN(num) && typeof num === "number") {
      return num;
    }
  }

  return str;
};

export const stringToNumberOrBoolean = (str) => {
  return stringToNumber(stringToBoolean(str));
};
