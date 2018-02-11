# defaultProps
## Description
Specifies props to be passed by default to the base component. Similar to `withProps()`, except the props from the owner take precedence over props provided to the HoC.

## API
```
defaultProps(
  props : Object
) : Function
```

## Example
```jsx
import {
  compose,
  defaultProps
} from 'incompose';

const LeaderBoard = (props) => (
  <div>
    <h1>{props.name} has a score of {props.score}</h1>
  </div>
);

export default compose(
  defaultProps({
    score : 100,
    name  : 'John',
  }),
)(LeaderBoard);
```
