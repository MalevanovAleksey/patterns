// Интерфейс обработчика
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: any): any;
}

// Базовый класс обработчика, реализующий интерфейс
abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: any): any {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class AuthHandler extends AbstractHandler {
    public handle(request: any): any {
        if (request.isAuthenticated) {
            console.log("AuthHandler: User is authenticated.");
            return super.handle(request);
        } else {
            console.log("AuthHandler: User is not authenticated.");
            return { error: "User is not authenticated" };
        }
    }
}

class AdminHandler extends AbstractHandler {
    public handle(request: any): any {
        if (request.isAdmin) {
            console.log("AdminHandler: User has admin rights.");
            return super.handle(request);
        } else {
            console.log("AdminHandler: User does not have admin rights.");
            return { error: "User does not have admin rights" };
        }
    }
}

class DataValidationHandler extends AbstractHandler {
    public handle(request: any): any {
        if (request.data && request.data.productExists) {
            console.log("DataValidationHandler: Product exists.");
            return super.handle(request);
        } else {
            console.log("DataValidationHandler: Product does not exist.");
            return { error: "Product does not exist" };
        }
    }
}

class ThrottlingHandler extends AbstractHandler {
    public handle(request: any): any {
        if (request.throttleCount < 5) {
            console.log("ThrottlingHandler: Request is allowed.");
            return super.handle(request);
        } else {
            console.log("ThrottlingHandler: Request is throttled.");
            return { error: "Too many requests" };
        }
    }
}

class CacheHandler extends AbstractHandler {
    private cache: Map<string, any> = new Map();

    public handle(request: any): any {
        const cacheKey = request.cacheKey;
        if (this.cache.has(cacheKey)) {
            console.log("CacheHandler: Serving from cache.");
            return this.cache.get(cacheKey);
        } else {
            console.log("CacheHandler: Storing in cache.");
            const response = super.handle(request);
            this.cache.set(cacheKey, response);
            return response;
        }
    }
}

// Клиентский код
function clientCode(handler: Handler, request: any) {
    console.log("Client: Sending request...");
    const result = handler.handle(request);
    if (result) {
        console.log(`Client: ${JSON.stringify(result)}`);
    }
}

// Создание цепочки обработчиков
const auth = new AuthHandler();
const admin = new AdminHandler();
const dataValidation = new DataValidationHandler();
const throttling = new ThrottlingHandler();
const cache = new CacheHandler();

auth.setNext(admin).setNext(dataValidation).setNext(throttling).setNext(cache);
