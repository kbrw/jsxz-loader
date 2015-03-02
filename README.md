# jsxz-loader

JSXZ Loader is a Webpack loader which allows you to Precompile your JSX HTML
components from static HTML templates using CSS selectors.

## Usage

JSXZ-loader will generate JSX output, so you have to combine it with a JSX
loader if you need to ouput raw JS :

For instance, if you have a `mywebsite` directory containing html
files of a static website, in your `webpack.config` setup :

```javascript
module.exports = {
  ***

  module: {
    loaders: [
      { test: /.*\.jsx$/, loader: "react-hot!jsx?harmony!jsxz?dir=mywebsite" }
    ]
  },

}
```

- you have a `mywebsite/index.html`
- it contains a `<div class="button">` element below a container of class `.cart`
- you want to create a component from this button which replace the
  price element with `this.props.price` and convert the `a` html link
  into a `Link` component (handling OnClick for instance)

Then you can use in your sources : 

```javascript
module.exports = {
  showCartButton: React.createClass({
    render: function() {
      <JSXZ in="index" sel=".cart div.button">
        <Z sel="price">{this.props.price} €</Z>,
        <Z sel="a" tag="Link" to="cart"><ChildrenZ/></Z>
      </JSXZ>
    }
  }
}
```
