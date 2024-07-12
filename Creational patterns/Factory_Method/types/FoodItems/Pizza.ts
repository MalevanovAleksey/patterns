import Food from "../Food";

class Pizza implements Food {
    prepare(): void {
        console.log("Preparing pizza");
    }

    cook(): void {
        console.log("Cooking pizza");
    }

    box(): void {
        console.log("Boxing pizza");
    }
}


export default Pizza