let attempt = 0;
let heartClick = 0;

function validatePassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const correctPassword = '240211'; // Set your password here
  
    if (password === correctPassword) {
      window.location.href = '200.html'; // Redirect to the circles page
    } else {
        attempt++;
        if (attempt === 1) {
            errorMessage.textContent = 'Nope!';
        }
        else if (attempt === 2) {
            errorMessage.textContent = "You're joking, right?";
        }
        else if (attempt === 3) {
            errorMessage.textContent = 'Seriously?';
        }
        else {
            errorMessage.textContent = "You're dead!!!";
            document.getElementById('password').disabled = true;
            document.getElementById('submit-button').disabled = true;
            document.getElementById('reset-heart').style.display = 'block';
        }
      
    }
  }



function resetForm() {
  heartClick++;

  if (heartClick >= 30) {
    attempt = 0;
    heartClick = 0;
    document.getElementById('password').disabled = false;
    document.getElementById('submit-button').disabled = false;
    document.getElementById('password').value = '';
    document.getElementById('error-message').textContent = '';
    document.getElementById('reset-heart').style.display = 'none'; // Hide the reset button
  }
  
}
  