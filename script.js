let currentSlide = 1;
        showSlide(currentSlide);

        function changeSlide(n) {
            showSlide(currentSlide += n);
        }

        function showSlide(n) {
            const slides = document.getElementsByClassName("slidem");

            if (n > slides.length) {
                currentSlide = 1;
            }

            if (n < 1) {
                currentSlide = slides.length;
            }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[currentSlide - 1].style.display = "block";
        }
        document.addEventListener('DOMContentLoaded', function() {
            const titleContents = document.querySelectorAll('.title-content');
            const contentInfos = document.querySelectorAll('.content-info');
            
            titleContents.forEach((titleContent, index) => {
              titleContent.addEventListener('click', function() {
                const contentInfo = contentInfos[index];
                const isContentVisible = contentInfo.style.display === 'block';
                
                contentInfos.forEach(content => {
                  content.style.display = 'none';
                });
                
                if (!isContentVisible) {
                  contentInfo.style.display = 'block';
                }
              });
            });
          });
          
          // Display the button when the user scrolls down 20px from the top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}

// Dapatkan tombol-tombol yang relevan
const openModalButtons = document.querySelectorAll(".button-event");
const closeModalButton = document.querySelector("#closeModal");
const modal = document.querySelector(".modal");

// Fungsi untuk membuka modal
function openModal() {
  modal.style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener saat tombol "Daftar Sekarang" di klik
openModalButtons.forEach(button => {
  button.addEventListener("click", openModal);
});

// Event listener saat tombol penutup di klik
closeModalButton.addEventListener("click", closeModal);

// Event listener saat mengklik di luar modal untuk menutupnya
window.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});
