// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for validation

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Check if all fields are filled
  if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
  }

  // Basic email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
  }

  alert('Form submitted successfully!');
});

// Dynamic To-Do List
document.getElementById('add-task').addEventListener('click', function() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.textContent = taskText;

      // Add remove button to task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Delete';
      removeButton.classList.add('remove-task');
      removeButton.addEventListener('click', function() {
          taskList.removeChild(li);
      });

      li.appendChild(removeButton);
      taskList.appendChild(li);
      taskInput.value = ''; // Clear input after adding task
  }
});