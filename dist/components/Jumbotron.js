'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Jumbotron;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Jumbotron(props) {
  return _react2.default.createElement(
    'section',
    { className: '_full-width-row _full-width-row_gray header' },
    _react2.default.createElement(
      'div',
      { className: '_container' },
      _react2.default.createElement(
        'div',
        { className: 'header--heading-section' },
        _react2.default.createElement(
          'h2',
          { className: 'base--h2 header--header' },
          props.serviceName
        ),
        _react2.default.createElement(
          'p',
          { className: 'base--p header--description description' },
          props.description
        )
      ),
      props.version !== 'GA' ? _react2.default.createElement(
        'div',
        { className: 'header--version-tag' },
        props.version
      ) : null,
      _react2.default.createElement(
        'nav',
        { className: 'header--nav' },
        _react2.default.createElement(
          'h5',
          { className: 'base--h5 header--get-started' },
          _react2.default.createElement(_Icon2.default, { className: 'header--get-started-icon icon', type: 'link', size: 'small' }),
          _react2.default.createElement(
            'span',
            { className: 'header--get-started-span' },
            'Get Started'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'header--nav-ul base--ul base--ul_inline base--ul_no-bullets' },
          _react2.default.createElement(
            'li',
            { className: 'header--nav-li base--li' },
            _react2.default.createElement(
              'a',
              {
                href: props.apiReference,
                className: 'base--a header--nav-link',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              'API Reference'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header--nav-li base--li' },
            _react2.default.createElement(
              'a',
              {
                href: props.documentation,
                className: 'base--a header--nav-link',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              'Documentation'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'header--nav-li base--li' },
            _react2.default.createElement(
              'a',
              {
                href: props.repository,
                className: 'base--a header--nav-link',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              'Fork on GitHub'
            )
          )
        )
      )
    )
  );
}

Jumbotron.propTypes = {
  documentation: _react2.default.PropTypes.string.isRequired,
  version: _react2.default.PropTypes.string,
  description: _react2.default.PropTypes.string.isRequired,
  serviceName: _react2.default.PropTypes.string.isRequired,
  serviceIcon: _react2.default.PropTypes.string.isRequired,
  apiReference: _react2.default.PropTypes.string.isRequired,
  repository: _react2.default.PropTypes.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=Jumbotron.js.map
