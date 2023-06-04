// Wait for the element to render
const waitForElementToRender = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return document.querySelector(selector);
};

// Click on the element and then delete it
const clickAndDeleteElement = async (selector) => {
  const element = await waitForElementToRender(selector);
  element.click();
  element.parentNode.removeChild(element);
};

// Call the function with the selector of the element you want to click and delete
clickAndDeleteElement('#download_link');