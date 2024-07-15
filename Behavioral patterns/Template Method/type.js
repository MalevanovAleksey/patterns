var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Абстрактный базовый класс
var SortingAlgorithm = /** @class */ (function () {
    function SortingAlgorithm() {
    }
    SortingAlgorithm.prototype.sort = function (arr) {
        this.preProcess(arr);
        this.doSort(arr);
        this.postProcess(arr);
        return arr;
    };
    SortingAlgorithm.prototype.preProcess = function (arr) {
        // Выполняем какие-либо действия перед сортировкой
    };
    SortingAlgorithm.prototype.postProcess = function (arr) {
        // Выполняем какие-либо действия после сортировки
    };
    return SortingAlgorithm;
}());
// Конкретная реализация алгоритма сортировки "Пузырьковая сортировка"
var BubbleSort = /** @class */ (function (_super) {
    __extends(BubbleSort, _super);
    function BubbleSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleSort.prototype.compareElements = function (a, b) {
        return a - b;
    };
    BubbleSort.prototype.doSort = function (arr) {
        var _a;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                }
            }
        }
    };
    return BubbleSort;
}(SortingAlgorithm));
// Конкретная реализация алгоритма сортировки "Quicksort"
var QuickSort = /** @class */ (function (_super) {
    __extends(QuickSort, _super);
    function QuickSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickSort.prototype.compareElements = function (a, b) {
        return a - b;
    };
    QuickSort.prototype.doSort = function (arr, left, right) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = arr.length - 1; }
        if (left < right) {
            var pivotIndex = this.partition(arr, left, right);
            this.doSort(arr, left, pivotIndex - 1);
            this.doSort(arr, pivotIndex + 1, right);
        }
    };
    QuickSort.prototype.partition = function (arr, left, right) {
        var _a, _b;
        var pivot = arr[right];
        var i = left - 1;
        for (var j = left; j < right; j++) {
            if (this.compareElements(arr[j], pivot) < 0) {
                i++;
                _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
            }
        }
        _b = [arr[right], arr[i + 1]], arr[i + 1] = _b[0], arr[right] = _b[1];
        return i + 1;
    };
    return QuickSort;
}(SortingAlgorithm));
// Пример использования
var numbers = [5, 2, 8, 1, 9];
var bubbleSort = new BubbleSort();
console.log(bubbleSort.sort(numbers.slice())); // [1, 2, 5, 8, 9]
var quickSort = new QuickSort();
console.log(quickSort.sort(numbers.slice())); // [1, 2, 5, 8, 9]
