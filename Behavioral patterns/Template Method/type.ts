// Абстрактный базовый класс
abstract class SortingAlgorithm {
    protected abstract compareElements(a: number, b: number): number;

    sort(arr: number[]): number[] {
        this.preProcess(arr);
        this.doSort(arr);
        this.postProcess(arr);
        return arr;
    }

    protected preProcess(arr: number[]): void {
        // Выполняем какие-либо действия перед сортировкой
    }

    protected abstract doSort(arr: number[]): void;

    protected postProcess(arr: number[]): void {
        // Выполняем какие-либо действия после сортировки
    }
}

// Конкретная реализация алгоритма сортировки "Пузырьковая сортировка"
class BubbleSort extends SortingAlgorithm {
    protected compareElements(a: number, b: number): number {
        return a - b;
    }

    protected doSort(arr: number[]): void {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }
}

// Конкретная реализация алгоритма сортировки "Quicksort"
class QuickSort extends SortingAlgorithm {
    protected compareElements(a: number, b: number): number {
        return a - b;
    }

    protected doSort(arr: number[], left = 0, right = arr.length - 1): void {
        if (left < right) {
            const pivotIndex = this.partition(arr, left, right);
            this.doSort(arr, left, pivotIndex - 1);
            this.doSort(arr, pivotIndex + 1, right);
        }
    }

    private partition(arr: number[], left: number, right: number): number {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (this.compareElements(arr[j], pivot) < 0) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    }
}

// Пример использования
const numbers = [5, 2, 8, 1, 9];

const bubbleSort = new BubbleSort();
console.log(bubbleSort.sort(numbers.slice())); // [1, 2, 5, 8, 9]

const quickSort = new QuickSort();
console.log(quickSort.sort(numbers.slice())); // [1, 2, 5, 8, 9]
