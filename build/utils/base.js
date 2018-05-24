'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mixin = exports.mixin = function mixin(behaviour) {
    var sharedBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var instanceKeys = Reflect.ownKeys(behaviour);
    var sharedKeys = Reflect.ownKeys(sharedBehaviour);
    var typeTag = Symbol('isa');

    function _mixin(clazz) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = instanceKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var property = _step.value;

                Object.defineProperty(clazz.prototype, property, { value: behaviour[property] });
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        Object.defineProperty(clazz.prototype, typeTag, { value: true });
        return clazz;
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = sharedKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var property = _step2.value;

            Object.defineProperty(_mixin, property, {
                value: sharedBehaviour[property],
                enumerable: sharedBehaviour.propertyIsEnumerable(property)
            });
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    Object.defineProperty(_mixin, Symbol.hasInstance, {
        value: function value(i) {
            return !!i[typeTag];
        }
    });

    return _mixin;
};