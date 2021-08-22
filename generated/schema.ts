// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Order entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Order entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Order", id.toString(), this);
  }

  static load(id: string): Order | null {
    return store.get("Order", id) as Order | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get orderId(): BigInt {
    let value = this.get("orderId");
    return value.toBigInt();
  }

  set orderId(value: BigInt) {
    this.set("orderId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get otoken(): Bytes {
    let value = this.get("otoken");
    return value.toBytes();
  }

  set otoken(value: Bytes) {
    this.set("otoken", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get vaultId(): BigInt {
    let value = this.get("vaultId");
    return value.toBigInt();
  }

  set vaultId(value: BigInt) {
    this.set("vaultId", Value.fromBigInt(value));
  }

  get isSeller(): boolean {
    let value = this.get("isSeller");
    return value.toBoolean();
  }

  set isSeller(value: boolean) {
    this.set("isSeller", Value.fromBoolean(value));
  }

  get toToken(): Bytes {
    let value = this.get("toToken");
    return value.toBytes();
  }

  set toToken(value: Bytes) {
    this.set("toToken", Value.fromBytes(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get finished(): boolean {
    let value = this.get("finished");
    return value.toBoolean();
  }

  set finished(value: boolean) {
    this.set("finished", Value.fromBoolean(value));
  }

  get cancelled(): boolean {
    let value = this.get("cancelled");
    return value.toBoolean();
  }

  set cancelled(value: boolean) {
    this.set("cancelled", Value.fromBoolean(value));
  }

  get finishTxHash(): Bytes | null {
    let value = this.get("finishTxHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set finishTxHash(value: Bytes | null) {
    if (value === null) {
      this.unset("finishTxHash");
    } else {
      this.set("finishTxHash", Value.fromBytes(value as Bytes));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
