"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["PROCESSING"] = 1] = "PROCESSING";
    OrderStatus[OrderStatus["COMPLETED"] = 2] = "COMPLETED";
    OrderStatus[OrderStatus["SHIPPED"] = 3] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 4] = "DELIVERED";
    OrderStatus[OrderStatus["CANCELED"] = 5] = "CANCELED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
//# sourceMappingURL=order.type.js.map