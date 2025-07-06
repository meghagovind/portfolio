
const roles = ["Web Developer", "UI/UX Designer", "Software Engineer","Data Analyst"];
let roleIndex = 0;
const roleElement = document.getElementById("role");

setInterval(() => {
  roleElement.style.opacity = 0;
  setTimeout(() => {
    roleElement.textContent = roles[roleIndex];
    roleElement.style.opacity = 1;
    roleIndex = (roleIndex + 1) % roles.length;
  }, 500);
}, 2500);


  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.qualification__button');
    const contents = document.querySelectorAll('.qualification__content');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Remove active classes from all tabs and contents
        tabs.forEach(t => t.classList.remove('qualification__active'));
        contents.forEach(c => c.classList.remove('qualification__content-active'));

        // Add active class to current tab and corresponding content
        tab.classList.add('qualification__active');
        contents[index].classList.add('qualification__content-active');
      });
    });
  });



document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".project-item");
  const projectCards = document.querySelectorAll(".project__card");

  const categoryMap = {
    "All": "all",
    "Web Development": "web-dev",
    "Data Analysis": "data-analysis",
    "Artifical Intelelesions": "ai",
    "Machine Learning": "ml"
  };

  filterItems.forEach(item => {
    item.addEventListener("click", () => {
      // Set active class
      filterItems.forEach(i => i.classList.remove("project-active"));
      item.classList.add("project-active");

      const selectedCategory = categoryMap[item.innerText.trim()];

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});


  // Replace with your actual MailerSend API key
  const API_KEY = "mlsn.e255c88f97faa24bcd9f21a1176e9bb2b12b1dc60d82370ca224bc312fc76a87";

  document.querySelector(".contact__form").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form values
    const name = this.elements["name"].value;
    const email = this.elements["email"].value;
    const message = this.elements["message"].value;

    try {
      const response = await fetch("https://api.mailersend.com/v1/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          from: {
            email: "hello@mailersend.com",
            name: "Your Portfolio"
          },
          to: [
            {
              email: "meghanas.works@gmail.com", // <-- REPLACE with your receiving email
              name: "Sai Meghana"
            }
          ],
          subject: `New Message from ${name}`,
          text: message,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong> ${message}</p>`,
        })
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        this.reset(); // Clear form
      } else {
        const error = await response.json();
        console.error("❌ Failed:", error);
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Something went wrong.");
    }
  });

