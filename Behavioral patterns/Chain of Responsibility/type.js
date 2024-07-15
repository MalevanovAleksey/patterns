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
// Базовый класс обработчика, реализующий интерфейс
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
        this.nextHandler = null;
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var AuthHandler = /** @class */ (function (_super) {
    __extends(AuthHandler, _super);
    function AuthHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthHandler.prototype.handle = function (request) {
        if (request.isAuthenticated) {
            console.log("AuthHandler: User is authenticated.");
            return _super.prototype.handle.call(this, request);
        }
        else {
            console.log("AuthHandler: User is not authenticated.");
            return { error: "User is not authenticated" };
        }
    };
    return AuthHandler;
}(AbstractHandler));
var AdminHandler = /** @class */ (function (_super) {
    __extends(AdminHandler, _super);
    function AdminHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminHandler.prototype.handle = function (request) {
        if (request.isAdmin) {
            console.log("AdminHandler: User has admin rights.");
            return _super.prototype.handle.call(this, request);
        }
        else {
            console.log("AdminHandler: User does not have admin rights.");
            return { error: "User does not have admin rights" };
        }
    };
    return AdminHandler;
}(AbstractHandler));
var DataValidationHandler = /** @class */ (function (_super) {
    __extends(DataValidationHandler, _super);
    function DataValidationHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataValidationHandler.prototype.handle = function (request) {
        if (request.data && request.data.productExists) {
            console.log("DataValidationHandler: Product exists.");
            return _super.prototype.handle.call(this, request);
        }
        else {
            console.log("DataValidationHandler: Product does not exist.");
            return { error: "Product does not exist" };
        }
    };
    return DataValidationHandler;
}(AbstractHandler));
var ThrottlingHandler = /** @class */ (function (_super) {
    __extends(ThrottlingHandler, _super);
    function ThrottlingHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThrottlingHandler.prototype.handle = function (request) {
        if (request.throttleCount < 5) {
            console.log("ThrottlingHandler: Request is allowed.");
            return _super.prototype.handle.call(this, request);
        }
        else {
            console.log("ThrottlingHandler: Request is throttled.");
            return { error: "Too many requests" };
        }
    };
    return ThrottlingHandler;
}(AbstractHandler));
var CacheHandler = /** @class */ (function (_super) {
    __extends(CacheHandler, _super);
    function CacheHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = new Map();
        return _this;
    }
    CacheHandler.prototype.handle = function (request) {
        var cacheKey = request.cacheKey;
        if (this.cache.has(cacheKey)) {
            console.log("CacheHandler: Serving from cache.");
            return this.cache.get(cacheKey);
        }
        else {
            console.log("CacheHandler: Storing in cache.");
            var response = _super.prototype.handle.call(this, request);
            this.cache.set(cacheKey, response);
            return response;
        }
    };
    return CacheHandler;
}(AbstractHandler));
// Клиентский код
function clientCode(handler, request) {
    console.log("Client: Sending request...");
    var result = handler.handle(request);
    if (result) {
        console.log("Client: ".concat(JSON.stringify(result)));
    }
}
// Создание цепочки обработчиков
var auth = new AuthHandler();
var admin = new AdminHandler();
var dataValidation = new DataValidationHandler();
var throttling = new ThrottlingHandler();
var cache = new CacheHandler();
auth.setNext(admin).setNext(dataValidation).setNext(throttling).setNext(cache);
