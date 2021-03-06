# RegExp 对象

正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具

## 工具

> 正则在线可视化工具，正则可视化工具图解符合铁路图规律

- [**regulex**](https://jex.im/regulex/) - 正则可视化
- [**regex101**](https://regex101.com/) - 正则表达式测试

## 资源

- [正则表达式 30 分钟入门教程](http://deerchao.net/tutorials/regex/common.htm)
- [JS-Regular-expression-awesome](https://github.com/dunizb/JS-Regular-expression-awesome) - 我收藏的正则表达式大全 , by [张兵](https://github.com/dunizb)

##### 参考

- https://2ue.github.io/2017/11/24/regex-to-something/

## 语法

```
var patt=new RegExp(pattern,modifiers);

或者更简单的方式:

var patt=/pattern/modifiers;
```

- pattern（模式） 描述了表达式的模式
- modifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配

## RegExp 对象方法

| 方法    | 描述                                                        |
| ------- | ----------------------------------------------------------- |
| compile | 编译正则表达式。                                            |
| exec    | 检索字符串中指定的值。返回找到的值，并确定其位置。          |
| test    | 检索字符串中指定的值。返回 true 或 false。正则.test(字符串) |

## 支持正则表达式的 String 对象的方法

| 方法    | 描述                                                                                                                                          | 用法                                                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| search  | 在字符串搜索符合正则的内容，搜索到就返回出现的位置（从 0 开始，如果匹配的不只是一个字母，那只会返回第一个字母的位置）， 如果搜索失败就返回 -1 | 字符串.search(正则) 在字符串中查找复合正则的内容。忽略大小写：i——ignore（正则中默认是区分大小写的 如果不区分大小写的话，在正则的最后加标识 i） |
| match   | 在字符串中搜索复合规则的内容，搜索成功就返回内容，格式为数组，失败就返回 null                                                                 | 字符串.match(正则)（正则中默认，只要搜索到符合规则的内容就会结束搜索 ）                                                                        |
| replace | 查找符合正则的字符串，就替换成对应的字符串。返回替换后的内容。                                                                                | 字符串.replace(正则,新的字符串/回调函数)（在回调函数中，第一个参数指的是每次匹配成功的字符）`|` 是或的意思 。                                  |
| split   | 把字符串分割为字符串数组。                                                                                                                    |

## 修饰符

修饰符用于执行区分大小写和全局匹配:

| 修饰符 | 描述                                                     |
| ------ | -------------------------------------------------------- |
| i      | 执行对大小写不敏感的匹配。忽略大小写：i——ignore          |
| g      | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m      | 执行多行匹配。                                           |

## 方括号

方括号用于查找某个范围内的字符：
表达式 | 描述
--- | ---
[abc] | 查找方括号之间的任何字符。
[^abc]| 查找任何不在方括号之间的字符。
[0-9] | 查找任何从 0 至 9 的数字。
[a-z] | 查找任何从小写 a 到小写 z 的字符。
[A-Z] | 查找任何从大写 A 到大写 Z 的字符。
[A-z] | 查找任何从大写 A 到小写 z 的字符。
[adgk]| 给定集合中任意一个，比如 [abc] 整体代表一个字符 匹配 a b c 中的任意一个，也可以是范围，[0-9] 范围必须从小到大 。
[^adgk]|排除
`(red|blue|green)` | 查找任何指定的选项。

## 元字符

元字符（Metacharacter）是拥有特殊含义的字符：

| 元字符 | 描述                                             |
| ------ | ------------------------------------------------ |
| .      | 任意字符，除了换行和行结束符。                   |
| \w     | 查找单词字符。 字符 ( 字母 ，数字，下划线\_ )    |
| \W     | 查找非单词字符。                                 |
| \d     | 数字                                             |
| \D     | 非数字                                           |
| \s     | 空格                                             |
| \S     | 非空格                                           |
| \b     | 匹配单词边界， 独立的部分 （ 起始，结束，空格 ） |
| \B     | 匹配非单词边界。非独立的部分                     |
| \0     | 查找 NULL 字符。                                 |
| \n     | 查找换行符。                                     |
| \f     | 查找换页符。                                     |
| \r     | 查找回车符。                                     |
| \t     | 查找制表符。                                     |
| \v     | 查找垂直制表符。                                 |
| \xxx   | 查找以八进制数 xxx 规定的字符。                  |
| \xdd   | 查找以十六进制数 dd 规定的字符。                 |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。      |

## 量词

| 量词   | 描述                                                                                                                                                                                                                                                                 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n+     | 匹配任何包含一次或任意次相当于 {1,}。例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。                                                                                                                                                                  |
| {n}    | 正好为 n 次，例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。                                                                                                                                              |
| {n,}   | 至少 n 次，例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。                                                                                                                                                                 |
| n\*    | 匹配任意次 相当于{0,}。例如，/bo\*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。                                                                                                                                    |
| n?     | 匹配任何零次或一次 相当于{0,1}。例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。                                                                                                                                                                            |
| n{X,Y} | X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。 |
| n\$    | 匹配任何结尾为 n 的字符串。                                                                                                                                                                                                                                          |
| ^n     | 匹配任何开头为 n 的字符串。                                                                                                                                                                                                                                          |
| ?=n    | 匹配任何其后紧接指定字符串 n 的字符串。                                                                                                                                                                                                                              |
| ?!n    | 匹配任何其后没有紧接指定字符串 n 的字符串。                                                                                                                                                                                                                          |

##### 参考

- http://www.runoob.com/jsref/jsref-obj-regexp.html
- https://www.cnblogs.com/moqing/archive/2016/07/13/5665126.html
