let CurrentWebPage = 'webpage-home'

$(document).ready(function() {
  $(function() {
    $('#home-button').click(async function() {
      SwitchWebPage('webpage-home')
    })

    $('#photos-button').click(async function() {
      SwitchWebPage('webpage-photos')
    })

    $('#proposal-button').click(async function() {
      SwitchWebPage('webpage-proposal')
    })

    $('#story-button').click(async function() {
      SwitchWebPage('webpage-story')
    })

    $('#entourage-button').click(async function() {
      SwitchWebPage('webpage-entourage')
    })

    $('#qanda-button').click(async function() {
      SwitchWebPage('webpage-qanda')
    })

    $('#directions-button').click(async function() {
      SwitchWebPage('webpage-directions')
    })

    $('#attire-button').click(async function() {
      SwitchWebPage('webpage-attire')
    })
  })


  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hidePopup();
    }
  })
})

function showPopup(imageSrc) {
  $('#popupImage').attr('src', imageSrc);

  $('#imagePopup').css('display', 'flex').hide().fadeIn();
}

function hidePopup() {
  // $('#imagePopup').css('display', 'none');
  $('#imagePopup').fadeOut();
}

function SwitchWebPage(page) {
  if (CurrentWebPage == page) { return }
  
  $('.' + CurrentWebPage).fadeOut(500)
  $('.' + page).fadeIn(500)
  CurrentWebPage = page
  console.log(CurrentWebPage)
}