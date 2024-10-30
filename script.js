// Fetch JSON data and populate dropdown
fetch('attributes.json')
  .then((response) => response.json())
  .then((data) => {
    const dropdown = document.getElementById('attributeDropdown');

    data.attributes.forEach((attribute) => {
      const option = document.createElement('option');
      option.value = attribute;
      option.textContent = attribute;
      dropdown.appendChild(option);
    });
  })
  .catch((error) => console.error('Error loading JSON:', error));

// Add event listener to the copy button
document.getElementById('copyButton').addEventListener('click', () => {
  const dropdown = document.getElementById('attributeDropdown');
  const selectedAttribute = dropdown.value;

  // Check if an attribute is selected
  if (selectedAttribute && selectedAttribute !== 'Select an attribute') {
    // Copy the selected attribute to the clipboard
    navigator.clipboard.writeText(selectedAttribute).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  } else {
    console.warn('No attribute selected to copy.');
  }
});
