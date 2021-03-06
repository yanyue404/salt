# REACT

## 项目

- 项目目录清晰清晰 `Components` `Routes` `Config`
- 代码格式化符合 eslint，运行以及 pre-commit 都检测
- 避免多层嵌套，webpack 配置别名 alias
- utils 导入方式，按需引入
- git commit log

## 组件

- Smart 组件 vs Dumb 组件
  Smart 和 Dumb 组件分开到两个不同的目录，不再在 Dumb 组件内部进行 connect，在 src/ 目录下新建两个文件夹 components/ 和 containers/：

```js
src/
  components/
  containers/
```

- 组件命名

```js
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

- 封装时最好提供 demo 以及 README，做好严格的类型检查（能做单元测试更好）
- 复杂的 state 逻辑, 请抽离成 hooks 函数

```js
// bad

function TargetComponent({ url, options }) {
  const [data, setData] = useState([]);

  useEffect(async ()=>{
    cosnt data = await fetch(url, options);
    setData(data)
  }, [])

  function handleOnUpdateData (nextOptions) {
    cosnt data = await fetch(url, nextOptions);
    setData(data)
  }

  return <OtherComponent data={data} onChange={handleOnUpdateData} />
}
```

```js
// best

// 将状态逻辑抽离至 hooks 文件夹内
import useFetchData from 'src/hooks/useFetchData';

function TargetComponent({ url, options }) {
  // 复用 state 逻辑, 是 hooks 最重要的意义
  const [data, updateData] = useFetchData(url, options);

  return <OtherComponent data={data} onChange={updateData} />;
}
```

- 组件抽象，好的代码复用，HOC && Hook

## 编码

- 尽量使用`PureComponent`
- 避免根据 props 去初始化 state
- 为组件绑定事件处理器，使用箭头函数
- 唯一 key 设置
- JSX 属性名使用骆驼式风格`camelCase`
- 仅在实例化生命周期中绑定 window 或 body 事件，在销毁期生命周期中解绑 window 或 body 事件
- shouldComponentUpdate 优化 immutable?
- 代码分片(适当情况)

```js
const Artists = React.lazy(() => import('./Artists'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Artists />
      </Suspense>
    </div>
  );
}
```

- 类组件编写

1. static 开头的类属性，如 defaultProps、propTypes。
2. 构造函数，constructor。
3. getter/setter（还不了解的同学可以暂时忽略）。
4. 组件生命周期。
5. \_ 开头的私有方法。
6. 事件监听方法，handle\*。
7. render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
8. render() 方法。

- Hooks 的函数组件

```js
import React, { useState, useEffect, useCallback } from 'react';

function fixDataToPlan(data) {}

function TargetComponent({ userInfo }) {
  const [loading, setLoading] = useState(false);

  useEffects(fn, [])getPhotops

  useEffects(fn, [userInfo])

  useEffects(fn)

  // 除了 handle 函数, 其他函数都不要在组件内声明, 请声明在 [3. 内部函数声明] 中
  // 因为函数组件每次重新执行, 内部函数都会重新声明, 所以要减少不必要的内部函数声明
  // function fixDataToPlan(){}

  // 6.4 被事件绑定的函数, 使用 handle 开头
  function handleOnClick(){}

  return <div>example</div>
}

// 7声明 propTypes
TargetComponent.propTypes = {
  ...
};

// 声明 mapStateToProps 函数
function mapStateToProps (state) {}

// 声明 mapDispatchToProps 函数
function mapDispatchToProps (dispatch) {}

// 导出 default 对象
export default TargetComponent;

// 导出 default 对象, 如果需要使用 HOC 处理组件, 请直接返回处理之后的组件
export default connect(mapStateToProps, mapDispatchToProps)(TargetComponent);
```

#### 参考链接

- [根据 props 去初始化 state](https://hateonion.me/books/react-bits-cn/anti-patterns/01.props-in-initial-state.html)
- [AlloyTeam ESLint 配置指南](http://www.alloyteam.com/2017/08/13065/)
- [react 代码规范-再烂的项目也得理](https://zhuanlan.zhihu.com/p/35611054)
- [Code splitting React routes with React Lazy and React Suspense](https://linguinecode.com/post/code-splitting-react-router-with-react-lazy-and-react-suspense)
- [Airbnb React/JSX 编码规范](https://github.com/JasonBoy/javascript/tree/master/react)
- https://www.zhihu.com/question/36516604/answer/82878351
- https://github.com/ityak/front-end-gui
- https://github.com/yannickcr/eslint-plugin-react
