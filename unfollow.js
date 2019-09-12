var getButtons = () =>
  document.querySelectorAll('.follows-recommendation-card__follow-btn')
var getBottomY = () => document.documentElement.scrollHeight
var clickAll = buttons => buttons.forEach(el => el.click())

function toBottom() {
  //get all the buttons
  var buttons = getButtons()
  var bottomY = getBottomY()
  //go to the bottom
  window.scrollTo(0, bottomY)
  //check if button
}

//listen to
var observer = new MutationObserver((mutations, observer) => {
  var currButtonLength = getButtons().length
  var prevButtonLength = observer.buttonLength

  //when buttons have loaded
  if (currButtonLength !== prevButtonLength) {
    console.log('button length has changed', currButtonLength, prevButtonLength)
    observer.buttonLength = currButtonLength
    //scroll to bottom only when currButtonLength is not yet 2468
    if (currButtonLength !== 242) {
      toBottom()
    } else {
      console.log('done scrolling!')
    }
  }
})

//store number of buttons in observer function

observer.buttonLength = getButtons().length

observer.observe(document.querySelector('.feed-following-list'), {
  childList: true,
})
