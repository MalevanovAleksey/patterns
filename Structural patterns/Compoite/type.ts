// Интерфейс компонента, который определяет общие операции как для простых, так и для составных объектов
interface Component {
    operation(): string;
    add?(component: Component): void;
    remove?(component: Component): void;
    getChild?(index: number): Component | null;
  }
  
  // Листовой элемент, который не имеет потомков
  class Leaf implements Component {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    operation(): string {
      return this.name;
    }
  }
  
  // Составной элемент, который может иметь потомков
  class Composite implements Component {
    private children: Component[] = [];
  
    operation(): string {
      const results = this.children.map(child => child.operation());
      return `Composite(${results.join('+')})`;
    }
  
    add(component: Component): void {
      this.children.push(component);
    }
  
    remove(component: Component): void {
      const componentIndex = this.children.indexOf(component);
      if (componentIndex !== -1) {
        this.children.splice(componentIndex, 1);
      }
    }
  
    getChild(index: number): Component | null {
      if (index < 0 || index >= this.children.length) {
        return null;
      }
      return this.children[index];
    }
  }
  
  // Клиентский код
  const leaf1 = new Leaf("Leaf 1");
  const leaf2 = new Leaf("Leaf 2");
  const leaf3 = new Leaf("Leaf 3");
  
  const composite1 = new Composite();
  composite1.add(leaf1);
  composite1.add(leaf2);
  
  const composite2 = new Composite();
  composite2.add(leaf3);
  composite2.add(composite1);
  
  console.log(composite2.operation());
  // Output: Composite(Leaf 3+Composite(Leaf 1+Leaf 2))
  