export async function allStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const dataEvent = ctx.body
  console.log(`ID:${dataEvent.orderId} StatusPagamento:${dataEvent.currentState} Data:${dataEvent.currentChangeDate}`)
  //const idOrder = dataEvent.orderId
  const idOrder = "teste"
  await next()
  return idOrder
}
