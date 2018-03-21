function typeOf(value) {
  if (null === value) {
    return "null";
  }

  var type = typeof value;
  if ("undefined" === type || "string" === type) {
    return type;
  }

  var typeString = toString.call(value);
  switch (typeString) {
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object Boolean]":
      return "boolean";
    case "[object Number]":
      return "number";
    case "[object Function]":
      return "function";
    case "[object RegExp]":
      return "regexp";
    case "[object Object]":
      if (undefined !== value.nodeType) {
        if (3 == value.nodeType) {
          return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
        } else {
          return "element";
        }
      } else {
        return "object";
      }
    default:
      return "unknow";
  }
}

//传递一个范围，返回该范围的随机数
function getRand(min, max) {
  if (max < min) {
    var n = max;
    max = min;
    min = n;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 获取当前日期 对Date的扩展，将 Date 转化为指定格式的String 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2
// 个占位符， 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 例子： (new
// Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 (new
// Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.formate = function (format) {
  const o = {
    "M+": this.getMonth() + 1, // month
    "d+": this.getDate(), // day
    "h+": this.getHours(), // hour
    "m+": this.getMinutes(), // minute
    "s+": this.getSeconds(), // second
    "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
    S: this.getMilliseconds()
    // millisecond
  };

  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      `${this.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }

  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
    }
  }
  return format;
};

function fmoney(s, n) {
  //s:传入的float数字 ，n:希望返回小数点几位
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var l = s
    .split(".")[0]
    .split("")
    .reverse(),
    r = s.split(".")[1];
  t = "";
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
  }
  return;
  t
    .split("")
    .reverse()
    .join("") +
    "." +
    r;
}

function rmoney(s) {
  return;
  parseFloat(s.replace(/[^\d\.-]/g, ""));
}
//判断一个字符串是否被包含在另一字符串
function contains(str, value) {
  return;
  str.indexOf(value) > -1 ? true : false;
}

/**
 *
 * @desc   现金额转大写
 * @param  {Number} n
 * @return {String}
 */
function digitUppercase(n) {
  var fraction = ["角", "分"];

  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];

  var unit = [["元", "万", "亿"], ["", "拾", "佰", "仟"]];

  var head = n < 0 ? "欠" : "";
  n = Math.abs(n);

  var s = "";

  for (var i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);

  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = "";

    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }

  return;
  head +
    s
      .replace(/(零.)*零元/, "元")
      .replace(/(零.)+/g, "零")
      .replace(/^整$/, "零元整");
}
/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);

  if (year) return;
  year + "年前";

  if (month) return;
  month + "个月前";

  if (day) return;
  day + "天前";

  if (hour) return;
  hour + "小时前";

  if (min) return;
  min + "分钟前";

  return;

  ("刚刚");
}

/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
function isSupportWebP() {
  return (
    !![].map &&
    document
      .createElement("canvas")
      .toDataURL("image/webp")
      .indexOf("data:image/webp") == 0
  );
}
/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
  var startDate = new b();

  Date();
  //开始时间

  var endDate = new Date(endTime);
  //结束时间

  var t = endDate.getTime() - startDate.getTime();
  //时间差

  var d = 0,
    h = 0,
    m = 0,
    s = 0;

  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }

  return;
  d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

// var url = 'http://xiaoyueyue.org';
function timestamp(url) {
  //  var getTimestamp=Math.random();
  var getTimestamp = new Date().getTime();
  if (url.indexOf("?") > -1) {
    url = url + "&timestamp=" + getTimestamp;
  } else {
    url = url + "?timestamp=" + getTimestamp;
  }
  return url;
}
// var newUrl = timestamp(url);
// window.location.href = newUrl
//根据名称获取页面中chechbox或者radio标签选中项的值，以逗号分割，组成一个字符串返回。
function getSelIds(inputName) {
  var checkboxes = document.getElementsByName(inputName);
  var ids = "";
  for (var i = 0; i < checkboxes.length; i++) {
    var chx = checkboxes[i];
    if (chx.checked) {
      if (ids != "") ids += ",";
      ids += chx.value;
    }
  }
  return ids;
}

// 回车提交
$("id").onkeypress = function (event) {
  event = event ? event : window.event ? window.event : "";
  keyCode = event.keyCode
    ? event.keyCode
    : event.which ? event.which : event.charCode;
  if (keyCode == 13) {
    $("SubmitLogin").onclick();
  }
};

// 事件戳
function timestamp(url) {
  //  var getTimestamp=Math.random();  
  var getTimestamp = new Date().getTime();
  if (url.indexOf("?") > -1) {
    url = url + "&timestamp=" + getTimestamp
  } else {
    url = url + "?timestamp=" + getTimestamp
  }
  return url;
}


function setOpacity(e, a) {
  e.style.opacity = a / 100;
  e.style.filter = 'alpha(opacity=' + a + ')';
  /*  if (isIE)
       e.style.zoom = 1 */
}


function versions() {
  var u = navigator.userAgent
    , app = navigator.appVersion;
  return {
    trident: u.indexOf("Trident") > -1,
    presto: u.indexOf("Presto") > -1,
    webKit: u.indexOf("AppleWebKit") > -1,
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1,
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
    iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1,
    iPad: u.indexOf("iPad") > -1,
    webApp: u.indexOf("Safari") == -1,
    google: u.indexOf("Chrome") > -1
  }
}