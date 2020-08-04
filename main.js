import {Component, ToyReact} from "./ToyReact.js";

class MyComponent2 extends Component {
  render() {
    return (
      <div>aaaa</div>
    )
  }
}

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Hello</span>
        <div>
          {true}
          {this.children}
        </div>
      </div>
    )
  }

}

let a = <MyComponent name="a" id="ida">
  <div>aaaa</div><div>bbb</div>
</MyComponent>

ToyReact.render(
  a,
  document.body
);
