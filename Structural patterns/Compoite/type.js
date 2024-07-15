// Листовой элемент, который не имеет потомков
var Leaf = /** @class */ (function () {
    function Leaf(name) {
        this.name = name;
    }
    Leaf.prototype.operation = function () {
        return this.name;
    };
    return Leaf;
}());
// Составной элемент, который может иметь потомков
var Composite = /** @class */ (function () {
    function Composite() {
        this.children = [];
    }
    Composite.prototype.operation = function () {
        var results = this.children.map(function (child) { return child.operation(); });
        return "Composite(".concat(results.join('+'), ")");
    };
    Composite.prototype.add = function (component) {
        this.children.push(component);
    };
    Composite.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        if (componentIndex !== -1) {
            this.children.splice(componentIndex, 1);
        }
    };
    Composite.prototype.getChild = function (index) {
        if (index < 0 || index >= this.children.length) {
            return null;
        }
        return this.children[index];
    };
    return Composite;
}());
// Клиентский код
var leaf1 = new Leaf("Leaf 1");
var leaf2 = new Leaf("Leaf 2");
var leaf3 = new Leaf("Leaf 3");
var composite1 = new Composite();
composite1.add(leaf1);
composite1.add(leaf2);
var composite2 = new Composite();
composite2.add(leaf3);
composite2.add(composite1);
console.log(composite2.operation());
// Output: Composite(Leaf 3+Composite(Leaf 1+Leaf 2))
