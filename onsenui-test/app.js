
var name = '';
var hasname = false;

const confirmName = () => 
{
    $('[data-name]').text($('[input-id="name"] input')[0].value)
    $('[data-hasName]').addClass('visible')
}

const resetName = () => {
    $('[input-id="name"] input')[0].value = '';
}

const deleteName = () => {
    name = '';
    $('[data-hasName]').removeClass('visible')
    resetName();
}

$(document).ready(function () {
    let target = $('[data-hasName]');
    if (target.data('hasname')){
      target.addClass('visible')
    }   
})