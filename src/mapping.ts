import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  GammaRedeemer,
  OrderCreated,
  OrderFinished,
  OwnershipTransferred
} from "../generated/GammaRedeemer/GammaRedeemer"
import { Order } from "../generated/schema"

const getOrCreateOrder = (orderId: BigInt, address: Address): Order => {
  let orderIdHex = orderId.toHex()
  let order = Order.load(orderIdHex);
  
  if (order == null) {
    order = new Order(orderIdHex)

    let gammRedeemer = GammaRedeemer.bind(address);
    let orderObj = gammRedeemer.orders(orderId);

    order.owner = orderObj.value0;
    order.otoken = orderObj.value1;
    order.amount = orderObj.value2;
    order.vaultId = orderObj.value3;
    order.isSeller = orderObj.value4;
    order.toETH = orderObj.value5;
    order.finished = orderObj.value6;

    order.save()
  }

  return order as Order;
}

export function handleOrderCreated(event: OrderCreated): void {
  getOrCreateOrder(event.params.orderId, event.address);
}

export function handleOrderFinished(event: OrderFinished): void {
  let order = getOrCreateOrder(event.params.orderId, event.address);

  order.finished = true;
  order.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
