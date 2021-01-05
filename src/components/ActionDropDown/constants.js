export const dateData = [
  "格式化日期",
  "当前日期",
  "取小时",
  "取分钟",
  "取月份",
  "取秒",
  "取年份",
  "加日期",
  "取星期",
  "解析字符串为日期",
  "日期相减返回毫秒",
  "日期加月",
  "日期相减返回天",
  "日期相减返回星期",
  "减日期减秒",
  "日期加天",
  "减日期减小时",
  "日期加小时",
  "日期加秒",
  "日期相减返回秒",
  "减日期",
  "减日期减月",
  "减日期减年",
  "减日期减分钟",
  "日期加分钟",
  "日期相减返回分钟",
  "日期相减返回月",
  "减日期减天",
  "日期加年",
  "日期相减返回小时",
  "取天"
];

export const stringData = [
  "字符首次出现位置",
  "获取字符",
  "字符最后出现位置",
  "获取长度",
  "替换字符串",
  "拆分字符串为集合",
  "指定起始的字符串截取",
  "转小写",
  "转大写",
  "去空格",
  "指定开始的字符串截取",
  "指定结束的字符串截取"
];

export const ruleCascaderOptionsMap = {
  whenVariable: ["var", "args", "fun", "constant"],
  whenValue: ["var", "args", "constant", "fun"],
  thenVariable: ["ovar", "args"],
  thenValue: ["constant", "fun", "args"]
};

export const ruleType = {
  df: "df", //规则流
  cdt: "cdt", //交叉决策表
  sc: "sc", //评分卡
  rules: "rules", //规则集
  model: "model" //模型
};

export const ruleFormat = "rule_format";

export const aggregation = {
  sum: "求和",
  avg: "平均",
  weighted_sum: "加权求和",
  weighted_avg: "加权平均"
};

export const ruleColumnCategory = {
  PERSON: "个人信息",
  INDUSTRY: "工业信息",
  ENTERPRISE: "企业信息"
};

export const ruleColumnType = {
  "java.lang.String": "字符串",
  "java.lang.Integer": "整数",
  "java.lang.Double": "数字",
  "java.lang.Boolean": "布尔"
};
const booleanOperators = ["eq", "ne", "isnull", "notnull"];

export const operatorFilterMap = {
  boolean: booleanOperators,
  number: [...booleanOperators, "inc", "ninc", "lt", "le", "gt", "ge"]
};
export const emptyOperatorList = ["isnull", "notnull"];

export const actionMenuMap = {
  // 1: "打印到控制台",
  2: "变量赋值",
  3: "中断规则集",
  4: "中断规则流"
};

export const actionMenuValueMap = {
  set: ["2", "变量赋值"],
  break: ["3", "中断规则集"],
  stop: ["4", "中断规则流"]
};

export const modelVarsType = {
  input: "input",
  output: "output"
};
  
