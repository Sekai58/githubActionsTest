// Login.test.tsx
import { mount } from 'vitest';
import Login from './Login'; // Import your Login component here

test('should submit the login form', async () => {
  const { getByPlaceholderText, getByText, fixture } = mount(Login);
  const app = fixture.vm as any; // Cast to any if needed

  // Get input fields and submit button
  const usernameInput = getByPlaceholderText('Enter name');
  const passwordInput = getByPlaceholderText('Enter password');
  const submitButton = getByText('SIGN IN NOW');

  // Simulate user input
  await app.waitNextTick();
  await usernameInput.setValue('testuser');
  await passwordInput.setValue('testpassword');

  // Simulate form submission
  await app.waitNextTick();
  await submitButton.trigger('click');

  // You can add assertions here to check for expected behavior
  // Example: await app.waitNextTick(() => expect(someElement).toBeVisible());
});
