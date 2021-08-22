import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AutoGamma,
  OrderCreated,
  OrderFinished,
  OwnershipTransferred
} from "../generated/AutoGamma/AutoGamma"
import { Order } from "../generated/schema"

const getOrCreateOrder = (orderId: BigInt, address: Address): Order => {
  let orderIdHex = orderId.toHex()
  let order = Order.load(orderIdHex);
  
  if (order == null) {
    order = new Order(orderIdHex)
    order.orderId = orderId;

    let autoGamma = AutoGamma.bind(address);
    let orderObj = autoGamma.orders(orderId);

    order.owner = orderObj.value0;
    order.otoken = orderObj.value1;
    order.amount = orderObj.value2;
    order.vaultId = orderObj.value3;
    order.isSeller = orderObj.value4;
    order.toToken = orderObj.value5;
    order.fee = orderObj.value6;
    order.finished = orderObj.value7;
    order.cancelled = false;
    order.timestamp = BigInt.fromI32(0);

    order.save()
  }

  return order as Order;
}

export function handleOrderCreated(event: OrderCreated): void {
  let order = getOrCreateOrder(event.params.orderId, event.address);
  
  order.timestamp = event.block.timestamp;
  order.save();
}

export function handleOrderFinished(event: OrderFinished): void {
  let order = getOrCreateOrder(event.params.orderId, event.address);

  order.finished = true;
  order.cancelled = event.params.cancelled;
  order.finishTxHash = event.transaction.hash;
  order.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
