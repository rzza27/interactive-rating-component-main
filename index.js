const closeButton = document.getElementById('close-button');

const buttons = document.querySelectorAll('.active-toggle');
const selectedRatingMessage = document.getElementById(
  'selected-rating-message'
);

let selectedRating = null;

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    buttons.forEach((btn) => {
      if (btn === this) {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
          selectedRating = btn.textContent;
        } else {
          selectedRating = null;
        }
      } else {
        btn.classList.remove('active');
        btn.classList.add('hover:bg-mediumGrey');
        btn.classList.add('hover:text-white');
      }
    });

    if (this.classList.contains('active')) {
      this.classList.remove('hover:bg-mediumGrey');
      this.classList.remove('hover:text-white');
    }
  });
});

const submitButton = document.querySelector('.bg-orange');
const ratingForm = document.getElementById('rating-form');
const thankyouMessage = document.getElementById('thankyou-message');

submitButton.addEventListener('click', function () {
  if (selectedRating) {
    selectedRatingMessage.textContent = `You selected ${selectedRating} out of 5.`;
  } else {
    selectedRatingMessage.textContent = '';
  }

  ratingForm.classList.toggle('hidden');
  ratingForm.classList.remove('flex')
  thankyouMessage.classList.toggle('hidden');
});

// Close button event listener
closeButton.addEventListener('click', function () {
  thankyouMessage.classList.add('hidden');
  ratingForm.classList.add('flex')
  ratingForm.classList.toggle('hidden');
});
