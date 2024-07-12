import Food from "../Food";

class Sushi implements Food {
    prepare(): void {
        console.log("Preparing sushi");
    }

    cook(): void {
        console.log("Cooking sushi");
    }

    box(): void {
        console.log("Boxing sushi");
    }
}

export default Sushi