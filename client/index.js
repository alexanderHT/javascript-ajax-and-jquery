function change () {
  $.ajax({
    url: 'http://localhost:3000/color',
    success: function (result) {
      $(`#${Math.floor((Math.random() * 9) + 1)}`).removeClass().addClass(`${result}`)
    }
  })
}
