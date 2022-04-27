export function handleTouchStart(event) {
  console.log("eventSTART", event.changedTouches)

  return { x: event.changedTouches.screenX, y: event.changedTouches.screenY }
}

export function handleTouchEnd(event, shouldWeClick, projectLink) {
  console.log("before false")
  if (shouldWeClick === false) return
  console.log("projectLink", projectLink)

  window.location.href = projectLink
}

export function handleTouchMove(event, touchStartPoint) {
  const currentTouchStartPoint = {
    x: event.changedTouches.screenX,
    y: event.changedTouches.screenY,
  }

  const xGap = Math.sqrt((currentTouchStartPoint.x - touchStartPoint.x) ** 2)
  const yGap = Math.sqrt((currentTouchStartPoint.y - touchStartPoint.y) ** 2)

  if (xGap > 50 || yGap > 50) return true

  return false
}
