



const products = [
  { name: "@", image: "items/@.png", description: "Kích thước: 29cm x 26,5cm", type: "treo-tuong" },
  { name: "Apple", image: "items/Apple.png", description: "Kích thước: 33cm x 69cm", type: "treo-tuong" },
  { name: "KN06", image: "items/KN06.png", description: "Đường kính: 28,5cm", type: "treo-tuong" },
  { name: "KN14 LM", image: "items/KN14 LM.png", description: "Đường kính: 37cm", type: "treo-tuong" },
  { name: "KN14 SHT", image: "items/KN14 SHT.png", description: "Đường kính: 37cm", type: "treo-tuong" },
  { name: "KN14", image: "items/KN14.png", description: "Đường kính: 37cm", type: "treo-tuong" },
  { name: "KN26", image: "items/KN26.png", description: "Kích thước: 65cm x 44,5cm x 9cm", type: "treo-tuong" },
  { name: "KN33 LM", image: "items/KN33 LM.png", description: "Đường kính: 50cm", type: "treo-tuong" },
  { name: "KN33 SHT Trắng", image: "items/KN33 SHT Trắng.png", description: "Đường kính: 50cm", type: "treo-tuong" },
  { name: "KN79", image: "items/KN79.png", description: "Kích thước: 43cm x 45cm", type: "treo-tuong" },
  { name: "KN89", image: "items/KN89.png", description: "Kích thước: 43cm x 45cm", type: "treo-tuong" },
  { name: "KN639", image: "items/KN639.png", description: "Đường kính: 42cm", type: "treo-tuong" },
  { name: "KN639 Vàng", image: "items/KN639 Vàng.png", description: "Đường kính: 42cm", type: "treo-tuong" },
  { name: "KN17", image: "items/KN17.png", description: "Kích thước: 58cm x 35cm", type: "treo-tuong-lac" },
  { name: "S15DQ Vàng", image: "items/S15DQ Vàng.png", description: "Đường kính: 29cm", type: "treo-tuong" },
  { name: "S25DQ Vàng", image: "items/S25DQ Vàng.png", description: "Đường kính: 38cm", type: "treo-tuong" },
  { name: "S25DQ", image: "items/S25DQ.png", description: "Đường kính: 38cm", type: "treo-tuong" },
  { name: "S32", image: "items/S32.png", description: "Đường kính: 32cm", type: "treo-tuong" },
  { name: "S32 SHT", image: "items/S32 SHT.png", description: "Đường kính: 32cm", type: "treo-tuong" },
  { name: "S32 Vàng", image: "items/S32 Vàng.png", description: "Đường kính: 32cm", type: "treo-tuong" },
  { name: "S35 LM Đen", image: "items/S35 LM Đen.png", description: "Đường kính: 33cm", type: "treo-tuong" },
  { name: "S35 LM Trắng", image: "items/S35 LM Trắng.png", description: "Đường kính: 33cm", type: "treo-tuong" },
  { name: "S35 LM Vàng", image: "items/S35 LM Vàng.png", description: "Đường kính: 33cm", type: "treo-tuong" },
  { name: "S35 LM Xanh", image: "items/S35 LM Xanh.png", description: "Đường kính: 33cm", type: "treo-tuong" },
  { name: "S50DQ", image: "items/S50DQ.png", description: "Đường kính: 52cm", type: "treo-tuong" },
  { name: "S42DQ SHT", image: "items/S42DQ SHT.png", description: "Đường kính: 42cm", type: "treo-tuong" },
  { name: "S48DQ", image: "items/S48DQ.png", description: "Đường kính: 50cm", type: "treo-tuong" },
  { name: "S55 TĐ", image: "items/S55 TĐ.png", description: "Đường kính: 47cm", type: "treo-tuong" },
  { name: "S55 Trắng", image: "items/S55 Trắng.png", description: "Đường kính: 47cm", type: "treo-tuong" },
  { name: "S55 Xanh", image: "items/S55 Xanh.png", description: "Đường kính: 47cm", type: "treo-tuong" },
  { name: "BL01", image: "items/BL01.png", description: "", type: "de-ban" },
  { name: "BL02", image: "items/BL02.png", description: "", type: "de-ban" },
  { name: "S65 LM Vàng", image: "items/S65 LM Vàng.png", description: "Kích thước: 63cm x 42cm", type: "treo-tuong-lac" },
  { name: "S65 Vàng", image: "items/S65 Vàng.png", description: "Kích thước: 63cm x 42cm", type: "treo-tuong-lac" },
  { name: "S85 LM Vàng", image: "items/S85 LM Vàng.png", description: "Kích thước: 6cm x 34cm", type: "treo-tuong-lac" },
  { name: "V1 SHT", image: "items/V1 SHT.png", description: "Kích thước: 470 x 420", type: "treo-tuong-nhac" },
  { name: "V1", image: "items/V1.png", description: "Kích thước: 470 x 420", type: "treo-tuong-nhac" },
  { name: "V2", image: "items/V2.png", description: "Kích thước: 540 x 440", type: "treo-tuong-nhac" },

];

function generateProductHTML(product) {
  return `
      <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3 class="product-name">${product.name}</h3>

      </div>
  `;
}

function populateCatalog() {
  const catalogContainer = document.getElementById('catalog');
  if (catalogContainer) {
      // Clear existing content
      catalogContainer.innerHTML = '';

      // Generate HTML for each product and append to catalog
      products.forEach(product => {
          const productHTML = generateProductHTML(product);
          catalogContainer.innerHTML += productHTML;
      });

      // Attach event listener to catalog container for event delegation
      catalogContainer.addEventListener('click', function(event) {
        const clickedElement = event.target.closest('.product');
        if (clickedElement) {
            const productName = clickedElement.querySelector('h3').innerText;
            const product = products.find(p => p.name === productName);
            if (product) {
                showPreview(product.name, product.description, product.image); 
            }
        }
    });
  }
}

// Function to show product preview
function showPreview(name, description, image) {
  const popupContent = document.getElementById('preview');
  if (popupContent) {
      document.getElementById('item-image').src = image;
      document.getElementById('item-title').innerText = name;
      document.getElementById('item-description').innerText = description;
      document.getElementById('preview-container').style.display = 'flex';
  }
}

// Function to close popup
function closePopup() {
  document.getElementById('preview-container').style.display = 'none';
}


document.getElementById("search").addEventListener("click", () => {
  // Initialization
  let searchInput = document.getElementById("search-input").value.toLowerCase(); // Convert search input to lowercase
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".product");
  // Loop through all elements
  elements.forEach((element, index) => {
    // Check if text includes the search value (case-insensitive)
    if (element.innerText.toLowerCase().includes(searchInput)) { // Convert product name to lowercase for comparison
      // Display matching card
      cards[index].classList.remove("hide");
    } else {
      // Hide others
      cards[index].classList.add("hide");
    }
  });
});

function filterProduct(type) {
  const catalogContainer = document.getElementById('catalog');
  if (catalogContainer) {
      const products = catalogContainer.querySelectorAll('.product');

      // Remove 'active' class from all buttons
      const buttons = document.querySelectorAll('.button-value');
      buttons.forEach(button => {
          button.classList.remove('active');
      });

      // Add 'active' class to the clicked button
      const activeButton = document.querySelector(`.button-value[data-type="${type}"]`);
      if (activeButton) {
          activeButton.classList.add('active');
      }

      for (let i = 0; i < products.length; i++) {
          const product = products[i];
          const productType = getProductType(i); 

          if (type === 'all' || productType === type) {
              product.classList.remove('hide');
          } else {
              product.classList.add('hide');
          }
      }
  }
}

function getProductType(index) {
  const product = products[index];
  return product ? product.type : null;
}


// Call the function to populate the catalog when the page loads
window.onload = populateCatalog;

