# How to use this app?

## Installation

this application was build with:

```bash
NodeJs: v18.2.0
```

please use the package manager [yarn](https://yarnpkg.com/) to install the host.

```bash
$ yarn install
```

## Usage

#### Run this command

to run the app in a development environment

```bash
$ yarn start
```

this application was created with a host and nav

# How was this app created?

##### step 1:

create an application with module federation run this command

```bash
$ npx create-mf-app
```

```bash
    ? Pick the name of your app: host
    ? Project Type: Application
    ? Port number: 3000
    ? Framework: react
    ? Language: typescript
    ? CSS: Tailwind
```

##### step 2:

add this configuration in webpack.config.js file for ModuleFederationPlugin

```js
remotes: {
    nav: 'mf_simple_nav@http://localhost:3001/remoteEntry.js',
},
```

##### step 3:

create a component Counter.jsx

```jsx
import React from 'react';

const Counter = ({count, handleBtn}) => {
  return (
    <div className="border-2 p-2 mt-2">
      <div>Name: mf-host-simple-counter</div>
      <div>Counter: {count}</div>
      <button
        onClick={handleBtn}
        className="bg-indigo-800 font-bold text-white rounded py-2 px-4">
        Add to Cart
      </button>
    </div>
  );
};

export default Counter;
```

##### step 4:

import component Counter and Header in App.jsx, connect with a hook useState

```jsx
import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from 'nav/Header';
import Counter from './Counter';
import './index.scss';

const App = () => {
  const [count, setCount] = useState(0);

  const handleBtn = () => {
    setCount(count => count + 1);
  };

  const setClear = () => {
    setCount(0);
  };

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header count={count} onClear={setClear} />
      <Counter count={count} handleBtn={handleBtn} />
    </div>
  );
};
```

##### step 5:

Use the hook useCallback for optimizing app

```jsx
import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from 'nav/Header';
import Counter from './Counter';
import './index.scss';

const App = () => {
  const [count, setCount] = useState(0);

  const handleBtn = useCallback(() => {
    setCount(count => count + 1);
  }, [setCount]);

  const setClear = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {Header && <Header count={count} onClear={setClear} />}
      <Counter count={count} handleBtn={handleBtn} />
    </div>
  );
};
```
