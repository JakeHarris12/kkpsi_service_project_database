function findGetParameter() {
    var result = null,
      tmp = []
    window.location.search.substring(1).split("&").forEach(function (item) {
      tmp = item.split("=")
      if(tmp[0] === "code") result = decodeURIComponent(tmp[1])
    })
    return result
}